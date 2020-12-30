import Joi from 'joi'

export default Joi.object().keys({
  name: Joi.string().max(50).required().label('Name'),
  nickName: Joi.string().required().label('Nick Name'),
  animalType: Joi.string().label('Animal Type'),
  furDepth: Joi.number().min(1).max(10).label('Fur Depth'),
  age: Joi.number().label('Age'),
  dateBorn: Joi.date().label('Date Born')
})
