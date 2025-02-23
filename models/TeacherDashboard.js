import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherDashboardSchema = new Schema({
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Additional teacher-specific fields
  batchStudentsCount: { type: Number, default: 0 },
  studentGrades: [{
    studentId: { type: Schema.Types.ObjectId, ref: 'Student' },
    grade: { type: String } // adjust type as needed (could be Number)
  }],

  // Batch and course details
  batchId: { type: Schema.Types.ObjectId, ref: 'Batch', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },

  // Class scheduling
  classTime: Date,
  classDate: Date,

  // Student messages/chats
  studentChats: [{
    studentId: { type: Schema.Types.ObjectId, ref: 'Student' },
    studentAvatar: String,
    messageText: String,
    messageTime: Date,
    messageDate: Date
  }],

  // Announcements
  announcements: [{
    announcementSubject: String,
    announcementText: String,
    announcementDate: Date,
    announcementTime: Date
  }]
}, { timestamps: true });

export default mongoose.model('TeacherDashboard', teacherDashboardSchema);
