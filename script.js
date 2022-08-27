let countDown = new Date(2023, 7, 27, 17, 29, 01);
// console.log(countDown);
let y = setInterval(() => {
    let now = new Date().getTime();
    let countday = countDown - now
    // console.log(countday);

    const days = Math.floor(countday / (1000 * 60 * 60 * 24));
    const hours = Math.floor(countday / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(countday / (1000 * 60) % 60);
    const seconds = Math.floor(countday / 1000) % 60;

    const maindt=document.getElementById("main-dt").innerHTML="27 Aug 2023"


    const d=document.getElementById("day").value=days;
    const h=document.getElementById("hours").value=hours;
    const m=document.getElementById("minute").value=minutes;
    const s=document.getElementById("second").value=seconds;
    if (countday < 0) {
        clearInterval(y)
        alert("end it")
        const d=document.getElementById("day").value=0
        const h=document.getElementById("hours").value=0
        const m=document.getElementById("minute").value=0
        const s=document.getElementById("second").value=0
        
        
    }
    

}, 1000)

