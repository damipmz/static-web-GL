const buttonGameImages = document.getElementById('button-game-images');
const buttonGameQuestions = document.getElementById('button-game-questions');

buttonGameImages.addEventListener('click',(eventButtonGameImages)=>{
    window.location.assign('pages/gameImages.html')
})

buttonGameQuestions.addEventListener('click',(eventButtonGameQuestions)=>{
    window.location.assign('pages/gameQuestions.html')
})