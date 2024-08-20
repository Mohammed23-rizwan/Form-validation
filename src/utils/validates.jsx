export default function validate(value) {
  let errors = {};
  if (!value.username.trim()) {
    errors.username = "username required";
  }
  if (!value.email.trim()) {
    errors.email = "email required";
  } else if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value.email)) {
    errors.email = "email invalid";
  }
  if (!value.password.trim()) {
    errors.password = "password required";
  } else if (value.password.length > 6) {
    errors.password = "password should be 6 characters or above";
  }
  if (!value.password2.trim()) {
    errors.password2 = "re-enter a password required";
  } else if (value.password == value.password2) {
    errors.password2 = "password is not matched";
  }
  return errors;
}
