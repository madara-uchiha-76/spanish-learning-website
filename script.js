/* =========================================
   HOLALEARN
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   SPANISH LESSON DATA
========================================= */

const lessonData = {

    A1: {

        name: "A1 — Beginner",

        description:
            "Start from zero and build your Spanish foundation.",

        total: 40,

        lessons: {

            1: {
                title: "Greetings",

                description:
                    "Learn common Spanish greetings and basic expressions.",

                vocabulary: [
                    ["Hola", "Hello", "OH-lah"],
                    ["Buenos días", "Good morning", "BWEH-nos DEE-as"],
                    ["Buenas tardes", "Good afternoon", "BWEH-nas TAR-des"],
                    ["Adiós", "Goodbye", "ah-DYOS"]
                ],

                examples: [
                    ["Hola, ¿cómo estás?", "Hello, how are you?"],
                    ["Buenos días, señor.", "Good morning, sir."]
                ],

                question:
                    'What does "Hola" mean?',

                answers: [
                    "Goodbye",
                    "Hello",
                    "Good morning",
                    "Thank you"
                ],

                correct: 1
            },

            2: {
                title: "Introducing Yourself",

                description:
                    "Learn how to introduce yourself in Spanish.",

                vocabulary: [
                    ["Me llamo", "My name is", "meh YAH-moh"],
                    ["Soy", "I am", "soy"],
                    ["Nombre", "Name", "NOM-breh"],
                    ["Mucho gusto", "Nice to meet you", "MOO-choh GOOS-toh"]
                ],

                examples: [
                    ["Me llamo Carlos.", "My name is Carlos."],
                    ["Mucho gusto.", "Nice to meet you."]
                ],

                question:
                    'What does "Me llamo" mean?',

                answers: [
                    "Goodbye",
                    "Thank you",
                    "My name is",
                    "Good morning"
                ],

                correct: 2
            },

            3: {
                title: "The Spanish Alphabet",

                description:
                    "Learn the Spanish alphabet and basic pronunciation.",

                vocabulary: [
                    ["A", "Letter A", "ah"],
                    ["B", "Letter B", "beh"],
                    ["C", "Letter C", "seh"],
                    ["D", "Letter D", "deh"]
                ],

                examples: [
                    ["A, B, C, D", "The first four letters."],
                    ["El alfabeto español.", "The Spanish alphabet."]
                ],

                question:
                    'How do you pronounce the Spanish letter "A"?',

                answers: [
                    "ah",
                    "bee",
                    "see",
                    "dee"
                ],

                correct: 0
            },

            4: {
                title: "Numbers",

                description:
                    "Learn basic numbers in Spanish.",

                vocabulary: [
                    ["Uno", "One", "OO-noh"],
                    ["Dos", "Two", "dohs"],
                    ["Tres", "Three", "trehs"],
                    ["Cuatro", "Four", "KWAH-troh"]
                ],

                examples: [
                    ["Uno, dos, tres.", "One, two, three."],
                    ["Tengo dos libros.", "I have two books."]
                ],

                question:
                    'What does "Dos" mean?',

                answers: [
                    "One",
                    "Two",
                    "Three",
                    "Four"
                ],

                correct: 1
            },

            5: {
                title: "Days and Months",

                description:
                    "Learn common days and months in Spanish.",

                vocabulary: [
                    ["Lunes", "Monday", "LOO-nes"],
                    ["Martes", "Tuesday", "MAR-tes"],
                    ["Enero", "January", "eh-NEH-roh"],
                    ["Mayo", "May", "MY-oh"]
                ],

                examples: [
                    ["Hoy es lunes.", "Today is Monday."],
                    ["Mi cumpleaños es en mayo.", "My birthday is in May."]
                ],

                question:
                    'What does "Lunes" mean?',

                answers: [
                    "Monday",
                    "Tuesday",
                    "January",
                    "May"
                ],

                correct: 0
            }

        }

    },


    A2: {

        name: "A2 — Elementary",

        description:
            "Build everyday Spanish vocabulary and communication skills.",

        total: 40,

        lessons: {}

    },


    B1: {

        name: "B1 — Intermediate",

        description:
            "Develop conversation skills and understand more complex Spanish.",

        total: 50,

        lessons: {}

    },


    B2: {

        name: "B2 — Upper Intermediate",

        description:
            "Master advanced communication and complex Spanish structures.",

        total: 50,

        lessons: {}

    }

};


/* =========================================
   START LEARNING
========================================= */

function startLearning() {

    openLevel("A1");

}


/* =========================================
   SCROLL TO LEVELS
========================================= */

