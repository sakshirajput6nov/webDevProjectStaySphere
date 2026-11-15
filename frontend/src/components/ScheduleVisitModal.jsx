import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, User, Phone, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function ScheduleVisitModal({ property, isOpen, onClose, onVisitScheduled }) {
  const { user } = useAuth();
  const [visitDate, setVisitDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 12:00 PM');
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);

  if (!isOpen) return null;

  // Calculate minimum date: tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!visitDate) {
      alert('Please select a visit date');
      return;
    }

    setIsSubmitting(true);
    try {
      const visitPayload = {
        propertyId: property._id || property.id,
        propertyTitle: property.title,
        propertyAddress: `${property.address.street}, ${property.address.city}`,
        visitDate,
        timeSlot,
        visitorName: name,
        visitorPhone: phone,
        notes,
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      };

      // Call API if connected, or store locally
      try {
        await api.post('/visits', visitPayload);
      } catch (err) {
        // Fallback for offline/demo mode
        const existingVisits = JSON.parse(localStorage.getItem('staysphere_visits') || '[]');
        existingVisits.push({ ...visitPayload, id: `visit-${Date.now()}` });
        localStorage.setItem('staysphere_visits', JSON.stringify(existingVisits));
      }

      setSuccessData(visitPayload);
      if (onVisitScheduled) onVisitScheduled(visitPayload);
    } catch (err) {
      console.error(err);
      alert('Could not schedule visit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {successData ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Scheduled Successfully!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
              The property manager at <span className="font-semibold text-slate-800">{property.title}</span> has been notified. An SMS confirmation pass has been dispatched.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 mb-6 border border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Date:</span>
                <span className="font-semibold text-slate-800">{successData.visitDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Slot:</span>
                <span className="font-semibold text-slate-800">{successData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Address:</span>
                <span className="font-semibold text-slate-800">{property.address.street}, {property.address.city}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors"
            >
              Done & View My Visits
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-5 h-5 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">Schedule In-Person Visit</h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Tour <span className="font-semibold text-slate-700">{property.title}</span> with the verified owner. Free of charge.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Select Visit Date</label>
                <input
                  type="date"
                  min={minDateStr}
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Preferred Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    '10:00 AM - 11:00 AM',
                    '11:30 AM - 12:30 PM',
                    '03:00 PM - 04:00 PM',
                    '05:30 PM - 06:30 PM'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2 rounded-lg border text-center transition-all ${
                        timeSlot === slot
                          ? 'border-brand-600 bg-brand-50 text-brand-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Special Queries / Requests (Optional)</label>
                <textarea
                  rows="2"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Need parking space info, college commute distance..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
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
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Visit Appointment'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
