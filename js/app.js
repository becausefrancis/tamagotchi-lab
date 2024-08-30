/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};

let timer;

let gameOver;

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');

const resetBtnEl = document.getElementById('restart');

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    gameMessageEl.classList.add('hidden');
    resetBtnEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 2000);
}

const runGame = () => {
    updateStates();
    checkGameOver();
    render();
}

const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
    if (gameOver) {
        clearInterval(timer); //not working
        gameMessageEl.classList.remove('hidden');
        resetBtnEl.classList.remove('hidden');
    };
}

const updateStates = () => {
    state.boredom += getRandomInt();
    state.hunger += getRandomInt();
    state.sleepiness += getRandomInt();
}

const getRandomInt = () => {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const checkGameOver = () => {
    if (state.boredom >= 10 || 
        state.hunger >= 10 || 
        state.sleepiness >= 10) {
            gameOver = true;
    };
} 

const playBtnClick = (event) => {
    if (event.target.id === 'play') {state.boredom = 0}
    else if (event.target.id === 'feed') {state.hunger = 0}
    else if (event.target.id === 'sleep') {state.sleepiness = 0}
    render();
} 

render();
init();

/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', playBtnClick);
sleepBtnEl.addEventListener('click', playBtnClick);

resetBtnEl.addEventListener('click', init);