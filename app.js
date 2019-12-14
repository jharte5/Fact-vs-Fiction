

const fact = document.querySelector('#true')
const fiction = document.querySelector('#false')
const riddle = document.querySelector('#questions')
const factChecker = document.querySelector('#believe-me')
const pressStart = document.querySelector('#start-nq')

pressStart.addEventListener('click', openingQuestion)


const openingQuestion = function() {
    riddle.innerText = 'Is it ok to awaken a sleepwalker?';
}