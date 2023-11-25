const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req, res) => {

    try {
        res.send("login success")
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.json({msg: "email already exits"});
        }

        //hash the password
        // const saltRound = 10; //greater value, more complex hashing and more time
        // const hash_password = await bcrypt.hash(password, saltRound);
        

        const userCreated = await User.create({username, email, phone, password});

        res.json({msg: userCreated})
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = {home, register}