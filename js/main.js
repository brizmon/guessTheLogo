$(document).ready(function(){

    const logos = [
        'img/target.jpg',
        'img/pepsi.png',
        'img/bp.png',
        'img/doritos.png',
        'img/wash.gif'
    ];

    const answers = [
        'target',
        'pepsi',
        'bp',
        'doritos',
        'wash'
    ];

    const answerChoices = [
        ['macys', 'tjmax', 'target'],
        ['coca cola', 'pepsi', 'redbull'],
        ['hello', 'bp', 'hi'],
        ['sabritas', 'doritos', 'cheetos'],
        ['wosh', 'wush', 'wash']
    ];

    const $imgDisplay = $('<div id="img-display"/>').appendTo('body');
    const $logoImage = $('<img id="logo-image"/>').appendTo('#img-display');
    const $answersContainer = $('<div id="answers-container"/>').appendTo('body');
        for(let i=0; i<3; i++){
            const $answersDivs = $(`<div id=${i} class="answers"/>`).appendTo('#answers-container');
        }
    const $timer = $('<div id="timer"/>').appendTo('body');
    const $scoreBox = $('<div id="score-box"/>').appendTo('body');

    
    const index = 0;
    //index++;
    


    function setUpDisplay(index){
        let logoAddress = logos[index];
        $('#logo-image').attr('src', logoAddress);
    };
  
    
    
    function setUpAnswerChoices(choicesArrayIndex){
        let answerChoicesArray=answerChoices[choicesArrayIndex]; 
        for(let idIndex=0; idIndex<3; idIndex++){
            $(`#${idIndex}`).text(`${answerChoicesArray[idIndex]}`);
        }
    };
    setUpDisplay(index);
    setUpAnswerChoices(index);

let timeCounter=5; 

    let timer = setInterval(function(){      
        $('#timer').text(timeCounter);
        console.log(timeCounter);
        if(timeCounter === 0){
            clearInterval(timer);
        }
        timeCounter--;            
    }, 1000);

    
    










window.onload = function() {
  $('.answers').on('click', );
  
};




});





