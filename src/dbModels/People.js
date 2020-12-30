import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const peopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    nickName: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    favoriteColor: String,
    age: Number,
    dateBorn: Date
  },
  {
    timestamps: true
  }
)

peopleSchema.plugin(uniqueValidator)

const People = mongoose.model('Peoples', peopleSchema)
export default People
