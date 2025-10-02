// Сховання всіх секцій
function hideAll() {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
}

// Головна -> меню
function goToMenu() {
  hideAll();
  document.getElementById("menu").classList.remove("hidden");
}

// Повернення назад
function backToMenu() {
  goToMenu();
}

// Переходи між розділами
function goToGallery() {
  hideAll();
  document.getElementById("gallery").classList.remove("hidden");
}
function goToTimeline() {
  hideAll();
  document.getElementById("timeline").classList.remove("hidden");
}
function goToMemories() {
  hideAll();
  document.getElementById("memories").classList.remove("hidden");
}
function goToQuiz() {
  hideAll();
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

// Квест
let quizData = [
  {q: "Коли ми познайомились?", a: "01.01.2023"},
  {q: "Де було наше перше побачення?", a: "кафе"},
  {q: "Який був перший подарунок?", a: "квіти"},
  {q: "Яке улюблене місце прогулянки?", a: "парк"},
  {q: "Який улюблений напій?", a: "кава"},
  {q: "Що ми дивились разом вперше?", a: "фільм"},
  {q: "Коли була перша подорож?", a: "літо"},
  {q: "Яка пісня наша?", a: "love"},
  {q: "Що я найбільше ціную?", a: "ти"},
  {q: "Кого я кохаю?", a: "тебе"}
];

let currentQ = 0;

function showQuestion() {
  let qc = document.getElementById("quiz-container");
  if (currentQ < quizData.length) {
    qc.innerHTML = `
      <p>${quizData[currentQ].q}</p>
      <input type="text" id="answer" placeholder="Введи відповідь">
      <button onclick="checkAnswer()">Відповісти</button>
    `;
  } else {
    qc.innerHTML = "<h3>🎉 Ти пройшла квест! Ти знаєш усе про нас ❤️</h3>";
  }
}

function checkAnswer() {
  let ans = document.getElementById("answer").value.toLowerCase();
  if (ans.includes(quizData[currentQ].a.toLowerCase())) {
    currentQ++;
    showQuestion();
  } else {
    alert("🙈 Неправильно, спробуй ще!");
  }
}
