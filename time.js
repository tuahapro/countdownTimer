let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");

function findOutTime(){
    let days =new Date();
    day.innerHTML =days.getDate();
    hour.innerHTML =days.getHours();
    minute.innerHTML =days.getMinutes();
    second.innerHTML =days.getSeconds();

    if(second.innerHTML < 10){
        second.innerHTML = "0" + second.innerHTML;
    }else if(minute.innerHTML < 10){
        minute.innerHTML = "0" + minute.innerHTML;
    }else if(hour.innerHTML < 10){
        hour.innerHTML = "0" + hour.innerHTML;
    }else if(day.innerText < 10){
        day.innerHTML = "0" + day.innerHTML;
    }else{
        
    }
}

setInterval(findOutTime,1000)