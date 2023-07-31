let colors = ["green","red","yellow","blue"];
let gamePattern =[];
let userPattern =[];
let gameStarted = false;
let allowPressButton = false;
let level =0

function randomColorGenerator(){
    
    allowPressButton=true;
    userPattern =[]
    level++;
    $("h1").text("Level "+level);
    let randomNumber = Math.floor(4*Math.random());
    gamePattern.push(colors[randomNumber]);
    let randomColorSound = new Audio("./"+colors[randomNumber]+".mp3")
    randomColorSound.play();
    $("."+colors[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
}
$("button").click(function(){
    if(allowPressButton){
        
    userPattern.push(this.id);
    $("."+this.id).addClass("press"); 
    let colorName = this.id;
    let userSelectedSound = new Audio("./"+colorName+".mp3");
    userSelectedSound.play();
    setTimeout(function(){
      $("."+colorName).removeClass("press");
    },100);
    checkIfRight(userPattern.length-1)
    }
})
    

$(document).keydown(function(){
    if(!gameStarted){
        gameStarted=true;
        allowPressButton=true;
        randomColorGenerator();

    }
})
$("h1").click(function(){
    if(!gameStarted){
        gameStarted=true;
        allowPressButton=true;
        randomColorGenerator();

    }
})


function checkIfRight(len){
    if(userPattern[len]==gamePattern[len]){
        if(userPattern.length == gamePattern.length){
            allowPressButton=false;
            $("h1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).css("color","green");
            setTimeout(function(){
                randomColorGenerator();
                $("h1").css("color","black");
            },1000)
        }
    }else{
        
        startOver();
    }
}
function startOver(){
    gamePattern =[];
    userPattern =[];
    gameStarted = false;
    allowPressButton = false;
    level =0
    $("body").addClass("body");
    let errorSound = new Audio("./wrong.mp3")
    errorSound.play();
    $("h1").text("Game Over!");
    setTimeout(function(){
        $("body").removeClass("body");
        $("h1").html('<span class="start">Press</span> a key to Start');
    },800)
}