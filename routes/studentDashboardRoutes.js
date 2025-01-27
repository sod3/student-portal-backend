import express from 'express';
import {
  getCoursesAttendance,
  getSemesterAttendance,
  getCoursesSchedule,
  getCoursesWeightage,
  getMonthlyCalendar,
  getMarksProgress,
  getAnnouncements,
} from '../controllers/dashboardController.js';
import auth from '../middleware/auth.js';

const dashboardRouter = express.Router();

dashboardRouter.get('/attendance/courses', auth, getCoursesAttendance);
dashboardRouter.get('/attendance/semester', auth, getSemesterAttendance);
dashboardRouter.get('/courses/schedule', auth, getCoursesSchedule);
dashboardRouter.get('/courses/weightage', auth, getCoursesWeightage);
dashboardRouter.get('/calendar/monthly', auth, getMonthlyCalendar);
dashboardRouter.get('/marks/progress', auth, getMarksProgress);
dashboardRouter.get('/announcements', auth, getAnnouncements);

export default dashboardRouter;