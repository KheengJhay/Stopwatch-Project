"use strict";
const displayMilliSec = document.querySelector("#milliseconds-el");
const displaySec = document.querySelector("#seconds-el");
const displayMin = document.querySelector("#minutes-el");
const displayHour = document.querySelector("#hours-el");
const startBtn = document.querySelector("#start-watch");
const stopBtn = document.querySelector("#stop-watch");
const refreshBtn = document.querySelector('#restart-watch')
let milliSecCount = 0;
let secCount = 0;
let minCount = 0;
let hourCount = 0;
const incrementSec = () => {
    if (secCount === 60) {
    secCount = -1;
    } else if (secCount < 10) {
    displaySec.textContent = `0${secCount}`;
    } else displaySec.textContent = secCount;
};
const incrementMin = () => {
    minCount++;
    if (minCount === 60){
        minCount = -1
    }
    if (minCount < 10) {
    displayMin.textContent = `0${minCount}`;
    } else {
    displayMin.textContent = minCount;
    }
};
const incrementMilliSec = () => {
    milliSecCount++;
    displayMilliSec.textContent = milliSecCount;
    if (milliSecCount === 99) {
    milliSecCount = 1;
    secCount++;
    }
};
const incrementHour = () =>{
    hourCount++
    if (hourCount < 10) {
    displayHour.textContent = `0${hourCount}`
    } else{
        displayHour.textContent = hourCount
    }
}

let milliSecInterval;
let secInterval;
let minInterval;
let hourInterval;

startBtn.addEventListener("click", () => {
    milliSecInterval = setInterval(incrementMilliSec, 10);
    secInterval = setInterval(incrementSec, 1000);
    minInterval = setInterval(incrementMin, 60000);
    hourInterval = setInterval(incrementHour, 3600000);
});
stopBtn.addEventListener('click', () =>{
    clearInterval(milliSecInterval)
    clearInterval(secInterval)
    clearInterval(minInterval)
    clearInterval(hourInterval)
})
refreshBtn.addEventListener('click', () =>{
    history.go(0)
})