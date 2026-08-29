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
    
}
```
