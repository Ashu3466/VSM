const express = require('express');
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require('./middleware/error-middleware');


const corsOptions = {
    origin: "http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/form", authRouter);



app.get("/", (req, res) => {
    res.send("this is home page")
})

app.use((""),errorMiddleware);

const PORT = 5000;
connectDB().then(() =>{
    app.listen(PORT, () =>{
        console.log(`sever is running port ${PORT}`);
})
});
