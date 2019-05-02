import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from  './routes/user.server.routes';
import mongoose from 'mongoose';

process.on('SIGINT', function() {
    process.exit();
});

let app = express();

const DB_HOST = process.env.DB_HOST | 'localhost';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + DB_HOST + '/UserDb', {useNewUrlParser: true});

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello world'));

userRoutes(app);

app.listen(port);

console.log('User service running at: ' + port);

