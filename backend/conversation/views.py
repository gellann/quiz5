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
from .models import Conversation, Message
from .serializers import ConversationSerializer, MessageSerializer

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

client = genai.Client(api_key=GEMINI_API_KEY) if GEMINI_API_KEY else None

MODEL_NAME = "gemini-2.5-flash-lite"

SYSTEM_PROMPT = """
You are an expert but friendly programming tutor.

Teaching style:
- Use clear beginner-friendly language.
- Explain why things work, not just what to type.
- Keep answers focused and practical.
- Use short examples when helpful.
"""

#create view
@api_view(["POST"])
def conversation(request):
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

	try:
		data = json.loads(request.body.decode("utf-8"))
	except json.JSONDecodeError:
		return Response(
			{"error": "Invalid JSON in request body."},
			status=status.HTTP_400_BAD_REQUEST,
		)

	user_message = data.get("message", "").strip()

	if not user_message:
		return Response(
			{"error": "Message cannot be empty."},
			status=status.HTTP_400_BAD_REQUEST,
		)

	try:
		response = client.models.generate_content(
			model=MODEL_NAME,
			contents=user_message,
			config={"system_instruction": SYSTEM_PROMPT},
		)

		ai_reply = response.text or "I could not generate a response this time."
	except Exception as exc:
		print(f"Gemini API error: {exc}")
		return Response(
			{"error": "Failed to get response from AI."},
			status=status.HTTP_500_INTERNAL_SERVER_ERROR,
		)

	return Response({"reply": ai_reply}, status=status.HTTP_200_OK)


@api_view(['GET'])
def conversation_list_view(request):
    conversations = Conversation.objects.all()
    serializer = ConversationSerializer(conversations, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def conversation_detail_view(request, pk):
    post = None
    for i in conversation:
        if i['_id'] == str(pk):
            post = i
            break
    return Response(post)