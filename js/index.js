setInterval(vreme, 1000);

function vreme(){
    
    const datum = new Date();

    let hours = datum.getHours();
    let minutes = datum.getMinutes();
    let seconds = datum.getSeconds();

    let currentHour = `${hours}`;
    let currentMinute = `${minutes}`;
    let currentSecund = `${seconds}`;

    document.getElementById("sat").innerHTML = currentHour;
    document.getElementById("minut").innerHTML = currentMinute;
    document.getElementById("sekund").innerHTML = currentSecund;

}

vreme();