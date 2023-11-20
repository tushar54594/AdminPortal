const express = require('express');
const app = express();
const router = require("./router/auth-router");


//to use router in our main app, mount the router at the specific url prefix
app.use("/api/auth", router);


// app.get('/', (req, res) => {
//     res.send("Hello world")
// });

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
});