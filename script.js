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
    }
]

let score = []
let count = 0
let barWidth = 0

// name and buttons selectors
const name = document.querySelector('.nickname')
const startButton = document.querySelector('.start-button')
const nextButton = document.querySelector('.next-button')
const finishButton = document.querySelector('.finish-button')
const retryButton = document.querySelector('.retry-button')
const sortScore = document.querySelector('.sort')


// div selectors
const startPage = document.querySelector('.start-page')
const game = document.querySelector('.game')
const scoreBoard = document.querySelector('.score-board')
const scoreHeading = document.querySelector('.score')
const scoreTable = document.querySelector('.score-table')
const progressContainer = document.querySelector('.progress-container')
const progressBar = document.querySelector('.progress-bar')
const form = document.querySelector('.form')
const loading = document.querySelector('.loader')

// display question function
// different input options

const displayQuestion = () => {
    const q = document.createElement('h2')
    q.textContent = questions[count].title
    form.appendChild(q)
    if ( count % 3 == 0) {
        questions[count].options.forEach(option => {
            const input = document.createElement('input')
            const label = document.createElement('label')
            input.setAttribute('type', 'checkbox')
            input.setAttribute('name', 'answer')
            input.value = option
            label.appendChild(input)
            label.innerHTML += option + '<br>'
            form.appendChild(label)
        });
    } else if (count % 7 == 0 || count % 5 == 0) {
        const select = document.createElement('select')
        select.classList.add('select')
        questions[count].options.forEach(option => {
            const ans = document.createElement('option')
            ans.setAttribute('value', option)
            ans.textContent = option
            select.appendChild(ans)
        })
        form.appendChild(select)
    } else {
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
    }
}

// render score function

const renderScore = () => {
    scoreTable.innerHTML = `<tr>
    <th>Name</th>
    <th>Score</th></tr>`

    score.forEach(player => {
        scoreTable.innerHTML += `<tr>
        <td>${player.name}</td>
        <td>${player.score}</td></tr>`
    })
}

// start game event listeners

startButton.addEventListener('click', () => {
    startPage.classList.add('hidden')
    score.unshift({
        name: name.value,
        score: 0
    })

    progressContainer.classList.remove('hidden')
    progressBar.style.width = '5%'
    
    loading.classList.remove('hidden')

    setTimeout(function(){
        loading.classList.add('hidden')
        displayQuestion()        
        nextButton.classList.remove('hidden')

    }, 500)

    
})

// next button event listener

nextButton.addEventListener('click', () => {
    const answer = document.querySelector('input[name=answer]:checked') || document.querySelector('.select')
    if (!answer){
        return alert('Must provide an answer!')
    } else if (answer.value === questions[count].answer){
        score[0].score++
    } else {
        alert(`Correct answer: ${questions[count].answer}`)
    }
    count++
    barWidth = ((count + 1)/(questions.length/100))
    progressBar.style.width = `${barWidth}%`
    form.innerHTML = ''

    loading.classList.remove('hidden')

    setTimeout(function(){
        loading.classList.add('hidden')
        displayQuestion()
    }, 500)

    if (count === questions.length - 1) {
        nextButton.classList.add('hidden')
        finishButton.classList.remove('hidden')
    }
})

// finish button even listener

finishButton.addEventListener('click', () => {
    const answer = document.querySelector('input[name=answer]:checked') || document.querySelector('.select')
    if (!answer){
        return alert('Must provide an answer!')
    } else if (answer.value === questions[count].answer){
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

    scoreHeading.textContent = `Your Score : ${(score[0].score)/(questions.length/100)}%`
    renderScore()
})

// retry button event listener

retryButton.addEventListener('click', () => {
    scoreBoard.classList.add('hidden')
    startPage.classList.remove('hidden')
    name.value = ''
})

// sort score
sortScore.addEventListener('click', () => {
    const compare = (a, b) => {
        const scoreA = a.score;
        const scoreB = b.score;
      
        let comparison = 0;
        if (scoreA > scoreB) {
          comparison = 1;
        } else if (scoreA < scoreB) {
          comparison = -1;
        }
        return comparison * -1;
    }

    score.sort(compare)
    renderScore()
      
})