import Joi from 'joi'
import { People } from '../dbModels'
import { validPeople } from '../validationSchemas'

export default {
  Query: {
    Peoples: (parent, args, context, info) => People.find(),
    People: (parent, { name }, context, info) => People.findOne({ name })
  },
  Mutation: {
    createPeople: async (root, args) => {
      await Joi.validate(args, validPeople, { abortEarly: false })
      return People.create(args)
    },
    updatePeople: (root, args) => {
      return People.findByIdAndUpdate({ _id: args.id }, args)
    },
    deletePeople: (root, args) => {
      return People.findByIdAndDelete({ _id: args.id })
    }
  }
}
