const container = document.getElementById("daysContainer");
const topicFilter = document.getElementById("topicFilter");


/* =========================================================
   GET DAY COLOR / LEVEL
   ========================================================= */

function getLevel(d) {

    if (d.day === 0) {
        return "before-challenge";
    }

    if (d.status === "missed") {
        return "missed";
    }

    if (d.status === "pending") {
        return "pending";
    }

    const questions = d.questions.length;
    const theory = d.theory.length;


    /* =====================================================
       THEORY ONLY
       ===================================================== */

    if (questions === 0 && theory > 0) {
        return "level-theory";
    }


    /* =====================================================
       PROBLEMS + THEORY
       ===================================================== */

    if (questions > 0 && theory > 0) {

        // 1–2 Problems + Theory
        if (questions >= 1 && questions <= 2) {
            return "level-mixed-low";
        }

        // 3–5 Problems + Theory
        if (questions >= 3 && questions <= 5) {
            return "level-mixed-medium";
        }

        // 6+ Problems + Theory
        if (questions >= 6) {
            return "level-mixed-high";
        }
    }


    /* =====================================================
       PROBLEMS ONLY
       ===================================================== */

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
   CREATE ALL DAYS
   ---------------------------------------------------------
   Includes:
   Day 0  → Before Challenge
   Day 1  → Day 1
   ...
   Day 30 → Day 30

   Day 0 is displayed but is NOT part of the
   30-day challenge statistics/streak.
   ========================================================= */

function allDays() {

    const map = new Map(
        dsaData.map(d => [d.day, d])
    );


    /* =====================================================
       BEFORE CHALLENGE / DAY 0
       ===================================================== */

    const beforeChallenge =
        map.get(0) || null;


    /* =====================================================
       DAY 1 TO DAY 30
       ===================================================== */

    const challengeDays = Array.from(
        { length: CHALLENGE_DAYS },
        (_, i) =>
            map.get(i + 1) || {
                day: i + 1,
                date: "",
                status: "pending",
                topic: "Pending",
                questions: [],
                theory: [],
                notes: ""
            }
    );


    /* =====================================================
       RETURN DAY 0 FIRST
       ===================================================== */

    if (beforeChallenge) {
        return [
            beforeChallenge,
            ...challengeDays
        ];
    }


    return challengeDays;
}


/* =========================================================
   RENDER DAYS
   ========================================================= */

function renderDays(filter = "all") {

    container.innerHTML = "";


    allDays()
        .filter(
            d => filter === "all" || d.topic === filter
        )
        .forEach(d => {

            const card =
                document.createElement("article");


            card.className =
                `day-card ${getLevel(d)}`;


            /* =================================================
               STATUS ICON
               ================================================= */

            const icon =
    d.day === 0
        ? "📚"
        : d.status === "done"
            ? "✓"
            : d.status === "missed"
                ? "✕"
                : "⌛";


            /* =================================================
               DAY TITLE

               Day 0 is shown as:
               Before Challenge

               Day 1+ is shown normally.
               ================================================= */

            const dayTitle =
                d.day === 0
                    ? "Before Challenge"
                    : `Day ${d.day}`;


            card.innerHTML = `

                <div class="day-header">

                    <h3>
                        ${dayTitle}
                    </h3>

                    <span>
                        ${icon}
                    </span>

                </div>


                <p class="date">

                    ${
                        d.date ||
                        "Not logged yet"
                    }

                </p>


                <div class="topic">

                    ${d.topic}

                </div>


                <div class="day-info">


                    ${
                        d.questions.length
                            ? `
                                <p>
                                    💻
                                    ${d.questions.length}
                                    question${
                                        d.questions.length !== 1
                                            ? "s"
                                            : ""
                                    }
                                </p>
                            `
                            : ""
                    }


                    ${
                        d.theory.length
                            ? `
                                <p>
                                    📚
                                    ${d.theory.length}
                                    theory topic${
                                        d.theory.length !== 1
                                            ? "s"
                                            : ""
                                    }
                                </p>
                            `
                            : ""
                    }


                </div>

            `;


            /* =================================================
               OPEN MODAL

               Before Challenge is also clickable if status
               is "done".
               ================================================= */

            if (d.day === 0 || d.status === "done") {
    card.onclick = () => openModal(d);
}

            container.appendChild(card);

        });
}


/* =========================================================
   OPEN MODAL
   ========================================================= */

function openModal(d) {


    /* =====================================================
       MODAL TITLE
       ===================================================== */

    document.getElementById(
        "modalTitle"
    ).textContent =

        d.day === 0

            ? `Before Challenge · ${d.date}`

            : `Day ${d.day} · ${d.date}`;


    let content = `

        <div class="modal-summary">

            <div>

                <strong>
                    Topic
                </strong>

                <p>
                    ${d.topic}
                </p>

            </div>

        </div>

    `;


    /* =====================================================
       QUESTIONS
       ===================================================== */

    if (d.questions.length) {

        content += `

            <h3 class="section-title">
                💻 Questions Solved
            </h3>

            <ul class="question-list">

        `;


        d.questions.forEach(q => {

            const platform =
                q.platform || "LeetCode";


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
                        class="platform ${platform.toLowerCase()}"
                    >

                        ${platform}

                    </span>


                </li>

            `;

        });


        content += `

            </ul>

        `;

    }


    /* =====================================================
       THEORY
       ===================================================== */

    if (d.theory.length) {

        content += `

            <h3 class="section-title">
                📚 Theory Studied
            </h3>

            <ul class="theory-list">

        `;


        d.theory.forEach(t => {

            content += `

                <li>
                    ${t}
                </li>

            `;

        });


        content += `

            </ul>

        `;

    }


    /* =====================================================
       NOTES
       ===================================================== */

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


    document.getElementById(
        "modalBody"
    ).innerHTML = content;


    document.getElementById(
        "modal"
    ).style.display = "flex";

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    document.getElementById(
        "modal"
    ).style.display = "none";

}


/* =========================================================
   UPDATE STATS
   ========================================================= */

function updateStats() {

    const days = allDays();


    /* =====================================================
       CHALLENGE DAYS ONLY

       IMPORTANT:

       Day 0 / Before Challenge is excluded from:

       - Done
       - Missed
       - Pending
       - 30-day challenge statistics
       - Streak

       Day 1 → Day 30 are included.
       ===================================================== */

    const challengeDays =
        days.filter(
            d => d.day >= 1
        );


    /* =====================================================
       CHALLENGE STATUS
       ===================================================== */

    const done =
        challengeDays.filter(
            d => d.status === "done"
        ).length;


    const missed =
        challengeDays.filter(
            d => d.status === "missed"
        ).length;


    const pending =
        challengeDays.filter(
            d => d.status === "pending"
        ).length;


    document.getElementById(
        "doneDays"
    ).textContent = done;


    document.getElementById(
        "missedDays"
    ).textContent = missed;


    document.getElementById(
        "pendingDays"
    ).textContent = pending;


    /* =====================================================
       ALL QUESTIONS

       Day 0 questions ARE included here.

       So your "Problems Solved" count includes
       Before Challenge questions.
       ===================================================== */

    const allQuestions =
        dsaData.flatMap(
            day => day.questions
        );


    /* =====================================================
       TOTAL QUESTIONS
       ===================================================== */

    document.getElementById(
        "totalQuestions"
    ).textContent =
        allQuestions.length;


    /* =====================================================
       DIFFICULTY COUNTS
       ===================================================== */

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


    document.getElementById(
        "easyCount"
    ).textContent =
        easyCount;


    document.getElementById(
        "mediumCount"
    ).textContent =
        mediumCount;


    document.getElementById(
        "hardCount"
    ).textContent =
        hardCount;


    /* =====================================================
       CURRENT DAY STREAK

       IMPORTANT:

       Day 0 is completely ignored.

       Example:

       Day 11 → done
       Day 10 → done
       Day 9  → done

       Streak = 3

       Before Challenge does NOT affect it.
       ===================================================== */

    let streak = 0;


    const challengeDaysForStreak =
        dsaData
            .filter(
                day => day.day >= 1
            )
            .sort(
                (a, b) => b.day - a.day
            );


    for (
        const day of challengeDaysForStreak
    ) {

        if (day.status === "done") {

            streak++;

        } else {

            break;

        }

    }


    document.getElementById(
        "streakCount"
    ).textContent =
        streak;


    /* =====================================================
       LEETCODE PROFILE
       ===================================================== */

    document.getElementById(
        "leetcodeProfile"
    ).href =
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
            document.createElement(
                "option"
            );


        option.value =
            topic;


        option.textContent =
            topic;


        topicFilter.appendChild(
            option
        );

    });


topicFilter.onchange = event => {

    renderDays(
        event.target.value
    );

};


/* =========================================================
   MODAL EVENTS
   ========================================================= */

window.onclick = event => {

    if (
        event.target ===
        document.getElementById("modal")
    ) {

        closeModal();

    }

};


window.onkeydown = event => {

    if (event.key === "Escape") {

        closeModal();

    }

};


/* =========================================================
   INITIAL LOAD
   ========================================================= */

updateStats();

renderDays();


/* =========================================================
   LAST UPDATED
   ========================================================= */

const lastModified =
    new Date(
        document.lastModified
    );


document.getElementById(
    "lastUpdated"
).textContent =

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
   DARK / LIGHT MODE
   ========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


if (themeToggle) {


    /* =====================================================
       LOAD SAVED THEME
       ===================================================== */

    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );


        themeToggle.textContent =
            "☀️";


        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );


        themeToggle.setAttribute(
            "aria-pressed",
            "true"
        );

    } else {

        themeToggle.textContent =
            "🌙";


        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );


        themeToggle.setAttribute(
            "aria-pressed",
            "false"
        );

    }


    /* =====================================================
       TOGGLE THEME
       ===================================================== */

    themeToggle.addEventListener(
        "click",
        () => {


            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            /* =================================================
               CHANGE ICON
               ================================================= */

            themeToggle.textContent =
                isDark
                    ? "☀️"
                    : "🌙";


            /* =================================================
               ACCESSIBILITY
               ================================================= */

            themeToggle.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            themeToggle.setAttribute(
                "aria-pressed",
                String(isDark)
            );


            /* =================================================
               SAVE PREFERENCE
               ================================================= */

            localStorage.setItem(
                "theme",
                isDark
                    ? "dark"
                    : "light"
            );

        }
    );

}