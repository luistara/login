const usuarios = [
  {
    nombre: "Luis",
    apellido: "Tarazona",
    telefono: "1012373660",
    correo: "latp36@gmail.com",
    contrasena: "1234",
    aceptaNotificaciones: true,
  },
  {
    nombre: "Ana",
    apellido: "Gómez",
    telefono: "87654321",
    correo: "ana@hotmail.com",
    contrasena: "5678ana",
    aceptaNotificaciones: false,
  },
  {
    nombre: "Luis",
    apellido: "Martínez",
    telefono: "101254545",
    correo: "luis@gmail.com",
    contrasena: "luis321",
    aceptaNotificaciones: true,
  },
  {
    nombre: "María",
    apellido: "Rodríguez",
    telefono: "9568444",
    correo: "maria@gmail.com",
    contrasena: "Mari32",
    aceptaNotificaciones: false,
  },
  {
    nombre: "Pedro",
    apellido: "López",
    telefono: "845151554",
    correo: "pedro@yahoo.com",
    contrasena: "Pedro36",
    aceptaNotificaciones: true,
  },
];

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usuarioEncontrado = usuarios.find(
      (user) => user.correo === username && user.contrasena === password
    );

    if (usuarioEncontrado) {
      sessionStorage.setItem(
        "usuarioAutenticado",
        JSON.stringify(usuarioEncontrado)
      );
      window.location.href = "paginaPrincipal.html";
    } else {
      document.getElementById("loginMessage").textContent =
        "Usuario no encontrado o contraseña incorrecta.";
    }
  });
