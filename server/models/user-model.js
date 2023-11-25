const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

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
userSchema.pre('save', async function(next){
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


//define the model
const User = new mongoose.model("users", userSchema);

module.exports = User;