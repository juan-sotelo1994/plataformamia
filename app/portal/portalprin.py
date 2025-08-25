from flask import render_template
from . import portalprincipal

@portalprincipal.route('/')
def index():
    return render_template('index.html')

@portalprincipal.route('/quienes')
def quienes(): 
    return render_template('quienes.html')