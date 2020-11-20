const Validator = require("validator");
const isEmpty = require("is-empty");
const { default: validator } = require("validator");
module.exports = function validateRegisterInputDoc(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.special = !isEmpty(data.special) ? data.special : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";
  data.city = !isEmpty(data.city) ? data.city: "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

//Speciality Check
if(Validator.isEmpty(data.special)) {
    errors.special = "You need to enter your field of expertise";
}

//Bio Check
if(Validator.isEmpty(data.bio)) {
    errors.bio = "Tell us something about you";
}

//City Check
if(Validator.isEmpty(data.city)) {
  errors.city = "Where are you from?";
}

return {
    errors,
    isValid: isEmpty(errors)
  };
};