let Powers = ["Homing", "Jump", "Brake", "Thick", "One Shot", "Mine", "Zap", "Low-res", "Thin", "Scatter Shot", "Steer-less", "Speed Burst", "Stealth Mine", "Trippy", "Power Dash", "Side Shot", "Speedy", "Shield", "Clock Block", "Time Bomb", "Hide Self", "Curve-blind", "Angle Turns", "Multi Shot", "Trigger Bomb", "180", "Double Shot", "Reverse", "Laser", "Teleport"];
function roll() {
    let select = document.getElementById("powersList");
    let UnlockedPowers = select.value;
    let a = Math.floor(Math.random() * UnlockedPowers);
    let b = Math.floor(Math.random() * UnlockedPowers);
    let c = Math.floor(Math.random() * UnlockedPowers);
    if (a === b | a === c | b === c) {
        console.log(Powers[a] + " & " + Powers[b] + " & " + Powers[c] + ": Duplicate found, rerolling...");
        roll();
    } else {
        document.getElementById("Power1").innerHTML = (Powers[a]);
        document.getElementById("Power2").innerHTML = (Powers[b]);
        document.getElementById("Power3").innerHTML = (Powers[c]);
        document.getElementById("Close").innerHTML = ("Good luck and have fun 😄");
    }
}