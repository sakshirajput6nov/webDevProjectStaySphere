import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Compass,
  MapPin,
  Star,
  ShieldCheck,
  Bed,
  CheckCircle2,
  Calendar,
  Share2,
  Heart,
  UserCheck,
  Phone,
  Mail,
  Zap,
  Info,
  ArrowLeft,
  Eye,
  Camera,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Image as ImageIcon
} from 'lucide-react';
import PannellumViewer from '../components/PannellumViewer';
import BedAvailabilityGrid from '../components/BedAvailabilityGrid';
import RentCalculator from '../components/RentCalculator';
import ScheduleVisitModal from '../components/ScheduleVisitModal';
import BookingModal from '../components/BookingModal';
import { MOCK_PROPERTIES } from '../data/mockProperties';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function PropertyDetail() {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('360tour'); // '360tour' or 'gallery'
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  // Selected Room and Bed state for booking
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedBed, setSelectedBed] = useState(null);
  const [calculatorPlan, setCalculatorPlan] = useState(null);

  // Modals
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  // Reset state on id change and fetch property
  useEffect(() => {
    setSelectedImage(0);
    setActiveCategory('all');
    setSelectedRoom(null);
    setSelectedBed(null);
    setIsSaved(false);
    setIsLightboxOpen(false);
    setImgLoading(true);
    setImgError(false);

    const fetchProperty = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/properties/${id}`);
        if (res.data) {
          setProperty(res.data);
          // Default tab: if 360 tour is configured, use 360tour, otherwise switch to gallery
          if (!res.data.virtualTour || !res.data.virtualTour.panoramaUrl) {
            setActiveTab('gallery');
          } else {
            setActiveTab('360tour');
          }

          const firstVacantRoom = res.data.rooms?.find((r) => r.beds?.some((b) => !b.isOccupied));
          if (firstVacantRoom) {
            setSelectedRoom(firstVacantRoom);
            const firstVacantBed = firstVacantRoom.beds?.find((b) => !b.isOccupied);
            if (firstVacantBed) setSelectedBed(firstVacantBed);
          }
          return;
        }
      } catch (err) {
        // Fallback to local mock data
        const found = MOCK_PROPERTIES.find((p) => p._id === id || p.id === id) || MOCK_PROPERTIES[0];
        setProperty(found);
        if (!found.virtualTour || !found.virtualTour.panoramaUrl) {
          setActiveTab('gallery');
        } else {
          setActiveTab('360tour');
        }
        const firstVacantRoom = found.rooms?.find((r) => r.beds?.some((b) => !b.isOccupied));
        if (firstVacantRoom) {
          setSelectedRoom(firstVacantRoom);
          const firstVacantBed = firstVacantRoom.beds?.find((b) => !b.isOccupied);
          if (firstVacantBed) setSelectedBed(firstVacantBed);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Sync saved status with backend if authenticated
  useEffect(() => {
    if (isAuthenticated && property) {
      api.get('/auth/saved-properties')
        .then((res) => {
          const list = Array.isArray(res.data) ? res.data : (res.data?.savedProperties || []);
          const curId = (property._id || property.id)?.toString();
          const match = list.some((p) => (p._id?.toString() === curId || p.id?.toString() === curId));
          setIsSaved(match);
        })
        .catch(() => {});
    }
  }, [isAuthenticated, property]);

  const handleToggleSave = async () => {
    if (!isAuthenticated) {
      alert('Please log in as a student to save this property to your account.');
      return;
    }
    if (!property) return;
    try {
      setSaveLoading(true);
      const propId = property._id || property.id;
      const res = await api.post(`/auth/saved-properties/${propId}`);
      if (res.data && typeof res.data.isSaved === 'boolean') {
        setIsSaved(res.data.isSaved);
      } else {
        setIsSaved(!isSaved);
      }
    } catch (err) {
      console.error('Failed to toggle saved property:', err);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleSelectBed = (room, bed) => {
    setSelectedRoom(room);
    setSelectedBed(bed);
  };

  const handleProceedToBook = (calculatedPlan) => {
    setCalculatorPlan(calculatedPlan);
    setIsBookingModalOpen(true);
  };

  // Determine gallery images and available categories
  const galleryItems = property?.gallery && property.gallery.length > 0
    ? property.gallery
    : (property?.images || []).map((img, i) => ({
        url: img,
        category: i === 0 ? 'bedroom' : i === 1 ? 'living' : 'washroom',
        caption: `Property View ${i + 1}`,
      }));

  const uniqueCategories = ['all', ...Array.from(new Set(galleryItems.map((g) => g.category || 'other')))];

  const filteredGallery = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((g) => (g.category || 'other').toLowerCase() === activeCategory.toLowerCase());

  const currentGalleryItem = filteredGallery[selectedImage] || filteredGallery[0] || galleryItems[0];

  const handlePrevImage = useCallback(() => {
    if (filteredGallery.length <= 1) return;
    setImgLoading(true);
    setImgError(false);
    setSelectedImage((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  }, [filteredGallery.length]);

  const handleNextImage = useCallback(() => {
    if (filteredGallery.length <= 1) return;
    setImgLoading(true);
    setImgError(false);
    setSelectedImage((prev) => (prev + 1) % filteredGallery.length);
  }, [filteredGallery.length]);

  // Keyboard navigation for gallery and lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab === 'gallery' || isLightboxOpen) {
        if (e.key === 'ArrowLeft') handlePrevImage();
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'Escape' && isLightboxOpen) setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, isLightboxOpen, handlePrevImage, handleNextImage]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-10 h-10 border-4 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm font-semibold text-slate-600">Loading stay details & 360° environment...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Property Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The stay you are looking for does not exist or was unlisted.</p>
        <Link to="/properties" className="px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold text-xs">
          Browse All Stays
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Link & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Stays</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleSave}
            disabled={saveLoading}
            className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isSaved
                ? 'bg-red-50 text-red-600 border-red-200 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{isSaved ? 'Saved in Account' : 'Save Property'}</span>
          </button>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Property link copied to clipboard!');
              }
            }}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Property Title & Summary Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2.5 mb-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-100 text-brand-800 border border-brand-200">
            {property.propertyType}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
            {property.genderPreference} Preference
          </span>
          <div className="flex items-center gap-1 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{property.rating || 4.8}</span>
            <span className="text-slate-500 font-normal">({property.reviewCount || 34} verified reviews)</span>
          </div>
          {property.virtualTour?.panoramaUrl && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Verified 360° Tour
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {property.title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 mt-2">
          <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>
            {property.address?.street}, {property.address?.city}, {property.address?.state} - {property.address?.pincode} ({property.address?.landmark})
          </span>
        </p>
      </div>

      {/* Media Viewer Section (360° Tour or Categorized Photos Tabs) */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        {/* Main Tab Switcher */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('360tour')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === '360tour'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Interactive 360° Tour</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'gallery'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Categorized Gallery ({galleryItems.length} Photos)</span>
            </button>
          </div>

          <span className="hidden sm:inline-block text-xs font-medium text-slate-400">
            {activeTab === '360tour' ? 'Pannellum Virtual Reality Engine' : 'High-Resolution Categorized Gallery'}
          </span>
        </div>

        {/* Tab 1: 360° Virtual Tour */}
        {activeTab === '360tour' && (
          <div>
            {property.virtualTour && property.virtualTour.panoramaUrl ? (
              <PannellumViewer
                panoramaUrl={property.virtualTour.panoramaUrl}
                scenes={property.virtualTour.scenes}
                title={property.title}
                previewUrl={property.virtualTour.previewUrl || property.images?.[0]}
              />
            ) : (
              <div className="w-full h-[380px] sm:h-[440px] rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 flex flex-col items-center justify-center p-8 text-center text-white space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                  <Compass className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-lg font-bold text-white">360° Virtual Tour Not Configured</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                  A genuine equirectangular panorama has not been mapped for this listing. High-definition room and amenity photos are available in the gallery.
                </p>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="mt-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold shadow-md transition-colors flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  <span>View Photo Gallery ({galleryItems.length} Photos)</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Categorized Photo Gallery */}
        {activeTab === 'gallery' && (
          <div className="space-y-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 items-center pb-1">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                Filter by Space:
              </span>
              {uniqueCategories.map((cat) => {
                const count = cat === 'all'
                  ? galleryItems.length
                  : galleryItems.filter((g) => (g.category || 'other').toLowerCase() === cat.toLowerCase()).length;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedImage(0);
                      setImgLoading(true);
                      setImgError(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                      activeCategory.toLowerCase() === cat.toLowerCase()
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Featured Image Display with Previous / Next Controls and Lightbox Zoom */}
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 group">
              {/* Image Loading Placeholder */}
              {imgLoading && (
                <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center text-slate-500 text-xs">
                  <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Main Image with error fallback */}
              {imgError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-slate-900">
                  <ImageIcon className="w-12 h-12 text-slate-600 mb-2" />
                  <p className="text-xs font-semibold">Image preview currently unavailable</p>
                </div>
              ) : (
                <img
                  src={currentGalleryItem?.url || property.images?.[0]}
                  alt={currentGalleryItem?.caption || property.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imgLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => setImgLoading(false)}
                  onError={() => {
                    setImgLoading(false);
                    setImgError(true);
                  }}
                  loading="lazy"
                />
              )}

              {/* Previous Button Overlay */}
              {filteredGallery.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 shadow-lg"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Button Overlay */}
              {filteredGallery.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 shadow-lg"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {/* Enlarge / Fullscreen Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 hover:bg-black/85 text-white backdrop-blur-sm transition-all opacity-80 hover:opacity-100 flex items-center gap-1.5 text-xs font-medium"
                title="Enlarge photograph"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Enlarge</span>
              </button>

              {/* Caption and Space Badge Overlay */}
              {currentGalleryItem && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1">
                      {currentGalleryItem.category || 'Space'}
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white drop-shadow-sm">
                      {currentGalleryItem.caption || property.title}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-300 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {selectedImage + 1} of {filteredGallery.length}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {filteredGallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(idx);
                    setImgLoading(true);
                    setImgError(false);
                  }}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-brand-600 ring-2 ring-brand-300 scale-105'
                      : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.caption || 'thumbnail'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-white font-medium text-center truncate px-1">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-xs font-bold uppercase">
                {currentGalleryItem?.category}
              </span>
              <span className="text-sm font-semibold text-slate-200">
                {currentGalleryItem?.caption || property.title}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                {selectedImage + 1} / {filteredGallery.length}
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Centered Image with Navigation */}
          <div className="relative flex-1 flex items-center justify-center p-4">
            {filteredGallery.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img
              src={currentGalleryItem?.url}
              alt={currentGalleryItem?.caption || property.title}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />

            {filteredGallery.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails in Lightbox */}
          <div className="flex gap-2 justify-center overflow-x-auto pt-3 border-t border-white/10">
            {filteredGallery.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  selectedImage === idx ? 'border-brand-500 scale-105' : 'border-white/20 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={item.url} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Grid: Details + Interactive Calculator Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Specs, Bed Grid, Amenities, Owner */}
        <div className="lg:col-span-7 space-y-8">
          {/* Overview & Description */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-slate-900">About this Property</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Security Deposit</span>
                <span className="text-xs font-bold text-slate-800">
                  ₹{property.pricing?.securityDeposit?.toLocaleString('en-IN')} (Refundable)
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Notice Period</span>
                <span className="text-xs font-bold text-slate-800">{property.pricing?.noticePeriodDays || 30} Days</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Electricity</span>
                <span className="text-xs font-bold text-slate-800">{property.pricing?.electricityRule || 'Per meter'}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Brokerage</span>
                <span className="text-xs font-bold text-emerald-600">₹0 (Zero)</span>
              </div>
            </div>
          </div>

          {/* Room and Individual Bed Availability Grid (Requirement #6) */}
          <BedAvailabilityGrid
            rooms={property.rooms}
            selectedBedId={selectedBed?.bedId}
            onSelectBed={handleSelectBed}
          />

          {/* Amenities Checklist */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Furnishings & Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {property.amenities?.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Host Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 font-bold text-lg flex items-center justify-center">
                {property.owner?.name?.[0] || 'O'}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-slate-900 text-sm">{property.owner?.name || 'Verified Property Manager'}</h4>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-xs text-slate-500">StaySphere Certified Host • 100% Response Rate</p>
              </div>
            </div>

            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="px-4 py-2.5 rounded-xl border border-brand-600 text-brand-600 hover:bg-brand-50 text-xs font-bold transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Free Visit</span>
            </button>
          </div>
        </div>

        {/* Right Col: Dynamic Rent Calculator & Quick Action Widget */}
        <div className="lg:col-span-5 space-y-6 sticky top-24">
          {/* Dynamic Rent Calculator (Requirement #7) */}
          <RentCalculator
            property={property}
            selectedRoom={selectedRoom}
            selectedBed={selectedBed}
            onProceedToBook={handleProceedToBook}
          />

          {/* Quick Schedule Visit Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm">Want to inspect physically?</h4>
              <p className="text-xs text-slate-400">Schedule an in-person visit with the verified owner.</p>
            </div>
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors whitespace-nowrap"
            >
              Book Visit
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal
        property={property}
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
        onVisitScheduled={(visit) => {
          // visit scheduled callback
        }}
      />

      {/* Online Bed Booking Modal */}
      <BookingModal
        property={property}
        selectedRoom={selectedRoom}
        selectedBed={selectedBed}
        calculatorPlan={calculatorPlan}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onBookingSuccess={(booking) => {
          // booking confirmed callback
        }}
      />
    </div>
  );
}
