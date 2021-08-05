// ABOUT USER API

import express from 'express';
import routes from '../routes.js';
import {
    postLogin,
    postRegister,
    logout
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post(routes.login, postLogin);
userRouter.post(routes.register, postRegister);
userRouter.post(routes.logout, logout);

export default userRouter;