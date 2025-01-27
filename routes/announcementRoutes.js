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
import auth from '../middleware/auth.js';

const announcementsRouter = express.Router();

announcementsRouter.post('/admin', auth, createAnnouncement);
announcementsRouter.put('/admin/:id', auth, editAnnouncement);
announcementsRouter.get('/admin', auth, viewAnnouncements);
announcementsRouter.delete('/admin/:id', auth, deleteAnnouncement);
announcementsRouter.get('/admin/filter', auth, filterAnnouncementsByDate);
announcementsRouter.get('/student', auth, getStudentAnnouncements);
announcementsRouter.post('/email', auth, sendAnnouncementEmail);
announcementsRouter.get('/teacher', auth, getTeacherAnnouncements);

export default announcementsRouter;
