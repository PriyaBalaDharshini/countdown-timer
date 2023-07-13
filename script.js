let d=document.querySelector("#days");
let hr=document.querySelector("#hours");
let min=document.querySelector("#minutes");
let sec=document.querySelector("#seconds");
let ms=document.querySelector("#milliseconds");

function updateTime() {
let currentYear=new Date().getFullYear();
let newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
let currentDate=new Date();

/* 1000 ms = 1s
60s = 1m
60m = 1hr
24hr = 1day
*/
/* Finding diff */
let diff = newYear - currentDate;
let days=Math.floor(diff/1000/60/60/24);
let hours=Math.floor((diff/1000/60/60)%24);
let minutes=Math.floor((diff/1000/60)%60);
let seconds=Math.floor((diff/1000)%60);
let mseconds=Math.floor((diff%1000));

d.innerHTML=days<10?"0"+days:days; /* conditinal operator for showing time with two difites */
hr.innerHTML=hours<10?"0"+hours:hours;
min.innerHTML=minutes<10?"0"+minutes:minutes;
sec.innerHTML=seconds<10?"0"+seconds:seconds;
ms.innerHTML=mseconds<10?"0"+mseconds:mseconds;

/* console.log(`${days} ${hours} ${minutes} ${seconds} ${mseconds}`); */
}
setInterval(updateTime,1000);
