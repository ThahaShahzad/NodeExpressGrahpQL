import Joi from 'joi'

export default Joi.object().keys({
  name: Joi.string().max(50).required().label('Name'),
  email: Joi.string().email().required().label('Email'),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/)
    .label('Password')
    .error((err) => {
      return {
        message: 'Must be at least one upper case letter, one number and one special character.'
      }
    })
})
