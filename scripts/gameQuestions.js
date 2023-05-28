window.addEventListener("DOMContentLoaded", () => {
  //Creo el objeto con los datos para el juego
  const gameQuestionsData = [
    {
      question:
        "¿Cuál de los siguientes animes presenta a los personajes Monkey D. Luffy, Roronoa Zoro y Nami en su tripulación?",
      choices: ["Naruto", "One Piece", "One Punch Man"],
      answer: "One Piece",
    },

    {
      question:
        'En el anime "Naruto", ¿cuál es el nombre del mejor amigo y eterno rival de Naruto Uzumaki?',
      choices: ["Sasuke Uchiha", "Kakashi Hatake", "Jiraiya", "Saitama"],
      answer: "Sasuke Uchiha",
    },

    {
      question:
        '¿Cuál es el nombre del protagonista del anime "Attack on Titan" ("Shingeki no Kyojin" en japonés)?',
      choices: ["Eren Jaeger", "Levi Ackerman", "Mikasa Ackerman"],
      answer: "Eren Jaeger",
    },
    {
      question:
        '¿En el anime "Attack on Titan", ¿cuál es el nombre del escuadrón de élite que se encarga de enfrentar a los titanes?',
      choices: [
        "Escuadrón de Reconocimiento",
        "Escuadrón de Maniobras Tridimensionales",
        "Escuadrón de Operaciones Especiales",
      ],
      answer: "Escuadrón de Reconocimiento",
    },
    {
      question:
        'En el anime "My Hero Academia", ¿cuál es el nombre del profesor conocido como "All Might"?',
      choices: ["Izuku Midoriya", "Shoto Todoroki", "Toshinori Yagi"],
      answer: "Toshinori Yagi",
    },
    {
      question:
        'En el anime "Demon Slayer: Kimetsu no Yaiba", ¿cuál es el nombre del protagonista que busca vengar a su familia y proteger a su hermana?',
      choices: ["Tanjiro Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
      answer: "Tanjiro Kamado",
    },
    {
      question:
        "¿Cuál es el título del popular anime japonés en el cual el protagonista tiene un cuaderno con poderes?",
      choices: ["Code Geass", "Tokyo Ghoul", "Death Note"],
      answer: " Death Note",
    },
    {
      question:
        'En el anime "Dragon Ball Z", ¿cuál es el nombre del hijo de Goku?',
      choices: ["Gohan", "Vegeta", "Trunks"],
      answer: "Gohan",
    },
    {
      question:
        '¿Cuál es el nombre del protagonista masculino en el anime "My Hero Academia"?',
      choices: ["Izuku Midoriya", "Shoto Todoroki", "Katsuki Bakugo"],
      answer: "Izuku Midoriya",
    },
    {
      question:
        'En el anime "Fullmetal Alchemist: Brotherhood", ¿cuál es el nombre del protagonista principal?',
      choices: ["Edward Elric", "Roy Mustang", "Alphonse Elric"],
      answer: "Alphonse Elric",
    },
  ];

  //Defino la clase
  class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }

    //Metodo que devuelve el valor de la respuesta (boolean)
    correctAnswer(choiceOfUser) {
      return choiceOfUser === this.answer;
    }
  }

  const arrayOfQuestions = gameQuestionsData.map(
    (question) =>
      new Question(question.question, question.choices, question.answer)
  );

  /*Variable para guardar el puntaje en Local Storage*/
  let scoreOfUser = 0;

  class Trivia {
    //le paso las opciones al constructor
    constructor(questions) {
      this.questions = questions;
    }

    //Inicializo el indice en 0 para saber cuando empieza el arreglo
    questionIndex = 0;
    score = 0;

    //Metodo para saber en que pregunta el usuario se encuentra
    getQuestionIndex() {
      return this.questions[this.questionIndex];
    }

    //Para saber cuando terminan las preguntas de la trivia
    endOfTrivia() {
      return this.questions.length === this.questionIndex; //Me devuelve la pregunta final para saber si ya termino
    }

    //Para cuando el usuario seleccione una opcion, cuando el usuario seleccione, me devuelve el indice de la seleccion.
    guess(answer) {
      console.log(answer);
      if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++; //aumento el score
        scoreOfUser = this.score;
      }

      return this.questionIndex++;
    }
  }

  /*Creo otra clase para mostrar las preguntas y opciones en el HTML */
  class HtmlVision {
    constructor() { }

    questionsForUser(text) {
      const titleOfQuestion = document.getElementById("question");
      titleOfQuestion.innerText = text;
    }

    choicesForUser(choices, callback) {
      const listOfAnswers = document.getElementById("list-answers");
      // limpio el html para que no me acumule las respuestas cada vez que selecciono
      listOfAnswers.innerText = "";

      for (let i = 0; i < choices.length; i++) {
        const button = document.createElement("button");
        button.innerText = choices[i];
        button.className = "answer";
        //devuelvo el texto del boton
        button.addEventListener("click", () => callback(choices[i]));

        listOfAnswers.appendChild(button);
      }
    }
  }


  const scorePage = (htmlVision, trivia) => {
    if (trivia.endOfTrivia()) {
      showScore(trivia.score); // Llamada a la función showScore directamente
    } else {
      // Cargo las preguntas
      htmlVision.questionsForUser(trivia.getQuestionIndex().text);

      // Cargo las opciones y manejo de la elección del usuario
      htmlVision.choicesForUser(
        trivia.getQuestionIndex().choices,
        (actualChoice) => {
          trivia.guess(actualChoice); // para la opción elegida por el usuario
          scorePage(htmlVision, trivia); // vuelvo a cargar todo llamando a la función
        }
      );
    }
  };

  /*Funcion para mostrar el puntaje, creando un h2 que lo carga en el HTML*/
  const showScore = (score) => {
    const endTrivia = `<h1 class="score-title">TU PUNTAJE ES... </h1>
                              <h2 class="score-number">${score}</h2>`;
    const elementOfHTMLscore = document.getElementById("gameQuestion");
    elementOfHTMLscore.innerHTML = endTrivia;
    saveScoreLocalStorage(scoreOfUser);
  };

  /*Funcion para el desarrollo de la trivia*/
  const developmentOfTrivia = () => {
    const trivia = new Trivia(arrayOfQuestions);
    const htmlVision = new HtmlVision();

    scorePage(htmlVision, trivia);
  };

  /*Funcion para guardar el puntaje en el LocalStorage*/
  const saveScoreLocalStorage = (score) => {
    localStorage.setItem("PUNTAJE", JSON.stringify(score));
  };


  developmentOfTrivia();
  console.log('Hola Damian')
});
