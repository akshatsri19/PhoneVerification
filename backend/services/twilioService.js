
const twilio = require('twilio');


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendVerificationCode = async (phoneNumber) => {
    try {
        console.log("Sending verification code to:", phoneNumber);  // Log the phone number
        const result = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
            .verifications.create({ to: phoneNumber, channel: 'sms' });

        console.log("Twilio Verification Result:", result);  // Log success response from Twilio
        return result;
    } catch (error) {
        console.error("Twilio Error:", error);  // Log full Twilio error
        throw error;  // Re-throw so your controller catches it
    }
};

const verifyCode = async (phoneNumber, code) => {
    return client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_SID)
        .verificationChecks.create({ to: phoneNumber, code });
};

module.exports = { sendVerificationCode, verifyCode };
