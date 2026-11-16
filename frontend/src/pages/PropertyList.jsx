import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  SlidersHorizontal,
  Compass,
  RotateCcw,
  MapPin,
  ChevronDown,
  Building,
  Sparkles,
  Bed,
  Check
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import {
  MOCK_PROPERTIES,
  CITIES,
  GENDER_OPTIONS,
  PROPERTY_TYPES,
  SHARING_TYPES,
  AMENITIES_LIST
} from '../data/mockProperties';
import api from '../services/api';

export default function PropertyList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [properties, setProperties] = useState(MOCK_PROPERTIES);
  const [loading, setLoading] = useState(false);

  // Search and filter state initialized from URL query params
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'All Cities');
  const [selectedGender, setSelectedGender] = useState(searchParams.get('gender') || 'All');
  const [selectedPropertyType, setSelectedPropertyType] = useState('All');
  const [selectedSharing, setSelectedSharing] = useState('All');
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get('maxPrice')) || 20000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [onlyVirtualTour, setOnlyVirtualTour] = useState(searchParams.get('hasTour') === 'true');
  const [sortBy, setSortBy] = useState('recommended');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Fetch from backend API if available, fallback to mock properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await api.get('/properties');
        if (res.data && res.data.length > 0) {
          setProperties(res.data);
        }
      } catch (err) {
        // Fallback to MOCK_PROPERTIES
        setProperties(MOCK_PROPERTIES);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCity('All Cities');
    setSelectedGender('All');
    setSelectedPropertyType('All');
    setSelectedSharing('All');
    setMaxPrice(20000);
    setSelectedAmenities([]);
    setOnlyVirtualTour(false);
    setSortBy('recommended');
    setSearchParams({});
  };

  // Filter logic
  const filteredProperties = useMemo(() => {
    return properties
      .filter((prop) => {
        // Search Term (in title, description, or landmark)
        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          const matchTitle = prop.title.toLowerCase().includes(term);
          const matchDesc = prop.description?.toLowerCase().includes(term);
          const matchCity = prop.address?.city?.toLowerCase().includes(term);
          const matchLandmark = prop.address?.landmark?.toLowerCase().includes(term);
          if (!matchTitle && !matchDesc && !matchCity && !matchLandmark) return false;
        }

        // City
        if (selectedCity !== 'All Cities' && prop.address?.city?.toLowerCase() !== selectedCity.toLowerCase()) {
          return false;
        }

        // Gender
        if (selectedGender !== 'All' && prop.genderPreference?.toLowerCase() !== selectedGender.toLowerCase()) {
          return false;
        }

        // Property Type
        if (selectedPropertyType !== 'All' && prop.propertyType?.toLowerCase() !== selectedPropertyType.toLowerCase()) {
          return false;
        }

        // Sharing Type
        if (selectedSharing !== 'All') {
          const hasSharing = prop.rooms?.some((r) => r.sharingType?.toLowerCase() === selectedSharing.toLowerCase());
          if (!hasSharing) return false;
        }

        // Max Price
        const price = prop.pricing?.startingPrice || 0;
        if (price > maxPrice) return false;

        // Virtual Tour
        if (onlyVirtualTour && !prop.virtualTour?.panoramaUrl) {
          return false;
        }

        // Selected Amenities
        if (selectedAmenities.length > 0) {
          const propAmenities = prop.amenities || [];
          const matchesAll = selectedAmenities.every((amenity) =>
            propAmenities.some((pa) => pa.toLowerCase().includes(amenity.toLowerCase()))
          );
          if (!matchesAll) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') {
          return (a.pricing?.startingPrice || 0) - (b.pricing?.startingPrice || 0);
        }
        if (sortBy === 'price_desc') {
          return (b.pricing?.startingPrice || 0) - (a.pricing?.startingPrice || 0);
        }
        if (sortBy === 'rating') {
          return (b.rating || 0) - (a.rating || 0);
        }
        return 0; // recommended
      });
  }, [
    properties,
    searchTerm,
    selectedCity,
    selectedGender,
    selectedPropertyType,
    selectedSharing,
    maxPrice,
    onlyVirtualTour,
    selectedAmenities,
    sortBy,
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Search Header Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by PG name, landmark, college..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        {/* Quick Filters & Sorter */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 bg-slate-50"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-600" />
            <span>Filters</span>
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
            >
              <option value="recommended">Recommended</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <button
            onClick={resetFilters}
            title="Reset All Filters"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Layout: Filters Sidebar + Property Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Filters Sidebar */}
        <aside
          className={`${
            mobileFilterOpen ? 'block' : 'hidden'
          } lg:block bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-6 sticky top-24`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-600" />
              <h3 className="font-bold text-slate-900 text-sm">Refine Results</h3>
            </div>
            <button
              onClick={resetFilters}
              className="text-[11px] font-semibold text-brand-600 hover:text-brand-800"
            >
              Clear All
            </button>
          </div>

          {/* 360 Virtual Tour Switch */}
          <div className="bg-brand-50/60 p-3 rounded-xl border border-brand-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-600" />
              <span className="text-xs font-bold text-brand-900">360° Virtual Tour Only</span>
            </div>
            <input
              type="checkbox"
              checked={onlyVirtualTour}
              onChange={(e) => setOnlyVirtualTour(e.target.checked)}
              className="w-4 h-4 text-brand-600 rounded focus:ring-brand-500 cursor-pointer"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-2">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Gender Preference */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
              Gender Preference
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {GENDER_OPTIONS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGender(g)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    selectedGender === g
                      ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Max Budget Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
              <span>Max Monthly Rent</span>
              <span className="text-brand-600 font-extrabold">₹{maxPrice.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="25000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-brand-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹5,000</span>
              <span>₹15,000</span>
              <span>₹25,000+</span>
            </div>
          </div>

          {/* Room Sharing Type */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
              Room Sharing
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {SHARING_TYPES.map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedSharing(st)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    selectedSharing === st
                      ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Checklist */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
              Key Amenities
            </label>
            <div className="space-y-1.5">
              {AMENITIES_LIST.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:text-slate-900"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                    className="rounded text-brand-600 focus:ring-brand-500"
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Listings Grid */}
        <main className="lg:col-span-3 space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-800">{filteredProperties.length}</strong> stays matching your criteria
            </span>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Building className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No stays matched your criteria</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5">
                Try widening your price range, toggling off specific amenities, or clearing your search term.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property._id || property.id} property={property} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
