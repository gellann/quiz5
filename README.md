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
