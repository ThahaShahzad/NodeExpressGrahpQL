import Joi from 'joi'
import { Animal } from '../dbModels'
import { validAnimal } from '../validationSchemas'

export default {
  Query: {
    Animals: (parent, args, context, info) => Animal.find(),
    Animal: (parent, { name }, context, info) => Animal.findOne({ name })
  },
  Mutation: {
    createAnimal: async (root, args) => {
      await Joi.validate(args, validAnimal, { abortEarly: false })
      return Animal.create(args)
    },
    updateAnimal: (root, args) => {
      return Animal.findByIdAndUpdate({ _id: args.id }, args)
    },
    deleteAnimal: (root, args) => {
      return Animal.findByIdAndDelete({ _id: args.id })
    }
  }
}
