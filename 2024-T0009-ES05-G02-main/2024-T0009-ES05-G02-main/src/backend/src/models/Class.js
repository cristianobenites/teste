// Ong schema for mongoose
import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  date: { type: String},
  ref_teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'teachers' }, //How to make it a reference?
  record: { type: Date },
  observation: { type: String },
  states: {type: String}
}, { versionKey: false });

const classs = mongoose.model('class', classSchema);

export default classs;
