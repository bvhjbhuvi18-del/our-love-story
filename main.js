const questions = [
    {
        question: "What was food we ate together?",
        options: ["MAGGIE", "BROWNI", "CHOCOLATE", "PALGOVA"],
        answer: 3
    },
    {
        question: "When we took our first pic alone?",
        options: ["3/5", "28/11", "29/9", "27/11"],
        answer: 2
    },
    {
        question: "When was our first VC?",
        options: ["6/8", "9/6", "6/9", "7/5"],
        answer: 0
    },
    {
        question: "Who are you to me?",
        options: ["PANIII", "CHELLAPULLAA", "PONDATTIII", "THANGOO"],
        answer: 0
    },
    {
        question: "What is my fav thing to do with you?",
        options: ["pell kiss", "hug", "kilurathu", "kadikurathu"],
        answer: 2
    },

    // NEW DATE QUESTIONS

    {
        question: "When did I confess my love to you in Telegram?",
        options: ["03/10/2022", "06/10/2022", "03/11/2022", "30/09/2022"],
        answer: 0
    },
    {
        question: "When was our first VC?",
        options: ["06/08/2023", "08/06/2023", "06/09/2023", "07/08/2023"],
        answer: 0
    },
    {
        question: "When did we first hold hands in the bedroom?",
        options: ["04/12/2023", "14/12/2023", "04/11/2023", "04/12/2024"],
        answer: 0
    },
    {
        question: "When was our first kiss?",
        options: ["19/05/2024", "19/04/2024", "09/05/2024", "21/05/2024"],
        answer: 0
    },
    {
        question: "When was our first hug in the kitchen?",
        options: ["21/05/2024", "19/05/2024", "21/04/2024", "25/05/2024"],
        answer: 0
    },
    {
        question: "When was our first pic at Velakennai Chruch Road?",
        options: ["29/09/2024", "27/09/2024", "29/08/2024", "28/09/2024"],
        answer: 0
    },
    {
        question: "When was our first lip kiss and the famous KitKat moment?",
        options: ["02/11/2024", "28/11/2024", "02/10/2024", "12/11/2024"],
        answer: 0
    },
    {
        question: "When did we take our 2nd pic at Madhu Function?",
        options: ["28/11/2024", "29/11/2024", "28/10/2024", "27/11/2024"],
        answer: 0
    },
    {
        question: "When did we take our 3rd pic at the steps?",
        options: ["17/01/2025", "17/02/2025", "07/01/2025", "18/01/2025"],
        answer: 0
    },
    {
        question: "When was Harshada Function?",
        options: ["18/04/2025", "18/03/2025", "08/04/2025", "19/04/2025"],
        answer: 0
    },
    {
        question: "When did we meet alone in Super Park and I gave you a flower?",
        options: ["03/05/2025", "05/03/2025", "03/06/2025", "13/05/2025"],
        answer: 0
    },
    {
        question: "When did we take our 5th pic at the park?",
        options: ["05/06/2025", "05/05/2025", "15/06/2025", "06/05/2025"],
        answer: 0
    },
    {
        question: "When was the function in July 2025?",
        options: ["01/07/2025", "07/01/2025", "01/08/2025", "11/07/2025"],
        answer: 0
    },
    {
        question: "When did we take our 6th pic near Shenoy Nagar Metro Road?",
        options: ["16/08/2025", "18/08/2025", "16/07/2025", "06/08/2025"],
        answer: 0
    },
    {
        question: "When did we first meet in the Metro?",
        options: ["27/09/2025", "29/09/2025", "27/08/2025", "17/09/2025"],
        answer: 0
    },
    {
        question: "When did we take our 8th pic in the Metro and have the special Palkova?",
        options: ["17/10/2025", "07/10/2025", "17/09/2025", "27/10/2025"],
        answer: 0
    },
    {
        question: "When was our 9th pic during our 2nd Metro roaming?",
        options: ["28/10/2025", "29/10/2025", "18/10/2025", "28/11/2025"],
        answer: 0
    },
    {
        question: "When was our 10th pic near the Institute and you got your Bday gift?",
        options: ["29/11/2025", "27/11/2025", "29/10/2025", "19/11/2025"],
        answer: 0
    },
    {
        question: "When was our 11th pic at the Institute with me as the driver, Brownie and Maggie?",
        options: ["27/12/2025", "27/11/2025", "17/12/2025", "29/12/2025"],
        answer: 0
    },
    {
        question: "When was our 12th pic at Tower Park with continuous gifts and our first kiss video?",
        options: ["26/03/2026", "28/03/2026", "26/02/2026", "16/03/2026"],
        answer: 0
    },
    {
        question: "When was our 13th pic at Tower with the lipkiss video?",
        options: ["28/03/2026", "26/03/2026", "28/04/2026", "18/03/2026"],
        answer: 0
    },
    {
        question: "When was our 14th pic at Tower with the first practice?",
        options: ["24/06/2026", "26/06/2026", "24/05/2026", "14/06/2026"],
        answer: 0
    },
    {
        question: "When was our Movie Night?",
        options: ["31/07/2026", "30/07/2026", "31/08/2026", "17/07/2026"],
        answer: 0
    },
    {
        question: "When was our 15th pic with Xerox, Kinderjoy, Butterfly and Chocolate?",
        options: ["08/08/2026", "08/07/2026", "18/08/2026", "06/08/2026"],
        answer: 0
    },
    {
        question: "When was our 16th pic at Tower with the long lipkiss video?",
        options: ["05/09/2026", "05/08/2026", "15/09/2026", "06/09/2026"],
        answer: 0
    },
    {
        question: "When was our 17th pic at Tower?",
        options: ["16/09/2026", "16/08/2026", "26/09/2026", "17/09/2026"],
        answer: 0
    },
    {
        question: "When did we go to Wonderla and have our special moments together?",
        options: ["27/09/2026", "29/09/2026", "27/08/2026", "17/09/2026"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let isAnimating = false;

// DOM Elements
const app = document.getElementById('app');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreEl = document.getElementById('score');
const currentQEl = document.getElementById('current-q');
const totalQEl = document.getElementById('total-q');
const finalScoreEl = document.getElementById('final-score');
const finalTotalEl = document.getElementById('final-total');
const endTitle = document.getElementById('end-title');
const endMessage = document.getElementById('end-message');

// Mascot Elements
const quizBear = document.getElementById('quiz-bear');
const bearSpeech = document.getElementById('bear-speech');
const endBear = document.getElementById('end-bear');
const heartContainer = document.getElementById('heart-container');

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', startQuiz);

// Cute synthesized audio effects using Web Audio API
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx && AudioContextClass) {
        audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playJoySound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
    notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.28);
    });
}

