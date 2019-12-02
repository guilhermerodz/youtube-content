import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordHash: String,
  roles: {
    type: [String],
    default: [],
    required: true,
  },
});

UserSchema.pre('save', async function() {
  if (this.password) this.passwordHash = await bcrypt.hash(this.password, 8);
  this.password = undefined;
});

export default new model('User', UserSchema);
