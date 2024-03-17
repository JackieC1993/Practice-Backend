// const { isAlphanumeric, isEmail, isStrongPassword, isAlpha } = require("validator");

// function validateData(req, res, next) {
//   const { username, firstname, lastname, email, password } = req.body;

//   let errObj = {};

//   if (username) {
//     if (!isAlphanumeric(username)) {
//       errObj.username = "Username cannot have special characters";
//     }
//   }

//   if (firstname) {
//     if (!isAlpha(firstname)) {
//       errObj.firstname = "Firstname can only contain alphabetic letters";
//     }
//   }

//   if (lastname) {
//     if (!isAlpha(lastname)) {
//       errObj.lastname = "Lastname can only contain alphabetic characters";
//     }
//   }

//   if (email) {
//     if (!isEmail(email)) {
//       errObj.email = "Email can only have alpha-numeric characters";
//     }
//   }

//   if (password) {
//     if (!isStrongPassword(password)) {
//       errObj.password =
//         "Password must contain at least one lowercase, uppercase, number and special character";
//     }
//   }

//   if (Object.keys(errObj).length > 0) {
//     return res.status(500).json({
//       message: "error",
//       error: errObj,
//     });
//   } else {
//     next();
//   }
// }

// module.exports = validateData;