$(document).ready(function(){

    const logos = [
        'img/target.jpg',
        'img/pepsi.png',
        'img/bp.png',
        'img/doritos.png',
        'img/wash.gif',
        'img/best-buy',
        'img/dasani.png',
        'img/Del-Monte.svg',
        'img/DreamWorks.png',
        'img/Nickelodeon.png',
        'img/verizon.png',
        'img/Walt-Disney.jpg',
    ];

    const answers = [
        'target',
        'pepsi',
        'bp',
        'doritos',
        'wash',
        'best buy',
        'dasani',
        'del monte',
        'dreamworks',
        'nickelodeon',
        'verizon',
        'walt disney'
    ];

    const answerChoices = [
        ['macys', 'tjmax', 'target'],
        ['coca cola', 'pepsi', 'redbull'],
        ['hello', 'bp', 'hi'],
        ['sabritas', 'doritos', 'cheetos'],
        ['wosh', 'wush', 'wash'],
        ['ag', 'eg', 'ig'],
        ['og', 'ug', 'ux'],
        ['ah', 'eh', 'ih'],
        ['oh', 'uh', 'uxx'],
        ['ar', 'er', 'ir'],
        ['or', 'ur', 'uxxx'],
        ['az', 'ezz', 'izz'],
    ];

   

    const $imgDisplay = $('<div id="img-display"/>').appendTo('body');
    const $logoImage = $('<img id="logo-image"/>').appendTo('#img-display');
    const $answersContainer = $('<div id="answers-container"/>').appendTo('body');
        for(let i=0; i<3; i++){
            const $answersDivs = $(`<div id=${i} class="answers"/>`).appendTo('#answers-container');
        }
    const $timer = $('<div id="timer"/>').appendTo('body');
    const $scoreBox = $('<div id="score-box"/>').appendTo('body');

    
    let index = 0;
    let score=0; 
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
    

    let timeCounter=5; 

    let timer = setInterval(function(){      
        $('#timer').text(timeCounter);
        console.log(timeCounter);
        if(timeCounter === 0){
            clearInterval(timer);
        }
        timeCounter--;            
    }, 1000);

    function updateScore(){
        $('#score-box').text(`${score+=5}`);
    }
    //updateScore();

    function compareAnswers(pickedChoice){
        if(pickedChoice === answers[index]){
            index++;
            setUpDisplay(index);
            setUpAnswerChoices(index);
            //score=+5;
            updateScore();
            return `${pickedChoice} is correct`;
        }else {
            return 'no';
        }
    };
    






let pickedChoice=null;

window.onload = function() {
    setUpDisplay(0);
    setUpAnswerChoices(0);
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
};






















});





