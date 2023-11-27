require("dotenv").config();
const express = require('express');
const app = express();
const router = require("./router/auth-router");
const { connect } = require('mongoose');
const connectDB = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");


//middleware
app.use(express.json());

//to use router in our main app, mount the router at the specific url prefix
app.use("/api/auth", router);

app.use(errorMiddleware);

// app.get('/', (req, res) => {
//     res.send("Hello world")
// });

const PORT = 5000;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
    });
})
