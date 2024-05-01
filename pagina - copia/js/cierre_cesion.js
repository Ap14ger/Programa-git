
// Obtener el cajón y el botón de cerrar
var drawer = document.getElementById("drawer");
var closeBtn = document.getElementById("close-drawer");

// Función para abrir el cajón
function openDrawer() {
  drawer.style.width = "100%"; // Ancho completo
}

// Función para cerrar el cajón
function closeDrawer() {
  drawer.style.width = "0"; // Sin ancho (oculto)
}

// Event listener para abrir el cajón
openBtn.addEventListener("click", openDrawer);

// Event listener para cerrar el cajón
closeBtn.addEventListener("click", closeDrawer);


// Función para cerrar sesión
function cerrarSesion() {
  // Aquí puedes agregar cualquier lógica adicional que necesites para cerrar la sesión, como eliminar tokens de sesión, limpiar cookies, etc.
  
  // Reemplaza la URL actual por una nueva URL (puede ser la página de inicio de sesión)
  history.pushState(null, null, 'index.html');
}

// Llama a la función de cerrar sesión cuando se haga clic en el enlace de cerrar sesión
document.getElementById('cerrarSesion').addEventListener('click', function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  cerrarSesion(); // Llama a la función de cerrar sesión
});

// Agrega un evento al historial del navegador
window.addEventListener('popstate', function(event) {
  // Verifica si el usuario ha iniciado sesión
  if (!usuarioHaIniciadoSesion()) {
      // Si el usuario no ha iniciado sesión, lo redirige a la página de inicio de sesión
      window.location.href = 'index.html';
  }
});

// Función para verificar si el usuario ha iniciado sesión
function usuarioHaIniciadoSesion() {
  // Aquí debes implementar tu lógica para verificar si el usuario ha iniciado sesión
  // Puedes utilizar cookies, localStorage, sessionStorage o algún otro método de autenticación
  // Retorna true si el usuario ha iniciado sesión, false de lo contrario
  // Por ejemplo:
  // return sessionStorage.getItem('sesionIniciada') === 'true';
  return false; // Por ahora, siempre retorna false
}
