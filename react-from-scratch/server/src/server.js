import path from 'path';
import express from 'express';
import cors from 'cors';
import apiRouter from './routes';
import stateRouting from './middleware/routing.mw';


const CLIENT_PATH = path.join(__dirname, '../../client');

let app = express();
app.use(cors())
app.use(express.static(CLIENT_PATH));
app.use(express.json());

app.use('/api', apiRouter);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
