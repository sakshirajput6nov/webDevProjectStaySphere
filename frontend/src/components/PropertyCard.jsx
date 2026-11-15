import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  MapPin,
  Star,
  Bed,
  Wifi,
  Utensils,
  Wind,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function PropertyCard({ property }) {
  // Count available beds across all rooms
  const totalBeds = property.rooms?.reduce((acc, r) => acc + (r.beds?.length || 0), 0) || 0;
  const availableBeds = property.rooms?.reduce(
    (acc, r) => acc + (r.beds?.filter((b) => !b.isOccupied).length || 0),
    0
  ) || 0;

  const hasVirtualTour = !!property.virtualTour?.panoramaUrl;

  const getGenderBadge = (gender) => {
    switch (gender?.toLowerCase()) {
      case 'girls':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'boys':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={property.images?.[0] || 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* 360 Virtual Tour Badge */}
        {hasVirtualTour && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg">
            <Compass className="w-3.5 h-3.5 text-brand-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>360° TOUR</span>
          </div>
        )}

        {/* Gender & Type Badges */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <span
            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-sm backdrop-blur-md ${getGenderBadge(
              property.genderPreference
            )}`}
          >
            {property.genderPreference}
          </span>
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 text-slate-800 border border-slate-200 shadow-sm backdrop-blur-md">
            {property.propertyType}
          </span>
        </div>

        {/* Floating Price Pill */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl shadow-md border border-slate-100">
          <span className="text-xs text-slate-500 font-medium">Starts from </span>
          <span className="text-base font-extrabold text-slate-900">
            ₹{(property.pricing?.startingPrice || 8000).toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-slate-500">/mo</span>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-bold text-slate-800">{property.rating || 4.8}</span>
              <span className="text-slate-600">({property.reviewCount || 24} reviews)</span>
            </div>

            {/* Bed Vacancy Pill */}
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{availableBeds} beds vacant</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors line-clamp-1 mb-1">
            {property.title}
          </h3>

          {/* Location */}
          <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
            <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{property.address?.landmark || `${property.address?.street}, ${property.address?.city}`}</span>
          </p>

          {/* Amenities Mini List */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.amenities?.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
              >
                {amenity}
              </span>
            ))}
            {property.foodIncluded && (
              <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md font-medium border border-amber-200">
                Meals Included
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-600">Zero Brokerage</span>
          <Link
            to={`/properties/${property._id || property.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 group-hover:translate-x-0.5 transition-all"
          >
            <span>Explore & Book</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
