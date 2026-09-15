const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validationService = {
  // Validate email format
  isValidEmail(email) {
    if (typeof email !== "string") return false;
    return EMAIL_REGEX.test(email.trim());
  },

  // Validate password (min 4 chars per User model)
  isValidPassword(password) {
    return typeof password === "string" && password.length >= 4;
  },

  // Validate name (min 2 chars)
  isValidName(name) {
    return typeof name === "string" && name.trim().length >= 2;
  },

  // Validate budget range
  isValidBudget(min, max) {
    return (
      typeof min === "number" &&
      typeof max === "number" &&
      min >= 0 &&
      max >= min
    );
  },

  // Validate signup form
  validateSignup(data) {
    const errors = {};
    if (!data.fullName || !this.isValidName(data.fullName)) {
      errors.fullName = "Please enter your full name (min 2 characters).";
    }
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!data.password || !this.isValidPassword(data.password)) {
      errors.password = "Password must be at least 4 characters long.";
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },

  // Validate login form
  validateLogin(data) {
    const errors = {};
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!data.password || !this.isValidPassword(data.password)) {
      errors.password = "Password must be at least 4 characters long.";
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },
};

export default validationService;
