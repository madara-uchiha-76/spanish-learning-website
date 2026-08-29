```javascript
function startLearning() {
    document.getElementById("learn").scrollIntoView({
        behavior: "smooth"
    });
}


function showDemo() {
    alert(
        "Welcome to HolaLearn! 🇪🇸\n\n" +
        "You can learn Vocabulary, Grammar, " +
        "Pronunciation and Conversation."
    );
}


function openLesson(lesson) {
    alert(
        "You selected: " + lesson + "\n\n" +
        "This lesson section will be added in the next part!"
    );
}


function startPractice() {
    alert(
        "Practice section coming soon! 📝\n\n" +
        "We will build interactive Spanish exercises here."
    );
}


function playWord() {

    const word = new SpeechSynthesisUtterance("Hola");

    word.lang = "es-ES";

    speechSynthesis.speak(word);
    /* =========================
   LEVEL SELECTION
========================= */

.levels-section {
    padding: 100px 8%;
    background: #f8f8f8;
}

.levels-section .section-heading {
    text-align: center;
    max-width: 700px;
    margin: auto;
}

.levels-section .section-heading p {
    color: #e63946;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.levels-section .section-heading h2 {
    font-size: 42px;
    margin-bottom: 15px;
}

.levels-section .section-heading span {
    color: #777;
    font-size: 16px;
}


/* LEVEL CARDS */

.levels-container {
    max-width: 1200px;
    margin: 55px auto 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    gap: 22px;
}


.level-card {
    background: white;

    padding: 30px;

    border-radius: 20px;

    border: 1px solid #eeeeee;

    transition: all 0.3s ease;

    cursor: pointer;
}


.level-card:hover {
    transform: translateY(-10px);

    box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.10);
}


/* TOP */

.level-top {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 25px;
}


.level-badge {
    font-size: 18px;

    font-weight: 800;

    background: #fff0f0;

    color: #e63946;

    padding: 8px 14px;

    border-radius: 8px;
}


.level-icon {
    font-size: 30px;
}


/* TEXT */

.level-card h3 {
    font-size: 24px;

    margin-bottom: 12px;
}


.level-card > p {
    color: #777;

    font-size: 14px;

    line-height: 1.6;

    min-height: 70px;
}


/* LESSON COUNT */

.lesson-count {
    display: flex;

    align-items: baseline;

    gap: 8px;

    margin: 25px 0;
}


.lesson-count strong {
    font-size: 28px;

    color: #202020;
}


.lesson-count span {
    color: #888;

    font-size: 14px;
}


/* BUTTON */

.level-card button {
    width: 100%;

    padding: 13px;

    border: none;

    border-radius: 9px;

    background: #e63946;

    color: white;

    font-weight: bold;

    cursor: pointer;

    transition: 0.3s;
}


.level-card button:hover {
    transform: translateY(-2px);

    opacity: 0.9;
}


/* TABLET */

@media (max-width: 1000px) {

    .levels-container {
        grid-template-columns: repeat(2, 1fr);
    }

}


/* MOBILE */

@media (max-width: 600px) {

    .levels-section {
        padding: 70px 6%;
    }

    .levels-section .section-heading h2 {
        font-size: 32px;
    }

    .levels-container {
        grid-template-columns: 1fr;
    }

}
}
```
