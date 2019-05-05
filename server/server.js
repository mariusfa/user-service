import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from  './routes/user.server.routes';
import adminRoutes from './routes/admin.server.routes';
import { registerAdmin } from './controllers/admin.server.controller';
import mongoose from 'mongoose';

process.on('SIGINT', function() {
    console.log("SIGINT received. Shutting down");
    process.exit();
});

process.on('SIGTERM', function() {
    console.log("SIGTERM received. Graceful shutdown");
    process.exit();
});

let app = express();

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_URL = "mongodb://" + DB_HOST + ":27017/UserDb"
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {useNewUrlParser: true}, (error) => {
    if (error) {
        console.log("Could not connect to mongodb: " + DB_URL)
        process.exit();
    }
    registerAdmin();
});

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello world'));

userRoutes(app);
adminRoutes(app);

app.listen(port);

console.log('User service running at: ' + port);

// This is just for running tests
export default app;