//variables for buttons
let startStopBtn = document.querySelector('#startStopBtn');
let reset = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for time values
let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set interval & timerstatus
let timerInterval = null;
let timerStatus = "stop"

//stop watch function
function stopWatch(){

    seconds++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        leadingSecond = "0" + seconds.toString();
    }else{
        leadingSecond = seconds;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours
    }

    let displayTimer = document.getElementById('timer').innerHTML = leadingHours + ":" + leadingMinutes + ":" + leadingSecond;

}

// window.setInterval(stopWatch,1)

startStopBtn.addEventListener('click', function(){
    if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopWatch,1000)
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})
