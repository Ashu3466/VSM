const User = require("../models/user-model")
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("welocme to home page our website home controllers");
    } catch (error) {
        console.log(error)
    }
}



// registration page 
const register = async (req, res) => {
    try {
        console.log("backend enter"+req);
        const { EmployeID, EmployeName, Department, Designation, Email, password } = req.body;

        const userExist = await User.findOne({ EmployeID: EmployeID });

        if (userExist) {
            return res.status(400).json({ msg: "Employee Id already exists" });
        }

        const userCreated = await User.create({ 
            EmployeID,
            EmployeName, 
            Department, 
            Designation, 
            Email, 
            password
        });
        console.log("after user created"+userCreated);

        // Assuming generateToken() is an async function in your User model
        const token = await userCreated.generateToken();

        if (!token) {
            return res.status(500).json({ msg: "Failed to generate token" });
        }

        res.status(201).json({
            msg: "Registration successful", 
            token: token,
            userId: userCreated._id.toString()
        });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}




// login page

const login = async (req, res) => {
    try {
        const {Email, password} = req.body;

        const userExist = await User.findOne({Email});

        if(!userExist) {
            return res.status(400).json({message : "invaild credentials"});
        }



        const user= await bcrypt.compare(password, userExist.password);

        if(user){
        res
        .status(201).json({
        msg: "Login successfull", 
        token: await userExist.genrateToken(),
        userId: userExist._id.toString() });

        }else{
            res.status(401).json({message: "invalid email or password"});
        }


    } catch (error) {
        res.status(500).json("internal sever error")   
    }
}

module.exports = {home, register, login};