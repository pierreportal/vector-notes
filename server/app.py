from flask import Flask
from db_init import init_db
from routes.notes import notes_bp

app = Flask(__name__)

init_db(app)

app.register_blueprint(notes_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)