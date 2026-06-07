function submitForm() {
    document.getElementById("output").innerHTML =
    "Registration Successful!";
}

function showFee() {
    let fee = document.getElementById("eventSelect").value;

    document.getElementById("fee").innerHTML =
    "Event Fee: ₹" + fee;
}

function countChars() {
    let text = document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
    "Characters: " + text.length;
}

function videoReady() {
    document.getElementById("videoMessage").innerHTML =
    "Video ready to play";
}

function findLocation() {

    navigator.geolocation.getCurrentPosition(

        function(position) {
            document.getElementById("location").innerHTML =
            "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        },

        function() {
            alert("Location access denied");
        }
    );
}

window.onbeforeunload = function() {
    return "Your form is not submitted.";
}


