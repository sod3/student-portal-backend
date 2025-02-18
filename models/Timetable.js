import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  instructor: { type: String, required: true },
  day: { type: String, required: true }, // e.g., Monday, Tuesday
  startTime: { type: String, required: true }, // 09:00 AM
  endTime: { type: String, required: true },   // 10:30 AM
  location: { type: String, required: true }, // Room number or online link
}, { timestamps: true });

const Timetable = mongoose.model('Timetable', timetableSchema);
export default Timetable;
