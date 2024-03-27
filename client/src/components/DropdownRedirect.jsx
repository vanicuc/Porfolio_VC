export function redirectOnChange() {
    document.getElementById('work-experience-dropdown').addEventListener('change', function() {
      window.location.href = this.value; // Redirige a la página seleccionada
    });
  }