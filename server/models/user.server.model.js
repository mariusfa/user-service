import bcrypt from 'bcrypt';
import mongoose from 'mongoose';


const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    username_lower: {
        type: String,
        required: true,
        index: true
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = function (passord) {
    return bcrypt.compareSync(passord, this.hash_password);
}


export default mongoose.model('User', UserSchema);
