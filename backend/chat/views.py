"""
chat/views.py - The brain of our backend.

This file does 3 main jobs:
1) Receives a POST request from React
2) Sends that message to Google Gemini
3) Returns Gemini's reply as JSON
"""

import json
import os

from google import genai
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Read the API key from environment variables loaded via .env.
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

# Create one reusable Gemini client when the server starts.
client = genai.Client(api_key=GEMINI_API_KEY) if GEMINI_API_KEY else None

# Keep model name in one place so changing it is easy.
MODEL_NAME = "gemini-2.5-flash-lite"

# The system prompt shapes the assistant behavior.
# You asked to "allow all", so this prompt does not limit topics.
SYSTEM_PROMPT = """
You are an expert but friendly programming tutor.

Teaching style:
- Use clear beginner-friendly language.
- Explain why things work, not just what to type.
- Keep answers focused and practical.
- Use short examples when helpful.
"""


@api_view(["POST"])
def chat_view(request):
	"""
	Handle chat request from frontend.

	Expects JSON body:
	  {"message": "Hello"}

	Returns JSON:
	  {"reply": "..."}
	"""

	if client is None:
		return Response(
			{"error": "GEMINI_API_KEY is missing. Add it to backend/.env"},
			status=status.HTTP_500_INTERNAL_SERVER_ERROR,
		)

	# request.body is raw bytes, so decode and parse it to Python dict.
	try:
		data = json.loads(request.body.decode("utf-8"))
	except json.JSONDecodeError:
		return Response(
			{"error": "Invalid JSON in request body."},
			status=status.HTTP_400_BAD_REQUEST,
		)

	# Safely read "message" and remove extra spaces.
	user_message = data.get("message", "").strip()

	if not user_message:
		return Response(
			{"error": "Message cannot be empty."},
			status=status.HTTP_400_BAD_REQUEST,
		)

	try:
		# Send user message to Gemini.
		response = client.models.generate_content(
			model=MODEL_NAME,
			contents=user_message,
			config={"system_instruction": SYSTEM_PROMPT},
		)

		# response.text is the assistant's plain text answer.
		ai_reply = response.text or "I could not generate a response this time."
	except Exception as exc:
		print(f"Gemini API error: {exc}")
		return Response(
			{"error": "Failed to get response from AI."},
			status=status.HTTP_500_INTERNAL_SERVER_ERROR,
		)

	return Response({"reply": ai_reply}, status=status.HTTP_200_OK)
