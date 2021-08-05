import express from 'express';
import routes from '../routes.js';

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
    res.send('home');
});

export default globalRouter;