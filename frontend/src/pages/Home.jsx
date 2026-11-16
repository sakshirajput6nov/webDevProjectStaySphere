import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Compass,
  MapPin,
  ShieldCheck,
  Bed,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Users,
  Award,
  Zap,
  Star
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import PannellumViewer from '../components/PannellumViewer';
import { MOCK_PROPERTIES, CITIES } from '../data/mockProperties';

export default function Home() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [activeTabCity, setActiveTabCity] = useState('All');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCity && selectedCity !== 'All Cities') params.append('city', selectedCity);
    if (selectedGender && selectedGender !== 'All') params.append('gender', selectedGender);
    if (selectedBudget) params.append('maxPrice', selectedBudget);
    navigate(`/properties?${params.toString()}`);
  };

  const filteredFeatured = activeTabCity === 'All'
    ? MOCK_PROPERTIES
    : MOCK_PROPERTIES.filter((p) => p.address.city.toLowerCase() === activeTabCity.toLowerCase());

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-slate-50 pt-12 pb-20 border-b border-slate-200/60">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 border border-brand-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Next-Gen Student & Young Professional Living</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Experience Your PG in <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">360° Virtual Reality</span> Before You Book.
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Zero brokerage. Transparent room and individual bed availability. Verified student communities near top universities and IT hubs across India.
            </p>
          </div>

          {/* Quick Search Bar Widget */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/80">
            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {/* City */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  City / Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="">Select City (e.g. Bangalore)</option>
                    {CITIES.filter((c) => c !== 'All Cities').map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Gender Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Stay Preference
                </label>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Any Gender</option>
                  <option value="Boys">Boys Only PG</option>
                  <option value="Girls">Girls Only PG</option>
                  <option value="Unisex">Unisex / Co-Living</option>
                </select>
              </div>

              {/* Max Budget */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                  Max Budget
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Any Budget</option>
                  <option value="8000">Up to ₹8,000 / mo</option>
                  <option value="12000">Up to ₹12,000 / mo</option>
                  <option value="16000">Up to ₹16,000 / mo</option>
                  <option value="25000">Luxury (₹16,000+)</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 h-[42px]"
                >
                  <Search className="w-4 h-4" />
                  Find Beds
                </button>
              </div>
            </form>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200">
              <span className="text-2xl font-extrabold text-slate-900 block">450+</span>
              <span className="text-xs text-slate-500 font-medium">Verified PGs & Flats</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200">
              <span className="text-2xl font-extrabold text-brand-600 block">100%</span>
              <span className="text-xs text-slate-500 font-medium">360° Tour Coverage</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200">
              <span className="text-2xl font-extrabold text-emerald-600 block">0</span>
              <span className="text-xs text-slate-500 font-medium">Brokerage Fees</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-slate-200">
              <span className="text-2xl font-extrabold text-slate-900 block">18,500+</span>
              <span className="text-xs text-slate-500 font-medium">Happy Students Placed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 360° Live Tour Interactive Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 bg-brand-900/60 text-brand-300 text-xs font-bold px-3 py-1 rounded-full border border-brand-700">
                <Compass className="w-4 h-4 text-brand-400" />
                <span>TRY THE IMMERSIVE VIEWER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Inspect Every Corner. No Surprises on Move-in Day.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Walk through rooms, check the mattress quality, assess the study desk natural lighting, inspect the attached bathroom, and measure storage space directly from your smartphone or laptop.
              </p>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>True equirectangular spatial high-resolution panoramic photography</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Click interactive hot-spots to navigate between rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Inspect study socket positions, wardrobe width & balcony view</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/properties/prop-101"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold text-xs text-white shadow-lg transition-colors"
                >
                  <span>Explore UrbanNest 360° Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Embedded 360 Live Viewer Preview */}
            <div className="lg:col-span-7">
              <PannellumViewer
                panoramaUrl={MOCK_PROPERTIES[0].virtualTour.panoramaUrl}
                scenes={MOCK_PROPERTIES[0].virtualTour.scenes}
                title="UrbanNest Premier Student Bedroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid with City Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Verified Stays
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Top-rated student residencies with individual bed booking and 360° virtual inspections.
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Bangalore', 'Delhi', 'Pune', 'Hyderabad'].map((city) => (
              <button
                key={city}
                onClick={() => setActiveTabCity(city)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTabCity === city
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatured.map((property) => (
            <PropertyCard key={property._id || property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-brand-500 bg-white hover:bg-brand-50 text-slate-800 hover:text-brand-700 font-bold text-xs transition-all shadow-sm"
          >
            <span>View All Available Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why StaySphere Value Proposition */}
      <section id="why-staysphere" className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why Students & Owners Trust StaySphere
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Say goodbye to fake photos, unexpected brokerage charges, and chaotic roommate disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">360° Virtual Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tour every corner of your prospective room online. No hidden angles or outdated photos. See real lighting and exact furnishings before scheduling a visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Bed className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Individual Bed Reservation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pick your specific bed (Window side, study corner, upper bunk). Real-time inventory prevents double bookings and guarantees your space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Brokerage & Verified Hosts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with background-checked property owners. No middleman cuts, 100% refundable deposits, and transparent digital lease agreements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
