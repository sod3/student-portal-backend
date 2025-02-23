import express from 'express';
import {
  createAnnouncement,
  editAnnouncement,
  viewAnnouncements,
  deleteAnnouncement,
  filterAnnouncementsByDate,
  getStudentAnnouncements,
  sendAnnouncementEmail,
  getTeacherAnnouncements,
} from '../controllers/announcementsController.js';
//import auth from '../middleware/auth.js';

const announcementsRouter = express.Router();

announcementsRouter.post('/admin', createAnnouncement);
announcementsRouter.put('/admin/:id', editAnnouncement);
announcementsRouter.get('/admin', viewAnnouncements);
announcementsRouter.delete('/admin/:id', deleteAnnouncement);
announcementsRouter.get('/admin/filter', filterAnnouncementsByDate);
announcementsRouter.get('/student', getStudentAnnouncements);
announcementsRouter.post('/email', sendAnnouncementEmail);
announcementsRouter.get('/teacher', getTeacherAnnouncements);

export default announcementsRouter;
