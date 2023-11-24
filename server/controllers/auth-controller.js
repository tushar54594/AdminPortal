
const home = async (req, res) => {

    try {
        res.send("login success")
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        res.json({message : req.body});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {home, register}