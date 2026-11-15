import React, { useState } from 'react';
import { X, CheckCircle, Bed, Calendar, ShieldCheck, DollarSign, AlertCircle, FileText, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function BookingModal({
  property,
  selectedRoom,
  selectedBed,
  calculatorPlan,
  isOpen,
  onClose,
  onBookingSuccess
}) {
  const { user, isAuthenticated } = useAuth();

  const [moveInDate, setMoveInDate] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [collegeOrCompany, setCollegeOrCompany] = useState(user?.college || user?.company || '');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookingResult, setBookingResult] = useState(null);

  if (!isOpen) return null;

  // Compute stay dates
  const durationMonths = calculatorPlan?.durationMonths || 6;
  const moveIn = moveInDate ? new Date(moveInDate) : new Date();
  const moveOut = new Date(moveIn);
  moveOut.setMonth(moveOut.getMonth() + durationMonths);

  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const handleBooking = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!selectedBed || !selectedRoom) {
      setErrorMessage('Please select a specific bed from the inventory grid first.');
      return;
    }

    if (!moveInDate) {
      setErrorMessage('Please select a valid move-in date.');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('Please accept the PG house rules and safety guidelines to proceed.');
      return;
    }

    // Ensure student is logged in
    if (!isAuthenticated) {
      setErrorMessage('Please sign in or create an account to book your bed.');
      return;
    }

    setIsSubmitting(true);

    const bookingPayload = {
      propertyId: property._id || property.id,
      propertyTitle: property.title,
      propertyAddress: `${property.address.street}, ${property.address.city}`,
      roomId: selectedRoom.roomId,
      roomNumber: selectedRoom.roomNumber,
      bedId: selectedBed.bedId,
      bedNumber: selectedBed.bedNumber,
      startDate: moveIn.toISOString(),
      endDate: moveOut.toISOString(),
      durationMonths,
      monthlyRent: calculatorPlan?.totalMonthlyRent || selectedRoom.rentPerBed,
      securityDeposit: calculatorPlan?.securityDeposit || property.pricing.securityDeposit,
      maintenanceFee: calculatorPlan?.maintenanceFee || 1000,
      totalPaid: calculatorPlan?.totalMoveInCost || selectedRoom.rentPerBed * 2,
      emergencyContact,
      collegeOrCompany,
      status: 'Confirmed',
      bookingReference: `STAY-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString()
    };

    try {
      // 1. Try real backend API
      let createdBooking = null;
      try {
        const res = await api.post('/bookings', bookingPayload);
        createdBooking = res.data?.booking || res.data;
      } catch (apiErr) {
        // Check for duplicate booking error from backend
        if (apiErr.response && apiErr.response.status === 409) {
          setErrorMessage(
            apiErr.response.data?.message ||
              'This bed is already reserved for the selected dates. Please choose another bed.'
          );
          setIsSubmitting(false);
          return;
        }

        // Fallback to local storage verification to prevent duplicate bookings
        const existingBookings = JSON.parse(localStorage.getItem('staysphere_bookings') || '[]');
        
        // Strict duplicate & overlapping booking check!
        const hasOverlap = existingBookings.some((b) => {
          if (b.propertyId === bookingPayload.propertyId && b.bedId === bookingPayload.bedId) {
            const existingStart = new Date(b.startDate).getTime();
            const existingEnd = new Date(b.endDate).getTime();
            const newStart = new Date(bookingPayload.startDate).getTime();
            const newEnd = new Date(bookingPayload.endDate).getTime();

            // Overlap condition: (StartDateA <= EndDateB) and (EndDateA >= StartDateB)
            return (newStart <= existingEnd && newEnd >= existingStart);
          }
          return false;
        });

        if (hasOverlap) {
          setErrorMessage('Bed is already reserved for these dates! Please pick another vacant bed.');
          setIsSubmitting(false);
          return;
        }

        createdBooking = { ...bookingPayload, _id: `booking-${Date.now()}` };
        existingBookings.push(createdBooking);
        localStorage.setItem('staysphere_bookings', JSON.stringify(existingBookings));
      }

      setBookingResult(createdBooking || bookingPayload);
      if (onBookingSuccess) {
        onBookingSuccess(createdBooking || bookingPayload);
      }
    } catch (err) {
      console.error('Booking failed:', err);
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative my-8 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {bookingResult ? (
          /* Confirmation Screen */
          <div className="py-4 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono font-bold bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-200">
              Ref: {bookingResult.bookingReference}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-1">
              Bed Successfully Reserved!
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              Congratulations! Your accommodation at <span className="font-semibold text-slate-800">{property.title}</span> has been confirmed.
            </p>

            {/* Voucher Card */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs space-y-2 mb-5">
              <div className="flex justify-between border-b border-slate-200 pb-2 font-bold text-slate-800">
                <span>Room {bookingResult.roomNumber}</span>
                <span className="text-brand-600">{bookingResult.bedNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Move-in Date:</span>
                <span className="font-semibold text-slate-800">
                  {new Date(bookingResult.startDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Lease Duration:</span>
                <span className="font-semibold text-slate-800">{bookingResult.durationMonths} Months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Monthly Rent:</span>
                <span className="font-semibold text-slate-800">
                  ₹{bookingResult.monthlyRent?.toLocaleString('en-IN')}/mo
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-slate-900">
                <span>Total Move-in Deposit:</span>
                <span className="text-emerald-600">
                  ₹{bookingResult.totalPaid?.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold text-xs text-slate-700 flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                Print Voucher
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 transition-colors shadow-sm"
              >
                Go to My Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleBooking}>
            <div className="flex items-center gap-2 mb-1">
              <Bed className="w-5 h-5 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">Reserve Your Bed</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Instant zero-brokerage reservation with price lock guarantee.
            </p>

            {/* Error banner */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Selected Inventory Summary */}
            <div className="p-3 bg-brand-50/70 border border-brand-200 rounded-xl mb-4 text-xs">
              <div className="flex justify-between items-center font-bold text-brand-900 mb-1">
                <span>{property.title}</span>
                <span className="text-emerald-700 bg-white px-2 py-0.5 rounded border border-brand-200">
                  ₹{(calculatorPlan?.totalMonthlyRent || selectedRoom?.rentPerBed || 8000).toLocaleString('en-IN')}/mo
                </span>
              </div>
              <div className="text-slate-600 flex items-center gap-2">
                <span>Room {selectedRoom?.roomNumber || 'Not Selected'}</span>
                <span>•</span>
                <span className="font-semibold text-slate-800">{selectedBed?.bedNumber || 'Select from Grid'}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Select Move-in Date *</label>
                <input
                  type="date"
                  min={tomorrowStr}
                  required
                  value={moveInDate}
                  onChange={(e) => setMoveInDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">College or Company Name</label>
                  <input
                    type="text"
                    required
                    value={collegeOrCompany}
                    onChange={(e) => setCollegeOrCompany(e.target.value)}
                    placeholder="e.g. DTU / Infosys"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Emergency Contact Number</label>
                  <input
                    type="tel"
                    required
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    placeholder="Parent / Guardian #"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Price Breakdown Preview */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex justify-between">
                  <span>First Month Rent:</span>
                  <span className="font-semibold">
                    ₹{(calculatorPlan?.totalMonthlyRent || 8000).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Refundable Security Deposit:</span>
                  <span className="font-semibold">
                    ₹{(calculatorPlan?.securityDeposit || 8000).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-200 font-bold text-slate-900 text-xs">
                  <span>Total Amount Due:</span>
                  <span className="text-emerald-600">
                    ₹{(calculatorPlan?.totalMoveInCost || 17000).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkbox rules */}
              <label className="flex items-start gap-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="rounded text-brand-600 mt-0.5 focus:ring-brand-500"
                />
                <span className="text-[11px] text-slate-600 leading-tight">
                  I agree to the property quiet hours, identity verification policy, and refund rules.
                </span>
              </label>
            </div>

            <div className="mt-5 flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Verifying Availability...' : 'Confirm Bed Booking'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
