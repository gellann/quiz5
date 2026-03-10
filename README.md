<<<<<<< HEAD
Beginner React Chat Application

This project has

backend/ -> Django REST API
frontend/ -> React app built with Create React App

1. Backend setup

Open terminal in project root

Activate virtual environment

..venv\Scripts\Activate.ps1

Install backend dependencies

pip install -r backend\requirements.txt

Go to backend folder

cd backend

Run database migrations

...venv\Scripts\python.exe manage.py migrate

Start backend server

...venv\Scripts\python.exe manage.py runserver

Backend API runs at

[http://127.0.0.1:8000](http://127.0.0.1:8000)

2. Frontend setup

Open another terminal in project root

cd frontend

Install dependencies

npm install

Start the frontend server

npm start

Frontend runs at

[http://127.0.0.1:3000](http://127.0.0.1:3000)

3. Frontend structure

screens/
LoginScreen -> user login page
RegisterScreen -> user registration page
HomeScreen -> main page that displays conversations

components/
FormComponent -> reusable form used by login and register screens
Loader -> loading indicator during API requests
Message -> displays success or error messages
ConversationItem -> displays a conversation in the list
EmptyState -> welcome screen when there are no conversations

4. Environment files

backend/.env.example -> environment template
backend/.env -> local environment values

Keep .env private.

Settings such as CORS_ALLOW_ALL_ORIGINS=True and ALLOWED_HOSTS=["*"] are for development only.
=======
# Beginner React + Django REST AI Chatbot

This project has:
- `backend/` -> Django REST API
- `frontend/` -> React app (Create React App)

## 1) Backend setup

Open terminal in project root (`my-chatbot-project`):

```powershell
# Create and use virtual environment (already created in this project)
.\.venv\Scripts\Activate.ps1

# Install packages (if needed)
pip install -r backend\requirements.txt

# Go to backend folder
cd backend

# Edit .env and paste your real Gemini key
# GEMINI_API_KEY=your_real_key_here

# Run Django migrations
..\.venv\Scripts\python.exe manage.py migrate

# Start backend server
..\.venv\Scripts\python.exe manage.py runserver
```

Backend API endpoint:
- `POST http://127.0.0.1:8000/api/chat/`

## 2) Frontend setup

Open another terminal in project root:

```powershell
cd frontend
npm install
npm start
```

Frontend URL:
- `http://127.0.0.1:3000`

## 3) Environment files

- `backend/.env.example` -> template
- `backend/.env` -> real local values

Important:
- Keep `.env` private.
- `CORS_ALLOW_ALL_ORIGINS=True` and `ALLOWED_HOSTS=["*"]` are for learning/dev only.
>>>>>>> main
