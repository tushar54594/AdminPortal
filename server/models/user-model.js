const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

//secure the password using bcrypt

//db me data save hone se pehle ye funtion chalega
userSchema.pre('save', async function(){
    const user = this; //all the current data

    // if(!user.isModified("password")){
    //     next();
    // }

    // try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    // } catch (error) {
    //     next(error);
    // }
})


//compare password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}



//Components of JWT
/*
1.Header
2.Payload
3.Signature
*/


//json web token
//not stored in db. issued by the server during authentication process and then stored in the client side(eg. cookies or local storage)

userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign(
        {
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, 
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        });
    } catch (error) {
        console.error(error);
    }
}

//define the model
const User = new mongoose.model("users", userSchema);

module.exports = User;