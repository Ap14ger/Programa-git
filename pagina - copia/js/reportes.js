document.addEventListener('DOMContentLoaded', function () {
    const novedadesForm = document.getElementById('novedades-form');
  
    function handleFormSubmit(event) {
      event.preventDefault();
  
      // Obtener datos del formulario
      const nombre = document.getElementById('nombre').value;
      const descripcion = document.getElementById('descripcion').value;
  
      // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o almacenarlos localmente
  
      // Limpiar el formulario después de enviar
      novedadesForm.reset();
    }
  
    // Agregar el evento de envío al formulario
    novedadesForm.addEventListener('submit', handleFormSubmit);
  });
  

  