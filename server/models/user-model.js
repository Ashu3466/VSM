const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key_here';


const userSchema = new mongoose.Schema({
    EmployeID: {
        type: Number,
        require: true,
    },
    EmployeName: {
        type: String,
        require: true,
        
    },
    Department: {
        type: String,
        require: true,
        
    },
    Designation: {
        type: String,
        require: true,
        
    },
    Email: {
        type: String,
        require:true,
    },
    password: {
        type: String,
        require:true,
    },
});


// secure the password with the bcrypt

userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password , saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})

//json web token 

userSchema.methods.genrateToken = function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.Email,
            isAdmin: this.isAdmin,
        },
        secretKey,
        {
            expiresIn: "3d",
        });


    } catch (error) {
        console.error(error)
    }
};


const User = new mongoose.model("User", userSchema);
module.exports = User;