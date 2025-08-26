from flask import render_template
from . import servi

@servi.route('/serviciosautoma')
def serviciosautoma():
    return render_template('serviciosautoma.html')