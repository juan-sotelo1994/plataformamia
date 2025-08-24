from flask import Blueprint
portalprincipal = Blueprint('portalprincipal', __name__, template_folder='templates', static_folder='static')
from . import portalprin
