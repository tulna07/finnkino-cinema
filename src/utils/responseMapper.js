const responseMapper = (response) => {
  switch (response) {
    case "Tài khoản đã tồn tại!":
      return "Username already exists";
    case "Email đã tồn tại!":
      return "Email already exists";
    default:
      return "";
  }
};

export default responseMapper;
