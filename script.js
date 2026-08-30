/* =========================
   SCROLL TO LEARN
========================= */

function goToLearn() {

    document.getElementById("learn").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   OPEN LEVEL
========================= */

function openLevel(level) {

    localStorage.setItem("selectedLevel", level);

    window.location.href = "lessons.html";

}


/* =========================
   SPANISH SPEECH
========================= */

function speakSpanish(text) {

    if ("speechSynthesis" in window) {

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = "es-ES";

        speech.rate = 0.85;

        window.speechSynthesis.speak(speech);

    } else {

        alert("Your browser does not support pronunciation.");

    }

}


/* =========================
   PRACTICE
========================= */

function showPracticeMessage() {

    alert(
        "Practice section is coming next! 🇪🇸\n\n" +
        "We will add exercises, translations and tests."
    );

}
