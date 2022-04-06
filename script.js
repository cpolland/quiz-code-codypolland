var startBtn = document.getElementById("start-btn")
var nextBtn = document.getElementById("next-btn")
var btnOne = document.getElementById("btn-one")
var btnTwo = document.getElementById("btn-two")
var btnThree = document.getElementById("btn-three")
var btnFour = document.getElementById("btn-four")

var currentQuestion = {}
var trueAnswer = true
var score = 0


var questions = [
    {
        question: "What function lets you click on a button?",
        choice1:  'addEventListener',
        choice2:  'addActionListner',
        choice3:  'addRunListener',
        choice4:  'addBtnListener',
    },
    {
        question: "What is it called when you move around the DOM",
        choice1:  'DOM travel',
        choice2:  'DOM traversal',
        choice3:  'Window traveral',
        choice4:  'DOM navigation',
    },
    {
        question: "What singles out childen elements",
        choice1:  '.append',
        choice2:  '.addclass',
        choice3:  '.eq',
        choice4:  '.css',
    },
    {
        question: "What is it called when you stop the broswers default settings?",
        choice1:  'Browser stall',
        choice2:  'Preventing Default',
        choice3:  'Deafult pause',
        choice4:  'Defaut omit',
    }


]


//start the game - add event listener 

//move to the next question slide
//initiate timer count down fail if timer runs out
//answer the question if its right or wrong - add evetn listner to ever answer
//next question but to move to new slide - add event listener
//log results by putting in intials and showing score

