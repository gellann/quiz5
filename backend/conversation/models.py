from django.db import models

# Create your models here.
class Conversation(models.Model):
    """
    Model to store conversation history.
    """
    user = models.CharField(max_length=255)
    _id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return f"Conversation at {self.timestamp}"
    
class Message(models.Model):
    """
    Model to store individual messages in a conversation.
    """
    conversation = models.ForeignKey(Conversation, related_name='messages', on_delete=models.CASCADE)
    role = models.CharField(max_length=255)  # 'user' or 'ai'
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.role} at {self.created_at}: {self.content[:30]}..."