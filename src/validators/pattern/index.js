/*
 * Regex pattern for input validation:
 *   - fullName:
 *        - contains no special characters or numbers
 *        - Vietnamese name supported
 *   - username:
 *        - from 4 to 16 alphanumeric characters, lowercase
 *   - password:
 *        - minimum eight characters, at least one letter and one number
 */

const pattern = {
  fullName:
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
  username: /^[a-z0-9]{4,16}$/,
  phoneNumber: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g,
  imageUrl: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
};

export default pattern;
