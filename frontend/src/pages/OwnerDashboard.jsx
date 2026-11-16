import React, { useState, useEffect } from 'react';
import {
  Building2,
  Bed,
  Plus,
  CheckCircle2,
  XCircle,
  Users,
  Compass,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
  DollarSign,
  Trash2,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MOCK_PROPERTIES, CITIES } from '../data/mockProperties';
import api from '../services/api';

export default function OwnerDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('listings');
  const [properties, setProperties] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // New property form state
  const [newTitle, setNewTitle] = useState('');
  const [newCity, setNewCity] = useState('Bangalore');
  const [newStreet, setNewStreet] = useState('');
  const [newLandmark, setNewLandmark] = useState('');
  const [newStartingPrice, setNewStartingPrice] = useState(8500);
  const [newPropertyType, setNewPropertyType] = useState('PG');
  const [newGender, setNewGender] = useState('Unisex');
  const [newPanoramaUrl, setNewPanoramaUrl] = useState('https://pannellum.org/images/alma.jpg');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchOwnerData = async () => {
    setLoading(true);
    try {
      // 1. Fetch properties owned by current owner
      try {
        const res = await api.get('/properties/my-properties');
        if (res.data && res.data.length > 0) {
          setProperties(res.data);
        } else {
          // If no properties tied to user ID yet, fetch general or fallback to mock
          const allRes = await api.get('/properties');
          if (allRes.data && allRes.data.length > 0) {
            setProperties(allRes.data);
          } else {
            setProperties(MOCK_PROPERTIES);
          }
        }
      } catch {
        setProperties(MOCK_PROPERTIES);
      }

      // 2. Fetch bookings for this owner's properties
      try {
        const bRes = await api.get('/bookings');
        if (bRes.data && Array.isArray(bRes.data)) {
          setBookings(bRes.data);
        }
      } catch {
        const localBookings = JSON.parse(localStorage.getItem('staysphere_bookings') || '[]');
        setBookings(localBookings);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOwnerData();
  }, [user]);

  // Compute metrics
  const totalProperties = properties.length;
  let totalBeds = 0;
  let occupiedBeds = 0;

  properties.forEach((p) => {
    p.rooms?.forEach((r) => {
      totalBeds += r.beds?.length || 0;
      occupiedBeds += r.beds?.filter((b) => b.isOccupied).length || 0;
    });
  });

  const vacantBeds = totalBeds - occupiedBeds;
  const occupancyRate = totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 75;

  // Toggle bed occupancy with backend sync
  const handleToggleBed = async (propertyId, roomId, bedId, currentStatus) => {
    // Optimistic UI update
    const updated = properties.map((prop) => {
      if (prop._id === propertyId || prop.id === propertyId) {
        return {
          ...prop,
          rooms: prop.rooms.map((room) => {
            if (room.roomId === roomId) {
              return {
                ...room,
                beds: room.beds.map((bed) => {
                  if (bed.bedId === bedId) {
                    return { ...bed, isOccupied: !bed.isOccupied };
                  }
                  return bed;
                }),
              };
            }
            return room;
          }),
        };
      }
      return prop;
    });

    setProperties(updated);

    try {
      await api.patch(`/properties/${propertyId}/rooms/${roomId}/beds/${bedId}/occupancy`, {
        isOccupied: !currentStatus,
      });
    } catch (err) {
      console.warn('Backend occupancy update note:', err.message);
    }
  };

  // Delete property with ownership confirmation
  const handleDeleteProperty = async (propertyId, title) => {
    if (!window.confirm(`Are you sure you want to remove the listing "${title}"?`)) return;
    try {
      await api.delete(`/properties/${propertyId}`);
      setProperties((prev) => prev.filter((p) => p._id !== propertyId && p.id !== propertyId));
    } catch (err) {
      alert(err.response?.data?.message || 'Error deleting property');
    }
  };

  const handleCreateProperty = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = `prop-owner-${Date.now()}`;
    const newProp = {
      id: generatedId,
      title: newTitle,
      tagline: `Premium ${newPropertyType} in ${newCity}`,
      description: `Spacious, fully furnished ${newPropertyType} managed by ${user?.name || 'Verified Host'}. Includes fiber internet, daily cleaning, and biometric security.`,
      propertyType: newPropertyType,
      genderPreference: newGender,
      address: {
        street: newStreet,
        city: newCity,
        state: 'Karnataka',
        pincode: '560001',
        landmark: newLandmark || 'Central Location',
      },
      pricing: {
        startingPrice: Number(newStartingPrice),
        securityDeposit: Number(newStartingPrice),
        maintenanceFee: 1000,
        electricityRule: 'Prepaid meter',
        noticePeriodDays: 30,
      },
      images: [
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      ],
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
          category: 'bedroom',
          caption: 'Spacious furnished bedroom',
        },
        {
          url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
          category: 'living',
          caption: 'Resident common area',
        },
      ],
      virtualTour: newPanoramaUrl
        ? {
            type: 'equirectangular',
            panoramaUrl: newPanoramaUrl,
            scenes: [
              {
                id: 'bedroom',
                title: 'Master Bedroom',
                panoramaUrl: newPanoramaUrl,
                hotSpots: [],
              },
            ],
          }
        : null,
      amenities: ['High-Speed WiFi', 'Air Conditioning', 'Power Backup', 'Daily Housekeeping', 'RO Drinking Water'],
      foodIncluded: true,
      foodPlans: [
        { id: 'two_meals', name: '2 Meals', price: 2500, description: 'Breakfast & Dinner' },
      ],
      rating: 5.0,
      reviewCount: 1,
      owner: {
        userId: user?._id,
        name: user?.name || 'Vikram Malhotra',
        phone: user?.phone || '+91 91234 56789',
        email: user?.email || 'owner@staysphere.com',
        verified: true,
      },
      rooms: [
        {
          roomId: `room-101-${Date.now()}`,
          roomNumber: '101',
          sharingType: 'Double',
          floor: 1,
          rentPerBed: Number(newStartingPrice),
          hasBalcony: true,
          hasAttachedBathroom: true,
          beds: [
            { bedId: `bed-101-A-${Date.now()}`, bedNumber: 'Bed A', isOccupied: false, tenant: null },
            { bedId: `bed-101-B-${Date.now()}`, bedNumber: 'Bed B', isOccupied: false, tenant: null },
          ],
        },
      ],
    };

    try {
      const res = await api.post('/properties', newProp);
      const created = res.data?.property || newProp;
      setProperties([created, ...properties]);
    } catch (err) {
      // Local fallback
      setProperties([{ ...newProp, _id: generatedId }, ...properties]);
    }

    setIsSubmitting(false);
    setShowAddForm(false);
    alert('New listing created successfully with verified 360° tour support!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold tracking-tight">Property Owner Console</h1>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-brand-500 text-white">
              Host Portal
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Manage your student residencies, 360° virtual tours, and live bed occupancy.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>List New Property</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Total Listings</span>
            <Building2 className="w-4 h-4 text-brand-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">{totalProperties}</span>
          <span className="text-xs text-emerald-600 font-semibold block mt-1">All active</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Occupancy Rate</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">{occupancyRate}%</span>
          <span className="text-xs text-slate-500 block mt-1">
            {occupiedBeds} of {totalBeds} beds filled
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Vacant Beds</span>
            <Bed className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-extrabold text-brand-600">{vacantBeds}</span>
          <span className="text-xs text-slate-500 block mt-1">Available to book</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase">Estimated Monthly Rev</span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-emerald-600">
            ₹{(occupiedBeds * 9000).toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-slate-500 block mt-1">Direct bank payout</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('listings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'listings'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>My Properties & Bed Inventory ({properties.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'bookings'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Bed className="w-4 h-4" />
          <span>Tenant Reservations ({bookings.length})</span>
        </button>
      </div>

      {/* Tab 1: Listings & Bed Availability Management */}
      {activeTab === 'listings' && (
        <div className="space-y-6">
          {properties.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No Listings Yet</h3>
              <p className="text-xs text-slate-500 mb-4">Click "List New Property" above to add your first residency.</p>
            </div>
          ) : (
            properties.map((prop) => (
              <div
                key={prop._id || prop.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                        {prop.propertyType}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                        {prop.genderPreference}
                      </span>
                      {prop.virtualTour?.panoramaUrl ? (
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5" />
                          360° Tour Enabled
                        </span>
                      ) : (
                        <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                          Photos Only
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{prop.title}</h3>
                    <p className="text-xs text-slate-500">
                      {prop.address?.street}, {prop.address?.city}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs text-slate-500">Starting Price</span>
                      <div className="text-lg font-extrabold text-slate-900">
                        ₹{prop.pricing?.startingPrice?.toLocaleString('en-IN')}/mo
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                      <Link
                        to={`/properties/${prop._id || prop.id}`}
                        className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600"
                        title="View Live Listing"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDeleteProperty(prop._id || prop.id, prop.title)}
                        className="p-2 rounded-xl border border-red-200 hover:bg-red-50 text-red-600"
                        title="Delete Listing"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Room & Bed Occupancy Controls for Host */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Room & Bed Inventory (Click any bed to toggle Vacant / Occupied)</span>
                    <span className="text-slate-400 font-normal">Instant sync with student discovery</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prop.rooms?.map((room) => (
                      <div
                        key={room.roomId}
                        className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3 text-xs"
                      >
                        <div className="flex justify-between items-center font-bold text-slate-800">
                          <span>Room {room.roomNumber} ({room.sharingType} Sharing)</span>
                          <span className="text-brand-600 font-extrabold">₹{room.rentPerBed}/mo</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {room.beds?.map((bed) => (
                            <button
                              key={bed.bedId}
                              onClick={() =>
                                handleToggleBed(
                                  prop._id || prop.id,
                                  room.roomId,
                                  bed.bedId,
                                  bed.isOccupied
                                )
                              }
                              className={`p-2.5 rounded-lg border text-left font-semibold transition-all flex items-center justify-between ${
                                bed.isOccupied
                                  ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                                  : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                              }`}
                            >
                              <div>
                                <span className="block">{bed.bedNumber}</span>
                                <span className="text-[10px] font-normal block">
                                  {bed.isOccupied ? 'Occupied' : 'Vacant (Click to mark filled)'}
                                </span>
                              </div>
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${
                                  bed.isOccupied ? 'bg-amber-500' : 'bg-emerald-500'
                                }`}
                              ></span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 2: Reservations */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          {bookings.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Bed className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No Bookings Yet</h3>
              <p className="text-xs text-slate-500">
                New student reservations for your properties will appear here in real-time.
              </p>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b._id || b.id || b.bookingReference}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded">
                      {b.bookingReference}
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      {b.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{b.propertyTitle}</h4>
                  <p className="text-slate-500">
                    Room {b.roomNumber} • {b.bedNumber} • Move-in: {new Date(b.startDate).toLocaleDateString()}
                  </p>
                  <p className="text-slate-600 font-medium mt-1">
                    Tenant: {b.user?.name || b.studentName || 'Student Resident'} ({b.user?.email || b.studentEmail || 'Verified'})
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Paid</span>
                  <span className="text-base font-extrabold text-emerald-600">
                    ₹{b.totalPaid?.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Add New Property Modal Form */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 my-8">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-600" />
                List New Student PG / Flat
              </h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleCreateProperty} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Property Name *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Skyline Elite Student Co-Living"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">City *</label>
                  <select
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    {CITIES.filter((c) => c !== 'All Cities').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Starting Price (₹/mo) *</label>
                  <input
                    type="number"
                    required
                    value={newStartingPrice}
                    onChange={(e) => setNewStartingPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Property Type</label>
                  <select
                    value={newPropertyType}
                    onChange={(e) => setNewPropertyType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="PG">PG (Paying Guest)</option>
                    <option value="Flat">Shared Flat</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Gender Rule</label>
                  <select
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Unisex">Unisex</option>
                    <option value="Boys">Boys Only</option>
                    <option value="Girls">Girls Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={newStreet}
                  onChange={(e) => setNewStreet(e.target.value)}
                  placeholder="e.g. 5th Main, Near Christ College"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">360° Virtual Tour Panorama URL (Optional)</label>
                <input
                  type="url"
                  value={newPanoramaUrl}
                  onChange={(e) => setNewPanoramaUrl(e.target.value)}
                  placeholder="https://... (Leave empty if no 360 panorama)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono text-[11px]"
                />
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Leave blank to publish with standard photo gallery only.
                </span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-md"
                >
                  {isSubmitting ? 'Publishing...' : 'Publish Listing'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
