// === SweetAlert al iniciar sesión ===
function showLoginSuccess() {
    Swal.fire({
        title: 'Bienvenido',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Aceptar'
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
