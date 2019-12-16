const questions = [
    {
        question: "Is it ok to awaken a sleepwalker?",
        answers: ["Fact", "Fiction"],
        correct: 0,
        description:
        "They’ll be really confused, but it’s okay. They’re more likely to hurt themselves if they’re not awoken",
        link: "https://www.sleepfoundation.org/articles/sleepwalking"
    },
    {
        question: "Does Suger affect hyperactivity?",
        answers: ["Fiction", "Fact"],
        correct: 0,
        description:
        "Studies have disproved this. ADHD and poor behaviours still occurs in children with sugar-free diets",
        link: "https://www.bmj.com/content/337/bmj.a2769"
    },
    {
        question: "Is closure a real thing?",
        answers: ["Fact", "Fiction"],
        correct: 1,
        description:
        "No evidence this mythical emotional end state is ever achieved by victims of trauma, bereavement or loss",
        link: "https://academic.oup.com/ijtj/article/5/1/1/2357002"
    },
    {
        question: "Photogeneic memory is a real thing?",
        answers: ["Fiction", "Fact"],
        correct: 0,
        description:
        "No hard scientific evidence that a memory that mimics a camera is a real ability. Some people just have great or well-practised memories",
        link:
        "https://slate.com/technology/2006/04/no-one-has-a-photographic-memory.html"
    },
    {
        question: "Dont Eat and Swim",
        answers: ["Fact", "Fiction"],
        correct: 1,
        description:
        "Doesn’t increase risk of cramps; alcohol is the biggest risk increaser. But a full stomachwill make you short of breath",
        link:
        "https://www.nytimes.com/2005/06/28/health/the-claim-never-swim-after-eating.html"
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
