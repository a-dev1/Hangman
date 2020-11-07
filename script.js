//keyup, keydown - represents key being pressed or released, keypress represents a character being typed.

const makeWord = (length) => {
    const word = document.createElement("div");
    
    for(let i=0; i<length; i++) {
        let letter = document.createElement("span");
        letter.innerHTML = '';
        word.appendChild(letter);
    }

    word.style.textAlign = 'center';
    document.body.appendChild(word);
    return word;
}

const checkLetter = (e) => {
    
    let workingData = randomData;
    console.log(lives);

    if(!lives){
        console.log("Game Over");
        gameOver.style.display = 'block';
    }
    else if(output.includes(e.key) || wrongInputs.includes(e.key)){
        // console.log('Entered Duplicate Value');
        duplicate_alert.classList.toggle('show_alert');
        // console.log(duplicate_alert.classList);
        setTimeout(() => {
            duplicate_alert.classList.remove('show_alert');
        }, 2000);
    }        
    else{
        let notFound = true;
        for (let i = 0; i < workingData.length; i++) {
            if(workingData.charAt(i) === e.key){
                word.childNodes[i].innerHTML = e.key;
                output += e.key;
                notFound = false;
            }
        }   
        if(notFound){
            wrongInputs += e.key;
            lives--;
            wrong_show.style.display = 'block';
            wrong_show.children[1].innerHTML +=  (wrong_show.children[1].innerHTML) ? `,${e.key}` : `${e.key}`;
            hangman.children[body_part_count].style.display = "block";
            body_part_count++;
            console.log(body_part_count);
        }
    }        
}

const reset = () => {
    lives = 6;
    output = '';
    wrongInputs = '';
    gameOver.style.display = 'none';
    word.childNodes.forEach(node => {
        node.innerHTML = '';
    })
    wrong_show.children[1].innerHTML = '';
    wrong_show.style.display = 'none';
}

//Main start's from here
let duplicate_alert = document.querySelector(".duplicate_alert");
let playAgain_btn = document.querySelector(".playAgain");
let gameOver = document.querySelector(".gameOver_container");
let wrong_show = document.querySelector(".wrong");
let hangman = document.querySelector(".figure-container");

let data = ['programming', 'dance', 'eliminate', 'software', 'hacker'];
let output = '';
let wrongInputs = '';
let lives = 6;
let randomData = data[Math.floor(Math.random()*5)];
let word = makeWord(randomData.length);
let body_part_count = 4;

document.addEventListener('keypress', checkLetter);
playAgain_btn.addEventListener('click', reset);