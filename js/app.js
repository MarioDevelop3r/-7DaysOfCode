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
  let edad;
  do {
    edad = prompt("¿Cuántos años tienes?");
  } while (!validarNumero(edad));

  let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

  // Mensaje principal con personalización y un toque motivacional
  const mensaje = `¡Hola ${nombre}! Es increíble que a tus ${edad} años ya estés aprendiendo ${lenguaje}. ¡Sigue así, vas por buen camino!`;
  alert(mensaje);

  // Ejercicio opcional con validación
  let respuesta;
  do {
    respuesta = prompt(
      `¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`
    );
  } while (respuesta !== "1" && respuesta !== "2");

  if (respuesta == "1") {
    alert("¡Excelente! La constancia es clave para el éxito. ¡Sigue adelante!");
  } else {
    alert(
      "No te desanimes, explorar otros lenguajes también puede ser muy enriquecedor."
    );
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
