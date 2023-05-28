const questions = [
  {
    id: 1,
    image: "https://pbs.twimg.com/media/CuqyqeyXYAAjuRe.jpg",
    answers: {
      answer1: {
        answerAnime: "One Piece",
        answerValor: true,
      },
      answer2: {
        answerAnime: "El increible castillo vagabundo",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Bleach",
        answerValor: false,
      },
    },
  },
  {
    id: 2,
    image:
      "https://laverdadnoticias.com/export/sites/laverdad/img/2020/09/25/10_cosas_que_no_sabxas_sobre_las_espadas_nichirin_6.jpg_1118837850.jpg",
    answers: {
      answer1: {
        answerAnime: "Kimtetsu No Yaiba",
        answerValor: true,
      },
      answer2: {
        answerAnime: "Sword Art Online",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Naruto",
        answerValor: false,
      },
    },
  },
  {
    id: 3,
    image:
      "https://laverdadnoticias.com/__export/1606238843594/sites/laverdad/img/2020/11/24/legion_de_reconocimiento_shingeki_no_kyojin.png_819446995.png",
    answers: {
      answer1: {
        answerAnime: "Martin",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Bleach",
        answerValor: true,
      },
      answer3: {
        answerAnime: "Atack on mario",
        answerValor: false,
      },
    },
  },
  {
    id: 4,
    image:
      "https://laverdadnoticias.com/__export/1606238843594/sites/laverdad/img/2020/11/24/legion_de_reconocimiento_shingeki_no_kyojin.png_819446995.png",
    answers: {
      answer1: {
        answerAnime: "Martin",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Bleach",
        answerValor: true,
      },
      answer3: {
        answerAnime: "Atack on mario",
        answerValor: false,
      },
    },
  },
];

const questionImage = document.getElementById("question-image");
const numberQuestion = document.getElementById("numberQuestion-image");
const question = document.getElementById("question");

const allButtonsImage = document.querySelectorAll("button");

/** Con un foreach a todos los nodos les agrego la misma funcionalidad, para no escribir codigo de mas */

/** Creo unas varialbes auxiliares para que no se mezclen con las de los otros botones... */
let questionInitiator = 0;
let answerInitiator = 1;

DELAY_MS_PAGE = 500
questionImage.setAttribute("src", questions[questionInitiator].image);
allButtonsImage.forEach((button) => {
  button.textContent =
    questions[questionInitiator].answers[
      `answer${answerInitiator}`
    ].answerAnime;
  answerInitiator += 1;

  /** Iterador Question para saber en que pregunta estamos y asi poder recorrer el array */
  let questionIterator = 1;

  /** Iterador de respuesta, para luego cambiar el contenido de las preguntas */
  let answerIterator = 1;

  /** Contador para saber cuantas acerto */
  let points = 0;

  button.addEventListener("click", (event) => {
    //Animacion para que le de tiempo a cargar a la imagen
    allButtonsImage.forEach((button) => {
      button.classList.add("disappear");
      question.classList.add("disappear");
      button.classList.remove("appear");
      question.classList.remove("appear");
    });

    setTimeout(() => {
      allButtonsImage.forEach((button) => {
        button.classList.remove("disappear");
        question.classList.remove("disappear");
        button.classList.add("appear");
        question.classList.add("appear");
      });
    }, DELAY_MS_PAGE);

    /** Cada vez que se registre un click, cambiara que pregunta se encuentra, recorro de nuevo los botones para reasignarle el contenido
     * de las respuestas.
     */
    if (questionIterator == 4) {
      allButtonsImage.forEach((button) => {
        button.classList.add("disappear");
        question.classList.add("disappear");
        button.classList.remove("appear");
        question.classList.remove("appear");
      });
      setTimeout(() => {
        window.location.assign("./pointsGameQuestions.html");
      }, DELAY_MS_PAGE);
      
    } else {
      numberQuestion.textContent = `Pregunta ${questions[questionIterator].id}`;
      allButtonsImage.forEach((buttonCont) => {
        questionImage.setAttribute("src", questions[questionIterator].image);
        buttonCont.textContent =
          questions[questionIterator].answers[
            `answer${answerIterator}`
          ].answerAnime;
        answerIterator += 1;
      });
      answerIterator = 1;
      for (let iterator = 1; iterator < 4; iterator++) {
        if (questions[questionIterator].answers[`answer${iterator}`].answerAnime == event.target.textContent &&questions[questionIterator].answers[`answer${iterator}`].answerValor == true) 
        {
          console.log("respuesta correcta +1 punto");
          points += 1;
          console.log(`total de puntos: ${points}`);
        }
      }
      console.log("hiciste un click");
      console.log(questionIterator);
    }
    console.log(questionIterator+'Este es el numero de pregunta del ciclo')
    questionIterator = questionIterator + 1;
  });
});


