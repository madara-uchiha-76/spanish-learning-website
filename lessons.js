const selectedLevel =
    localStorage.getItem("selectedLevel") || "A1";


const levelData = {

    A1: {
        title: "A1 — Beginner",
        description:
            "Start from zero and build your Spanish foundation.",
        lessons: 40
    },

    A2: {
        title: "A2 — Elementary",
        description:
            "Build everyday Spanish vocabulary and communication skills.",
        lessons: 40
    },

    B1: {
        title: "B1 — Intermediate",
        description:
            "Develop your conversation skills and understand more complex Spanish.",
        lessons: 50
    },

    B2: {
        title: "B2 — Upper Intermediate",
        description:
            "Master advanced communication and complex Spanish structures.",
        lessons: 50
    }

};


const currentLevel =
    levelData[selectedLevel];


document.getElementById("levelBadge").textContent =
    selectedLevel;


document.getElementById("levelTitle").textContent =
    currentLevel.title;


document.getElementById("levelDescription").textContent =
    currentLevel.description;



const container =
    document.getElementById("lessonsContainer");


for (
    let i = 1;
    i <= currentLevel.lessons;
    i++
) {

    const lesson = document.createElement("div");

    lesson.className = "lesson-card";


    lesson.innerHTML = `

        <div class="lesson-number">
            ${String(i).padStart(2, "0")}
        </div>

        <div class="lesson-info">

            <span>
                ${selectedLevel}
            </span>

            <h3>
                Lesson ${i}
            </h3>

            <p>
                Spanish lesson ${i}
            </p>

        </div>

        <button>
            Start →
        </button>

    `;


    container.appendChild(lesson);

}
