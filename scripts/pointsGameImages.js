const totalPoints = document.getElementById('points-count')
const gifPoints = document.getElementById('points-gif')

const gifs={
    gif1: 'https://media0.giphy.com/media/iM80c81yrXJvCxS3s7/giphy.gif',
    gif2: 'https://31.media.tumblr.com/ac86359c0a6c578e0710d30ac0bdef9b/tumblr_n5wjbui3aF1rc1ytxo1_500.gif',
    gif3: 'https://media.tenor.com/XpOVHJWYrckAAAAC/celebration-tuvigif.gif'
    
}

localStoragePoints = JSON.parse(localStorage.getItem('pointsGameImages'));
totalPoints.textContent=localStoragePoints

if(localStoragePoints >= 8){
    gifPoints.setAttribute('src', gifs.gif3)
}else if (localStoragePoints >= 5) {
    gifPoints.setAttribute('src', gifs.gif2) 
}else {
    gifPoints.setAttribute('src', gifs.gif1)
}

