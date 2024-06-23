from datetime import datetime

def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))

NOTES = [
    {
        "id": 1,
        "title": "First Note",
        "content": "This is the first note",
        "timestamp": get_timestamp()
    },
    {
        "id": 2,
        "title": "Second Note",
        "content": "This is the second note",
        "timestamp": get_timestamp()
    }
]

def read_all():
    return list(NOTES)