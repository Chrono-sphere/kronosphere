import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: [true, 'email is a required field.'] },
    password: { type: String, required: [true, 'password is a required field.'] }
});

UserSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

mongoose.model('user', UserSchema);
