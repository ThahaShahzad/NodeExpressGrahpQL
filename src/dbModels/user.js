import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { hash } from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: String
  },
  {
    timestamps: true
  }
)
userSchema.plugin(uniqueValidator)

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await hash(this.password, 10)
  }
})

const User = mongoose.model('User', userSchema)

export default User
