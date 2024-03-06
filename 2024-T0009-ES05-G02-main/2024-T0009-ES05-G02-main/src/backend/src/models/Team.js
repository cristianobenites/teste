// Ong schema for mongoose
import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  local: { type: String},
  period_start: { type: Date },
  period_end: { type: Date },
  recurrence: { type: String },
  time: { type: String },
  class: {type: mongoose.Schema.Types.ObjectId, ref: 'class'},
}, { versionKey: false });

const team = mongoose.model('teams', teamSchema);

export default team;
