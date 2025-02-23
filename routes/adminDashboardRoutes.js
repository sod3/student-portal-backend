import express from 'express';
import {
  getDashboardStats,
  getCoursesScheduleAdmin,
  getAnnouncementsAdmin,
  getStudentChatsAdmin,
} from '../controllers/AdashboardController.js';
import auth from '../middleware/auth.js';

const adminDashboardRouter = express.Router();

// Get overall dashboard statistics
adminDashboardRouter.get('/stats', auth, getDashboardStats);

// Get course schedule data
adminDashboardRouter.get('/courses/schedule', auth, getCoursesScheduleAdmin);

// Get announcements
adminDashboardRouter.get('/announcements', auth, getAnnouncementsAdmin);

// Optional: Get student chats if needed
adminDashboardRouter.get('/chats', auth, getStudentChatsAdmin);

export default adminDashboardRouter;
