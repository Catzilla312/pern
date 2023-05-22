require('dotenv').config();
const express = require("express");
const sequelize = require("./db");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const router = require("./routes/index");
const errorHandling = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api",router);

//Error handling, is the last middleware

app.use(errorHandling);

const start = async () => {
    try {

        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT,()=>{
            console.log(`Server started on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();