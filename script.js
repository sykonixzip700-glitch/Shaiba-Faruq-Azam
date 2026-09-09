/* ==========================
   GUEST SYSTEM
========================== */

const guests = {

    rahim: {
        name: "Rahim Khan",
        reminder: true,
        pickup: true
    },

    salman: {
        name: "Salman Ahmed",
        reminder: false,
        pickup: false
    },

    arif: {
        name: "Arif Ahmad",
        reminder: true,
        pickup: false
    },

    sahil: {
        name: "Sahil Khan",
        reminder: true,
        pickup: true
    },

    imran: {
        name: "Imran Ahmad",
        reminder: false,
        pickup: false
    }

};


/* URL se guest lena */

const params = new URLSearchParams(
    window.location.search
);

const guestId = params.get("guest");

let currentGuest = null;

if (guestId && guests[guestId]) {

    currentGuest = guests[guestId];

    document.getElementById("guestName").textContent =
        currentGuest.name;

    document.getElementById("guestNameHero").textContent =
        currentGuest.name;

}


/* ==========================
   ENTER INVITATION
========================== */

function goToCard(){

    document.getElementById("weddingCard")
        .scrollIntoView({
            behavior:"smooth"
        });

}


/* ==========================
   ENVELOPE
========================== */

const envelope =
    document.getElementById("envelope");

const inside =
    document.getElementById("inside");

const close =
    document.getElementById("close");


envelope.addEventListener("click", function(){

    envelope.classList.add("open");

    setTimeout(function(){

        inside.classList.add("show");

    },700);

});


/* ==========================
   CLOSE CARD
========================== */

close.addEventListener("click", function(e){

    e.stopPropagation();

    inside.classList.remove("show");

    setTimeout(function(){

        envelope.classList.remove("open");

    },700);

});


/* ==========================
   COUNTDOWN
========================== */

const weddingDate =
    new Date("2026-11-07T13:00:00").getTime();


function updateCountdown(){

    const now =
        new Date().getTime();

    const distance =
        weddingDate - now;


    if(distance <= 0){

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2,"0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2,"0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* ==========================
   GALLERY
========================== */

document.querySelectorAll(
    ".gallery-grid img"
).forEach(function(img){

    img.addEventListener(
        "click",
        function(){

            window.open(
                img.src,
                "_blank"
            );

        }
    );

});
