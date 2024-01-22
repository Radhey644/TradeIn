import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide fullname"],
    unique: false,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  avtar: {
    type: String,
    unique: false,
    default:
      "https://imgs.search.brave.com/zdS6l1xqEKVWgq_u_hTJ2fZgqC64m0Yl-3dg8ZLlfS4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzk5Lzk1LzM2/LzM2MF9GXzE5OTk1/MzY1OF9sek1ZdXlI/VllGaU15bmZpTVU4/WlhxdVVDM2NyZ1V0/SC5qcGc",
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
