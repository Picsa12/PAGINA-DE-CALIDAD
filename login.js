document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    const username = form.querySelector("input[type='text']").value;
    const password = form.querySelector("input[type='password']").value;

    // Simulamos un usuario y contraseña correctos
    if (username === "admin" && password === "1234") {
      // Redirige a otra página si las credenciales son correctas
      window.location.href = "dashboard.html"; 
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});
