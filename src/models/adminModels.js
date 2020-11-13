const mongoose = require('mongoose');

const adminModel = new mongoose.Schema({
    username : {
      type: String,
      required: true  
    },
    email : {
        type: String,
        unique:true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
});

const AdminModel = mongoose.model('AdminModel', adminModel);

module.exports = AdminModel;