// reusable functions start
function hideElementById(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function showElementById(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// reusable functions end






function play() {
    hideElementById('home-screen');
    showElementById('play');
    continueGame();
}

function continueGame(){
    const alphabet= getARandomAlphabet();
    console.log("Your random alphabet: ",alphabet);

    const currentAlphabetElement= document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML= alphabet;

    setBackgroundColorById(alphabet)
}