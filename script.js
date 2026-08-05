const container = document.getElementById("daysContainer");
const topicFilter = document.getElementById("topicFilter");


/* =========================================================
   GET DAY CARD LEVEL
   ========================================================= */

function getLevel(d) {

    if (d.day === 0) {
    return "level-history";
}

    if (d.status === "missed") {
        return "missed";
    }

    if (d.status === "pending") {
        return "pending";
    }

    const questions = d.questions.length;
    const theory = d.theory.length;


    // Problems + Theory
    if (questions > 0 && theory > 0) {
        return "level-mixed";
    }


    // Theory Only
    if (questions === 0 && theory > 0) {
        return "level-theory";
    }


    // 1–2 Problems
    if (questions >= 1 && questions <= 2) {
        return "level-low";
    }


    // 3–5 Problems
    if (questions >= 3 && questions <= 5) {
        return "level-medium";
    }


    // 6+ Problems
    if (questions >= 6) {
        return "level-high";
    }


    return "pending";
}


/* =========================================================
   CREATE ALL 30 DAYS
   ========================================================= */

function allDays() {

    const map = new Map(
        dsaData.map(d => [d.day, d])
    );

    const days = [];


    // Add Day 0 if it exists in data.js
    if (map.has(0)) {
        days.push(map.get(0));
    }


    // Add Day 1 - Day 30
    for (let day = 1; day <= CHALLENGE_DAYS; day++) {

        days.push(
            map.get(day) || {
                day: day,
                date: "",
                status: "pending",
                topic: "Pending",
                questions: [],
                theory: [],
                notes: ""
            }
        );
    }


    return days;
}


/* =========================================================
   RENDER DAY CARDS
   ========================================================= */

function renderDays(filter = "all") {

    container.innerHTML = "";


    allDays()
        .filter(
            d => filter === "all" || d.topic === filter
        )
        .forEach(d => {

            const card = document.createElement("article");

            card.className =
                `day-card ${getLevel(d)}`;


            const icon =
    d.day === 0
        ? "📚"
        : d.status === "done"
            ? "✓"
            : d.status === "missed"
                ? "✕"
                : "⌛";


            card.innerHTML = `

                <div class="day-header">

                    <h3>${d.day === 0 ? "Before Challenge" : `Day ${d.day}`}</h3>

                    <span>${icon}</span>

                </div>


                <p class="date">
                    ${d.date || "Not logged yet"}
                </p>


                <div class="topic">
                    ${d.topic}
                </div>


                <div class="day-info">

                    ${
                        d.questions.length
                            ? `
                                <p>
                                    💻 ${d.questions.length}
                                    question${d.questions.length !== 1 ? "s" : ""}
                                </p>
                              `
                            : ""
                    }


                    ${
                        d.theory.length
                            ? `
                                <p>
                                    📚 ${d.theory.length}
                                    theory topic${d.theory.length !== 1 ? "s" : ""}
                                </p>
                              `
                            : ""
                    }

                </div>
            `;


            if (d.status === "done" || d.day === 0) {
    card.onclick = () => openModal(d);
}


            container.appendChild(card);

        });
}


/* =========================================================
   OPEN DAY DETAILS
   ========================================================= */

