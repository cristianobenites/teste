// Ong schema for mongoose
import mongoose from 'mongoose';

const responsibleSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String},
  gender: { type: String },
  marital_states: { type: String },
  breed: { type: String },
  birth_date: {type: Date},
  rg: { type: String },
  cpf: { type: String },
  email: { type: String, required: [true, 'Email is required'] },
  tel: { type: Number },
  geographic_status: { type: String },
  adress: { type: String },
  city: { type: String }

}, { versionKey: false });

const responsible = mongoose.model('responsibles', responsibleSchema);

export default responsible;
