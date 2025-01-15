// models/Announcement.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const announcementSchema = new Schema({
  announcementBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  time: { type: Date, default: Date.now },
  text: String,
  image: String,
  files: [String] 
}, { timestamps: true });

export default mongoose.model('Announcement', announcementSchema);

