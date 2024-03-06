// Ong schema for mongoose
import mongoose from 'mongoose';

const workshopSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String},
  states: { type: String },
  category: { type: String },
  duration_start:{type: Date},
  duration_end:{type: Date}


}, { versionKey: false });

const workshop = mongoose.model('workshops', workshopSchema);

export default workshop;
