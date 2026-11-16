import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Building,
  Users,
  Bed,
  CheckCircle,
  XCircle,
  FileText,
  DollarSign,
  TrendingUp,
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { MOCK_PROPERTIES } from '../data/mockProperties';
import api from '../services/api';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('properties');
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
  const [usersList, setUsersList] = useState([
    {
      id: 'usr-1',
      name: 'Aarav Sharma',
      email: 'student@staysphere.com',
      role: 'student',
      phone: '+91 98765 43210',
      college: 'Delhi Technological University',
    },
    {
      id: 'usr-2',
      name: 'Vikram Malhotra',
      email: 'owner@staysphere.com',
      role: 'owner',
      phone: '+91 91234 56789',
      company: 'Skyline Residencies',
    },
    {
      id: 'usr-3',
      name: 'StaySphere Administrator',
      email: 'admin@staysphere.com',
      role: 'admin',
      phone: '+91 88888 77777',
    },
    {
      id: 'usr-4',
      name: 'Priya Nambiar',
      email: 'priya@example.com',
      role: 'student',
      phone: '+91 94441 22334',
      college: 'Christ University'
    },
    {
      id: 'usr-5',
      name: 'Sunita Roy',
      email: 'sunita.roy@scholarhaven.com',
      role: 'owner',
      phone: '+91 98112 33445',
      company: 'ScholarHaven'
    }
  ]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get('/properties');
        if (res.data && res.data.length > 0) setProperties(res.data);
      } catch {
        setProperties(MOCK_PROPERTIES);
      }

      const localBookings = JSON.parse(localStorage.getItem('staysphere_bookings') || '[]');
      if (localBookings.length === 0) {
        setBookings([
          {
            bookingReference: 'STAY-901842',
            propertyTitle: 'UrbanNest Premier Student Living',
            roomNumber: '101',
            bedNumber: 'Bed A',
            studentName: 'Aarav Sharma',
            totalPaid: 19500,
            status: 'Confirmed',
            createdAt: new Date().toISOString()
          }
        ]);
      } else {
        setBookings(localBookings);
      }
    };

    loadData();
  }, []);

  const toggleVerifyProperty = (propertyId) => {
    setProperties((prev) =>
      prev.map((p) => {
        if (p._id === propertyId || p.id === propertyId) {
          return {
            ...p,
            owner: { ...p.owner, verified: !p.owner?.verified }
          };
        }
        return p;
      })
    );
  };

  const removeProperty = (propertyId) => {
    if (window.confirm('Are you sure you want to delist this property from StaySphere?')) {
      setProperties((prev) => prev.filter((p) => p._id !== propertyId && p.id !== propertyId));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Admin Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold tracking-tight">System Admin Console</h1>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white">
              Superadmin Mode
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Platform-wide governance: safety audits, host verification, and booking reconciliation.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700 text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300">System Status: </span>
          <span className="text-emerald-400 font-bold">100% Operational</span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Total Properties</span>
          <span className="text-2xl font-extrabold text-slate-900">{properties.length}</span>
          <span className="text-xs text-brand-600 block mt-1">Across 4 major hubs</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Registered Users</span>
          <span className="text-2xl font-extrabold text-slate-900">{usersList.length * 120}+</span>
          <span className="text-xs text-emerald-600 block mt-1">Verified identities</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Total Reservations</span>
          <span className="text-2xl font-extrabold text-slate-900">{bookings.length + 42}</span>
          <span className="text-xs text-slate-500 block mt-1">Zero disputes</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Gross Booking Volume</span>
          <span className="text-2xl font-extrabold text-emerald-600">₹8,40,000</span>
          <span className="text-xs text-slate-500 block mt-1">Protected in escrow</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('properties')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'properties'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Properties Audit ({properties.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('users')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'users'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>User Directory ({usersList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'bookings'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Platform Bookings Ledger</span>
        </button>
      </div>

      {/* Tab 1: Properties Audit */}
      {activeTab === 'properties' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase">
                <tr>
                  <th className="py-3 px-4">Property</th>
                  <th className="py-3 px-4">City / Type</th>
                  <th className="py-3 px-4">Rooms / Beds</th>
                  <th className="py-3 px-4">360° Tour</th>
                  <th className="py-3 px-4">Host Verification</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {properties.map((prop) => {
                  const isVerified = prop.owner?.verified;
                  const totalB = prop.rooms?.reduce((a, r) => a + (r.beds?.length || 0), 0) || 0;

                  return (
                    <tr key={prop._id || prop.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <span className="font-bold text-slate-900 block">{prop.title}</span>
                        <span className="text-[11px] text-slate-500">{prop.owner?.name}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-slate-700">{prop.address?.city}</span>
                        <span className="text-[11px] text-slate-500 block">{prop.propertyType} • {prop.genderPreference}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-slate-800">{prop.rooms?.length || 0} Rooms</span>
                        <span className="text-[11px] text-slate-500 block">{totalB} Total Beds</span>
                      </td>
                      <td className="py-3 px-4">
                        {prop.virtualTour?.panoramaUrl ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Available
                          </span>
                        ) : (
                          <span className="text-slate-400">Missing</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => toggleVerifyProperty(prop._id || prop.id)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                            isVerified
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                              : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                          }`}
                        >
                          {isVerified ? (
                            <>
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Verified</span>
                            </>
                          ) : (
                            <>
                              <ShieldAlert className="w-3.5 h-3.5" />
                              <span>Pending Audit</span>
                            </>
                          )}
                        </button>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => removeProperty(prop._id || prop.id)}
                          className="text-red-600 hover:text-red-700 font-bold text-xs"
                        >
                          Delist
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: User Directory */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase">
                <tr>
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Affiliation</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {usersList.map((u) => (
                  <tr key={u.id || u.email} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-900">{u.name}</td>
                    <td className="py-3 px-4">
                      <span className="capitalize font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="block text-slate-800">{u.email}</span>
                      <span className="text-[11px] text-slate-500">{u.phone}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 font-medium">
                      {u.college || u.company || 'Platform Staff'}
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Ledger */}
      {activeTab === 'bookings' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase">
                <tr>
                  <th className="py-3 px-4">Reference</th>
                  <th className="py-3 px-4">Property</th>
                  <th className="py-3 px-4">Bed & Room</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.map((b, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-mono font-bold text-brand-700">
                      {b.bookingReference || `STAY-8192${i}`}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">{b.propertyTitle}</td>
                    <td className="py-3 px-4 text-slate-600">
                      Room {b.roomNumber} • {b.bedNumber}
                    </td>
                    <td className="py-3 px-4 font-extrabold text-emerald-600">
                      ₹{b.totalPaid?.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {b.status || 'Confirmed'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
