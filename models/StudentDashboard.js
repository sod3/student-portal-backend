// models/StudentDashboard.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentDashboardSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  coursesAttendance: [{
    course_id: Schema.Types.ObjectId,
    total_courses: Number
  }],
  overallSemesterAttendance: {
    semester: String,
    total_classes_attended: Number,
    total_classes: Number,
    attendance_percentage: Number
  },
  coursesNames: [String],
  schedule: [{
    courseName: String,
    schedule: String 
  }],
  coursesWeightage: [{
    courseName: String,
    weightage: Number
  }],
  calendar: [Date],
  cgpa: {
    marksObtained: [Number],
    overallProgress: Number
  },
  announcements: [{
    event_id: Schema.Types.ObjectId,
    event_name: String,
    event_date: Date,
    description: String,
    event_type: String,
    student_id: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
}, { timestamps: true });

export default mongoose.model('StudentDashboard', studentDashboardSchema);

