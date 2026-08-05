const container=document.getElementById("daysContainer"),topicFilter=document.getElementById("topicFilter");

function getLevel(d) {

    if (d.status === "missed") {
        return "missed";
    }

    if (d.status === "pending") {
        return "pending";
    }

    const questions = d.questions.length;
    const theory = d.theory.length;


    // BOTH QUESTIONS + THEORY

    if (questions > 0 && theory > 0) {
        return "level-mixed";
    }


    // THEORY ONLY

    if (questions === 0 && theory > 0) {
        return "level-theory";
    }


    // 1-2 QUESTIONS

    if (questions >= 1 && questions <= 2) {
        return "level-low";
    }


    // 3-5 QUESTIONS

    if (questions >= 3 && questions <= 5) {
        return "level-medium";
    }


    // 6+ QUESTIONS

    if (questions >= 6) {
        return "level-high";
    }


    return "pending";
}
function allDays(){
 const map=new Map(dsaData.map(d=>[d.day,d]));
 return Array.from({length:CHALLENGE_DAYS},(_,i)=>map.get(i+1)||{day:i+1,date:"",status:"pending",topic:"Pending",questions:[],theory:[],notes:""});
}
function renderDays(filter="all"){
 container.innerHTML="";
 allDays().filter(d=>filter==="all"||d.topic===filter).forEach(d=>{
  const card=document.createElement("article");card.className=`day-card ${getLevel(d)}`;
  const icon=d.status==="done"?"✓":d.status==="missed"?"✕":"⌛";
  card.innerHTML=`<div class="day-header"><h3>Day ${d.day}</h3><span>${icon}</span></div>
  <p class="date">${d.date||"Not logged yet"}</p><div class="topic">${d.topic}</div>
  <div class="day-info">${d.questions.length?`<p>💻 ${d.questions.length} question${d.questions.length!==1?"s":""}</p>`:""}
  ${d.theory.length?`<p>📚 ${d.theory.length} theory topic${d.theory.length!==1?"s":""}</p>`:""}</div>`;
  if(d.status==="done")card.onclick=()=>openModal(d);container.appendChild(card);
 });
}
function openModal(d){
 document.getElementById("modalTitle").textContent=`Day ${d.day} · ${d.date}`;
 let c=`<div class="modal-summary"><div><strong>Topic</strong><p>${d.topic}</p></div></div>`;
 if(d.questions.length){c+='<h3 class="section-title">💻 Questions Solved</h3><ul class="question-list">';d.questions.forEach(q => {

    const platform = q.platform || "LeetCode";

    c += `
        <li class="question-item">

            <a
                href="${q.link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${q.number ? `#${q.number} ` : ""}
                ${q.name}
            </a>

            <span class="difficulty">
                ${q.difficulty}
            </span>

            <span class="platform ${platform.toLowerCase()}">
                ${platform}
            </span>

        </li>
    `;
});c+="</ul>"}
 if(d.theory.length){c+='<h3 class="section-title">📚 Theory Studied</h3><ul class="theory-list">';d.theory.forEach(t=>c+=`<li>${t}</li>`);c+="</ul>"}
 if(d.notes)c+=`<h3 class="section-title">📝 Notes</h3><div class="notes">${d.notes}</div>`;
 document.getElementById("modalBody").innerHTML=c;document.getElementById("modal").style.display="flex";
}
function closeModal(){document.getElementById("modal").style.display="none"}
function updateStats() {

    const days = allDays();

    const done = days.filter(
        d => d.status === "done"
    ).length;

    const missed = days.filter(
        d => d.status === "missed"
    ).length;

    const pending = days.filter(
        d => d.status === "pending"
    ).length;


    // Challenge status

    document.getElementById("doneDays").textContent = done;

    document.getElementById("missedDays").textContent = missed;

    document.getElementById("pendingDays").textContent = pending;


    // Questions

    const totalQuestions = dsaData.reduce(
        (sum, day) => sum + day.questions.length,
        0
    );


    // Theory

    const totalTheory = dsaData.reduce(
        (sum, day) => sum + day.theory.length,
        0
    );


    document.getElementById("totalQuestions").textContent =
        totalQuestions;

    document.getElementById("totalTheory").textContent =
        totalTheory;


    // Current streak

    let streak = 0;

    const sortedDays = [...dsaData]
        .sort((a, b) => b.day - a.day);

    for (const day of sortedDays) {

        if (day.status === "done") {
            streak++;
        } else {
            break;
        }
    }


    document.getElementById("streakCount").textContent =
        streak;


    // LeetCode profile

    document.getElementById("leetcodeProfile").href =
        LEETCODE_PROFILE;
}
[...new Set(dsaData.filter(d=>d.status==="done").map(d=>d.topic))].sort().forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;topicFilter.appendChild(o)});
topicFilter.onchange=e=>renderDays(e.target.value);
window.onclick=e=>{if(e.target===document.getElementById("modal"))closeModal()};window.onkeydown=e=>{if(e.key==="Escape")closeModal()};
updateStats();renderDays();

const lastModified = new Date(document.lastModified);

document.getElementById("lastUpdated").textContent =
    lastModified.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
