import express from "express";
import passport from 'passport';
import cookieParser from "cookie-parser";
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from "connect-mongo";

import ConncetDB from "./db.js";
import config from './config/key.js';
import routes from './routes.js';
import userRouter from './routers/userRouter.js';
import globalRouter from "./routers/globalRouter.js";

const app = express();
const port = 1234;

const mongoURI = config.mongoURI;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_ID));
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI })
}))

// 쿠키파서, 세션 미들웨어 다음에 passport 미들웨어 사용(필수)
app.use(passport.initialize());
app.use(passport.session());

app.use(routes.api, userRouter);
app.use('/', globalRouter);

// mongodb connection
ConncetDB();

// listen handler
app.listen(port, () => {
    console.log("listening at port:", port);
});