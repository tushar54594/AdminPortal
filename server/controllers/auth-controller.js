
const home = async (req, res) => {

    try {
        res.send("login success")
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        res.send("register success");
    } catch (error) {
        console.log(error);
    }
}
module.exports = {home, register}