function openModal(d) {

    document.getElementById("modalTitle").textContent =
        `Day ${d.day} · ${d.date}`;


    let content = `

        <div class="modal-summary">

            <div>

                <strong>Topic</strong>

                <p>${d.topic}</p>

            </div>

        </div>
    `;


    /* QUESTIONS */

    if (d.questions.length) {

        content += `

            <h3 class="section-title">
                💻 Questions Solved
            </h3>

            <ul class="question-list">
        `;


        d.questions.forEach(q => {

            // Default platform = LeetCode
            const platform =
                q.platform || "LeetCode";


            // Convert platform name into safe CSS class
            // "Coding Ninjas" -> "codingninjas"
            const platformClass =
                platform
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "");


            content += `

                <li class="question-item">

                    <a
                        href="${q.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        ${
                            q.number
                                ? `#${q.number} `
                                : ""
                        }

                        ${q.name}

                    </a>


                    <span class="difficulty">
                        ${q.difficulty}
                    </span>


                    <span
                        class="platform ${platformClass}"
                    >
                        ${platform}
                    </span>

                </li>
            `;

        });


        content += "</ul>";
    }


    /* THEORY */

    if (d.theory.length) {

        content += `

            <h3 class="section-title">
                📚 Theory Studied
            </h3>

            <ul class="theory-list">
        `;


        d.theory.forEach(t => {

            content += `
                <li>${t}</li>
            `;

        });


        content += "</ul>";
    }


    /* NOTES */

    if (d.notes) {

        content += `

            <h3 class="section-title">
                📝 Notes
            </h3>

            <div class="notes">
                ${d.notes}
            </div>
        `;
    }


    document.getElementById("modalBody").innerHTML =
        content;


    document.getElementById("modal").style.display =
        "flex";
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    document.getElementById("modal").style.display =
        "none";
}


/* =========================================================
   UPDATE DASHBOARD STATS
   ========================================================= */

function updateStats() {

  const days = allDays();

// Only Day 1 to Day 30
// Day 0 (Before Challenge) is excluded
const challengeDays = days.filter(
    d => d.day >= 1
);

const done = challengeDays.filter(
    d => d.status === "done"
).length;

const missed = challengeDays.filter(
    d => d.status === "missed"
).length;

const pending = challengeDays.filter(
    d => d.status === "pending"
).length;


    document.getElementById("doneDays").textContent =
        done;

    document.getElementById("missedDays").textContent =
        missed;

    document.getElementById("pendingDays").textContent =
        pending;


    /* -----------------------------------------
       All Problems
       ----------------------------------------- */

    const allQuestions =
        dsaData.flatMap(
            day => day.questions
        );


    /* -----------------------------------------
       Problems Solved
       ----------------------------------------- */

    document.getElementById("totalQuestions").textContent =
        allQuestions.length;


    /* -----------------------------------------
       Difficulty Breakdown
       ----------------------------------------- */

    const easyCount =
        allQuestions.filter(
            q =>
                q.difficulty?.toLowerCase() === "easy"
        ).length;


    const mediumCount =
        allQuestions.filter(
            q =>
                q.difficulty?.toLowerCase() === "medium"
        ).length;


    const hardCount =
        allQuestions.filter(
            q =>
                q.difficulty?.toLowerCase() === "hard"
        ).length;


    document.getElementById("easyCount").textContent =
        easyCount;


    document.getElementById("mediumCount").textContent =
        mediumCount;


    document.getElementById("hardCount").textContent =
        hardCount;


    /* -----------------------------------------
       Current Day Streak
       ----------------------------------------- */

/* -----------------------------------------
   Current Day Streak
   ----------------------------------------- */

let streak = 0;

const sortedDays = dsaData
    .filter(day => day.day >= 1)
    .sort((a, b) => b.day - a.day);

for (const day of sortedDays) {

    if (day.status === "done") {
        streak++;
    } else {
        break;
    }
}

document.getElementById("streakCount").textContent = streak;


    /* -----------------------------------------
       LeetCode Profile
       ----------------------------------------- */

    document.getElementById("leetcodeProfile").href =
        LEETCODE_PROFILE;
}


/* =========================================================
   TOPIC FILTER
   ========================================================= */

[
    ...new Set(

        dsaData
            .filter(
                d => d.status === "done"
            )
            .map(
                d => d.topic
            )

    )

]
.sort()
.forEach(topic => {

    const option =
        document.createElement("option");


    option.value =
        topic;


    option.textContent =
        topic;


    topicFilter.appendChild(option);

});


topicFilter.onchange = e => {

    renderDays(
        e.target.value
    );

};


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

window.onclick = e => {

    if (
        e.target ===
        document.getElementById("modal")
    ) {

        closeModal();
    }
};


/* =========================================================
   ESC KEY CLOSES MODAL
   ========================================================= */

window.onkeydown = e => {

    if (e.key === "Escape") {

        closeModal();
    }
};


/* =========================================================
   LAST UPDATED
   ========================================================= */

const lastModified =
    new Date(
        document.lastModified
    );


document.getElementById("lastUpdated").textContent =
    lastModified.toLocaleString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }
    );


/* =========================================================
   INITIALIZE
   ========================================================= */

updateStats();

renderDays();