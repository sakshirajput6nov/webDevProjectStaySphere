import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
    propertyTitle: {
      type: String,
      required: true,
    },
    propertyAddress: String,
    roomId: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
    bedId: {
      type: String,
      required: true,
    },
    bedNumber: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    studentName: String,
    studentEmail: String,
    studentPhone: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    durationMonths: {
      type: Number,
      default: 6,
    },
    monthlyRent: {
      type: Number,
      required: true,
    },
    securityDeposit: {
      type: Number,
      required: true,
    },
    maintenanceFee: {
      type: Number,
      default: 1000,
    },
    totalPaid: {
      type: Number,
      required: true,
    },
    emergencyContact: String,
    collegeOrCompany: String,
    status: {
      type: String,
      enum: ['Confirmed', 'Pending', 'Cancelled'],
      default: 'Confirmed',
    },
    bookingReference: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for fast overlapping bed search
bookingSchema.index({ propertyId: 1, bedId: 1, status: 1 });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
