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
    <form class="quiz-board" class="form">
    ${this.data.quizs.map((q, i) => this.quizToHTML(q, i)).join('')}
    <hr/>
    <div class="row">
    <div class="col quiz-score font-weight-bold">Score: <span id="score-current">0</span>/<span id="score-sum">${this.maxScore()}</span></div>
    <div class="col"><input type="submit" value="Verifier" class="btn btn-primary float-right"/></div>
    </div>
    </form>
    `
  }

  quizToHTML(quiz, id) {
    if (!quiz.type || quiz.type === "multiple") {
      return this.multiChoicesToHTML(quiz, id);
    } else if (quiz.type === "single") {
      return this.singleChoiceToHTML(quiz, id);
    } else {
      return this.inputToHTML(quiz, id);
    }
  }

  multiChoicesToHTML(quiz, id) {
    return `<fieldset class="form-group quiz" id="quiz-${id}">
    <legend class="quiz-title col-form-legend">${quiz.title}</legend>
    <div class="quiz-control">
    ${quiz.choices.map((c, i) => `
    <div class="form-check">
     <label class="form-check-label">
      <input class="form-check-input" type="checkbox" value="${i}" name="${id}">${c}
       </label>
       </div>
    `).join('')}
    </div>
    </fieldset>`
  }
  singleChoiceToHTML(quiz, id) {
    return `<fieldset class="form-group quiz" id="quiz-${id}">
    <legend class="quiz-title col-form-legend">${quiz.title}</legend>
    <div class="quiz-control">
    ${quiz.choices.map((c, i) => `
    <div class="form-check">
     <label class="form-check-label">
      <input class="form-check-input" type="radio" value="${i}" name="${id}">${c}
       </label>
       </div>
    `).join('')}
    </div>
    </fieldset>`
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
