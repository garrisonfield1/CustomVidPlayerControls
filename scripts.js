const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

console.log(video)
function togglePlay(){
    // console.log(this)
    // const method = video.paused ? video.play(): video.pause();
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}
function updateButton(){
    const icon = this.paused ?  '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    // console.log(this.dataset.skip);
    // console.log(video.currentTime);
    var secondsToSkip = parseFloat(this.dataset.skip )
    video.currentTime += secondsToSkip;

 console.log( video.currentTime)
 //console.log(typeof secondsToSkip) 
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip))
 

