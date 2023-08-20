
const sartbtn=document.querySelector('.start-btn');
const closebtn=document.querySelector('.close-btn');


var second=0;
var minute=0;
var hour=0;
var lsecond;
var lminute;
var lhour
var timerstatus="stopped";
var timeinterval=null;

function stopwatch(){
    second++;

    if(second/60===1)
    {
            second=0;
            minute++;   
    }

    if(minute/60===1)
    {
        minute=0;
        hour++;
    }
    if(second<10)
    {
        lsecond="0"+second.toString();
    }else{
        lsecond=second;
    }

    if(minute<10)
    {
        lminute="0"+minute.toString();
    }else{
        lminute=minute;
    }
    if(hour<10)
    {
        lhour="0"+hour.toString();
    }else{
        lhour=hour;
    }

    const stime=document.querySelector('.timer').textContent=
lhour+":"+lminute+":"+lsecond;
};

sartbtn.addEventListener('click',()=>{
    if(timerstatus==="stopped")
    {
       timeinterval=window.setInterval(stopwatch,1);
       document.querySelector('.start-btn').innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="3.5em" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>';
       timerstatus="started";

    }
    else{
        window.clearInterval(timeinterval);
        document.querySelector('.start-btn').innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="3.5em" viewBox="-20 -15 390 512"><style>svg{fill:#111212}</style><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
        timerstatus="stopped";
    }
})
closebtn.addEventListener('click',()=>{
    if(timerstatus="started")
    {
        timerstatus="stopped";
        document.querySelector('.start-btn').innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="3.5em" viewBox="-20 -15 390 512"><style>svg{fill:#111212}</style><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    }
    window.clearInterval(timeinterval);
    second=0;
    minute=0;
    hour=0;


    const stime=document.querySelector('.timer').textContent=
"00"+":"+"00"+":"+"00";
})