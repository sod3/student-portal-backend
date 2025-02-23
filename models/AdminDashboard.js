import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminDashboardSchema = new Schema({
  // Overall statistics for the admin portal
  totalStudentsCount: { type: Number, default: 0 },
  pendingFeePayments: { type: Number, default: 0 },
  totalPresentStudents: { type: Number, default: 0 },
  
  // Course and batch references
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  batchId: { type: Schema.Types.ObjectId, ref: 'Batch', required: true },
  
  // Class scheduling
  classTime: Date,
  classDate: Date,

  // Student messages/chats (similar structure to the teacher dashboard)
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

export default mongoose.model('AdminDashboard', adminDashboardSchema);
