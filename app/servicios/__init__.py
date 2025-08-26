from flask import Blueprint

servi = Blueprint('servi', __name__, template_folder='templates', static_folder='static')
from . import servicio