function scrollToLevels() {

    const levels =
        document.getElementById("learn");

    if (levels) {

        levels.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   OPEN LEVEL
========================================= */

function openLevel(level) {

    localStorage.setItem(
        "selectedSpanishLevel",
        level
    );

    localStorage.setItem(
        "selectedLesson",
        "1"
    );

    showLessons(level);

}


/* =========================================
   SHOW LESSON LIST
========================================= */

function showLessons(level) {

    const data =
        lessonData[level];

    if (!data) {
        return;
    }


    document.body.innerHTML = `

        <header class="navbar">

            <div class="logo">
                Hola<span>Learn</span>
            </div>

            <nav>

                <a href="#" onclick="goHome()">
                    Home
                </a>

                <a href="#" onclick="showLessons('${level}')">
                    Lessons
                </a>

            </nav>

            <button
                class="nav-button"
                onclick="goHome()">

                Home

            </button>

        </header>


        <main class="lessons-page">

            <div class="lessons-header">

                <span>
                    ${level}
                </span>

                <h1>
                    ${data.name}
                </h1>

                <p>
                    ${data.description}
                </p>

            </div>


            <div class="lessons-container">

                ${createLessonCards(level, data)}

            </div>

        </main>

    `;

}


/* =========================================
   CREATE LESSON CARDS
========================================= */

function createLessonCards(level, data) {

    let html = "";

    const completed =
        Number(
            localStorage.getItem(
                `holaLearnProgress_${level}`
            )
        ) || 0;


    for (
        let i = 1;
        i <= data.total;
        i++
    ) {

        const lesson =
            data.lessons[i];


        let title;

        let description;


        if (lesson) {

            title =
                lesson.title;

            description =
                lesson.description;

        } else {

            title =
                `Lesson ${i}`;

            description =
                `Continue your ${level} Spanish journey.`;

        }


        const isCompleted =
            i <= completed;


        html += `

            <div class="lesson-card">

                <div class="lesson-number">

                    ${String(i).padStart(2, "0")}

                </div>


                <div class="lesson-content">

                    <span>
                        ${level}
                    </span>

                    <h3>
                        ${title}
                    </h3>

                    <p>
                        ${description}
                    </p>

                </div>


                <button
                    onclick="openLesson('${level}', ${i})">

                    ${isCompleted ? "Review →" : "Start →"}

                </button>

            </div>

        `;

    }


    return html;

}


/* =========================================
   OPEN LESSON
========================================= */

function openLesson(level, lessonNumber) {

    localStorage.setItem(
        "selectedSpanishLevel",
        level
    );

    localStorage.setItem(
        "selectedLesson",
        lessonNumber
    );


    showLesson(
        level,
        lessonNumber
    );

}


/* =========================================
   SHOW SINGLE LESSON
========================================= */

function showLesson(level, lessonNumber) {

    const data =
        lessonData[level];

    const lesson =
        data?.lessons?.[lessonNumber];


    if (!lesson) {

        alert(
            "This lesson is coming soon! 🇪🇸"
        );

        return;

    }


    document.body.innerHTML = `

        <header class="navbar">

            <div class="logo">
                Hola<span>Learn</span>
            </div>

            <button
                class="nav-button"
                onclick="showLessons('${level}')">

                ← Lessons

            </button>

        </header>


        <main class="single-lesson-page">


            <div class="single-lesson-header">

                <span class="lesson-level-label">

                    ${level} • LESSON
                    ${String(lessonNumber).padStart(2, "0")}

                </span>


                <h1>
                    ${lesson.title}
                </h1>


                <p>
                    ${lesson.description}
                </p>

            </div>


            <!-- VOCABULARY -->

            <section class="lesson-section">

                <div class="lesson-section-heading">

                    <span>
                        01
                    </span>

                    <div>

                        <h2>
                            Vocabulary
                        </h2>

                        <p>
                            Learn these useful Spanish words.
                        </p>

                    </div>

                </div>


                <div class="vocabulary-list">

                    ${createVocabulary(
                        lesson.vocabulary
                    )}

                </div>

            </section>


            <!-- EXAMPLES -->

            <section class="lesson-section">

                <div class="lesson-section-heading">

                    <span>
                        02
                    </span>

                    <div>

                        <h2>
                            Useful Examples
                        </h2>

                        <p>
                            See how these words are used.
                        </p>

                    </div>

                </div>


                ${createExamples(
                    lesson.examples
                )}

            </section>


            <!-- PRACTICE -->

            <section class="lesson-section practice-box">

                <div class="lesson-section-heading">

                    <span>
                        03
                    </span>

                    <div>

                        <h2>
                            Quick Practice
                        </h2>

                        <p>
                            Test what you just learned.
                        </p>

                    </div>

                </div>


                <div class="question-card">

                    <p class="question-number">
                        Question 1 of 1
                    </p>


                    <h3>
                        ${lesson.question}
                    </h3>


                    <div class="answer-options">

                        ${createAnswers(
                            lesson.answers,
                            lesson.correct
                        )}

                    </div>


                    <p
                        id="answerMessage"
                        class="answer-message">

                    </p>

                </div>

            </section>


            <!-- COMPLETE -->

            <div class="lesson-complete-area">

                <button
                    class="complete-lesson-button"
                    onclick="completeCurrentLesson(
                        '${level}',
                        ${lessonNumber}
                    )">

                    ✓ Complete Lesson

                </button>

            </div>


            <!-- NAVIGATION -->

            <div class="lesson-navigation">

                <button
                    onclick="showLessons('${level}')">

                    ← All Lessons

                </button>


                <button
                    onclick="nextLesson(
                        '${level}',
                        ${lessonNumber}
                    )">

                    Next Lesson →

                </button>

            </div>


        </main>

    `;

}


/* =========================================
   CREATE VOCABULARY
========================================= */

function createVocabulary(words) {

    let html = "";


    words.forEach(function (word) {

        html += `

            <div class="vocabulary-card">

                <div>

                    <strong>
                        ${word[0]}
                    </strong>

                    <span>
                        ${word[1]}
                    </span>

                    <small>
                        ${word[2]}
                    </small>

                </div>


                <button
                    onclick="speakSpanish('${word[0]}')">

                    🔊

                </button>

            </div>

        `;

    });


    return html;

}


/* =========================================
   CREATE EXAMPLES
========================================= */

function createExamples(examples) {

    let html = "";


    examples.forEach(function (example) {

        html += `

            <div class="example-card">

                <div class="example-spanish">

                    <span>
                        ${example[0]}
                    </span>

                    <button
                        onclick="speakSpanish('${example[0]}')">

                        🔊

                    </button>

                </div>


                <div class="example-english">

                    ${example[1]}

                </div>

            </div>

        `;

    });


    return html;

}


/* =========================================
   CREATE ANSWERS
========================================= */

function createAnswers(
    answers,
    correctAnswer
) {

    let html = "";


    answers.forEach(function (answer, index) {

        html += `

            <button
                onclick="checkAnswer(
                    this,
                    ${index === correctAnswer}
                )">

                ${answer}

            </button>

        `;

    });


    return html;

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    button,
    correct
) {

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
            "✓ Correct! Great job!";


        message.className =
            "answer-message correct-message";

    } else {

        button.classList.add(
            "wrong-answer"
        );


        message.textContent =
            "✗ Not quite. Try again next time!";


        message.className =
            "answer-message wrong-message";

    }

}


/* =========================================
   COMPLETE CURRENT LESSON
========================================= */

function completeCurrentLesson(
    level,
    lessonNumber
) {

    const progressKey =
        `holaLearnProgress_${level}`;


    const oldProgress =
        Number(
            localStorage.getItem(
                progressKey
            )
        ) || 0;


    if (lessonNumber > oldProgress) {

        localStorage.setItem(
            progressKey,
            lessonNumber
        );

    }


    alert(
        "🎉 Lesson completed!\n\n" +
        "Great job! Keep learning Spanish."
    );

}


/* =========================================
   NEXT LESSON
========================================= */

function nextLesson(
    level,
    lessonNumber
) {

    const next =
        lessonNumber + 1;


    if (
        next >
        lessonData[level].total
    ) {

        alert(
            "🏆 You completed this level!"
        );

        showLessons(level);

        return;

    }


    localStorage.setItem(
        "selectedSpanishLevel",
        level
    );


    localStorage.setItem(
        "selectedLesson",
        next
    );


    if (
        lessonData[level].lessons[next]
    ) {

        showLesson(
            level,
            next
        );

    } else {

        alert(
            "This lesson is coming soon! 🇪🇸"
        );

    }

}


/* =========================================
   SPANISH PRONUNCIATION
========================================= */

function speakSpanish(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Your browser does not support audio."
        );

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.lang =
        "es-ES";


    speech.rate =
        0.85;


    speech.pitch =
        1;


    window.speechSynthesis.speak(
        speech
    );

}


/* =========================================
   PRACTICE BUTTON
========================================= */

function startPractice() {

    alert(
        "🇪🇸 Practice mode is coming next!"
    );

}


/* =========================================
   GO HOME
========================================= */

function goHome() {

    window.location.reload();

}


/* =========================================
   LOAD SAVED PAGE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "HolaLearn loaded successfully 🇪🇸"
        );

    }
);
