const Joi = require("joi");
const { validateResponse } = require("../../helpers/validationHelper");

// Define Joi schema for the contact form
const contactSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should have at least 3 characters",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email",
    "string.empty": "Email is required",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be between 10-15 digits",
      "string.empty": "Phone number is required",
    }),
  message: Joi.string().min(5).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message should have at least 5 characters",
  }),
});

// Middleware to validate request data against the schema 
const validateContactForm = (req, res, next) => {
  const { error } = contactSchema.validate(req.body, { abortEarly: false });

  if (error) {
    // Return validation errors if any
    return res.status(400).json({
      errors: validateResponse(error),
    });
  }

  // If no validation errors, proceed to the next middleware
  next();
};

module.exports = {
  validateContactForm,
};
