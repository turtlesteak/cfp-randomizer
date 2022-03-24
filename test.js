let Powers = ["Homing", "Jump", "Brake", "Thick", "One Shot", "Mine", "Zap", "Low-res", "Thin", "Scatter Shot", "Steer-less", "Speed Burst", "Stealth Mine", "Trippy", "Power Dash", "Side Shot", "Speedy", "Shield", "Clock Block", "Time Bomb", "Hide Self", "Curve-blind", "Angle Turns", "Multi Shot", "Trigger Bomb", "180", "Double Shot", "Reverse", "Laser", "Teleport"];
function roll() {
    let select = document.getElementById("powersList");
    let UnlockedPowers = select.value;
    let a = Math.floor(Math.random() * UnlockedPowers);
    let b = Math.floor(Math.random() * UnlockedPowers);
    if (a == b) {
        console.log(Powers[a] + " & " + Powers[b] + ": Duplicate found, rerolling...");
        roll();
    } else {
        document.getElementById("Power 1").innerHTML = (Powers[a]);
        document.getElementById("Power 2").innerHTML = (Powers[b] + "<br/><br/>Good luck and have fun :D");
    }
}