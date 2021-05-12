let myFriends = ["John", "Xander", "Jack", "Justin", "Skyler"];

function codeSong() {
    for (let j = 0; j < myFriends.length; j++) {
        var lines;
        var linesLeft;
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

codeSong();