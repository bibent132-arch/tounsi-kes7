// Dataset: كلمة تونسية → ترجمتها بالإنجليزية (مع مرادفات)
const DATA = [
  // Food & kitchen
  {t:"khobza", a:"خبزة", en:["bread","loaf"], cat:"Food 🍞"},
  {t:"hlib", a:"حليب", en:["milk"], cat:"Food 🥛"},
  {t:"moya", a:"مويا", en:["water"], cat:"Food 💧"},
  {t:"qahwa", a:"قهوة", en:["coffee"], cat:"Food ☕"},
  {t:"atay", a:"شاي", en:["tea"], cat:"Food 🍵"},
  {t:"sokkar", a:"سكّر", en:["sugar"], cat:"Food 🧂","hint":"sweetener"},
  {t:"mlah", a:"ملح", en:["salt"], cat:"Food 🧂"},
  {t:"zeit", a:"زيت", en:["oil"], cat:"Food 🛢️"},
  {t:"zeit zitoun", a:"زيت زيتون", en:["olive oil"], cat:"Food 🫒"},
  {t:"3assel", a:"عسل", en:["honey"], cat:"Food 🍯"},
  {t:"7arissa", a:"هريسة", en:["harissa","chili paste","chilli paste"], cat:"Food 🌶️"},
  {t:"mlawi", a:"ملاوي", en:["flatbread","flat bread"], cat:"Food 🫓"},
  {t:"brik", a:"بريك", en:["brik","fried pastry"], cat:"Food 🥟"},
  {t:"ojja", a:"عجة", en:["omelette","shakshuka","shakshouka"], cat:"Food 🍳"},
  {t:"khodra", a:"خضرة", en:["vegetables","veggies"], cat:"Food 🥦"},
  {t:"ghalla", a:"غلة", en:["fruit","fruits"], cat:"Food 🍎"},
  // Home
  {t:"dar", a:"دار", en:["house","home"], cat:"Home 🏠"},
  {t:"bit", a:"بيت", en:["room"], cat:"Home 🛏️"},
  {t:"koujina", a:"كوجينة", en:["kitchen"], cat:"Home 🍳"},
  {t:"salon", a:"صالون", en:["living room","lounge"], cat:"Home 🛋️"},
  {t:"7ammam", a:"حمّام", en:["bathroom","bath"], cat:"Home 🛁"},
  {t:"douch", a:"دوش", en:["shower"], cat:"Home 🚿"},
  {t:"frigo", a:"فريجيدير", en:["fridge","refrigerator"], cat:"Home 🧊"},
  {t:"bab", a:"باب", en:["door"], cat:"Home 🚪"},
  {t:"shubbak", a:"شباك", en:["window"], cat:"Home 🪟"},
  {t:"kursi", a:"كرسي", en:["chair","seat"], cat:"Home 🪑"},
  {t:"tawla", a:"طاولة", en:["table","desk"], cat:"Home 🧰"},
  // Transport
  {t:"karhba", a:"كَرْهْبَة", en:["car","auto","automobile"], cat:"Transport 🚗"},
  {t:"tobis", a:"توبيس", en:["bus"], cat:"Transport 🚌"},
  {t:"tren", a:"تران", en:["train"], cat:"Transport 🚆"},
  {t:"bisklita", a:"بسكليتة", en:["bicycle","bike"], cat:"Transport 🚲"},
  {t:"tayara", a:"طيارة", en:["airplane","plane"], cat:"Transport ✈️"},
  {t:"babor", a:"بابور", en:["boat","ship"], cat:"Transport 🚢"},
  // Verbs
  {t:"nakol", a:"ناكل", en:["eat","to eat"], cat:"Verb 🍽️"},
  {t:"nshrab", a:"نشرب", en:["drink","to drink"], cat:"Verb 💧"},
  {t:"nmshi", a:"نمشي", en:["go","walk"], cat:"Verb 🚶"},
  {t:"njri", a:"نجري", en:["run"], cat:"Verb 🏃"},
  {t:"nr9od", a:"نرقد", en:["sleep"], cat:"Verb 😴"},
  {t:"n5dem", a:"نخدم", en:["work"], cat:"Verb 💼"},
  {t:"nqra", a:"نقرا", en:["study","read"], cat:"Verb 📚"},
  {t:"nkteb", a:"نكتب", en:["write"], cat:"Verb ✍️"},
  {t:"nsawwer", a:"نصوّر", en:["take photo","photograph","shoot photo","take a photo"], cat:"Verb 📷"},
  {t:"nshri", a:"نشري", en:["buy","purchase"], cat:"Verb 🛒"},
  {t:"nbi3", a:"نبيع", en:["sell"], cat:"Verb 💱"},
  // Adjectives
  {t:"bahi", a:"باهي", en:["good","fine","ok"], cat:"Adj ✅"},
  {t:"khayeb", a:"خايب", en:["bad"], cat:"Adj ❌"},
  {t:"s3ib", a:"صعيب", en:["hard","difficult"], cat:"Adj 🧱"},
  {t:"sahla", a:"سهلة", en:["easy","simple"], cat:"Adj 🪶"},
  {t:"sghir", a:"صغير", en:["small","little"], cat:"Adj 📏"},
  {t:"kbir", a:"كبير", en:["big","large"], cat:"Adj 📦"},
  {t:"bared", a:"بارد", en:["cold","cool"], cat:"Adj 🧊"},
  {t:"sakhun", a:"سخون", en:["hot","warm"], cat:"Adj 🔥"},
  {t:"ghali", a:"غالي", en:["expensive","costly"], cat:"Adj 💸"},
  {t:"rkhis", a:"رخيص", en:["cheap","inexpensive"], cat:"Adj 🪙"},
  // Misc
  {t:"flous", a:"فلوس", en:["money","cash"], cat:"Money 💵"},
  {t:"tilifun", a:"تليفون", en:["phone","mobile","cell phone","cellphone"], cat:"Tech 📱"},
  {t:"kteb", a:"كتاب", en:["book"], cat:"School 📖"},
  {t:"9alam", a:"قلم", en:["pen"], cat:"School 🖊️"},
  {t:"mdrassa", a:"مدرسة", en:["school"], cat:"School 🏫"},
  {t:"maktaba", a:"مكتبة", en:["library","bookstore","book shop","bookshop"], cat:"Place 📚"},
  {t:"b7ar", a:"بحر", en:["sea"], cat:"Nature 🌊"},
  {t:"shatt", a:"شاطئ", en:["beach","shore"], cat:"Nature 🏖️"},
  {t:"shams", a:"شمس", en:["sun"], cat:"Nature ☀️"},
  {t:"mtear", a:"مطر", en:["rain"], cat:"Nature 🌧️"},
  {t:"thelj", a:"ثلج", en:["snow"], cat:"Nature ❄️"}
];

