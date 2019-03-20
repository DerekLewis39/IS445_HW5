
var bSize = 30; //balloon size tracker
const balloonElement = document.getElementById("emoji");

function balloonFunction() {        //define event function. Should always define before adding eventListener
        if (event.keyCode === 107) { //if '+' key is released
            bSize += 15; //increase balloon size
            balloonElement.style.fontSize = bSize + 'px'; //change font size of balloon
            console.log(`Key Code: ${event.keyCode}`);   //log key code
            console.log(`Ballon size: ${bSize}`);       //log balloon size
           
        }
        if (event.keyCode === 109) { //if '-' key is released
            bSize -= 15; //decrease balloon size
            balloonElement.style.fontSize = bSize + 'px'; //change font size
            console.log(`Key Code: ${event.keyCode}`);
            console.log(`Ballon size: ${bSize}`);

        }
        if (bSize > 60) { //if balloon size > 60
            balloonElement.innerText = '💥'; //change emoji
            window.removeEventListener("keyup", balloonFunction); //remove event listener
            
        }
        if (bSize <= 0) { //if balloon size <= 0
            balloonElement.style.fontSize = '30px'; //change font size to make it visible
            balloonElement.innerText = 'Done'; //change text to 'Done'
            window.removeEventListener("keyup", balloonFunction) ; //remove event listener

        }
    };

window.addEventListener("keyup", balloonFunction); //add event listener, calling event function