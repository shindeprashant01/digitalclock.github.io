const hourEx = document.getElementById("hour");
const minutsEx = document.getElementById("minuts");    
const secondsEx = document.getElementById("seconds");   
const ampmEl = document.getElementById("ampm");

function updateclock(){

    let h = new Date().getHours();
    let m =new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = " ";

    if(h > 12){
        ampm = "PM";
        h = h-12;
    }
    else
    {
        ampm ="AM";
    }
       
    h=h <10 ? "0"+ h:h;
    m=m <10 ? "0"+ m:m;
    s=s <10 ? "0"+ s:s;

    hourEx.innerText = h;
    minutsEx.innerText = m;
    secondsEx.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        updateclock()
    },1000)

}

updateclock();