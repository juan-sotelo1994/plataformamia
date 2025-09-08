from  flask import render_template, abort, session
from . import autenticar
from  flask import Flask, request,url_for,redirect, url_for, flash

@autenticar.route('/login')
def login():
    return render_template('login.html')

@autenticar.route('/registro')
def registro():
    return render_template('registro.html')

@autenticar.route('/recuperar', methods=["GET", "POST"] )
def recuperar():
     if request.method == "POST":
        correo = request.form.get("correo")
        # enviar correo...
        session["mensaje_recuperar"] = "Se envió un código a tu correo"
        return redirect(url_for("autenticar.verificar"))
     return render_template("recupera.html")


@autenticar.route('/verificar')
def verificar(): 
    return render_template('verifica_cod.html')

@autenticar.route('/restablecer')
def restablecer():
    return render_template('restablecer_con.html')