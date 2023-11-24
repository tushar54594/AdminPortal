const User = require("../models/user-model")


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
            res.json({msg: "email already exits"});
        }

        const userCreated = await User.create({username, email, phone, password});

        res.json({msg: userCreated})
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = {home, register}