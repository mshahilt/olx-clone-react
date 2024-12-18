const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail");

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.login = async (req, res) => {
    console.log("Login function worked");
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        // const otp = generateOTP();
        // const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        // let user = await User.findOne({ email });

        // if (user) {
        //     user.otp = otp;
        //     user.otpExpires = otpExpires;
        // } else {
        //     user = new User({
        //         email,
        //         otp,
        //         otpExpires,
        //     });
        // }
        // await user.save();

        // const emailSubject = "Your OTP Code";
        // const emailText = `Your OTP code is: ${otp}. This code will expire in 10 minutes.`;
        // await sendEmail(email, emailSubject, emailText);

        res.json({ message: "OTP sent successfully. Check your email!" });
    } catch (error) {
        console.error("Error generating OTP:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
    }

    try {
        // const user = await User.findOne({ email });
        // if (!user) return res.status(404).json({ message: "User not found" });

        // if (user.otp !== otp || user.otpExpires < new Date()) {
        //     return res.status(400).json({ message: "Invalid or expired OTP" });
        // }

        // user.isVerified = true;
        // user.otp = undefined;
        // user.otpExpires = undefined;
        // await user.save();

        res.json({ message: "User verified successfully" });

    } catch(error) {
        console.error("Error verifying OTP:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}