$(document).ready(function(){
    //Putting logo images into an array
    const logos = [
        'img/pizza-hut.jpg',
        'img/best-buy.jpg',
        'img/bmw.jpg',
        'img/bp.jpg',
        'img/burger-king.jpg',
        'img/cartoon-network.jpg',
        'img/citi-bank.jpg',
        'img/dasani.jpg',
        'img/delmonte.jpg',
        'img/dreamworks.jpg',
        'img/nintendo.jpg',
        'img/pringles.jpg'
        
    ];

    //Putting correct answers into an array
    const answers = [
        'Pizza hut',
        'Best buy',
        'BMW',
        'Bp',
        'Burger king',
        'Cartoon network',
        'Citi bank',
        'Dasani',
        'Del Monte',
        'Dreamworks',
        'Nintendo',
        'Pringles'
    ];

    //Putting choice answers into an array within an array
    const answerChoices = [
        ["Denny's", "T.J. Maxx", "Pizza hut"],
        ['Asics', 'Best buy', 'Gameloft'],
        ['Ferrari', 'BMW', 'Bugatti'],
        ['Nikon', 'Bp', 'Canon'],
         ["Arby's", "Chick-fil-A", "Burger king"],
        ['Playstation', 'Chanel', 'Cartoon network'],
        ['Adobe', 'Citi bank', 'Autodesk'],
        ['Intel', 'IBM', 'Dasani'],
        ['Del Monte', 'Green Giant', 'Springfield'],
        ['oh', 'uh', 'uxx'],
        ['Aardman', 'Pixar', 'Dreamworks'],
        ['or', 'ur', 'uxxx']
    ];

   
    // Creating HTML elements using jQuery
    const $welcomeScreen = $('<div id="welcome-screen"/>').appendTo('body');
    const $headline = $('<h1 id="headline"/>').appendTo('#welcome-screen');
    $headline.text('guess-the-logo');
    const $playButton = $('<button id="play"/>').appendTo('#welcome-screen');
    $playButton.text('Play Now');
    const $imgDisplay = $('<div id="img-display"/>').appendTo('body');
    const $logoImage = $('<img id="logo-image"/>').appendTo('#img-display');
    const $answersContainer = $('<div id="answers-container"/>').appendTo('body');
        for(let i=0; i<3; i++){
            const $answersDivs = $(`<div id=${i} class="answers"/>`).appendTo('#answers-container');
        }
    const $timer = $('<div id="timer"/>').appendTo('body');
    const $scoreBox = $('<div id="score-box"/>').appendTo('body');
    const $gameOverDisplay = $('<div id="game-over"/>').appendTo('body');

    
    let index = 0;
    let score = 0; 
    let chancesLeft = 3;
    //index++;
    
    // Putting logo images into the imgDisplay div
    function setUpDisplay(index){
        let logoAddress = logos[index];
        $('#logo-image').attr('src', logoAddress);
    };
  
    // Putting answer choices into the answersContainer divs
    function setUpAnswerChoices(choicesArrayIndex){
        let answerChoicesArray=answerChoices[choicesArrayIndex]; 
        for(let idIndex=0; idIndex<3; idIndex++){
            $(`#${idIndex}`).text(`${answerChoicesArray[idIndex]}`);
        }
    };

    let  timeCounter;
    // Counter starts at 5
    let timer = setInterval(function(){      
        $('#timer').text(timeCounter);
        console.log(timeCounter);
        if(timeCounter === 0){
            index++;
            setUpDisplay(index);
            setUpAnswerChoices(index);
            clearInterval(timer);
            setTimer(5);
            decrementChancesLeft();
        }
        timeCounter--;            
    }, 1000);

    function setTimer(startingTime){
        timeCounter=startingTime; 
    // Putting the counter in the timer div, counting down from 5
    timer;
    }
    

    // Putting score 
    function updateScore(){
        $('#score-box').text(`${score+=5}`);
    }
    //updateScore();

    // Comparing user picked answer with correct answers array 
    function compareAnswers(pickedChoice){
        if(pickedChoice === answers[index]){
            index++;
            setUpDisplay(index);
            setUpAnswerChoices(index);
            //score=+5;
            updateScore();
            setTimer(5);
            return `${pickedChoice} is correct`;
        } else if(pickedChoice !== answers[index]){
            console.log('whyyy?')
            index++;
            setUpDisplay(index);
            setUpAnswerChoices(index);
            decrementChancesLeft();
            setTimer(5);
        } else{
            // decrementChancesLeft();
            // clearInterval(timer);
            // return 'no';
        }
        
        
    };
    
    function decrementChancesLeft(){
         chancesLeft--;
        console.log("checking chances left" + chancesLeft);
        if(chancesLeft === 0){
            $('#img-display, #timer, #score-box, #answers-container').remove();
            $('#game-over').css({display: 'inherit'});
        }
        else{
            setTimer(5);
        }  
    };

    function startGame(){
         $('#welcome-screen').remove();
         $('#img-display,#timer, #score-box, #answers-container').css({display: 'inherit'});
         $('#answers-container').css({display: 'flex'});
        setUpDisplay(0);
        setUpAnswerChoices(0);
        setTimer(5);
            for(let i=0; i<3; i++){
                $(`#${i}`).on('click', function(){
                    
                pickedChoice=$(this).text();
                console.log(pickedChoice);
                console.log(pickedChoice); 
                console.log(compareAnswers(pickedChoice)) ;
            
                // for(let i=0; i<3; i++){
                //     $(`#${i}`).off('click');
                // }

                });
            };
    }
    

let pickedChoice=null;

// Setting onclick events to answer choices
window.onload = function() {
    $('#play').on('click', startGame);
    $('#img-display,#timer, #score-box, #answers-container').css({display: 'none'});
};






















});




