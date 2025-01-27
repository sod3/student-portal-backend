import mongoose from 'mongoose';
const { Schema } = mongoose;

const examScheduleSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  schedulesByMonth: {
    days: [Number],
    months: [String],
    subjects: [String],
    times: [String]
  }
}, { timestamps: true });

export default mongoose.model('ExamSchedule', examScheduleSchema);

