function firstEvent() {
    words.style.color = 'pink';
    words.style.fontSize = '40px';
}

let words = document.getElementById("eventOne");
words.addEventListener('click', firstEvent);

function secondEvent() {
    words2.style.color = 'red';
    words2.style.backgroundColor = 'green';
    words2.style.fontSize = '30px';
}

function secondEventOver() {
    words2.style = 'none';
}

let words2 = document.getElementById("eventTwo");
words2.addEventListener('mouseenter', secondEvent);
words2.addEventListener('mouseleave', secondEventOver);

let body = document.getElementById("body");


let words3 = document.getElementById("eventThree");
body.addEventListener("keypress",function(eventDetails) {
    if(eventDetails.code == "Space") {
        words3.innerHTML = "Event Three :)";
        words3.style.fontSize = "40px";
        words3.style.color = "aqua";
    }
});