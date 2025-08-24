from flask import render_template
from . import portalprincipal

@portalprincipal.route('/')
def index():
    return render_template('index.html')