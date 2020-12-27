from flask import render_template
from flask import Blueprint, current_app
import json


from app.models.ticker import Ticket
from environment import get_angular_project_path
from ..extentions import db


FLASK_TEST_NG_PATH = get_angular_project_path()
bp = Blueprint('main', __name__)


@bp.route('/', methods=['GET', 'POST'])
@bp.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@bp.route('/ticker/<query>', methods=['GET'])
def ticker(query):
    query_str = str(query).upper() + '%'
    tickets = db.session.query(Ticket).filter(Ticket.symbol.like(query_str)).all()
    result = []
    for ticket in tickets:
        result.append({
            "symbol": ticket.symbol,
            "name": ticket.name or ""
        })
    return json.dumps(result)
