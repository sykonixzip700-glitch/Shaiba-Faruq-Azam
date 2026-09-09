/* ==========================
   GUEST SYSTEM
========================== */

const guests = {

    rahim:{
        name:"Rahim Khan",
        reminder:true,
        pickup:true
    },

    salman:{
        name:"Salman Ahmed",
        reminder:false,
        pickup:false
    },

    arif:{
        name:"Arif Ahmad",
        reminder:true,
        pickup:false
    },

    sahil:{
        name:"Sahil Khan",
        reminder:true,
        pickup:true
    },

    imran:{
        name:"Imran Ahmad",
        reminder:false,
        pickup:false
    }

};


/* ==========================
   PAGE READY
========================== */

document.addEventListener("DOMContentLoaded",function(){


    /* ==========================
       GUEST
    ========================== */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const guestId =
        params.get("guest");

    if(
        guestId &&
        guests[guestId]
    ){

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

        if(guestName){
            guestName.textContent =
                guest.name;
        }

        if(guestNameHero){
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


    if(envelope && inside){

        envelope.addEventListener(
            "click",
            function(){

                if(
                    envelope.classList.contains(
                        "open"
                    )
                ){
                    return;
                }

                envelope.classList.add(
                    "open"
                );


                /* Flap opens first */

                setTimeout(
                    function(){

                        envelope.classList.add(
                            "hide-envelope"
                        );

                    },
                    850
                );


                /* Inside card appears */

                setTimeout(
                    function(){

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
       CLOSE CARD
    ========================== */

    if(close){

        close.addEventListener(
            "click",
            function(e){

                e.stopPropagation();

                inside.classList.remove(
                    "show"
                );

                setTimeout(
                    function(){

                        envelope.classList.remove(
                            "open"
                        );

                        envelope.classList.remove(
                            "hide-envelope"
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


    function updateCountdown(){

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


        if(
            !days ||
            !hours ||
            !minutes ||
            !seconds
        ){
            return;
        }


        if(distance <= 0){

            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;

        }


        const d =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const h =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );


        const m =
            Math.floor(
                (
                    distance %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );


        const s =
            Math.floor(
                (
                    distance %
                    (1000 * 60)
                ) /
                1000
            );


        days.textContent =
            String(d).padStart(2,"0");

        hours.textContent =
            String(h).padStart(2,"0");

        minutes.textContent =
            String(m).padStart(2,"0");

        seconds.textContent =
            String(s).padStart(2,"0");

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* ==========================
       GALLERY
    ========================== */

    document
        .querySelectorAll(
            ".gallery-grid img"
        )
        .forEach(
            function(img){

                img.addEventListener(
                    "click",
                    function(){

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

    const flowerList = [

        "🌸",
        "🌺",
        "🌷",
        "🌼",
        "❀",
        "✿",
        "✨"

    ];


    function createFlower(){

        const flower =
            document.createElement(
                "div"
            );

        flower.className =
            "falling-flower";


        flower.textContent =
            flowerList[
                Math.floor(
                    Math.random() *
                    flowerList.length
                )
            ];


        flower.style.left =
            Math.random() * 100 +
            "vw";


        flower.style.fontSize =
            (
                12 +
                Math.random() * 16
            ) +
            "px";


        const duration =
            6 +
            Math.random() * 5;


        flower.style.animationDuration =
            duration +
            "s";


        document.body.appendChild(
            flower
        );


        setTimeout(
            function(){

                flower.remove();

            },
            (duration + 1) * 1000
        );

    }


    /* First flowers */

    for(
        let i = 0;
        i < 15;
        i++
    ){

        setTimeout(
            createFlower,
            i * 250
        );

    }


    /* Continuous flowers */

    setInterval(
        createFlower,
        700
    );

});


/* ==========================
   ENTER INVITATION
========================== */

function goToCard(){

    const weddingCard =
        document.getElementById(
            "weddingCard"
        );

    if(weddingCard){

        weddingCard.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }

}
