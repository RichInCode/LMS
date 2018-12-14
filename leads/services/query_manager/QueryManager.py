from leads.models import Lead


class SimpleRowFinder:
    def __init__(self):
        pass

    @classmethod
    def get_count_of_rows(cls, attrib):
        qs = Lead.objects.filter(name__iexact=attrib)

        return qs.count()
