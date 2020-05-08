/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

// create a data structure to look up rock, paper, or scissors
const rpsLookup = {
    r: {
        imgUrl: 'imgs/rock.png',
        beats: 's'
    },
    p: {
        imgUrl: 'imgs/paper.png',
        beats: 'r'
    },
    s: {
        imgUrl: 'imgs/scissors.png',
        beats: 'p'
    }
};


/*----- app's state (variables) -----*/
let scores; // this is the player and computer's scores, and number of ties
let results; // this is the player and computer's results
let winner; // who was the winner

/*----- Cached Elements references -----*/
const scoreElemenets = {
    player: document.querySelector('#player-score'),
    tie: document.querySelector('#tie-score'),
    computer: document.querySelector('#computer-score')
}
const resultsElements = {
    player: document.querySelector('#player-result img'),
    computer: document.querySelector('#computer-result img')
    
}

/*----- add event listeners -----*/
document.querySelector('main button')
    .addEventListener('click', playRound)

init()

function init(){
    // innitializes state variables
    scores = {
        player: 0,
        tie: 0,
        computer: 0
    };
    results = {
        player: 'r',
        computer: 'r'
    }
    winner = null; 'player, tie, computer'
    render() // call in the init
};
    function render(){   //take our state and render it out as a view
        // update our view with the scores
        for(let score in scores){
            scoreElemenets[score].textContent = scores[score]
        }
        //update our view with the results
        for(let result in results){
            // Always remeber to think about: what should these logs be
            console.log(resultsElements[result], "<=== this is resultsElements[result]")
            console.log(rpsLookup[results[result]].imgUrl, "<=== this is rpsLookup[results[result]].imgUrl")
            resultsElements[result].src = rpsLookup[results[result]].imgUrl
        }
    };



function playRound(e){
    console.log('play round')
}

// alert('ready!')