
import { Router } from 'express';
import { login, logout, register } from './user.controller.js';
import { cheackEmailExist, cheackUser } from '../../middleware/cheackEmailExist.js';

const userRouter = Router();

userRouter.post('/register', cheackEmailExist, register);
userRouter.post('/login', cheackUser, login);
userRouter.patch('/logout/:id', logout);
export default userRouter;
