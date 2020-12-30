import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    nickName: {
      type: String,
      unique: true
    },
    animalType: String,
    furDepth: Number,
    age: Number,
    dateBorn: Date
  },
  {
    timestamps: true
  }
)

animalSchema.plugin(uniqueValidator)

const Animal = mongoose.model('Animals', animalSchema)
export default Animal
