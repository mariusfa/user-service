import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDb', {useNewUrlParser: true});

export default mongoose;