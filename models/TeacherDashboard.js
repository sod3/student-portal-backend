// models/TeacherDashboard.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherDashboardSchema = new Schema({
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  batchAttendance: [{
    batchId: Schema.Types.ObjectId,
    attendanceCount: Number
  }],
  courses: [{
    courseName: String,
    upcomingLessons: [String]
  }],
  classTime: Date,
  classDate: Date,
  batchId: Schema.Types.ObjectId,
  program: String,
  studentChats: [{
    studentId: Schema.Types.ObjectId,
    messageText: String,
    messageTime: Date,
    messageDate: Date
  }],
  announcements: [{
    subject: String,
    description: String,
    announcementDate: Date,
    announcementTime: Date
  }]
}, { timestamps: true });

export default mongoose.model('TeacherDashboard', teacherDashboardSchema);

