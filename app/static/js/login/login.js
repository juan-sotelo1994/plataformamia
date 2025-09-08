// === SweetAlert al iniciar sesión ===
function showLoginSuccess() {
    Swal.fire({
        title: 'Bienvenido',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

// === SweetAlert al recuperar contraseña ===
function showRecoverySuccess(mensaje) {
    Swal.fire({
        title: '¡Correo enviado!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        // Redirigir después de cerrar la alerta
        window.location.href = "/verificar"; // <- ajusta si tu ruta tiene Blueprint
    });
}

// === Manejo de los botones de cambio (login / registro) ===
const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp    = document.querySelector('.sign-up'),
      $signIn    = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

// === Ejemplo: disparar SweetAlert cuando se haga login ===
const $loginBtn = document.querySelector('.btn-submit'); 
if ($loginBtn) {
    $loginBtn.addEventListener('click', e => {
        e.preventDefault(); 
        showLoginSuccess();
    });
}

// === Verificar si Flask pasó un mensaje de recuperación ===
document.addEventListener("DOMContentLoaded", function () {
    const recoveryMsg = "{{ mensaje | default('') }}"; // Jinja lo renderiza
    if (recoveryMsg) {
        showRecoverySuccess(recoveryMsg);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    if (typeof recoveryMsg !== "undefined" && recoveryMsg) {
        Swal.fire({
            title: "¡Correo enviado!",
            text: recoveryMsg,
            icon: "success",
            confirmButtonText: "OK"
        });
    }
});
