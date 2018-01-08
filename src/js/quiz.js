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
    if (!quiz.type || quiz.type === "checkbox" || quiz.type === "radio") {
      return this.checkQuizToHTML(quiz, id);
    } else {
      return this.inputToHTML(quiz, id);
    }
  }

  checkQuizToHTML(quiz, id) {
    return `<fieldset class="form-group quiz" id="quiz-${id}">
    <legend class="quiz-title col-form-legend">${quiz.title}
      <span class="quiz-score badge badge-secondary float-right">${quiz.score}</span>
    </legend>
    <div class="quiz-control">
    ${quiz.choices.map((c, i) => `
    <div class="form-check">
     <label class="form-check-label">
      <input class="form-check-input" type="${quiz.type || "checkbox"}" value="${i}" name="${id}">${c}
       </label>
       </div>
    `).join('')}
    </div>
    </fieldset>`
  }
  inputToHTML(quiz, id) {}
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
      let success = false;
      if (!quiz.type || quiz.type === "checkbox") {
        res = responses.getAll(i);
        if (res.length === quiz.answer.length && res.every((c) => quiz.answer.indexOf(parseInt(c)) > -1)) {
          success = true;
        }
      } else if (quiz.type === "radio" || quiz.type === "number") {
        res = responses.get(i);
        if (parseInt(res) === quiz.answer) {
          success = true;
        }
      } else {
        res = responses.get(i).trim();
        if (res === quiz.answer) {
          success = true;
        }
      }
      if (success) {
        score += quiz.score;
        document.getElementById(`quiz-${i}`).classList.add('has-success');
      } else {
        document.getElementById(`quiz-${i}`).classList.remove('has-success');
      }
    }
    return score;
  }
  maxScore() {
    return this.data.quizs.reduce((cur, quiz) => cur + quiz.score, 0);
  }
}

function loadQuiz() {
  const quizC = document.getElementById("quiz-container");
  const quizD = document.getElementById("quiz-json");

  if (quizD) {
    const json = JSON.parse(quizD.textContent);
    const quizManager = new QuizManager(json);
    quizManager.insertInto(quizC);
  } else {
    const pagePath = window.location.pathname.split('/');
    const quizPath = pagePath[pagePath.length - 1].split('.')[0] + ".json";

    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
      const json = JSON.parse(xhr.responseText);
      const quizManager = new QuizManager(json);
      quizManager.insertInto(quizC);
    };
    xhr.open('GET', quizPath);
    xhr.send(null);
  }
}

loadQuiz();