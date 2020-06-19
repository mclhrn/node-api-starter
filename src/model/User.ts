import mongoose, { Schema } from 'mongoose'

export interface IUser extends mongoose.Document {
  email: string
  firstName: string
  lastName: string
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
})

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema)
