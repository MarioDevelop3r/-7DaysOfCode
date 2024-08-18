let numeroUn = 1;
let stringUn = "1";

let numeroTreinta = 30;
let stringTreinta = "30";

let numeroDiez = 10;
let stringDiez = "10";

if (numeroUn == stringUn) {
  console.log(
    "Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes"
  );
} else {
  console.log("Las variables numeroUn y stringUn no tienen el mismo valor");
}

if (numeroTreinta === stringTreinta) {
  console.log(
    "Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo"
  );
} else {
  console.log(
    "Las variables numeroTreinta y stringTreinta no tienen el mismo tipo"
  );
}

if (numeroDiez == stringDiez) {
  console.log(
    "Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes"
  );
} else {
  console.log("Las variables numeroDiez y stringDiez no tienen el mismo valor");
}

// dia 2

// Función que contiene la lógica del Día 2
function iniciarInteraccionDia2() {
  // Función para validar que se ingrese un número
  function validarNumero(input) {
    return !isNaN(input) && input !== "";
  }

  // Preguntas iniciales con validación
  let nombre = prompt("¿Cuál es tu nombre?");
  if (!nombre) {
    Swal.fire(`Error`, `Por favor, ingresa un nombre válido, no puede estar vacio.`, "error");
    return;
  }

  let edad;
  do {
    edad = prompt("¿Cuántos años tienes?");
    if (edad === null) return; // Si el usuario presiona "Cancelar", se detiene la interacción
  } while (!validarNumero(edad));

  let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
  if(!lenguaje) {
    Swal.fire(`Error`, `Por favor, ingresa un lenguaje válido, no puede estar vacio.`, "error");
    return;
  }

  // Mensaje principal con personalización y un toque motivacional
  const mensaje = `¡Hola ${nombre}! Es increíble que a tus ${edad} años ya estés aprendiendo ${lenguaje}. ¡Sigue así, vas por buen camino!`;
  alert(mensaje);

  // Ejercicio opcional con validación
  let respuesta;
  do {
    respuesta = prompt(
      `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`
    );
  } while (respuesta !== "1" && respuesta !== null);

  if (respuesta == "1") {
    alert("¡Excelente! La constancia es clave para el éxito. ¡Sigue adelante!");
  } else if (respuesta === "2") {
    alert(
      "No te desanimes, explorar otros lenguajes también puede ser muy enriquecedor."
    );
  } else {
    alert("¡Gracias por participar! 🚀");
  }

  // Mensaje final motivacional
  alert(
    "¡Recuerda, cada pequeño paso que das te acerca a ser un gran programador! 🚀"
  );
}

// Asegúrate de que el script se ejecute después de que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Asocia la función al evento click en el título del Día 2
  document
    .getElementById("dia2")
    .addEventListener("click", iniciarInteraccionDia2);
    
});

//  efecto haz click en el título del Día 2 para interactuar con el script

const element = document.getElementById("dia2");

element.addEventListener("mouseover", () => {
  element.classList.add("active");
});

element.addEventListener("mouseout", () => {
  element.classList.remove("active");
});

// dia 3

// Función que contiene la lógica del Día 3

