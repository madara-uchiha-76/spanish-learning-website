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
/* =========================================
   FIX: LOAD SELECTED LESSON
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const level =
        localStorage.getItem("selectedSpanishLevel") || "A1";

    const lesson =
        Number(
            localStorage.getItem("selectedLesson")
        ) || 1;


    const lessonData = {

        1: {
            title: "Greetings",
            description:
                "Learn common Spanish greetings and basic expressions."
        },

        2: {
            title: "Introducing Yourself",
            description:
                "Learn how to introduce yourself in Spanish."
        },

        3: {
            title: "The Spanish Alphabet",
            description:
                "Learn the Spanish alphabet and pronunciation."
        },

        4: {
            title: "Numbers",
            description:
                "Learn numbers and how to use them in Spanish."
        },

        5: {
            title: "Days and Months",
            description:
                "Learn the days of the week and months of the year."
        },

        6: {
            title: "Family",
            description:
                "Learn useful Spanish words for family members."
        },

        7: {
            title: "Countries and Nationalities",
            description:
                "Learn countries and nationalities in Spanish."
        },

        8: {
            title: "Food and Drinks",
            description:
                "Learn common food and drink vocabulary."
        },

        9: {
            title: "Colors",
            description:
                "Learn the most useful colors in Spanish."
        },

        10: {
            title: "Basic Questions",
            description:
                "Learn how to ask and answer simple questions."
        }

    };


    const data =
        lessonData[lesson] || {

            title: `Spanish Lesson ${lesson}`,

            description:
                "Continue your Spanish learning journey."

        };


    /* UPDATE LESSON NUMBER */

    const label =
        document.querySelector(
            ".lesson-level-label"
        );

    if (label) {

        label.textContent =
            `${level} • LESSON ${String(lesson).padStart(2, "0")}`;

    }


    /* UPDATE TITLE */

    const title =
        document.querySelector(
            ".single-lesson-header h1"
        );

    if (title) {

        title.textContent =
            data.title;

    }


    /* UPDATE DESCRIPTION */

    const description =
        document.querySelector(
            ".single-lesson-header p"
        );

    if (description) {

        description.textContent =
            data.description;

    }

});
