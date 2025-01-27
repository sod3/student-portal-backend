import express from 'express';
import { postAdminEvent, getStudentEvent, getClassTimetable } from '../controllers/calendarController.js';
import auth from '../middleware/auth.js';

const calendarRouter = express.Router();

calendarRouter.post('/admin/event', auth, postAdminEvent);
calendarRouter.get('/student/event', auth, getStudentEvent);
calendarRouter.get('/timetable', auth, getClassTimetable);

export default calendarRouter;