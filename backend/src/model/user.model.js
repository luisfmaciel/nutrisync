import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true
  }
}, { timestamps: true });

userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if(err) return next(err);
    this.password = hash;
    next();
  });
});

const Users = mongoose.model('Users', userSchema);

export default Users;
