const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })

    const { error, value } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            message: error.details[0].message,
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            message: error.details[0].message,
            error: `The password provided failed to match the following rules:
                <br>
                1. It must contain ONLY the following characters: lower case, upper case, numerics.
                <br>
                2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            message: error.details[0].message,    
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}