/* =========================================
   HOLALEARN - SINGLE LESSON
========================================= */


/* =========================================
   SPANISH PRONUNCIATION
========================================= */

function speakSpanish(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Your browser does not support audio."
        );

        return;
    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang = "es-ES";

    speech.rate = 0.85;

    speech.pitch = 1;


    window.speechSynthesis.speak(speech);

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(button, correct) {

    const message =
        document.getElementById(
            "answerMessage"
        );


    const buttons =
        document.querySelectorAll(
            ".answer-options button"
        );


    buttons.forEach(function (item) {

        item.disabled = true;

    });


    if (correct) {

        button.classList.add(
            "correct-answer"
        );

        message.textContent =
            "✓ Correct! Hola means Hello.";

        message.className =
            "answer-message correct-message";

    } else {

        button.classList.add(
            "wrong-answer"
        );

        message.textContent =
            "✗ Not quite. Try to remember: Hola = Hello.";

        message.className =
            "answer-message wrong-message";

    }

}


/* =========================================
   COMPLETE LESSON
========================================= */

function finishLesson() {

    const level =
        localStorage.getItem(
            "selectedSpanishLevel"
        ) || "A1";


    const lesson =
        Number(
            localStorage.getItem(
                "selectedLesson"
            )
        ) || 1;


    const progressKey =
        `holaLearnProgress_${level}`;


    const currentProgress =
        Number(
            localStorage.getItem(
                progressKey
            )
        ) || 0;


    if (lesson > currentProgress) {

        localStorage.setItem(
            progressKey,
            lesson
        );

    }


    alert(
        "🎉 Lesson completed!\n\n" +
        "Great job! Keep learning Spanish."
    );

}


/* =========================================
   COMPLETE + NEXT
========================================= */

function finishAndNext() {

    const level =
        localStorage.getItem(
            "selectedSpanishLevel"
        ) || "A1";


    const lesson =
        Number(
            localStorage.getItem(
                "selectedLesson"
            )
        ) || 1;


    const progressKey =
        `holaLearnProgress_${level}`;


    const currentProgress =
        Number(
            localStorage.getItem(
                progressKey
            )
        ) || 0;


    if (lesson > currentProgress) {

        localStorage.setItem(
            progressKey,
            lesson
        );

    }


    const nextLesson =
        lesson + 1;


    localStorage.setItem(
        "selectedLesson",
        nextLesson
    );


    window.location.href =
        "lesson.html";

}
