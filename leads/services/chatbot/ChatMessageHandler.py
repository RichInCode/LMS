from leads.services.chatbot.IntentTypes import Intent
import requests
from leads.services.query_manager.QueryManager import SimpleRowFinder
from leads.services.chatbot.FlowControl import InsertFlowControl


class ChatMessageHandler:
    def __init__(self, message, request):
        self.message = message.lower()
        self.request = request
        #self.flow_type = Intent.GREETING
        #self.flow_state = 0

    def determine_message_intent(self):
        if self.message == 'hi' or self.message == 'hello':
            #self.flow_type = Intent.GREETING
            self.request.session['flow_type'] = 'GREETING'
            self.request.session['flow_state'] = 0
            return 'GREETING'
        elif self.message.find('add ') != -1:
            #self.flow_type = Intent.INSERT
            self.request.session['flow_type'] = 'INSERT'
            self.request.session['flow_state'] = 0
            return 'INSERT'
        else:
            return self.request.session['flow_type']

    def generate_response(self):
        intent = self.determine_message_intent()

        if intent == 'GREETING':
            return InsertFlowControl.initiate_with_greeting(self.request)

        if intent == 'INSERT':
            return InsertFlowControl.insert_flow_master(self.request, self.message)


