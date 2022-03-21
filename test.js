var Powers = ["Homing", "Jump", "Brake", "Thick", "One Shot", "Mine", "Zap", "Low-res", "Thin", "Scatter Shot", "Steer-less", "Speed Burst", "Stealth Mine", "Trippy", "Power Dash", "Side Shot", "Speedy", "Shield", "Clock Block", "Time Bomb", "Hide Self", "Curve-blind", "Angle Turns", "Multi Shot", "Trigger Bomb", "180", "Double Shot", "Reverse", "Laser", "Teleport"];

function roll() {
    var a = Math.floor(Math.random() * Powers.length);
    var b = Math.floor(Math.random() * Powers.length);
    if (a == b) {
        // document.getElementById("roll").innerHTML = 
        console.log(Powers[a] + "&" + Powers[b] + ": Duplicate found, rerolling...");
        roll();
    } else {
        document.getElementById("roll").innerHTML = ("Power 1:<br/>" + Powers[a] + "<br/>Power 2:<br/>" +          Powers[b] + "<br/><br/>Good luck and have fun :D<br/>");
    }
}
roll()