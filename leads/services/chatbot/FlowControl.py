from leads.services.query_manager.QueryManager import SimpleRowFinder


class FlowControl:

    @classmethod
    def initiate_with_greeting(cls, request):
        request.session['flow_state'] = 1
        return 'Hi!!!'


class InsertFlowControl(FlowControl):

    @classmethod
    def insert_flow_master(cls, request, message):
        if request.session['flow_state'] == 0:
            request.session['flow_state'] = 1
            return 'Who would you like to add to the database?  Please enter First_name, Middle_name (optional), Last_name.'
        elif request.session['flow_state'] == 1:
            request.session['flow_state'] = 2

            # look for the contact already existing in the database
            # result = requests.get('/api/search/q=' + self.message)
            result = SimpleRowFinder.get_count_of_rows(message)
            if result > 0:
                return 'There is already someone in the database with that name.  Advanced editing options through the chat is not yet enabled'
            else:
                request.session['lead_info'] = {}
                request.session['lead_info']['name'] = message
                return 'Ok, got it.  Is there anything else about this contact you want to add (such as job title, company, or state of business?'
        elif request.session['flow_state'] == 2:
            if message == 'no':
                request.session['flow_state'] = 5
                post_message = 'Okay, I have the following information.  Is this correct?\n'
                post_message += str(request.session['lead_info'])
                return post_message
            else:
                request.session['flow_state'] = 3
                request.session['flow_col'] = message
                return 'Alright, what is the value for %s' % message
        elif request.session['flow_state'] == 3:
            request.session['flow_state'] = 2
            request.session['lead_info'][request.session['flow_col']] = message
            return 'Got it...Anything else?'

    @classmethod
    def cache_record_name(cls, request, message):
        pass

    @classmethod
    def cache_attribute(cls, request, message):
        pass

    @classmethod
    def return_cached_record_summary(cls, request):
        pass

    @classmethod
    def save_cached_record(cls, request):
        pass
