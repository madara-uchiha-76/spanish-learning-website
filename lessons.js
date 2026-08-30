/* =========================
   GET SELECTED LEVEL
========================= */

const selectedLevel =
    localStorage.getItem("selectedLevel") || "A1";


/* =========================
   LEVEL INFORMATION
========================= */

const levelData = {

    A1: {
        title: "A1 — Beginner",

        description:
            "Start from zero and build your Spanish foundation.",

        totalLessons: 40
    },

    A2: {
        title: "A2 — Elementary",

        description:
            "Build everyday Spanish vocabulary and communication skills.",

        totalLessons: 40
    },

    B1: {
        title: "B1 — Intermediate",

        description:
            "Develop your conversation skills and understand more complex Spanish.",

        totalLessons: 50
    },

    B2: {
        title: "B2 — Upper Intermediate",

        description:
            "Master advanced communication and complex Spanish structures.",

        totalLessons: 50
    }

};


/* =========================
   CURRENT LEVEL
========================= */

const currentLevel =
    levelData[selectedLevel];


/* =========================
   UPDATE HEADER
========================= */

document.getElementById("levelBadge")
    .textContent = selectedLevel;

document.getElementById("levelTitle")
    .textContent = currentLevel.title;

document.getElementById("levelDescription")
    .textContent = currentLevel.description;


/* =========================
   CREATE LESSONS
========================= */

const lessonsContainer =
    document.getElementById("lessonsContainer");


for (
    let i = 1;
    i <= currentLevel.totalLessons;
    i++
) {

    const lessonCard =
        document.createElement("div");

    lessonCard.className =
        "lesson-card";


    lessonCard.innerHTML = `

        <div class="lesson-number">
            ${String(i).padStart(2, "0")}
        </div>

        <div class="lesson-content">

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

        <button
            onclick="openLesson(${i})">
            Start →
        </button>

    `;


    lessonsContainer.appendChild(
        lessonCard
    );

}


/* =========================
   OPEN LESSON
========================= */

function openLesson(lessonNumber) {

    localStorage.setItem(
        "selectedLesson",
        lessonNumber
    );

    alert(
        selectedLevel +
        " — Lesson " +
        lessonNumber +
        "\n\nActual lesson content will be added in the next part."
    );

}
/* =========================================
   LESSON SEARCH & FILTER
========================================= */

function filterLessons() {

    const searchInput =
        document.getElementById("lessonSearch");

    const filterInput =
        document.getElementById("lessonFilter");

    if (!searchInput || !filterInput) {
        return;
    }

    const search =
        searchInput.value.toLowerCase();

    const filter =
        filterInput.value;


    const lessons =
        document.querySelectorAll(".lesson-item");


    lessons.forEach(function (lesson) {

        const lessonText =
            lesson.textContent.toLowerCase();

        const isCompleted =
            lesson.classList.contains("completed");


        let matchesSearch =
            lessonText.includes(search);

        let matchesFilter = true;


        if (filter === "completed") {

            matchesFilter = isCompleted;

        }


        if (filter === "available") {

            matchesFilter = !isCompleted;

        }


        if (
            matchesSearch &&
            matchesFilter
        ) {

            lesson.style.display = "flex";

        } else {

            lesson.style.display = "none";

        }

    });

}


/* =========================================
   MARK LESSON AS COMPLETED
========================================= */

function completeLesson(lessonNumber) {

    const progressKey =
        `holaLearnProgress_${selectedLevel}`;


    let completed =
        Number(
            localStorage.getItem(progressKey)
        ) || 0;


    if (lessonNumber > completed) {

        localStorage.setItem(
            progressKey,
            lessonNumber
        );

    }


    updateLessonProgress();

}


/* =========================================
   UPDATE PROGRESS
========================================= */

function updateLessonProgress() {

    const progressKey =
        `holaLearnProgress_${selectedLevel}`;


    const completed =
        Number(
            localStorage.getItem(progressKey)
        ) || 0;


    const percentage =
        Math.round(
            (completed /
                currentLevel.totalLessons) * 100
        );


    const progressText =
        document.getElementById("progressText");


    const progressBar =
        document.getElementById("progressBar");


    if (progressText) {

        progressText.textContent =
            `${percentage}%`;

    }


    if (progressBar) {

        progressBar.style.width =
            `${percentage}%`;

    }


    const lessons =
        document.querySelectorAll(".lesson-item");


    lessons.forEach(function (lesson, index) {

        const lessonNumber =
            index + 1;


        if (lessonNumber <= completed) {

            lesson.classList.add("completed");

        }

    });

}


/* =========================================
   LOAD SAVED PROGRESS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLessonProgress();

    }
);

