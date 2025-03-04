import React, { useState } from 'react';
import axios from 'axios';

const PhoneVerification = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [step, setStep] = useState(1);
    const BASE_URL = 'https://5spz97yxgk.execute-api.us-east-1.amazonaws.com/dev/api/users';

    const handleSendCode = async () => {
        try {
            await axios.post(`${BASE_URL}/register`, { phoneNumber });
            setStep(2);
        } catch (error) {
            alert('Error sending verification code');
        }
    };

    const handleVerifyCode = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/verify`, { phoneNumber, code });
            alert(`Verification successful! Token: ${response.data.token}`);
        } catch (error) {
            alert('Invalid or expired code');
        }
    };

    return (
        <div>
            {step === 1 ? (
                <div>
                    <h2>Enter Phone Number</h2>
                    <input
                        type="text"
                        placeholder="+1234567890"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                    <button onClick={handleSendCode}>Send Code</button>
                </div>
            ) : (
                <div>
                    <h2>Enter Verification Code</h2>
                    <input
                        type="text"
                        placeholder="Verification Code"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                    />
                    <button onClick={handleVerifyCode}>Verify</button>
                </div>
            )}
        </div>
    );
};

export default PhoneVerification;
