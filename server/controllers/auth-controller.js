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

        res.json({msg: "registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString()});
        
    } catch (error) {
        res.status(500).json("internal server error")
    }
}

const login = async (req, res) => {

    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email});
        // console.log(userExist);
        if(!userExist){
            return res.status(400).json({msg: "Invalid credentials"});
        }

        // const user = await bcrypt.compare(password, userExist.password); 
        
        const user = await userExist.comparePassword(password);

        if(user){
            res.json({msg: "Login successful", 
            token: await userExist.generateToken(), 
            userId: userExist._id.toString()
        });
        }else{
            res.status(401).json({msg: "Invalid credentials"});
        }

    } catch (error) {
        res.status(500).json("internal server error")
    }
}
module.exports = {home, register, login}