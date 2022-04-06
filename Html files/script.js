var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var questionLog = document.getElementById('question-log')
var btnOne = document.getElementById("btn-one")
var btnTwo = document.getElementById("btn-two")
var btnThree = document.getElementById("btn-three")
var btnFour = document.getElementById("btn-four")

var currentQuestion = {}
var trueAnswer = true
var score = 0

startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
    currentQuestion++
    nextQuestion
})

function startQuiz(){
    startBtn.classList.add('hidden')
    currentQuestion = 0
}

var questions = [
    {
        question: "What function lets you click on a button?",
        answer: [
        { text: 'addEventListener', correct: true},
        {text:  'addActionListner',correct: false},
        {text:  'addRunListener', correct: false},
        {text:  'addBtnListener',correct: false},
        ]
    },
    {
        question: "What is it called when you move around the DOM",
        answer: [
        {text:  'DOM travel',correct:false},
        {text:  'DOM traversal',correct:true},
        {text:  'Window traveral',correct:false},
        {text:  'DOM navigation',correct:false},
        ]
    },
    {
        question: "What singles out childen elements",
        answer: [
        {text:  '.append',correct:false},
        {text:  '.addclass',correct:false},
        {text:  '.eq',correct:true},
        {text:  '.css',correct:false},
        ]
    },
    {
        question: "What is it called when you stop the broswers default settings?",
        answer: [
        {text:  'Browser stall',correct:false},
        {text:  'Preventing Default',correct:true},
        {text:  'Deafult pause',correct:false},
        {text:  'Defaut omit', correct:false},
        ]
    }


]

var points = 100
var questionsNumber = 4


//start the game - add event listener 

//move to the next question slide
//initiate timer count down fail if timer runs out
//answer the question if its right or wrong - add evetn listner to ever answer
//next question but to move to new slide - add event listener
//log results by putting in intials and showing score

