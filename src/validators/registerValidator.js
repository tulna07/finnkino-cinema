import * as yup from "yup";

const registerSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required.")
    .matches(
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
      "Full name is invalid.",
    ),
  username: yup.string().required("Username is required."),
  email: yup.string().required("Email is required").email("Email address is invalid."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is invalid."),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password should be a minimum of eight characters, at least one letter and one number.",
    ),
});

export default registerSchema;
