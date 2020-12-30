import Joi from 'joi'
import { SignUp } from '../validationSchemas'
import { User } from '../dbModels'

export default {
  Query: {
    users: (parent, args, context, info) => User.find(),
    user: (parent, { name }, context, info) => User.findOne({ name })
  },
  Mutation: {
    signUp: async (root, args) => {
      await Joi.validate(args, SignUp, { abortEarly: false })
      await User.create(args)
      return true
    }
  }
}
