const audio = document.querySelector('audio');
const playBtn=document.querySelector(".play-btn");

playBtn.onclick=function playAudio() {
    if(audio.paused){
        audio.play();
        playBtn.src="/assets/svg/pause.svg"
    }else{
        audio.pause();
        playBtn.src="/assets/svg/play.svg"
    }
    
}




