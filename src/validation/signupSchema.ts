import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  fullName: Yup.string().required("FullName is Required"),
  nickName: Yup.string().required("NickName is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is Required"),
  phoneNo: Yup.string().required("Phone Number is Required"),
  gender: Yup.string().required("Gender is Required"),
  dob: Yup.string().required("Date of Birth is Required"),
  agree: Yup.boolean().oneOf([true], "You must accept terms & conditions"),
});
