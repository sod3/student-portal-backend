// routes/chatRoutes.js
import express from 'express';
import {
  getAllTeachers,
  getAllStudents,
  getChatMessages,
  sendMessage,
} from '../controllers/chatController.js';
import auth from '../middleware/auth.js';

const chatRouter = express.Router();

chatRouter.get('/teachers', getAllTeachers); // Fetch list of teachers
chatRouter.get('/students', getAllStudents); // Fetch list of students

chatRouter.get('/messages/:contactId', getChatMessages); // Fetch messages for a specific contact
chatRouter.post('/messages/:contactId', sendMessage); // Send a message to a contact

export default chatRouter;