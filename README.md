# PAGINA DE CALIDAD

A Pen created on CodePen.

Original URL: [https://codepen.io/Picsa12/pen/ByNNJBm](https://codepen.io/Picsa12/pen/ByNNJBm).


Este es el formulario de login basado en Glassmorphism, con HTML y CSS puros.

## 🌐 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Modern Glassmorphism Login Form</title>
  <link rel="stylesheet" href="the_coding_wizard.css">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
  <div class="wrapper">
    <form action="">
      <h1>INICIO</h1>
      <h2>Desarrollo Estrategico</h2>

      <div class="input-box">
        <input type="text" placeholder="Nombre completo" required>
        <i class='bx bxs-user'></i>
      </div>

      <div class="input-box">
        <input type="password" placeholder="Contraseña" required>
        <i class='bx bxs-lock-alt'></i>
      </div>

      <div class="remember-forgot">
        <label><input type="checkbox">Recordar</label>
        <a href="#">¿Olvido su contraseña?</a>
      </div>

      <button type="submit" class="btn">Login</button>

      <div class="register-link">
        <p>¿No ha iniciado sesión? <a href="#">Regístrate</a></p>
      </div>
    </form>
  </div>
</body>
</html>
```
## 🎨 CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
 background: linear-gradient(
    165deg,
    rgb(148, 220, 222),  /* #94DCDE */
    rgb(231, 97, 189)    /* #E761BD */
  );
}

.wrapper {
margin-top: 20px;
  width: 420px;
 background: linear-gradient(45deg, rgba(18, 27, 103, 0.8), rgba(118, 3, 15, 0.5));
  border: 2px solid white; /* color inicial, se animará */
  backdrop-filter: blur(15px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 30px;
  padding: 20px 30px;
  animation: borderColorChange 20s infinite;
}
@keyframes borderColorChange {
  0%   { border-color: black; }
  14%  { border-color: orange; }
  28%  { border-color: yellow; }
  42%  { border-color: green; }
  57%  { border-color: blue; }
  71%  { border-color: indigo; }
  85%  { border-color: violet; }
  100% { border-color: black; }
}

.wrapper h1 {
  font-size: 30px;
  text-align: center;
}
.wrapper h2 {
  font-size: 20px;
  text-align: center;
  color: rgb(236, 250, 229);
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.wrapper .input-box {
  width: 100%;
  height: 50px;
  position: relative;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 14px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #fff;
}

.input-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}

.wrapper .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #fff;
  text-decoration: none;
}

.wrapper .btn {
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.wrapper .register-link {
  text-align: center;
  font-size: 14px;
  margin: 20px 0 15px;
}

.wrapper .register-link p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.wrapper .register-link p a:hover {
  text-decoration: underline;
}
```
