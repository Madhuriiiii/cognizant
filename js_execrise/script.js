console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");
};

const eventName = "Community Event";
const eventDate = "2026-06-01";
let seats = 50;

console.log(`${eventName} on ${eventDate} | Seats Available: ${seats}`);

function showFee() {
    const event = document.getElementById("eventSelect");
    const fee = document.getElementById("fee");

    fee.innerHTML = "Event Fee: ₹" + event.value;
}

function countChars() {
    const text = document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
        "Characters: " + text.length;
}

class Event {
    constructor(name, category, seats) {
        this.name = name;
        this.category = category;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const events = [
    new Event("Music Night", "Music", 20),
    new Event("Hackathon", "Technology", 15),
    new Event("Dance Show", "Dance", 0)
];

events.forEach(event => {
    console.log(event.name);
});

const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log(musicEvents);

const eventCards = events.map(
    event => `Workshop on ${event.name}`
);

console.log(eventCards);

function registerUser(name) {
    try {
        if (seats <= 0) {
            throw new Error("No Seats Available");
        }

        seats--;

        console.log(
            `${name} registered successfully. Seats Left: ${seats}`
        );

    } catch (error) {
        console.log(error.message);
    }
}

function registrationTracker() {
    let total = 0;

    return function () {
        total++;
        return total;
    };
}

const trackRegistration = registrationTracker();

document
    .querySelector(".register-form")
    .addEventListener("submit", async function (e) {

        e.preventDefault();

        const name =
            this.querySelector("input[type='text']").value;

        const email =
            this.querySelector("input[type='email']").value;

        const selectedEvent =
            document.getElementById("eventSelect").value;

        if (
            name.trim() === "" ||
            email.trim() === "" ||
            selectedEvent === "Select Event"
        ) {
            document.getElementById("output").innerHTML =
                "Please fill all fields";
            return;
        }

        registerUser(name);

        document.getElementById("output").innerHTML =
            "Registration Successful";

        console.log(
            "Total Registrations:",
            trackRegistration()
        );

        try {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email
                    })
                }
            );

            const data = await response.json();

            console.log("Server Response:", data);

        } catch (error) {
            console.log("Fetch Error:", error);
        }
    });

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function (position) {

                document.getElementById("location").innerHTML =
                    "Latitude: " +
                    position.coords.latitude +
                    "<br>Longitude: " +
                    position.coords.longitude;
            }
        );

    } else {

        document.getElementById("location").innerHTML =
            "Geolocation not supported";
    }
}