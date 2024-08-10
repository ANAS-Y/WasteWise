const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
      lastName:{
        type: String,
        required: true
    },
      email:{
        type: String,
        required: true,
        unique: true
    },
      phone:{
        type: String,
        required: true
    },
      country:{
        type: String,
        required: true
    },
      state:{
        type: String,
        required: true
    },
      lga:{
        type: String,
        required: true
    },
      password:{
        type: String,
        required: true
    },
   
    role: {
        type: String,
        default: 'admin'
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
