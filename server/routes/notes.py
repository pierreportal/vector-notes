from flask import Blueprint, jsonify, request
from models.note import Note
from db_init import db

notes_bp = Blueprint('note', __name__)

@notes_bp.route('/notes', methods=['POST'])
def add_note():
    data = request.get_json()
    new_note = Note()
    # db.session.add(new_note)
    # db.session.commit()
    return jsonify({"message": "Note added"}), 201

@notes_bp.route('/notes', methods=['GET'])
def get_notes():
    notes = Note.query.all()
    return jsonify(notes)