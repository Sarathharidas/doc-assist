import * as Yup from "yup";

export const Signup_Schema = Yup.object({
  email: Yup.string()
    .max(255, "Email must not be greater than 255 characters.")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      "Email must be a valid email address."
    )
    .required("Email field is required."),
  password: Yup.string()
    .min(8, "You must enter at least 8 characters.")
    .matches(/[0-9]/, "You must enter at least one number.")
    .matches(/[a-z]/, "You must enter at least one lowercase letter.")
    .matches(/[A-Z]/, "You must enter at least one uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.")
    .required("Password field is required."),
  username: Yup.string()
    .max(255, "Doctor's name must not be greater than 255 characters.")
    .min(2, "Doctor's name must not be lesser than 2 characters.")
    .test(
      "no-blank-spaces",
      "Doctor's name cannot contain only blank spaces.",
      (value) => value && value.trim().length > 0
    )
    .test(
      "min-two-non-space-chars",
      "Doctor's name must contain at least 2 non-blank characters.",
      (value) => {
        if (!value) return false;
        // Remove spaces and check if the length of remaining characters is at least 2
        const nonSpaceChars = value.replace(/\s+/g, "");
        return nonSpaceChars.length >= 2;
      }
    )
    .required("Doctor's name is required."),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .max(255, "Email must not be greater than 255 characters.")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
      "Email must be a valid email address."
    )
    .required("Email field is required."),
  password: Yup.string()
    .min(8, "You must enter at least 8 characters.")
    .matches(/[0-9]/, "You must enter at least one number.")
    .matches(/[a-z]/, "You must enter at least one lowercase letter.")
    .matches(/[A-Z]/, "You must enter at least one uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.")
    .required("Password field is required."),
});
