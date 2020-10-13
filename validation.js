const Joi = require('joi')

const schema = Joi.object({
    description: Joi.string().min(3).required()
})

module.exports = {
    schema,
}