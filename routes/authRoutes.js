import express from 'express';
import { signup, login, forgetPassword } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/forget-password', forgetPassword);

export default authRouter;
