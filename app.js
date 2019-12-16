const questions = [
    {
        question: 'Is it ok to awaken a sleepwalker?',
        answers: ['Fact', 'Fiction'],
        correct: 0,
        description:
        'They’ll be really confused, but it’s okay. They’re more likely to hurt themselves if they’re not awoken',
        link: 'https://www.sleepfoundation.org/articles/sleepwalking'
    },
    {
        question: 'Does Sugar effect hyperactivity?',
        answers: ['Fiction', 'Fact'],
        correct: 0,
        description:
        'Studies have disproved this. ADHD and poor behaviours still occurs in children with sugar-free diets',
        link: 'https://www.bmj.com/content/337/bmj.a2769'
    },
    {
        question: 'Is closure a real thing?',
        answers: ['Fact', 'Fiction'],
        correct: 1,
        description:
        'No evidence this mythical emotional end state is ever achieved by victims of trauma, bereavement or loss',
        link: 'https://academic.oup.com/ijtj/article/5/1/1/2357002'
    },
    {
        question: ' Is photogenic memory real?',
        answers: ['Fiction', 'Fact'],
        correct: 0,
        description:
        'No hard scientific evidence that a memory that mimics a camera is a real ability. Some people just have great or well-practiced memories',
        link:
        'https://slate.com/technology/2006/04/no-one-has-a-photographic-memory.html'
    },
    {
        question: 'Dont Eat and Swim',
        answers: ['Fact', 'Fiction'],
        correct: 1,
        description:
        'Doesn’t increase risk of cramps; alcohol is the biggest risk increaser. But a full stomach will make you short of breath',
        link:
        'https://www.nytimes.com/2005/06/28/health/the-claim-never-swim-after-eating.html'
    }
];

// variables

let tags;
let tagsClass = '';
let liTagsid = [];
let correctAns = 0;
let quizPage = 1;

let currentIndex = 0;
let currentQuestion = questions[currentIndex];

let previousQuestion;
let previousIndex = 0;

const ulTag = document.getElementsByTagName('ul')[0];
const button = document.getElementById('submit');
const questionTitle = document.getElementById('question');

const classHighlight = 'selected';

// ok so this is where we display answers and highlight whats selected
const showQuestions = function () {
    if (currentIndex !== 0) {
        ulTag.innerHTML = '';
        button.innerHTML = 'Submit';
        button.className = 'submit';
        button.id = 'submit';

        document.getElementById('quizNumber').innerHTML = quizPage

    }

    if(currentIndex == questions.length) {
        ulTag.innerHTML = '';
        document.getElementById('question').innerHTML = '';

        showResults();
        return;
    }

    questionTitle.innerHTML = currentQuestion.question;
    console.log(currentQuestion.question);


    for(let i = 0; i<currentQuestion.answers.length; i++) {
        let newAns = document.createElement('li');
        newAns.id = 'ans' + (i+1);
        newAns.className = 'notSelected';
        const textAns = document.createTextNode(currentQuestion.answers[i]);
        newAns.appendChild(textAns);
        let addNewAnsHere = document.getElementById('answer');
        addNewAnsHere.appendChild(newAns);

        console.log(currentQuestion.answers[i])
    }

    let $liTags = $('.notSelected').click(function(list) {
        list.preventDefault();
        $liTags.removeClass(classHighlight);
        $(this).addClass(classHighlight);

        for (let i = 0; i < currentQuestion.answers.length; i++) {
            if ($liTags[i].className == 'notSelected selected') {
                tags = $liTags[i].id;
                console.log(tags);
                tagsClassName = $liTags[i];
            }
        }
    });

    button.onclick = function() {
        checkAnswer();
    }
}

showQuestions();

// ok so this function checks the answer if its correct or not 
function checkAnswer() {
    let selectedItem = document.getElementById(tags);
    if (selectedItem == undefined) {
        alert('Please select an answer!');
        console.log('selected Item', selectedItem);
        return;
    } else {
      // get user answer in form of text
        const userAns = selectedItem.innerHTML;

      // change the background of the answer according to the Results
        if (userAns == currentQuestion.answers[currentQuestion.correct]) {
        console.log('Correct! The answer is: ' + userAns);
        // change color of selected item by changing className
        selectedItem.className = 'correct';
        // count the number of correct answers
        correctAns++;
        console.log(correctAns);
    } else {
        let showMore = document.createElement('div');
        showMore.className = 'showMore';
        let description = document.createElement('p');
        description.innerHTML = currentQuestion.description;
        let believe = document.createElement('a');
        believe.innerHTML = 'Don\'t Believe Me?';
        believe.href = currentQuestion.link;
        believe.setAttribute('target', '_blank');
        showMore.append(description, believe);
        ulTag.appendChild(showMore);
        console.log('Wrong! The correct answer is: ' + currentQuestion.answers[currentQuestion.correct]
        );
        //change the background of the wrong answer
        selectedItem.className = 'wrong';
        //highlight the right answer if the user got it wrong
        //change the class name of the correct answer
        ulTag.getElementsByTagName('li')[currentQuestion.correct].className =
            'correct';

            console.log(currentQuestion.answers[currentQuestion.correct]);
    }

        // Create a next Question button once the answer has been submitted
        button.innerHTML = 'Next Question';
        button.className = 'next';
        button.id = 'next';

        previousQuestion = currentQuestion;
        quizPage++;
        currentIndex++;
        currentQuestion = questions[currentIndex];

      // Start with the next question once the "Next" button has been clicked
        button.onclick = function() {
        showQuestions();
        };
    }
    return;
}

// ok so this headache was the final score
function showResults() {
    const displayArea = document.getElementById('display-area');
    //deleting page number
    document.getElementById('pages').innerHTML = '';

    // Change Title
    questionTitle.innerHTML = '<h1>Your Score</h1>';

    // Get the area that will be used to display the user's score
    let newInfo = document.getElementById('quiz-results');
    newInfo.innerHTML = '';

    // adding the score
    let newScore = document.createElement('h3');
    newScore.innerHTML = `${Math.floor(correctAns * 10)}`;
    newInfo.appendChild(newScore);

    //start again and home button
    let startHome = document.createElement('div');
    startHome.className = 'startHome';
    let startAgain = document.createElement('a');
    startAgain.innerHTML = 'Start again';
    startAgain.href = 'fvfgame.html';
    let goHome = document.createElement('a');
    goHome.innerHTML = 'Go Home';
    goHome.href = 'index.html';
    startHome.append(startAgain, goHome);
    displayArea.appendChild(startHome);

    if (correctAns >= 4) {
        let newCongrats = document.createElement('p');
        newCongrats.innerHTML = 'Congratulations! You did a Good Job!';
        displayArea.appendChild(newCongrats);
    }
}