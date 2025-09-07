from  flask import render_template, abort
from . import autenticar
from  flask import Flask, request,url_for,redirect

@autenticar.route('/login')
def login():
    return render_template('login.html')

@autenticar.route('/registro')
def registro():
    return render_template('registro.html')