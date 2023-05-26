const questions = [
  {
    id: 1,
    image: "https://pbs.twimg.com/media/CuqyqeyXYAAjuRe.jpg",
    answers: {
      answer1: {
        answerAnime: "Santiago",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Gabi",
        answerValor: true,
      },
      answer3: {
        answerAnime: "XD",
        answerValor: false,
      },
    },
  },
  {
    id: 2,
    image: "https://laverdadnoticias.com/__export/1606238843594/sites/laverdad/img/2020/11/24/legion_de_reconocimiento_shingeki_no_kyojin.png_819446995.png",
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
    id: 3,
    image: "https://laverdadnoticias.com/__export/1606238843594/sites/laverdad/img/2020/11/24/legion_de_reconocimiento_shingeki_no_kyojin.png_819446995.png",
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
    image: "https://laverdadnoticias.com/__export/1606238843594/sites/laverdad/img/2020/11/24/legion_de_reconocimiento_shingeki_no_kyojin.png_819446995.png",
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

const allButtonsImage = document.querySelectorAll("button");

/** Con un foreach a todos los nodos les agrego la misma funcionalidad, para no escribir codigo de mas */

/** Creo unas varialbes auxiliares para que no se mezclen con las de los otros botones... */
let questionInitiator = 0;
let answerInitiator = 1;
questionImage.setAttribute('src', questions[questionInitiator].image);
allButtonsImage.forEach((button) => {

    button.textContent = questions[questionInitiator].answers[`answer${answerInitiator}`].answerAnime;
    answerInitiator += 1;

  /** Iterador Question para saber en que pregunta estamos y asi poder recorrer el array */
  let questionIterator = 1;
  
  /** Iterador de respuesta, para luego cambiar el contenido de las preguntas */
  let answerIterator = 1;
  
  /** Contador para saber cuantas acerto */
  let points = 0;
  
  button.addEventListener("click", (event) => {

    /** Cada vez que se registre un click, cambiara que pregunta se encuentra, recorro de nuevo los botones para reasignarle el contenido
     * de las respuestas.
     */
    numberQuestion.textContent = `Pregunta ${questions[questionIterator].id}`;
    allButtonsImage.forEach((buttonCont) => {
      questionImage.setAttribute('src', questions[questionIterator].image);
      buttonCont.textContent = questions[questionIterator].answers[`answer${answerIterator}`].answerAnime;
      answerIterator += 1;

    });
    answerIterator = 1;
    for(let iterator = 1 ; iterator < 4 ; iterator ++){
        if((questions[questionIterator].answers[`answer${iterator}`].answerAnime == event.target.textContent) && (questions[questionIterator].answers[`answer${iterator}`].answerValor == true)){
            console.log('respuesta correcta +1 punto')
            points+=1
            console.log(`total de puntos: ${points}`)
        }
    }   
    
    questionIterator = questionIterator + 1;
    console.log('hiciste un click')

  });
});

/**  setTimeout(() => {
    console.log("hiciste click en un boton");
}, 300);
*/
