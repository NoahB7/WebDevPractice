const quizData = [
    {
        question: 'How old is Noah?',
        a: '10',
        b: '20',
        c: '22',
        d: '23',
        rightanswer: 'c'
    },
    {
        question: 'What is the best programming language?',
        a: 'Java',
        b: 'a',
        c: 'b',
        d: 'Python',
        rightanswer: 'c'
    },
    {
        question: 'Is Computer Science fun?',
        a: 'Have you tried going outside?',
        b: 'It\'s alright',
        c: 'Yes!',
        d: 'Boring...',
        rightanswer: 'a'
    },
    {
        question: 'How many have you gotten right so far?',
        a: '0',
        b: '1',
        c: '2',
        d: '3',
        rightanswer: ''
    },
    {
        question: 'Who is considered the father of modern computer science?',
        a: 'Albert Einstein',
        b: 'Nikola Tesla',
        c: 'Elon Musk',
        d: 'Alan Turing',
        rightanswer: 'd'
    }
];

const question_element = document.getElementById('question');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');
const button = document.getElementById('submit');

var currentQuestion = 0;
var questionsCorrect = 0;
var currentRightAnswer = '';

const answerBox = ['a','b','c','d'];

loadQuiz();

// Created a class of "answer" to loop though all radio answer buttons
function getAnswer(){
    const answers = document.querySelectorAll('.answer');

    let answerId = '';
    
    answers.forEach((answerEl) => {
        if(answerEl.checked){
            // resetting radio button checks
            answerEl.checked = false;
            answerId = answerEl.id;
        }
    });
    return answerId;
}

function loadQuiz(){

    if(currentQuestion < quizData.length){

        const currentQuestionData = quizData[currentQuestion];

        // dynamically change answer for 4th question since it depends on the results of the first 3 questions
        if(currentQuestion == 3){
            currentQuestionData.rightanswer = answerBox[questionsCorrect];
        }
        currentRightAnswer = currentQuestionData.rightanswer;

        question_element.innerText = currentQuestionData.question;
        a_answer.innerText = currentQuestionData.a;
        b_answer.innerText = currentQuestionData.b;
        c_answer.innerText = currentQuestionData.c;
        d_answer.innerText = currentQuestionData.d;

    } else {
        document.getElementById('quiz').innerHTML = '<h2 style="padding:1rem;">You answered ' + questionsCorrect + ' questions correct out of 5! </h2> <button onclick = "location.reload()" id="submit">Reload</button>';
    }
}


button.addEventListener("click", () =>{

    let answer = getAnswer();
    if(answer){
        if(answer == currentRightAnswer){
            questionsCorrect++;
        }


        currentQuestion++;
        loadQuiz();
    }
});