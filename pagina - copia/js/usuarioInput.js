document.getElementById('loginForm').addEventListener('submit', function(event) {
    const usuarioInput = document.getElementById('usuario');
    const contraseñaInput = document.getElementById('contraseña');
  
    // Verificar si el usuario y la contraseña son válidos (puedes agregar tu lógica aquí)
    const usuarioValido = false; // Reemplaza false por tu lógica de validación
    const contraseñaValida = false; // Reemplaza false por tu lógica de validación
  
    if (!usuarioValido || !contraseñaValida) {
      event.preventDefault(); // Evitar que el formulario se envíe
  
      const loginForm = document.querySelector('.login-form');
      loginForm.classList.add('invalid');
  
      setTimeout(function() {
        loginForm.classList.remove('invalid');
      }, 500);
    }
  });
  