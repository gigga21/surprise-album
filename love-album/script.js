/* =====================================================
ELEMENTS
===================================================== */

const loader = document.getElementById("loader");

const landing = document.getElementById("landing");

const introLetter = document.getElementById("introLetter");

const album = document.getElementById("album");

const openLetter = document.getElementById("openLetter");

const continueAlbum = document.getElementById("continueAlbum");

const pins = document.querySelectorAll(".pin");

const modal = document.getElementById("modal");

const overlay = document.querySelector(".overlay");

const viewerImage = document.getElementById("viewerImage");

const viewerTitle = document.getElementById("viewerTitle");

const viewerMessage = document.getElementById("viewerMessage");

const closeModal = document.getElementById("closeModal");

const secretHeart = document.getElementById("secretHeart");

const secretPopup = document.getElementById("secretPopup");

const closeSecret = document.querySelector(".closeSecret");

const endingCard = document.getElementById("endingCard");

const finalLetter = document.getElementById("finalLetter");

const closeLetter = document.getElementById("closeLetter");

const typewriter = document.getElementById("typewriter");

const music = document.getElementById("backgroundMusic");

const musicToggle = document.getElementById("musicToggle");

const cursorGlow = document.getElementById("cursorGlow");

const heartsContainer = document.getElementById("heartsContainer");


/* =====================================================
LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);

});


/* =====================================================
ENVELOPE
===================================================== */

openLetter.addEventListener("click", () => {

    landing.style.display = "none";

    introLetter.style.display = "flex";

});


/* =====================================================
LETTER
===================================================== */

continueAlbum.addEventListener("click", () => {

    introLetter.style.display = "none";

    album.style.display = "block";

});


/* =====================================================
IMAGE VIEWER
===================================================== */

pins.forEach(pin => {

    pin.addEventListener("click", () => {

        const type = pin.dataset.type;

        if(type !== "image") return;

        viewerImage.src = pin.dataset.image;

        viewerTitle.textContent = pin.dataset.title;

        viewerMessage.textContent = pin.dataset.message;

        modal.style.display = "flex";

        // ❤️ Special Letter Animation

        if(pin.dataset.title === "A Letter For You ❤️"){

            document.querySelector(".viewer").classList.add("letter-view");

        }

        else{

            document.querySelector(".viewer").classList.remove("letter-view");

        }

    });

});

closeModal.onclick = () => {

    modal.style.display = "none";

}

overlay.onclick = () => {

    modal.style.display = "none";

}

/* =====================================================
SECRET POPUP
===================================================== */

secretHeart.addEventListener("click", () => {

    secretPopup.style.display = "flex";

});

closeSecret.addEventListener("click", () => {

    secretPopup.style.display = "none";

});

secretPopup.addEventListener("click", (e) => {

    if(e.target === secretPopup){

        secretPopup.style.display = "none";

    }

});


/* =====================================================
FINAL LETTER
===================================================== */

const letter = `Hi ❤️

If you're reading this...

thank you.

Thank you for existing.

Thank you for every smile.

Thank you for every memory.

I know this isn't the biggest gift.

But I wanted to build something.

Something you could always come back to.

Whenever you miss me.

Or whenever...

I miss you.

Love,

Siddharth ❤️`;

function typeWriter(text){

    typewriter.innerHTML = "";

    let i = 0;

    function typing(){

        if(i < text.length){

            typewriter.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}

endingCard.addEventListener("click",()=>{

    finalLetter.style.display = "flex";

    typeWriter(letter);

});

closeLetter.addEventListener("click",()=>{

    finalLetter.style.display = "none";

});


/* =====================================================
MUSIC
===================================================== */

let playing = false;

musicToggle.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicToggle.classList.add("playing");

        playing = true;

    }

    else{

        music.pause();

        musicToggle.classList.remove("playing");

        playing = false;

    }

});

const songCard = document.querySelector(".song-card");

const spotifyPopup = document.getElementById("spotifyPopup");

const playSpotify = document.getElementById("playSpotify");

const closeSpotify = document.getElementById("closeSpotify");

songCard.addEventListener("click", () => {

    spotifyPopup.style.display = "flex";

});

closeSpotify.addEventListener("click", () => {

    spotifyPopup.style.display = "none";

});

playSpotify.addEventListener("click", () => {

    window.open("https://open.spotify.com/track/2AnT5iXM8ET5kiqBuE8Mpi?si=be02f2d280e14835", "_blank");

});

/* =====================================================
CURSOR GLOW
===================================================== */

document.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});


/* =====================================================
FLOATING HEARTS
===================================================== */

document.addEventListener("click",(e)=>{

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = e.clientX + "px";

    heart.style.top = e.clientY + "px";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000)

});


/* =====================================================
ESC KEY
===================================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        modal.style.display = "none";

        secretPopup.style.display = "none";

        finalLetter.style.display = "none";

    }

});


console.log("❤️ Love Album V2 Loaded Successfully");