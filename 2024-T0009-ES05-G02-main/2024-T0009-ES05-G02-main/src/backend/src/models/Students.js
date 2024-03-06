// Ong schema for mongoose
import mongoose from 'mongoose';

const studentsSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String},
  gender: { type: String },
  marital_states: { type: String },
  breed: { type: String }, //raça
  ref_responsible_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'responsibles' },
  birth_date: {type: Date},
  rg: { type: String },
  presence: {type: String},
  recurence: {type: Array},
  ref_team_id: {type: mongoose.Schema.Types.ObjectId, ref: 'teams' },
  states: {type: String},
  cpf: { type: String },
  email: { type: String, required: [true, 'Email is required'] },
  tel: { type: Number },
  geographic_status: { type: String },
  adress: { type: String },
  city: { type: String }


}, { versionKey: false });

const student = mongoose.model('students', studentsSchema);

export default student;
