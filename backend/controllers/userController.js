const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendVerificationCode, verifyCode } = require('../services/twilioService');

exports.registerPhoneNumber = async (req, res) => {
    console.log("Received /register request with body:", req.body);

    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        console.error("No phone number provided");
        return res.status(400).json({ message: "Phone number is required" });
    }

    try {
        console.log("Looking for existing user with phone number:", phoneNumber);
        let user = await User.findOne({ phoneNumber });

        if (!user) {
            console.log("User not found - creating new user for:", phoneNumber);
            user = await User.create({ phoneNumber });
        } else {
            console.log("User already exists:", user);
        }

        console.log("Sending verification code to:", phoneNumber);
        await sendVerificationCode(phoneNumber);
        console.log("Successfully sent verification code to:", phoneNumber);

        res.status(200).json({ message: 'Verification code sent' });
    } catch (error) {
        console.error("Error sending verification code:", error);
        res.status(500).json({ message: 'Error sending verification code', error: error.message });
    }
};

exports.verifyPhoneNumber = async (req, res) => {
    console.log("Received /verify request with body:", req.body);

    const { phoneNumber, code } = req.body;

    if (!phoneNumber || !code) {
        console.error("Missing phoneNumber or code");
        return res.status(400).json({ message: "Phone number and code are required" });
    }

    try {
        console.log("Verifying code for phone number:", phoneNumber);
        const verification = await verifyCode(phoneNumber, code);

        console.log("Twilio verification result:", verification);

        if (verification.status === 'approved') {
            console.log("Verification approved - updating user as verified:", phoneNumber);
            await User.updateOne({ phoneNumber }, { isVerified: true });

            const token = jwt.sign({ phoneNumber }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ message: 'Phone number verified', token });
        } else {
            console.warn("Verification failed (invalid code) for:", phoneNumber);
            res.status(400).json({ message: 'Invalid or expired code' });
        }
    } catch (error) {
        console.error("Verification process failed:", error);
        res.status(500).json({ message: 'Verification failed', error: error.message });
    }
};
