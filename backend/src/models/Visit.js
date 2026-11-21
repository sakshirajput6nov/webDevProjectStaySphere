import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema(
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    visitorName: {
      type: String,
      required: true,
    },
    visitorPhone: {
      type: String,
      required: true,
    },
    visitDate: {
      type: String,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    notes: String,
    status: {
      type: String,
      enum: ['Confirmed', 'Completed', 'Cancelled'],
      default: 'Confirmed',
    },
  },
  {
    timestamps: true,
  }
);

const Visit = mongoose.model('Visit', visitSchema);
export default Visit;
