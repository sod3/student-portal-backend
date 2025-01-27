import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatStudentSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  studentName: String,
  studentAvatar: String,
  lastSeen: Date,
  studentEmail: String,
  messages: [{
    sender: { type: String, enum: ['them', 'you'], required: true },
    messageTime: { type: Date, default: Date.now },
    messageText: String,
    messageSentTime: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model('ChatStudent', chatStudentSchema);

