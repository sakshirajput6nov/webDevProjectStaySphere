import mongoose from 'mongoose';

const bedSchema = new mongoose.Schema({
  bedId: {
    type: String,
    required: true,
  },
  bedNumber: {
    type: String,
    required: true,
  },
  isOccupied: {
    type: Boolean,
    default: false,
  },
  tenant: {
    name: String,
    college: String,
  },
});

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  sharingType: {
    type: String,
    enum: ['Single', 'Double', 'Triple', 'Four'],
    default: 'Double',
  },
  floor: {
    type: Number,
    default: 1,
  },
  rentPerBed: {
    type: Number,
    required: true,
  },
  hasBalcony: {
    type: Boolean,
    default: false,
  },
  hasAttachedBathroom: {
    type: Boolean,
    default: true,
  },
  beds: [bedSchema],
});

const propertySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      sparse: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide property title'],
      trim: true,
    },
    tagline: String,
    description: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ['PG', 'Flat'],
      default: 'PG',
    },
    genderPreference: {
      type: String,
      enum: ['Boys', 'Girls', 'Unisex'],
      default: 'Unisex',
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, default: 'Karnataka' },
      pincode: { type: String, default: '560001' },
      landmark: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    pricing: {
      startingPrice: { type: Number, required: true },
      securityDeposit: { type: Number, required: true },
      maintenanceFee: { type: Number, default: 1000 },
      electricityRule: { type: String, default: 'Metered' },
      noticePeriodDays: { type: Number, default: 30 },
    },
    images: [{ type: String }],
    gallery: [
      {
        url: { type: String, required: true },
        category: { type: String, default: 'other' },
        caption: { type: String, default: '' },
      },
    ],
    virtualTour: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    amenities: [{ type: String }],
    foodIncluded: {
      type: Boolean,
      default: false,
    },
    foodPlans: [
      {
        id: String,
        name: String,
        price: Number,
        description: String,
      },
    ],
    rating: {
      type: Number,
      default: 4.8,
    },
    reviewCount: {
      type: Number,
      default: 12,
    },
    owner: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      name: String,
      phone: String,
      email: String,
      verified: {
        type: Boolean,
        default: true,
      },
    },
    rooms: [roomSchema],
  },
  {
    timestamps: true,
  }
);

// Indexes for fast searching and filtering
propertySchema.index({ 'address.city': 1, 'pricing.startingPrice': 1 });
propertySchema.index({ genderPreference: 1, propertyType: 1 });

const Property = mongoose.model('Property', propertySchema);
export default Property;
