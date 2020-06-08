import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';


const app = express();
// set cors dev
app.use(cors());
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));
// parse application/json
app.use(json());
app.listen(9000, () => {});
app.get('/test1', (req, res) => res.send('ok'));
app.get('/test2', (req, res) => res.send('ok2'));
app.get('/test/test1', (req, res) => res.send('ok22'));
