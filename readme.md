# 📱 Phone Number Verification Service

This project implements a phone number verification system using Node.js, Express, MongoDB, and Twilio for SMS-based verification. The backend API is deployed using AWS Lambda and exposed via API Gateway.

---

## 🚀 Project Overview

The system allows users to:

✅ Register their phone number.  
✅ Receive a verification code via SMS.  
✅ Verify their phone number using the code.  
✅ Securely store their verification status in MongoDB.  
✅ Use JWT tokens for further authorization.

---

## 🛠️ Tech Stack

| Component      | Technology Used               `      |
|----------------|--------------------------------------|
| Backend API    | Node.js, Express, Mongoose           |
| Database       | MongoDB Atlas (Cloud)                |
| SMS Service    | Twilio Verify API                    |
| API Hosting    | AWS Lambda + API Gateway             |
| Deployment     | Serverless Framework                 |
| Frontend       | React (for interacting with backend) |

---

## 📡 Environment Variables

The backend uses these environment variables (stored in AWS Lambda environment & `.env` for local development):

| Variable                        | Description                                    |
|----------------------------------|-----------------------------------------------|
| MONGO_URI                        | MongoDB connection string                     |
| JWT_SECRET                       | Secret key for signing JWT tokens             |
| TWILIO_ACCOUNT_SID               | Twilio Account SID                            |
| TWILIO_AUTH_TOKEN                | Twilio Auth Token                             |
| TWILIO_VERIFY_SERVICE_SID        | Twilio Verify Service SID                     |

### Example `.env` (in `backend/` folder)

```env
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=supersecretkey
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_VERIFY_SERVICE_SID=<your-twilio-verify-service-sid>
```

📦 Setup & Installation

1. Clone the Repository
```
git clone https://github.com/akshatsri19/PhoneVerification.git
cd PhoneVerificationV4
```

2. Backend Setup
Navigate to the backend folder and install dependencies.
```
cd backend
npm install
```
3. Frontend Setup
Navigate to the frontend folder and install dependencies.
```
cd ../frontend
npm install
```
4. Environment Setup
Create a .env file inside backend/

5. Running Locally
Start Backend (Local)
```
cd backend
npm run start
```
Backend will run on: http://localhost:5000 (if using serverless-offline)

6. Start Frontend (React)
```
cd frontend
npm start
```
Frontend will be available at: http://localhost:3000

7. Deploy Backend to AWS Lambda + API Gateway
Install Serverless Framework globally
```
npm install -g serverless
```
Deploy backend using Serverless Framework
```
cd backend
serverless deploy
```
After deployment, note the API Gateway URL printed in the terminal. This URL will be used in the frontend to call the deployed backend.

7. Set API URL in Frontend
Once deployed, update your frontend API URL in: frontend/src/Components/PhoneVerification.js to point to your deployed API Gateway URL.

🧪 API Endpoints
Method  |   Endpoint                |	Description
==========================================================================
GET	    |   /                       |	Health check
POST	|   /api/users/register     |	Register phone & send verification
POST	|   /api/users/verify	    |   Verify phone number

✅ Final Note
This project demonstrates:
1. Full-stack development.
2. Secure phone number verification process using Twilio.
3. Cloud deployment using AWS Lambda & API Gateway.
4. Best practices for serverless backend development.
5. JWT-based user session management.
