const listOfQuestions = [
  {
    id: 1,
    image: "https://i.pinimg.com/originals/6e/ca/e8/6ecae8cc2c4cabeb7f553c28363b7507.png",
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
      "https://i.pinimg.com/originals/56/d5/00/56d500c8adb9b09e5c0e25cefa25b70c.jpg",
    answers: {
      answer1: {
        answerAnime: "Serial Experiments Lain",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Neon Genesis Evangelion",
        answerValor: true,
      },
      answer3: {
        answerAnime: "Devilman Crybaby",
        answerValor: false,
      },
    },
  },
  {
    id: 4,
    image:
      "https://wealthofgeeks.com/wp-content/uploads/2021/12/3-Walls-in-Attack-on-Titan.jpg",
    answers: {
      answer1: {
        answerAnime: "Vinland Saga",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Kabaneri of the Iron Fortress",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Shingeki No Kyojin",
        answerValor: true,
      },
    },
  },
  {
    id: 5,
    image:
      "https://staticg.sportskeeda.com/editor/2023/01/f623d-16747863018707.png",
    answers: {
      answer1: {
        answerAnime: "Hunter x Hunter",
        answerValor: true,
      },
      answer2: {
        answerAnime: "Magi",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Fairy Tail",
        answerValor: false,
      },
    },
  },
  {
    id: 6,
    image:
      "https://c4.wallpaperflare.com/wallpaper/769/212/22/anime-cowboy-bebop-swordfish-ii-wallpaper-preview.jpg",
    answers: {
      answer1: {
        answerAnime: "Trigun",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Black Lagoon",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Cowboy Bebop",
        answerValor: true,
      },
    },
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/originals/be/f2/19/bef2191956bf421028df011d33a47cbe.jpg",
    answers: {
      answer1: {
        answerAnime: "Kaguya Sama: Love is War",
        answerValor: true,
      },
      answer2: {
        answerAnime: "Toradora",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Oregairu",
        answerValor: false,
      },
    },
  },
  {
    id: 8,
    image:
      "https://i.ytimg.com/vi/PDd7sh-qkYs/maxresdefault.jpg",
    answers: {
      answer1: {
        answerAnime: "Soul Eater",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Full metal alchemist:BroterHood",
        answerValor: true,
      },
      answer3: {
        answerAnime: "Shingeki no Kyojin",
        answerValor: false,
      },
    },
  },
  {
    id: 9,
    image:
      "https://i.pinimg.com/originals/4a/96/92/4a9692773aad7169d7942091b9739373.jpg",
    answers: {
      answer1: {
        answerAnime: "Soul Eater",
        answerValor: true,
      },
      answer2: {
        answerAnime: "Fire Force",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Blue Exorcist",
        answerValor: false,
      },
    },
  },
  {
    id: 10,
    image:
      "https://ramenparados.com/wp-content/uploads/2015/10/sword-art-online-aincrad-1920x1080-hd-wallpaper.jpg",
    answers: {
      answer1: {
        answerAnime: "Kami no Tou",
        answerValor: false,
      },
      answer2: {
        answerAnime: "Overlord",
        answerValor: false,
      },
      answer3: {
        answerAnime: "Sword Art Online",
        answerValor: true,
      },
    },
  },
];


const questionImage = document.getElementById("question-image");
const numberQuestion = document.getElementById("numberQuestion-image");
const question = document.getElementById("question");

const allButtonsImage = document.querySelectorAll("button");

/** Iterador Question para saber en que pregunta estamos y asi poder recorrer el array */
let questionIndex = 0;

/** Contador para saber cuantas acerto */
let points = 0;

const DELAY_MS_PAGE = 600;

/** Funcion que recarga las preguntas */
const loadNewQuestion = (questionsIndex, listButtons, listQuestions) => {
  console.log("Question iterator:", questionsIndex);
  //Animacion para que le de tiempo a cargar a la imagen
  listButtons.forEach((button) => {
    button.classList.add("disappear");
    question.classList.add("disappear");
    button.classList.remove("appear");
    question.classList.remove("appear");
  });

  setTimeout(() => {
    listButtons.forEach((button) => {
      button.classList.remove("disappear");
      question.classList.remove("disappear");
      button.classList.add("appear");
      question.classList.add("appear");
    });
  }, DELAY_MS_PAGE);

  let answerIterator = 1;

  numberQuestion.textContent = `Pregunta ${listQuestions[questionsIndex].id}`;
  listButtons.forEach((buttonCont) => {
    questionImage.setAttribute("src", listQuestions[questionsIndex].image);
    buttonCont.textContent =
      listQuestions[questionsIndex].answers[
        `answer${answerIterator}`
      ].answerAnime;
    answerIterator += 1;
  });
};

/** Funcion que corrobora si es verdadera o no */

const questionTrueOrFalse = (questionsIndex, event, listQuestions) => {
  for (let iterator = 1; iterator < 4; iterator++) {
    if (
      listQuestions[questionsIndex].answers[`answer${iterator}`].answerAnime ===
        event.target.textContent &&
      listQuestions[questionsIndex].answers[`answer${iterator}`].answerValor ===
        true
    ) {
      console.log("respuesta correcta +1 punto");
      points += 1;
    }else{
      console.log('era una respuesta normal')
    }
  }
};

/** Le agrego a todos los botones las mismas funcionalidades. */

allButtonsImage.forEach((button) => {
  loadNewQuestion(questionIndex, allButtonsImage, listOfQuestions);
  button.addEventListener("click", (e) => {
    questionTrueOrFalse(questionIndex, e, listOfQuestions);
    questionIndex = questionIndex + 1;
    if (questionIndex !== 10) {
      loadNewQuestion(questionIndex, allButtonsImage, listOfQuestions);
    } else {
      allButtonsImage.forEach((button) => {
        button.classList.remove("appear");
        question.classList.remove("appear");
        button.classList.add("disappear");
        question.classList.add("disappear");
      });
      setTimeout(() => {
        window.location.assign("./pointsGameImages.html");
      }, DELAY_MS_PAGE);

      localStorage.setItem('pointsGameImages',JSON.stringify(points))

    }
    console.log("hiciste un click");
    console.log("total de puntos", points);
    console.log("-----");
  });
});

