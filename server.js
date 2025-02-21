import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import chatRouter from './routes/chatRoutes.js';
import feesRouter from './routes/feeRoutes.js';
import dashboardRouter from './routes/studentDashboardRoutes.js';
import calendarRouter from './routes/calenderRoutes.js';
import recordingsRouter from './routes/recordingRoutes.js';
import jobsBootcampsRouter from './routes/jobBootcampRoutes.js';
import announcementsRouter from './routes/announcementRoutes.js';
import gradesRouter from './routes/gradeRoutes.js';
import transcriptRouter from './routes/transcriptRoutes.js';
import authRouter from './routes/authRoutes.js';
import classScheduleRouter from './routes/classScheduleRoutes.js';
import progressReportRouter from './routes/progressReportRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Routes
app.use('/api/chat', chatRouter);
app.use('/api/fees', feesRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/recordings', recordingsRouter);
app.use('/api/jobs-bootcamps', jobsBootcampsRouter);
app.use('/api/announcements', announcementsRouter);
app.use('/api/grades', gradesRouter);
app.use('/api/transcript', transcriptRouter);
app.use('/api/auth', authRouter);
app.use('/api/class-schedule', classScheduleRouter);
app.use('/api/progress-report', progressReportRouter);
// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});