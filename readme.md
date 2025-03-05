📱 Phone Number Verification Service

This project implements a phone number verification system using Node.js, Express, MongoDB, and Twilio for SMS-based verification. The backend API is deployed using AWS Lambda and exposed via API Gateway.

🚀 Project Overview
The system allows users to:

✅ Register their phone number.
✅ Receive a verification code via SMS.
✅ Verify their phone number using the code.
✅ Securely store their verification status in MongoDB.
✅ Use JWT tokens for further authorization.

🛠️ Tech Stack
Backend API:	Node.js, Express, Mongoose
Database:   	MongoDB Atlas (Cloud)
SMS Service:	Twilio Verify API
API Hosting:	AWS Lambda + API Gateway
Deployment: 	Serverless Framework
Frontend:   	React (for interacting with backend)


📡 Environment Variables
The backend uses these environment variables (stored in AWS Lambda environment & .env for local development):

MONGO_URI: 	                MongoDB connection string
JWT_SECRET:	                Secret key for signing JWT tokens
TWILIO_ACCOUNT_SID:	        Twilio Account SID
TWILIO_AUTH_TOKEN:	        Twilio Auth Token
TWILIO_VERIFY_SERVICE_SID:	Twilio Verify Service SID

Create a .env file in backend/ for local development:
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=supersecretkey
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_VERIFY_SERVICE_SID=<your-twilio-verify-service-sid>

🏗️ Setup & Installation

1. Clone the Repository
git clone https://github.com/akshatsri19/PhoneVerification.git
cd PhoneVerificationV4

2. Backend Setup
cd backend
npm install

3. Frontend Setup
cd ../frontend
npm install

⚙️ Running Locally
1. Start Backend (Local)
cd backend
npm run start

2. Start Frontend (React)
cd frontend
npm start

-React app will be available at: http://localhost:3000
-Backend API (if using serverless-offline) at: http://localhost:5000

🚀 Deployment to AWS (Lambda + API Gateway)
1. Install Serverless Framework
npm install -g serverless

2. Deploy Backend API
cd backend
serverless deploy

After deployment, note the API Gateway URL printed by Serverless.

🧪 API Endpoints
Method |	Endpoint	        |     Description
-----------------------------------------------------------------------
GET	   |    /	                |   Health check
POST   |	/api/users/register |	Register phone & send verification
POST   |	/api/users/verify   |	Verify phone number


✅ Final Note
This project is designed to demonstrate:

1. Full-stack development.
2. Cloud deployment.
3. Secure phone verification process.
4. Best practices for serverless backend development.


