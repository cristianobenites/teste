// Ong schema for mongoose
import mongoose from 'mongoose';

const leaderSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  email: { type: String, required: [true, 'Email is required'] },
  telephone: { type: String },
  name: {type: String},
  password: {type: String},


}, { versionKey: false });

const leader = mongoose.model('leaderss', leaderSchema);

export default leader;
