// models/Attendance.js
import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },

  date: { type: Date, required: true },

  day: { type: String, required: true },

  status: { type: String, enum: ['present', 'absent', 'late'], required: true },

  remarks: String,

  teacherName: String,
  
  courseNames: [String]
}, { timestamps: true });

export default model('Attendance', attendanceSchema);