function playCrySound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = [440, 392, 349.23]; // Whimsical sad descent
    notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.16);
        gain.gain.setValueAtTime(0.12, now + idx * 0.16);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.16 + 0.32);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.16);
        osc.stop(now + idx * 0.16 + 0.32);
    });
}

// Bear Speech Messages
const joyMessages = [
    "YAYYY! You remembered! 🎉💖",
    "Awww so sweet! Correct! 🥰",
    "You know me so well! ✨",
    "My heart is jumping with joy! 💓",
    "Super smart my love! 💕"
];

const cryMessages = [
    "Aww nooo, you broke my heart! 😭💔",
    "Huwaaaa! Wrong answer! 🥺💧",
    "My poor heart is crying! 💔😭",
    "How could you forget! 🥺💧",
    "Aww no... think carefully next time! 😭❤️"
];

function getRandomMessage(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setBearState(state, message) {
    if (quizBear) {
        quizBear.className = `bear-mascot-container ${state}`;
    }
    if (bearSpeech && message) {
        bearSpeech.innerText = message;
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.innerText = score;
    if (totalQEl) totalQEl.innerText = questions.length;
    if (finalTotalEl) finalTotalEl.innerText = questions.length;
    isAnimating = false;

    // Reset Overlays
    heartContainer.innerHTML = '';
    heartContainer.classList.add('hidden');

    switchScreen(quizScreen);
    loadQuestion();
}

function switchScreen(screen) {
    [startScreen, quizScreen, endScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const q = questions[currentQuestionIndex];
    questionText.innerText = q.question;
    currentQEl.innerText = currentQuestionIndex + 1;
    if (totalQEl) totalQEl.innerText = questions.length;

    // Reset teddy bear to gentle happy idle
    setBearState('idle', 'Guess our special memory! 💕');

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btn) {
    if (isAnimating) return;
    isAnimating = true;

    const q = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.answer;

    if (isCorrect) {
        btn.classList.add('correct');
        score++;
        scoreEl.innerText = score;

        // Teddy bear JUMPS WITH JOY!
        setBearState('joy', getRandomMessage(joyMessages));
        playJoySound();
        triggerHeartShower();
    } else {
        btn.classList.add('wrong');
        // Highlight correct option
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        if (buttons[q.answer]) {
            buttons[q.answer].classList.add('correct');
        }

        // Teddy bear CRIES WITH TEARS!
        setBearState('cry', getRandomMessage(cryMessages));
        playCrySound();

        document.body.classList.add('screen-shake');
        setTimeout(() => {
            document.body.classList.remove('screen-shake');
        }, 500);
    }

    setTimeout(() => {
        currentQuestionIndex++;
        isAnimating = false;
        loadQuestion();
    }, 2500);
}

function triggerHeartShower() {
    heartContainer.classList.remove('hidden');
    const hearts = ['❤️', '💖', '💘', '💕', '💗', '💓', '💝'];
    for (let i = 0; i < 28; i++) {
        const heart = document.createElement('div');
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 2.8) + 's';
        heart.style.fontSize = (Math.random() * 1.8 + 1.2) + 'rem';
        heartContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartContainer.innerHTML = '';
        heartContainer.classList.add('hidden');
    }, 3800);
}

function endQuiz() {
    switchScreen(endScreen);
    finalScoreEl.innerText = score;
    if (finalTotalEl) finalTotalEl.innerText = questions.length;

    const percentage = (score / questions.length) * 100;

    if (percentage < 60) {
        if (endBear) endBear.className = 'bear-mascot-container cry';
        endTitle.innerText = "Don't Give Up! ❤️";
        endTitle.style.color = "#ff7675";
        endMessage.innerHTML = `Score: <span id="final-score">${score}</span> / <span id="final-total">${questions.length}</span><br><small style="font-size:1.05rem;margin-top:0.6rem;display:inline-block;color:#ff7675;">Teddy says: Give me a hug and try again! 🥺🧸</small>`;
        playCrySound();
    } else {
        if (endBear) endBear.className = 'bear-mascot-container joy';
        endTitle.innerText = "You're My Everything! 💖";
        endTitle.style.color = "#e84393";
        endMessage.innerHTML = `Score: <span id="final-score">${score}</span> / <span id="final-total">${questions.length}</span><br><small style="font-size:1.05rem;margin-top:0.6rem;display:inline-block;color:#e84393;">Teddy is jumping with joy for you! 🧸💖🎉</small>`;
        playJoySound();
        triggerHeartShower();
    }
}