$(document).ready(function(){
    //Putting logo images into an array
    const logos = [
        'img/cbs.jpg','img/cnn.jpg','img/h&m.jpg','img/hsbc.jpg','img/nintendo.jpg','img/reebok.jpg','img/pizza-hut.jpg','img/sephora.jpg','img/delmonte.jpg','img/nescafe.jpg','img/target.jpg','img/levis.jpg','img/intel.jpg','img/amazon.jpg','img/adobe.jpg','img/burberry.jpg','img/dunkin-donuts.jpg','img/gucci.jpg','img/ikea.jpg','img/kelloggs.jpg','img/lamborghini.jpg','img/lego.jpg','img/verizon.jpg','img/nbc.jpg','img/play-station.jpg'
    ];

    //Putting correct answers into an array
    const answers = [
        'CBS','CNN','H&M','HSBC','Nintendo','Reebok','Pizza hut','Sephora','Del Monte','Nescafe','Target','Levis','Intel','Amazon','Adobe','Burberry','Dunkin Donuts','Gucci','Ikea','Kelloggs','Lamborghini','Lego','Verizon','NBC','Playstation'
    ];

    //Putting choice answers into an array within an array
    const answerChoices = [
        ['CBS', 'BBC', 'Mobil'],
        ["Virgin", "Macy's", "CNN"],
        ['Honda', 'H&M', 'Heinz'],
        ["HSBC", "Pfizer", "ESPN"],
        ["LG", "Cisco", "Nintendo"],
        ['Adidas', 'Asics', 'Reebok'],
        ["Denny's", "T.J. Maxx", "Pizza hut"],
        ['Sephora', 'Loreal', 'Dasani'],
        ['Del Monte', 'Green Giant', 'Springfield'],
        ["NetFone", "Nando's", "Nescafe"],
        ["Target", "Lay's", "Uniqlo"],
        ['Toyota', 'Marvel', 'Levis'],
        ['Intel', 'Samsung', 'IBM'],
        ["Pringles", "Wendy's", "Amazon"],
        ['Autodesk', 'Adobe', 'ABC'],
        ['Ralph Lauren', 'Calvin Klein', 'Burberry'],
        ['Dunkin Donuts', 'Oscar Mayer', 'Dr Pepper'],
        ["Bugatti", "Chanel", "Gucci"],
        ['Intel', 'Ikea', 'Dasani'],
        ['Kelloggs', 'K-mart', 'KIA'],
        ["Bugatti", "Lamborghini", "Ferrari"],
        ["Yahoo", "Lipton", "Lego"],
        ['Verizon', 'Nike', 'FedEx'],
        ['UPS', 'HP', 'NBC'],
        ['Playstation', 'Chanel', 'V&A Museum']
    ];

   
    // Creating HTML elements using jQuery
    const $welcomeScreen = $('<div id="welcome-screen"/>').appendTo('body');
    const $headline = $('<h1 id="headline"/>').appendTo('#welcome-screen');
          $headline.text('guess-the-logo');
    const $howToPlay = $('<p id="how-to-play"/>').appendTo('#welcome-screen');
          $howToPlay.text('Guess which brand the logos belong to. Easy, right? Maybe not. To make things a little more difficult we have altered part of each design.')
    const $howToPlay2 = $('<p id="how-to-play-2"/>').appendTo('#welcome-screen');
          $howToPlay2.text('You got 5 seconds to guess and 3 chances!')
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
    const $winDisplay = $('<div id="win-display"/>').appendTo('body');
    const $gameOverDisplay = $('<div id="game-over"/>').appendTo('body');
    const $playAgainButton = $('<button id="play-again"/>').appendTo('#game-over');
          $playAgainButton.text('Play Again');
          $('#play-again').on('click', startGame);
    
    
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
        // Inserting the answer choices to divs that have ID's of 0,1,2
        for(let idIndex=0; idIndex<3; idIndex++){
            $(`#${idIndex}`).text(`${answerChoicesArray[idIndex]}`);
        }
    };

    // Timer is decrementing by one every second 
    let  timeCounter;
    // Counter starts at 5
    let timer = setInterval(function(){      
        $('#timer').text(timeCounter);
        console.log(timeCounter);
        if(timeCounter === 0){
            index++;
            setUpDisplay(index);
            setUpAnswerChoices(index);
            // clearInterval(timer);
            //timer;
            setTimer(5);
            decrementChancesLeft();
        }
        timeCounter--;            
    }, 1000);

    // Resetting the timer 
    function setTimer(startingTime){
        timeCounter=startingTime; 
    timer;
    }
    
    // Displaying score and incrementing by 5
    function updateScore(){
        $('#score-box').text(`+ ${score+=5}`);
    }

    // Comparing user picked answer with correct answers array 
    let pickedChoice=null;
    function compareAnswers(pickedChoice){
        if(pickedChoice === answers[index]){
            index++;
            winner();
            setUpDisplay(index);
            setUpAnswerChoices(index);
            //score=+5;
            updateScore();
            setTimer(5);
            return `${pickedChoice} is correct`;
        } else if(pickedChoice !== answers[index]){
            index++;
            setUpDisplay(index);
            setUpAnswerChoices(index);
            decrementChancesLeft();
            setTimer(5);
        } else{
        }
        
    };
    
     // Decrementing the chances user has to guess the logo
    function decrementChancesLeft(){
         chancesLeft--;
        console.log("checking chances left" + chancesLeft);
        if(chancesLeft === 0){
            $('#img-display, #timer, #score-box, #answers-container').remove();
            $('#game-over').css({display: 'inherit'});
            $('#game-over').text('You lost..');
        }
        else{
            setTimer(5);
        }  
    };

    // If user guesses all logos, display winner div
    function winner(){
        if(index === 25){
            $('#img-display, #timer, #score-box, #answers-container').remove();
            $('#win-display').css({display: 'inherit'});
            $('#win-display').text('Logo genius. Check. You. Out.');
        }
    }
   
    // Starts the game displaying the logo img, timer and set of answers and removes the welcome screen
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
                console.log(compareAnswers(pickedChoice));
            
                // for(let i=0; i<3; i++){
                //     $(`#${i}`).off('click');
                // }

                });
            };
    };

    // Onclick event to the play button in welcoming page and display none of the logo images, timer and scorebox
    window.onload = function() {
        $('#play').on('click', startGame);
        $('#img-display,#timer, #score-box, #answers-container').css({display: 'none'});
    };



});




