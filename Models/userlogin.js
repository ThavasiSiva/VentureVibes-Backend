const mongoose = require("mongoose");
const { Schema } = mongoose;

const userlogin = new Schema ({
    email: {type: String},
    password: {type: String}
});

module.exports = mongoose.model("user_login", userlogin)