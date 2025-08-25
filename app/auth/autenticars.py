from  flask import render_template
from . import autenticar

@autenticar.route('/login')
def login():
    return render_template('login.html')