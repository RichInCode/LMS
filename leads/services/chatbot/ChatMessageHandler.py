from leads.services.chatbot.IntentTypes import Intent


class ChatMessageHandler:
    def __init__(self, message):
        self.message = message.lower()
        pass

    def determine_message_intent(self):
        if self.message == 'hi' or self.message == 'hello':
            return Intent.GREETING

    def generate_response(self):
        intent = self.determine_message_intent()

        if intent == Intent.GREETING:
            return 'Hi!!!'
