let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
const ticks = document.querySelector('.ticks');
function displayTime(){
     let date = new Date();
     let hh = date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();

     let hRotation = 30*hh + mm/2;
     let mRotation = 6*mm;
     let sRotation = 6*ss;

 hr.style.transform = `rotate(${hRotation}deg)`;
 min.style.transform = `rotate(${mRotation}deg)`;
 sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime,1000)
for (let i = 1; i <= 60; i++) {
    const span = document.createElement('span');
    span.style.transform = `rotate(${i * 6}deg)`;
    ticks.appendChild(span);
}