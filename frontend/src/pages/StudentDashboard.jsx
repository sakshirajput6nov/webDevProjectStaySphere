import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bed,
  Calendar,
  Heart,
  Clock,
  CheckCircle2,
  FileText,
  MapPin,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  User,
  XCircle,
  Download,
  Trash2,
  Edit2,
  Save,
  Compass
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MOCK_PROPERTIES } from '../data/mockProperties';
import api from '../services/api';

export default function StudentDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [visits, setVisits] = useState([]);
  const [savedProperties, setSavedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Editable Profile fields
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileName, setProfileName] = useState(user?.name || '');
  const [profilePhone, setProfilePhone] = useState(user?.phone || '');
  const [profileCollege, setProfileCollege] = useState(user?.college || '');
  const [profileStatus, setProfileStatus] = useState('');

  useEffect(() => {
    if (user) {
      setProfileName(user.name || '');
      setProfilePhone(user.phone || '');
      setProfileCollege(user.college || '');
    }
  }, [user]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // 1. Fetch real student bookings
      try {
        const bRes = await api.get('/bookings/my-bookings');
        if (bRes.data && Array.isArray(bRes.data)) {
          setBookings(bRes.data);
        }
      } catch {
        const localBookings = JSON.parse(localStorage.getItem('staysphere_bookings') || '[]');
        setBookings(localBookings);
      }

      // 2. Fetch real student visits
      try {
        const vRes = await api.get('/visits/my-visits');
        if (vRes.data && Array.isArray(vRes.data)) {
          setVisits(vRes.data);
        }
      } catch {
        const localVisits = JSON.parse(localStorage.getItem('staysphere_visits') || '[]');
        setVisits(localVisits);
      }

      // 3. Fetch real saved properties
      try {
        const sRes = await api.get('/auth/saved-properties');
        if (sRes.data && Array.isArray(sRes.data)) {
          setSavedProperties(sRes.data);
        }
      } catch {
        setSavedProperties([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, [user]);

  const cancelBooking = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this bed reservation?')) return;
    try {
      await api.delete(`/bookings/${bookingId}`);
    } catch {
      // Fallback local update
    }
    const updated = bookings.filter((b) => b._id !== bookingId && b.id !== bookingId);
    setBookings(updated);
    localStorage.setItem('staysphere_bookings', JSON.stringify(updated));
  };

  const cancelVisit = async (visitId) => {
    if (!window.confirm('Cancel this scheduled physical visit?')) return;
    try {
      await api.delete(`/visits/${visitId}`);
    } catch {
      // Fallback local update
    }
    const updated = visits.filter((v) => v.id !== visitId && v._id !== visitId);
    setVisits(updated);
    localStorage.setItem('staysphere_visits', JSON.stringify(updated));
  };

  const removeSavedProperty = async (propId) => {
    try {
      await api.post(`/auth/saved-properties/${propId}`);
      setSavedProperties((prev) => prev.filter((p) => p._id !== propId && p.id !== propId));
    } catch (err) {
      console.error('Failed to remove saved property', err);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setProfileStatus('Saving...');
    try {
      const res = await api.put('/auth/profile', {
        name: profileName,
        phone: profilePhone,
        college: profileCollege,
      });
      if (res.data?.user) {
        localStorage.setItem('staysphere_user', JSON.stringify(res.data.user));
        setProfileStatus('Profile updated successfully!');
        setIsEditingProfile(false);
      }
    } catch (err) {
      setProfileStatus(err.response?.data?.message || 'Failed to update profile');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Student Welcome Header */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-bold text-2xl text-white">
              {profileName?.[0] || user?.name?.[0] || 'S'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold tracking-tight">
                  Welcome back, {profileName || user?.name || 'Student'}!
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-900">
                  Verified Student
                </span>
              </div>
              <p className="text-xs text-brand-200 mt-1">
                {profileCollege || user?.college || 'College Resident'} • {user?.email}
              </p>
            </div>
          </div>

          <Link
            to="/properties"
            className="px-4 py-2.5 rounded-xl bg-white text-brand-800 font-bold text-xs shadow-md hover:bg-brand-50 transition-colors"
          >
            Explore More PGs
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <span className="text-xl font-extrabold block">{bookings.length}</span>
            <span className="text-[11px] text-brand-200">Active Bookings</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <span className="text-xl font-extrabold block">{visits.length}</span>
            <span className="text-[11px] text-brand-200">Upcoming Visits</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10">
            <span className="text-xl font-extrabold block">{savedProperties.length}</span>
            <span className="text-[11px] text-brand-200">Saved Properties</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'bookings'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Bed className="w-4 h-4" />
          <span>My Room & Bed Bookings ({bookings.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('visits')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'visits'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Scheduled Physical Visits ({visits.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'saved'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Saved Properties ({savedProperties.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'profile'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Tenant Profile & ID</span>
        </button>
      </div>

      {/* Tab 1: My Bookings */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          {bookings.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Bed className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No Active Bookings Found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                Explore our verified stays in 360° virtual reality and lock your exact bed today.
              </p>
              <Link
                to="/properties"
                className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl inline-block"
              >
                Find a Bed
              </Link>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking._id || booking.id || booking.bookingReference}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded border border-brand-200">
                        {booking.bookingReference || 'STAY-719302'}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {booking.status || 'Confirmed'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {booking.propertyTitle || booking.property?.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{booking.propertyAddress || (booking.property?.address?.street + ', ' + booking.property?.address?.city)}</span>
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs text-slate-500">Monthly Rent</div>
                    <div className="text-lg font-extrabold text-slate-900">
                      ₹{booking.monthlyRent?.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-slate-500">/mo</span>
                    </div>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Allocated Space</span>
                    <span className="font-bold text-slate-800">
                      Room {booking.roomNumber} • {booking.bedNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Move-in Date</span>
                    <span className="font-semibold text-slate-800">
                      {booking.startDate ? new Date(booking.startDate).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      }) : 'Immediate'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Tenure</span>
                    <span className="font-semibold text-slate-800">{booking.durationMonths || 6} Months</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold uppercase">Move-in Total Paid</span>
                    <span className="font-bold text-emerald-600">
                      ₹{booking.totalPaid?.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.print()}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Receipt</span>
                    </button>
                    <Link
                      to={`/properties/${booking.propertyId || booking.property?._id || booking.property?.id}`}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Stay Details</span>
                    </Link>
                  </div>

                  <button
                    onClick={() => cancelBooking(booking._id || booking.id)}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    Cancel Reservation
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 2: My Scheduled Visits */}
      {activeTab === 'visits' && (
        <div className="space-y-4">
          {visits.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No Visits Scheduled</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                Schedule a zero-cost physical tour with the verified owner.
              </p>
              <Link
                to="/properties"
                className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl inline-block"
              >
                Browse Stays to Schedule Visit
              </Link>
            </div>
          ) : (
            visits.map((visit) => (
              <div
                key={visit.id || visit._id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {visit.status || 'Confirmed'}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Appointment ID: #{visit.id || visit._id}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-slate-900">{visit.propertyTitle || visit.property?.title}</h4>
                  <p className="text-xs text-slate-500">{visit.propertyAddress || visit.property?.address?.street}</p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-brand-700 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {visit.visitDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {visit.timeSlot}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link
                    to={`/properties/${visit.propertyId || visit.property?._id || visit.property?.id}`}
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold text-center"
                  >
                    View Property
                  </Link>
                  <button
                    onClick={() => cancelVisit(visit.id || visit._id)}
                    className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 3: Saved Properties */}
      {activeTab === 'saved' && (
        <div className="space-y-4">
          {savedProperties.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Heart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No Saved Properties Yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                Click the heart icon on any PG or flat to save it here for quick access and comparison.
              </p>
              <Link
                to="/properties"
                className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl inline-block"
              >
                Browse Stays
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map((prop) => (
                <div
                  key={prop._id || prop.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative h-44 bg-slate-900">
                    <img
                      src={prop.images?.[0] || 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'}
                      alt={prop.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-800 backdrop-blur-sm">
                        {prop.propertyType}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-600 text-white">
                        {prop.genderPreference}
                      </span>
                    </div>
                    {prop.virtualTour?.panoramaUrl && (
                      <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white flex items-center gap-1">
                        <Compass className="w-3 h-3" />
                        360° Tour
                      </span>
                    )}
                    <button
                      onClick={() => removeSavedProperty(prop._id || prop.id)}
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-red-500 hover:bg-white transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{prop.title}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{prop.address?.city}, {prop.address?.landmark || prop.address?.street}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Starts from</span>
                        <span className="text-sm font-extrabold text-slate-900">
                          ₹{prop.pricing?.startingPrice?.toLocaleString('en-IN')}/mo
                        </span>
                      </div>
                      <Link
                        to={`/properties/${prop._id || prop.id}`}
                        className="px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        View Stay
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Tenant Profile */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <div>
                <h3 className="font-bold text-slate-900">Student Identity & Profile</h3>
                <p className="text-xs text-slate-500">Verified profile enables instant zero-brokerage leases</p>
              </div>
            </div>

            <button
              onClick={() => {
                setIsEditingProfile(!isEditingProfile);
                setProfileStatus('');
              }}
              className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditingProfile ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
          </div>

          {profileStatus && (
            <div className="p-3 bg-brand-50 border border-brand-200 text-brand-800 rounded-xl text-xs font-medium">
              {profileStatus}
            </div>
          )}

          {isEditingProfile ? (
            <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Mobile Phone</label>
                <input
                  type="text"
                  value={profilePhone}
                  onChange={(e) => setProfilePhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">College / Organization</label>
                <input
                  type="text"
                  value={profileCollege}
                  onChange={(e) => setProfileCollege(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  placeholder="e.g. Christ University"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </form>
          ) : (
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 font-bold block mb-1">Full Legal Name</span>
                <span className="font-semibold text-slate-800">{profileName || user?.name}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block mb-1">Registered Email</span>
                <span className="font-semibold text-slate-800">{user?.email}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block mb-1">Mobile Phone</span>
                <span className="font-semibold text-slate-800">{profilePhone || user?.phone || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block mb-1">College / Organization</span>
                <span className="font-semibold text-slate-800">{profileCollege || user?.college || 'Not specified'}</span>
              </div>
            </div>
          )}

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>KYC Verified & Pre-Approved</span>
            </div>
            <p className="text-[11px] text-emerald-700">
              Your student government ID is verified. You can reserve any bed on StaySphere without manual screening delays.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
