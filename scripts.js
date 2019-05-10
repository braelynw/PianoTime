function play(note){
    console.log(note);
    var audio = new Audio("sound/" + note + ".wav") ;

    audio.oncanplaythrough = function(){
        audio.play();
    };

    audio.loop = false;

}
