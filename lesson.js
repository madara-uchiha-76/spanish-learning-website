/* =========================================
   HOLALEARN LESSON SYSTEM
========================================= */

const level =
    localStorage.getItem("selectedSpanishLevel") || "A1";

const lessonNumber =
    Number(localStorage.getItem("selectedLesson")) || 1;


/* =========================================
   LESSON DATA
========================================= */

const lessons = {

    A1: {

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
                "Learn numbers in Spanish."
        },

        5: {
            title: "Days and Months",
            description:
                "Learn days, months and dates in Spanish."
        }

    }

};


/* =========================================
   GET CURRENT LESSON
========================================= */

const currentLesson =
    lessons[level]?.[lessonNumber] || {

        title: `Spanish Lesson ${lessonNumber}`,

        description:
            "Continue your Spanish learning journey."

    };


/* =========================================
   SHOW LESSON
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const label =
            document.querySelector(
                ".lesson-level-label"
            );

        const title =
            document.querySelector(
                ".single-lesson-header h1"
            );

        const description =
            document.querySelector(
                ".single-lesson-header p"
            );


        if (label) {

            label.textContent =
                `${level} • LESSON ${String(lessonNumber).padStart(2, "0")}`;

        }


        if (title) {

            title.textContent =
                currentLesson.title;

        }


        if (description) {

            description.textContent =
                currentLesson.description;

        }

    }
);


/* =========================================
   SPANISH AUDIO
========================================= */

function speakSpanish(text) {

    if (!("speechSynthesis" in window)) {

        alert("Audio is not supported.");

        return;

    }


    speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "es-ES";

    speech.rate = 0.85;

    speech.pitch = 1;


    speechSynthesis.speak(speech);

}


/* =========================================
   ANSWER CHECK
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
            "✗ Not quite. Hola = Hello.";

        message.className =
            "answer-message wrong-message";

    }

}


/* =========================================
   COMPLETE LESSON
========================================= */

function finishLesson() {

    const progressKey =
        `holaLearnProgress_${level}`;


    const oldProgress =
        Number(
            localStorage.getItem(progressKey)
        ) || 0;


    if (lessonNumber > oldProgress) {

        localStorage.setItem(
            progressKey,
            lessonNumber
        );

    }


    alert(
        "🎉 Lesson completed!"
    );

}


/* =========================================
   NEXT LESSON
========================================= */

function finishAndNext() {

    const nextLesson =
        lessonNumber + 1;


    localStorage.setItem(
        "selectedSpanishLevel",
        level
    );


    localStorage.setItem(
        "selectedLesson",
        nextLesson
    );


    window.location.href =
        "lesson.html";

}