const ui = {
  prompt: document.getElementById("prompt"),
  arabicAlt: document.getElementById("arabicAlt"),
  cat: document.getElementById("cat"),
  answer: document.getElementById("answer"),
  check: document.getElementById("checkBtn"),
  hint: document.getElementById("hintBtn"),
  skip: document.getElementById("skipBtn"),
  feedback: document.getElementById("feedback"),
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  best: document.getElementById("best"),
  lives: document.getElementById("lives"),
  restart: document.getElementById("restartBtn"),
  mcqToggle: document.getElementById("mcqToggle"),
  mcqWrap: document.getElementById("mcqMode"),
  inputMode: document.getElementById("inputMode")
};

let score = 0, streak = 0, lives = 3, used = new Set(), current = null, hintLevel = 0;
ui.best.textContent = Number(localStorage.getItem("lt_best") || 0);

// Normalize strings for fair comparison
const norm = s => (s||"").toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim();

function pick() {
  if (used.size === DATA.length) used.clear();
  let i;
  do { i = Math.floor(Math.random()*DATA.length); } while (used.has(i));
  used.add(i);
  return DATA[i];
}

function renderQuestion(q) {
  ui.prompt.textContent = q.t;
  ui.arabicAlt.textContent = q.a ? "باللغة العربية: " + q.a : "";
  ui.cat.textContent = q.cat || "";
  ui.answer.value = "";
  ui.answer.placeholder = "اكتب الترجمة هنا...";
  ui.feedback.textContent = "";
  ui.feedback.className = "feedback";
  hintLevel = 0;
  if (ui.mcqToggle.checked) renderMCQ(q); else ui.mcqWrap.classList.add("hidden");
  ui.answer.focus();
}

