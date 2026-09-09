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


/* ==========================
   PAGE READY
========================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================
       GUEST NAME
    ========================== */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const guestId =
        params.get("guest");


    if (
        guestId &&
        guests[guestId]
    ) {

        const guest =
            guests[guestId];


        const guestName =
            document.getElementById(
                "guestName"
            );


        const guestNameHero =
            document.getElementById(
                "guestNameHero"
            );


        if (guestName) {

            guestName.textContent =
                guest.name;

        }


        if (guestNameHero) {

            guestNameHero.textContent =
                guest.name;

        }

    }


    /* ==========================
       ENVELOPE
    ========================== */

    const envelope =
        document.getElementById(
            "envelope"
        );


    const inside =
        document.getElementById(
            "inside"
        );


    const close =
        document.getElementById(
            "close"
        );


    /*
       OPEN ENVELOPE
    */

    if (
        envelope &&
        inside
    ) {

        envelope.addEventListener(
            "click",
            function (e) {

                /*
                   Don't reopen
                   while already open
                */

                if (
                    envelope.classList.contains(
                        "open"
                    )
                ) {

                    return;

                }


                /*
                   Open flap
                */

                envelope.classList.add(
                    "open"
                );


                /*
                   After flap animation,
                   move envelope away
                */

                setTimeout(
                    function () {

                        envelope.classList.add(
                            "hide-envelope"
                        );

                    },
                    850
                );


                /*
                   Show invitation card
                */

                setTimeout(
                    function () {

                        inside.classList.add(
                            "show"
                        );

                    },
                    1050
                );

            }
        );

    }


    /* ==========================
       CLOSE ENVELOPE / CARD
    ========================== */

    if (
        close &&
        inside &&
        envelope
    ) {

        close.addEventListener(
            "click",
            function (e) {

                /*
                   Prevent envelope
                   click event
                */

                e.stopPropagation();


                /*
                   Hide invitation
                */

                inside.classList.remove(
                    "show"
                );


                /*
                   Wait for card
                   closing animation
                */

                setTimeout(
                    function () {

                        envelope.classList.remove(
                            "hide-envelope"
                        );


                        envelope.classList.remove(
                            "open"
                        );

                    },
                    900
                );

            }
        );

    }


    /* ==========================
       COUNTDOWN
    ========================== */

    const weddingDate =
        new Date(
            "2026-11-07T13:00:00"
        ).getTime();


    function updateCountdown() {

        const now =
            new Date().getTime();


        const distance =
            weddingDate - now;


        const days =
            document.getElementById(
                "days"
            );


        const hours =
            document.getElementById(
                "hours"
            );


        const minutes =
            document.getElementById(
                "minutes"
            );


        const seconds =
            document.getElementById(
                "seconds"
            );


        /*
           Stop if countdown
           elements don't exist
        */

        if (
            !days ||
            !hours ||
            !minutes ||
            !seconds
        ) {

            return;

        }


        /*
           Wedding date reached
        */

        if (distance <= 0) {

            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;

        }


        /*
           Calculate days
        */

        const d =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        /*
           Calculate hours
        */

        const h =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        /*
           Calculate minutes
        */

        const m =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        /*
           Calculate seconds
        */

        const s =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );


        /*
           Display countdown
        */

        days.textContent =
            String(d).padStart(
                2,
                "0"
            );


        hours.textContent =
            String(h).padStart(
                2,
                "0"
            );


        minutes.textContent =
            String(m).padStart(
                2,
                "0"
            );


        seconds.textContent =
            String(s).padStart(
                2,
                "0"
            );

    }


    /*
       Run immediately
    */

    updateCountdown();


    /*
       Update every second
    */

    setInterval(
        updateCountdown,
        1000
    );


    /* ==========================
       GALLERY
    ========================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-grid img"
        );


    galleryImages.forEach(
        function (img) {

            img.addEventListener(
                "click",
                function () {

                    /*
                       Open image
                       in new tab
                    */

                    window.open(
                        img.src,
                        "_blank"
                    );

                }
            );

        }
    );


    /* ==========================
       FALLING FLOWERS
    ========================== */

    const flowers = [

        "🌸",
        "🌺",
        "🌷",
        "🌼",
        "❀",
        "✿",
        "✨"

    ];


    function createFlower() {

        /*
           Create flower element
        */

        const flower =
            document.createElement(
                "div"
            );


        /*
           Add CSS class
        */

        flower.className =
            "falling-flower";


        /*
           Random flower
        */

        flower.textContent =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];


        /*
           Random horizontal position
        */

        flower.style.left =
            Math.random() * 100 +
            "vw";


        /*
           Random size
        */

        flower.style.fontSize =
            (
                12 +
                Math.random() * 16
            ) +
            "px";


        /*
           Random falling speed
        */

        const duration =
            6 +
            Math.random() * 5;


        flower.style.animationDuration =
            duration +
            "s";


        /*
           Make sure animation
           starts immediately
        */

        flower.style.animationDelay =
            "0s";


        /*
           Add to page
        */

        document.body.appendChild(
            flower
        );


        /*
           Remove after animation
        */

        setTimeout(
            function () {

                if (flower) {

                    flower.remove();

                }

            },
            (duration + 1) * 1000
        );

    }


    /*
       Create flowers immediately
    */

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        setTimeout(
            createFlower,
            i * 250
        );

    }


    /*
       Keep creating flowers
    */

    setInterval(
        createFlower,
        700
    );

});


/* ==========================
   ENTER INVITATION
========================== */

function goToCard() {

    const weddingCard =
        document.getElementById(
            "weddingCard"
        );


    if (weddingCard) {

        weddingCard.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}
