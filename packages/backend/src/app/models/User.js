import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  active: Boolean,
})

export default model('User', UserSchema)
