from flask import Flask, render_template, request
import os 

app = Flask(__name__)

# clave secreta para sesiones y flash 
app.secret_key = "clave_super_secreta"

# resgistro de las importaciones y configuraciones 
from portal import portalprincipal
from auth import autenticar
from servicios import servi


# Registro de blueprints

app.register_blueprint(portalprincipal)
app.register_blueprint(autenticar)
app.register_blueprint(servi)




# Ejecutar la aplicación
if __name__ == '__main__':
    app.run(debug=True, port=5711)