function renderMCQ(q) {
  const all = new Set(q.en.map(norm));
  const options = [q.en[0]];
  // اختيارات خاطئة
  while (options.length < 4) {
    const other = DATA[Math.floor(Math.random()*DATA.length)];
    const pick = other.en[Math.floor(Math.random()*other.en.length)];
    if (!all.has(norm(pick)) && !options.some(o => norm(o)===norm(pick))) options.push(pick);
  }
  options.sort(() => Math.random()-0.5);
  ui.mcqWrap.innerHTML = "";
  options.forEach(opt => {
    const b = document.createElement("button");
    b.textContent = opt;
    b.onclick = () => checkAnswer(opt);
    ui.mcqWrap.appendChild(b);
  });
  ui.mcqWrap.classList.remove("hidden");
}

function newRound() {
  current = pick();
  renderQuestion(current);
}

function checkAnswer(val) {
  const value = norm(val ?? ui.answer.value);
  if (!value) return;

  const ok = current.en.some(e => norm(e) === value);
  if (ok) {
    score++; streak++;
    ui.feedback.textContent = "صحيح! ✅ " + current.en[0];
    ui.feedback.className = "feedback ok";
    updateStats();
    setTimeout(newRound, 600);
  } else {
    streak = 0; lives--;
    ui.feedback.textContent = "غلط ❌ — الصواب: " + current.en[0];
    ui.feedback.className = "feedback bad";
    updateStats();
    if (lives <= 0) endGame();
    else setTimeout(newRound, 900);
  }
}

function updateStats() {
  ui.score.textContent = score;
  ui.streak.textContent = streak;
  ui.lives.textContent = lives;
  const best = Number(localStorage.getItem("lt_best") || 0);
  if (score > best) {
    localStorage.setItem("lt_best", String(score));
    ui.best.textContent = score;
  }
}

function endGame() {
  ui.feedback.textContent = "اللعبة خلّصت! نتيجتك: " + score;
  ui.restart.classList.remove("hidden");
  ui.check.disabled = true;
  ui.hint.disabled = true;
  ui.skip.disabled = true;
  ui.answer.disabled = true;
  ui.mcqToggle.disabled = true;
}

function restart() {
  score = 0; streak = 0; lives = 3; used.clear();
  ui.check.disabled = false; ui.hint.disabled = false; ui.skip.disabled = false;
  ui.answer.disabled = false; ui.mcqToggle.disabled = false;
  ui.restart.classList.add("hidden");
  updateStats();
  newRound();
}

function giveHint() {
  hintLevel++;
  if (hintLevel === 1) {
    ui.feedback.textContent = "Hint: " + (current.hint || current.cat || "الفئة قدّامك 👆");
  } else if (hintLevel === 2) {
    const first = current.en[0][0].toUpperCase();
    ui.feedback.textContent = `Hint: يبدأ بحرف ${first} وعدد الحروف ${current.en[0].length}`;
  } else {
    ui.feedback.textContent = "الجواب: " + current.en[0];
  }
}

// Events
ui.check.addEventListener("click", () => checkAnswer());
ui.answer.addEventListener("keydown", e => { if (e.key === "Enter") checkAnswer(); });
ui.skip.addEventListener("click", () => { streak = 0; ui.feedback.textContent = "تعدّينا. الجواب: " + current.en[0]; ui.feedback.className="feedback"; setTimeout(newRound, 700); });
ui.hint.addEventListener("click", giveHint);
ui.restart.addEventListener("click", restart);
ui.mcqToggle.addEventListener("change", () => renderQuestion(current));

// PWA: Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(console.error);
  });
}

restart(); // يبدأ لعبة جديدة