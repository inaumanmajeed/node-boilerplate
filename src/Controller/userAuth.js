const userModel = require ("../Model/userAuth");
const bcrypt = require ("bcrypt");


// router.post("/register", authController.register);
const register = async (req, res) => {
    try {
        const {name, userId, password, description, permissions} = req.body;

        let user = await userModel.findOne({userId});
        if (user) {
            return res.status(200).json({
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new userModel({
            name, 
            userId, 
            password: hashedPassword,
            description, 
            permissions

        });
        await user.save();
        res.status(200).json({
            message: "user registered successfully"
        });
    } catch (error) {
        console.error("Error registering user: ", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

// router.post("/login", authController.login);
const login = async (req, res) => {
    try {
        const { userId, password } = req.body;

        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// router.post("/logout", authController.logout);

const logout = async (req, res) => {
    res.status(200).json({ message: "Logout successful" });
};


module.exports = {register,
login,
logout};