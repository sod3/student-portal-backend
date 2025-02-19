import express from 'express';
import { postAdminEvent, getStudentEvent, getClassTimetable } from '../controllers/calendarController.js';
import auth from '../middleware/auth.js';

const calendarRouter = express.Router();

calendarRouter.post('/admin/event',  postAdminEvent);
calendarRouter.get('/student/event',  getStudentEvent);
calendarRouter.get('/timetable', getClassTimetable);
export default calendarRouter;