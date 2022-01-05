const newYears = "1 Jan 2023 00:00:00"

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = Date.now();

    const secondDifference = Math.abs(newYearsDate - currentDate)/1000;

    const seconds = Math.floor(secondDifference%60);
    const minutes = Math.floor(secondDifference/60%60);
    const hours = Math.floor(secondDifference/60/60%24);
    const days = Math.floor(secondDifference/60/60/24);

    daysElement.innerHTML = formatDays(days);
    hoursElement.innerHTML = format(hours);
    minutesElement.innerHTML = format(minutes);
    secondsElement.innerHTML = format(seconds);
}

function format(time){
    if(time < 10){
        return '0' + time;
    } else {
        return time;
    }
}

function formatDays(time){
    if(time < 10){
        return '00' + time;
    }else if(time < 100){
        return '0' + time;
    }else{
        return time;
    }
}

setInterval(countdown, 1000);