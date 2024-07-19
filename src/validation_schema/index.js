import * as Yup from "yup";

export const Signup_Schema = Yup.object({
  email: Yup.string().max(255, "Email must not be greater than 255 characters.").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "Email must be a valid email address.").required("Email field is required."),
  password: Yup.string().required('Password field is required.').min(6, 'Password is too short - should be 6 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
