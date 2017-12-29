"use strict";

class QuizManager {
  constructor(data) {
    this.data = data;
  }
  insertInto(el) {
    el.innerHTML = this.toHTML();
    this.form = el.getElementsByClassName("quiz-board")[0];
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }
  toHTML() {
    return `
    <form class="quiz-board">
    ${this.data.quizs.map((q, i) => this.quizToHTML(q, i)).join('')}
    <input type="submit" value="Verifier" />
    <div class="quiz-score">Score: <span id="score-current">...</span>/<span id="score-sum">${this.maxScore()}</span></div>
    </form>
    `
  }

  quizToHTML(quiz, id) {
    return `<div class="quiz" id="quiz-${id}">
    <p class="quiz-title">${quiz.title}</p>
    <div class="quiz-control">
      ${quiz.type === "single" ? this.singleChoiceToHTML(quiz, id) :
      quiz.type === "multiple" || !quiz.type ? this.multiChoicesToHTML(quiz, id) :
      this.inputToHTML(quiz, id)}
    </div>
    </div>`
  }

  multiChoicesToHTML(quiz, id) {
    return quiz.choices.map((c, i) => `<input type="checkbox" name="${id}" value="${i}">${c}</input>`).join('');
  }
  singleChoiceToHTML(quiz, id) {
    return quiz.choices.map((c, i) => `<input type="radio" name="${id}" value="${i}">${c}</input>`).join('');
  }
  inputToHTML(quiz, id) {
  }
  handleSubmit(e) {
    e.preventDefault();
    document.getElementById("score-current").textContent = this.getScore();
  }
  getScore() {
    let score = 0;
    const responses = new FormData(this.form);
    for (let i = 0; i < this.data.quizs.length; i++) {
      const quiz = this.data.quizs[i];
      let res;
      if (!quiz.type || quiz.type === "multiple") {
        res = responses.getAll(i);
        if (res.length === quiz.answer.length && res.every((c) => quiz.answer.indexOf(parseInt(c)) > -1)) {
          score += quiz.score;
        }
      } else if (quiz.type === "single" || quiz.type === "number") {
        res = responses.get(i);
        if (parseInt(res) === quiz.answer) {
          score += quiz.score;
        }
      } else {
        res = responses.get(i);
        if (res === quiz.answer) {
          score += quiz.score;
        }
      }
    }
    return score;
  }
  maxScore() {
  return this.data.quizs.reduce((cur, quiz) => cur + quiz.score, 0);
  }
}

function loadQuiz(quizPath) {
  const quizC = document.getElementById("quiz-container");
  fetch(quizPath).then((res) => res.json()).then((json) => {
    const quizManager = new QuizManager(json);
    quizManager.insertInto(quizC);
  });
}

loadQuiz("quiz/1.json");
