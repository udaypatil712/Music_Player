let Audioplayer=new Audio("1.mp3");
    

let playAudio=document.getElementById("play");
let pauseAudio=document.getElementById("pause");
let restart=document.getElementById("restart");
let nextSongs=document.getElementById("next");
let prevSongs=document.getElementById("prev");

playAudio.addEventListener('click',()=>{
    Audioplayer.play();

});

pauseAudio.addEventListener('click',()=>{
    Audioplayer.pause();
    

});

restart.addEventListener('click',()=>{
    Audioplayer.currentTime=0;
    Audioplayer.play();


});

let i=1;
nextSongs.addEventListener('click',()=>{
    i++;
     document.getElementById("image").src=i+".png";
     Audioplayer.src=i+".mp3";
    Audioplayer.play();


});

prevSongs.addEventListener('click',()=>{

    i--;
    document.getElementById("image").src=i+".png";
    Audioplayer.src=i+".mp3";
    Audioplayer.play();
});
