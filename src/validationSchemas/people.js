import Joi from 'joi'

export default Joi.object().keys({
  name: Joi.string().max(50).required().label('Name'),
  nickName: Joi.string().label('Nick Name'),
  email: Joi.string().email().required().label('Email'),
  favoriteColor: Joi.string().label('Favorite Color'),
  age: Joi.number().label('Age'),
  dateBorn: Joi.date().label('Date Born')
})
