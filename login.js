document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    const users = [
  { username: "admin", password: "1234" },
  { username: "cristin", password: "12345" },
  { username: "daniel", password: "dani01" },
];
    const username = form.querySelector("input[type='text']").value;
    const password = form.querySelector("input[type='password']").value;

  //buscar los usuarios
   const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Inicio de sesión exitoso");
    window.location.href = "dashboard.html";
  } else {
    const errorDiv = document.getElementById("mensaje-error");

errorDiv.textContent = "Usuario o contraseña incorrectos.";
errorDiv.style.display = "block";
    }
  });
});
