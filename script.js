// questions list

const questions = [
    {
        title: 'The attribute of <form> tag',
        options: ['A. Method', 'B. Action', 'Both (a)&(b)', 'None of these'],
        answer: 'Both (a)&(b)'
    },
    {
        title: 'Markup tags tell the web browser',
        options: ['A. How to organise the page', 'B. How to display the page', 'c. How to display message box on page', 'D. None of these'],
        answer: 'B. How to display the page'
    },
    {
        title: 'www is based on which model?',
        options: ['A. Local-server', 'B. Client-server', 'C. 3-tier', 'D. None of these'],
        answer: 'B. Client-server'
    },
    {
        title: 'HTML is a subset of',
        options: ['A. SGMT', 'B. SGML', 'C. SGMD', 'D. None of these'],
        answer: 'B. SGML'
    },
    {
        title: 'Character encoding is',
        options: ['A. method used to represent numbers in a character', 'B. method used to represent character in a number', 'C. a system that consists of a code which pairs each character with a pattern,sequence of natural numbers or electrical pulse in order to transmit the data', 'D. none of these'],
        answer: 'C. a system that consists of a code which pairs each character with a pattern,sequence of natural numbers or electrical pulse in order to transmit the data'
    },
    {
        title: 'If we don\'t want to allow a floating div to the left side of an element, which css property will we use ?',
        options: ['A. margin', 'B. clear', 'C. float', 'D. padding'],
        answer: 'B. clear'
    },
    {
        title: 'Can we align a Block element by setting the left and right margins ?',
        options: ['A. Yes, we can', 'B. Not possible'],
        answer: 'B. Not possible'
    },
    {
        title: 'If we want to wrap a block of text around an image, which css property will we use ?',
        options: ['A. wrap', 'B. push', 'C. float', 'D. align'],
        answer: 'C. float'
    },
    {
        title: 'If we want to show an Arrow as cursor, then which value we will use ?',
        options: ['A. pointer', 'B. default', 'C. arrow', 'D. arr'],
        answer: 'B. default'
    },
    {
        title: 'When we write <img src="img.png">, what "img.png" inside double quote implies?',
        options: ['A. element', 'B. attribute', 'C. value', 'D. operator'],
        answer: 'C. value'
    },
    {
        title: 'Which company developed JavaScript?',
        options: ['A. Netscape', 'B. Bell Labs', 'C. Sun Microsystems', 'D. IBM'],
        answer: 'A. Netscape',
    },
    {
        title: 'Which of the following is the correct syntax to display "Letsfindcourse" in an alert box using JavaScript?',
        options: ['A. alert-box("Letsfindcourse");', 'B. confirm("Letsfindcourse");', 'C. msgbox("Letsfindcourse");', 'D. alert("Letsfindcourse");'],
        answer: 'D. alert("Letsfindcourse");'
    },
    {
        title: 'Which of the following is not Javascript frameworks or libraries?',
        options: ['A. Polymer', 'B. Meteor', 'C. Cassandra', 'D. jQuery'],
        answer: 'C. Cassandra'
    },
    {
        title: 'Among the following, which one is a ternary operator in JavaScript?',
        options: ['A. #', 'B. ::', 'C. &:', 'D. ?:'],
        answer: 'D. ?:'
    },
    {
        title: 'Among the keywords below, which one is not a statement?',
        options: ['A. if', 'B. with', 'C. debugger', 'D. use strict'],
        answer: 'D. use strict'
    },
    {
        title: 'Which of the following are the errors in JavaScript?',
        options: ['A. Load time errors', 'B. Run time errors:', 'C. Logical Errors:', 'D. All of the above'],
        answer: 'B. Run time errors:'
    },
    {
        title: 'Which of the following are the functional components in JavaScript?',
        options: ['A. First-class functions', 'B. Encapsulated-class functions', 'C. Fixed-class functions', 'D. All of the above'],
        answer: 'A. First-class functions'
    },
    {
        title: 'The syntax of Eval is ________________',
        options: ['A. [objectName.]eval(numeric)', 'B. [objectName.]eval(string)', 'C. [EvalName.]eval(string)', 'D. [EvalName.]eval(numeric)'],
        answer: 'B. [objectName.]eval(string)'
    },
    {
        title: 'What is the default value of the async attribute?',
        options: ['A. 0', 'B. 1', 'C. False', 'D. True'],
        answer: 'D. True'
    },
    {
        title: 'Which method receives the return value of setInterval() to cancel future invocations?',
        options: ['A. clearInvocation()', 'B. cancelInvocation()', 'C. clearInterval()', 'D. clear()'],
        answer: 'C. clearInterval()'
    },
]

let score = []
let count = 0
let barWidth = 0

// name and buttons selectors
const name = document.querySelector('.nickname')
const startButton = document.querySelector('.start-button')
const nextButton = document.querySelector('.next-button')
const finishButton = document.querySelector('.finish-button')


// div selectors
const startPage = document.querySelector('.start-page')
const game = document.querySelector('.game')
const scoreBoard = document.querySelector('.score-board')
const scoreHeading = document.querySelector('.score')
const scoreTable = document.querySelector('.score-table')
const progressContainer = document.querySelector('.progress-container')
const progressBar = document.querySelector('.progress-bar')
const form = document.querySelector('.form')


// start game event listeners

startButton.addEventListener('click', () => {
    startPage.style.display = 'none'
    score.unshift({
        name: name.value,
        score: 0
    })

    progressContainer.classList.remove('hidden')
    progressBar.style.width = '5%'
    
    const q = document.createElement('h2')
    q.textContent = questions[count].title
    form.appendChild(q)

    questions[count].options.forEach(option => {
        const input = document.createElement('input')
        const label = document.createElement('label')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'answer')
        input.value = option
        label.appendChild(input)
        label.innerHTML += option + '<br>'
        form.appendChild(label)
    });
    
    nextButton.classList.remove('hidden')
})

// next button event listener

nextButton.addEventListener('click', () => {
    if (!document.querySelector('input[name=answer]:checked')){
        return alert('Must provide an answer!')
    }
    const answer = document.querySelector('input[name=answer]:checked').value
    if (answer === questions[count].answer){
        score[0].score++
    } else {
        alert(`Correct answer: ${questions[count].answer}`)
    }
    count++
    barWidth = ((count + 1)/.20)
    progressBar.style.width = `${barWidth}%`
    form.innerHTML = ''
    const q = document.createElement('h2')
    q.textContent = questions[count].title
    form.appendChild(q)

    questions[count].options.forEach(option => {
        const input = document.createElement('input')
        const label = document.createElement('label')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'answer')
        input.value = option
        label.appendChild(input)
        label.innerHTML += option + '<br>'
        form.appendChild(label)
    });
    if (count === 19) {
        nextButton.classList.add('hidden')
        finishButton.classList.remove('hidden')
    }
})

// finish button even listener

finishButton.addEventListener('click', () => {
    if (!document.querySelector('input[name=answer]:checked')){
        return alert('Must provide an answer!')
    }
    const answer = document.querySelector('input[name=answer]:checked').value
    if (answer === questions[count].answer){
        score[0].score++
    } else {
        alert(`Correct answer: ${questions[count].answer}`)
    }

    finishButton.classList.add('hidden')
    form.innerHTML = ''
    count = 0
    barWidth = 0
    progressContainer.classList.add('hidden')
    scoreBoard.classList.remove('hidden')

    scoreHeading.textContent = `Your Score : ${(score[0].score)/.20}%`
    scoreTable.innerHTML += `<tr>
        <td>${score[0].name}</td>
        <td>${score[0].score}</td></tr>`
})