import mongoose from 'mongoose'

export const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  role:{type:String, default:'user'}
}, { versionKey: false })

export const usuarioModel = mongoose.model('usuarios', usuarioSchema)