document
  .getElementById("startGame")
  .addEventListener("click", async function () {
    //Despalzar al usuario a la sección de juego
    document.getElementById("dia-3").scrollIntoView({ behavior: "smooth" });

    const { value: area } = await Swal.fire({
      title: "¿En qué área te gustaría trabajar?",
      input: "select",
      inputOptions: {
        Frontend: "Frontend",
        Backend: "Backend",
      },
      inputPlaceholder: "Selecciona un área",
      showCancelButton: true,
    });

    if (area) {
      let frameworkOrLang;
      // Preguntas adicionales según el área seleccionada

      if (area === "Frontend") {
        ({ value: frameworkOrLang } = await Swal.fire({
          title: "¿Qué framework de frontend te gustaría aprender?",
          input: "select",
          inputOptions: {
            React: "React",
            Vue: "Vue",
          },
          inputPlaceholder: "Selecciona un framework",
          showCancelButton: true,
        }));
      } else if (area === "Backend") {
        ({ value: frameworkOrLang } = await Swal.fire({
          title: "¿Qué lenguaje de programación te gustaría aprender?",
          input: "select",
          inputOptions: {
            "C#": "C#",
            Java: "Java",
          },
          inputPlaceholder: "Selecciona un lenguaje",
          showCancelButton: true,
        }));
      }

      if (frameworkOrLang) {
        // Mensaje final con las elecciones del usuario

        await Swal.fire(
          `¡Genial! Te gustaría trabajar en ${area} y aprender ${frameworkOrLang}.`
        );

        const { value: fullstack } = await Swal.fire({
          title: "¿Te gustaría ser desarrollador FullStack?",
          input: "checkbox",
          inputValue: 1,
          text: "¡La versatilidad siempre es una gran ventaja!",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        });

        if (fullstack) {
          await Swal.fire(
            "¡Excelente! La versatilidad siempre es una gran ventaja."
          );
        } else {
          await Swal.fire(
            "¡Entendido! Es importante especializarse en un área para ser un experto."
          );
        }

        let tecnologias = [];
        let otraTecnologia = true;

        // mientras el usuario quiera agregar más tecnologías

        while (otraTecnologia) {
          const { value: tecnologia } = await Swal.fire({
            title: "Ingresa una tecnología que te gustaría aprender",
            input: "text",
            inputPlaceholder: "Nombre de la tecnología",
            showCancelButton: true,
          });

          if (tecnologia) {
            tecnologias.push(tecnologia);
            await Swal.fire(
              `Buena elección, ${tecnologia} es una excelente tecnología.`
            );
          }

          otraTecnologia = await Swal.fire({
            title: "¿Quieres agregar otra tecnología?",
            input: "checkbox",
            inputValue: 1,
            text: "Selecciona esta opción para agregar más tecnologías.",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
          }).then((result) => result.value);
        }

        // Mensaje final con las tecnologías seleccionadas

        if (tecnologias.length > 0) {
          await Swal.fire(
            `¡Genial! Te gustaría aprender: ${tecnologias.join(", ")}`
          );
        } else {
          await Swal.fire({
            title: "¡Entendido!",
            text:
              "No hay problema, puedes seguir explorando nuevas tecnologías.",
            icon: "info",
          });
        }
      }
    } else {
      await Swal.fire({
        title: "¡Entendido!",
        text: "Por favor, ingresa un área válida (Frontend o Backend).",
        icon: "alarm",
      });
    }
  });

// dia 4

// Función que contiene la lógica del Día 4

document
  .getElementById("startGameDay4")
  .addEventListener("click", function () {
    Swal.fire({
      title: "¡Bienvenido al Día 4!",
      text:
        "¡Vamos a jugar un juego de adivinanzas! 🎉. Tienes solo 3 intentos.",
      icon: "question",
      confirmButtonText: "¡Comencemos!",
    }).then(() => {
      const numeroCorrecto = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
      console.log(numeroCorrecto);
      let intentos = 3;

      function adivinar() {
        Swal.fire({
          title: `Intento ${4 - intentos}`,
          input: "number",
          inputAttributes: {
            min: 0,
            max: 10,
          },
          showCancelButton: true,
          confirmButtonText: "Adivinar",
          cancelButtonText: "Salir del juego",
          preConfirm: (value) => {
            if (value === "" || isNaN(value) || value < 0 || value > 10) {
              Swal.showValidationMessage(
                "Por favor, ingresa un número válido entre el 0 y el 10."
              );
            } else {
              return value;
            }
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const adivinanza = parseInt(result.value, 10);

            if (adivinanza === numeroCorrecto) {
              Swal.fire({
                html: "<h2 class='glitter'>¡Felicidades! ¡Adivinaste el número correcto!</h2>",
                text: `El número correcto era ${numeroCorrecto}.`,
                icon: "success",
                confirmButtonText: "Genial!",
              }).then(() => {
                showGlitter(); // Llamar a la función para mostrar glitter
              });
            } else {
              intentos--;
              if (intentos > 0) {
                Swal.fire({
                  title: "¡Incorrecto!",
                  text: "¡Sigamos intentando! 🚀",
                  icon: "error",
                  confirmButtonText: "Intentar de nuevo",
                }).then(() => {
                  adivinar();
                });
              } else {
                Swal.fire({
                  title: "¡Lo siento!",
                  text: `El número correcto era ${numeroCorrecto}.`,
                  icon: "error",
                  confirmButtonText: "Entendido",
                });
              }
            }
          }
        });
      }
      adivinar();
    });
  });

// Glitter effect function
function showGlitter() {
  const canvas = document.getElementById("glitterCanvas");
  const ctx = canvas.getContext("2d");

  // Ajustar tamaño del canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 100; // Número de partículas de glitter

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: Math.random() * 5 + 2, // Tamaño aleatorio
      speedX: (Math.random() - 0.5) * 10, // Velocidad en X
      speedY: (Math.random() - 0.5) * 10, // Velocidad en Y
      color: `rgba(255, 215, 0, ${Math.random()})`, // Color dorado con opacidad aleatoria
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.size *= 0.95; // Desvanecer tamaño gradualmente

      if (p.size > 0.5) {
        
        // Dibujar solo si la partícula es suficientemente grande
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (particles.some((p) => p.size > 0.5)) {
      requestAnimationFrame(animate);
    } else {
      canvas.classList.add("hidden"); // Ocultar canvas al terminar la animación
    }
  }

  canvas.classList.remove("hidden");
  animate();
}

  
