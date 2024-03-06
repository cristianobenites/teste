// Ong schema for mongoose
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  email: { type: String, required: [true, 'Email is required'] },
  password: {type: String},
  profile: {type: String}

}, { versionKey: false });

const user = mongoose.model('users', userSchema);

export default user;
