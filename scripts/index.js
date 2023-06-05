const buttonGameImages = document.getElementById("button-game-images");
const buttonGameQuestions = document.getElementById("button-game-questions");
const paragraphIndex = document.getElementById("curiosity-index");

buttonGameImages.addEventListener("click", (eventButtonGameImages) => {
  window.location.assign("pages/gameImages.html");
});

buttonGameQuestions.addEventListener("click", (eventButtonGameQuestions) => {
  window.location.assign("pages/gameQuestions.html");
});

const curiosities = [
  {
    curiosity:
      "Eiichiro Oda reveló en una entrevista que si él fuera un personaje de la serie One Piece, sería un pirata y su habilidad especial sería dibujar rápido.",
  },
  {
    curiosity:
      "Goku originalmente iba a tener una apariencia muy diferente. El diseño inicial mostraba a Goku con barba y bigote.",
  },
  {
    curiosity: `En "Naruto", el personaje de Itachi Uchiha es conocido por su técnica visual llamada Sharingan. El símbolo en sus ojos representa la forma de una tomoe, que en la mitología japonesa es un símbolo de protección contra el mal.`,
  },
  {
    curiosity: `Hajime Isayama reveló que se inspiró en la película de live action "Spider-Man" para crear la idea de los personajes que pueden moverse rápidamente y trepar por las paredes.`,
  },
  {
    curiosity: `L fue creado originalmente como un antagonista que aparecería solo en la primera mitad del manga. Sin embargo, debido a su popularidad, se decidió extender su papel en la historia.`,
  },
  {
    curiosity: `En "Hunter x Hunter", el autor Yoshihiro Togashi se inspiró en su esposa, la mangaka Naoko Takeuchi (creadora de "Sailor Moon"), para crear al personaje de Biscuit Krueger. Biscuit es una versión caricaturizada de su esposa.`,
  },
];

const DELAYMS = 15000;
let index = 0;
paragraphIndex.textContent = curiosities[index].curiosity;
const sumNum = () => {
  index = (index + 1) % 6;
  return index;
};
setInterval(sumNum, DELAYMS);

setInterval(() => {
  paragraphIndex.textContent = curiosities[index].curiosity;
}, DELAYMS + 1);
