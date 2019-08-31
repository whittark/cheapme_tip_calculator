
//Tip calculation
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Enter values");
        return;
    }

    //See if input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";  
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //always include two digits after the decimal point
    total = total.toFixed(2);
    //display tip value
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("calculate").onclick = function() {
calculateTip();

};
