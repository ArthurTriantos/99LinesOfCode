document.addEventListener('DOMContentLoaded', function() {
document.body.style.backgroundColor = "blanchedalmond";
let div = document.createElement('div');
let para = document.createElement('p');
let h3 = document.createElement('h3');
let button = document.createElement('button');
document.body.appendChild(button);
let myFriends = ["John", "Xander", "Jack", "Justin", "Skyler"];
button.innerText = 'Sing!';
button.addEventListener ('click', function () {
    codeSong();
});




function codeSong() {
    for (let j = 0; j < myFriends.length; j++) {
        var lines;
        var linesLeft;
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = myFriends[j];
        for (i=99; i >= 1; i--) {
            if (i == 1) {
                lines = "line";
                linesLeft = "No more line of code in the file.";
            } else {
                lines = "lines";
                linesLeft = i - 1 + " lines of code in the file. ";
            }   console.log(i + " " + lines + " of code in the file, ");
            console.log(i + " " + lines + " of code; ");
            console.log(myFriends[j] +  " strikes one out, clears it all out, ");
            console.log(linesLeft);
        }
        
    }
    
}



});