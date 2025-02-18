import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  color: { type: String, default: '#991D20' }, // Default color for events
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
