"use strict";

class QuizManager {
  constructor(data) {
    this.data = data;
    for (const quiz of this.data.quizs) {
      if (!quiz.type) {
        if (quiz.choices && typeof(quiz.answer) === "number") {
          quiz.type = "radio";
        } else if (quiz.choices && typeof(quiz.answer) === "object") {
          quiz.type = "checkbox";
        } else if (!quiz.choices) {
          quiz.type = "text";
        }
      }
      if (quiz.type === "radio") {
        quiz.answerDisplay = quiz.answer;
        quiz.answer -= 1;
      } else if (quiz.type === "checkbox") {
        quiz.answerDisplay = quiz.answer.length ? quiz.answer.join(', ') : 'Ø';
        quiz.answer = quiz.answer.map((a) => a - 1);
      }
      if (!quiz.score) {
        quiz.score = this.data.defaultScore || 1;
      }
    }
  }
  handleClicks(evt) {
  }
  insertInto(el) {
    el.innerHTML = this.toHTML();
    this.form = el.getElementsByClassName("quiz-board")[0];
    this.form.addEventListener("submit", (evt) => this.handleSubmit(evt));
    this.form.addEventListener("click", (evt) => this.handleClicks(evt));
  }
  toHTML() {
    return `
    <form class="quiz-board" class="form">
    <ol style="padding-left: 0">
    ${this.data.quizs.map((q, i) => this.quizToHTML(q, i)).join('')}
    </ol>
    <div class="form-footer">
      <hr/>
      <div class="row">
        <div class="col quiz-score font-weight-bold">Score: <span id="score-current">0</span>/<span id="score-sum">${this.maxScore()}</span></div>
        <div class="col"><input type="submit" value="Verifier" class="btn btn-primary float-right"/></div>
      </div>
    </div>
    </form>
    `;
  }

  quizToHTML(quiz, id) {
    if (quiz.type === "checkbox" || quiz.type === "radio") {
      return this.checkQuizToHTML(quiz, id);
    } else {
      return this.inputToHTML(quiz, id);
    }
  }

  checkQuizToHTML(quiz, id) {
    return `<li><fieldset class="form-group quiz" id="quiz-${id}">
    <legend class="quiz-title col-form-legend">${quiz.title}
      <span class="quiz-score badge badge-secondary float-right">${quiz.score}</span>
    </legend>
    <div class="quiz-control">
    ${quiz.choices.map((c, i) => `
      <div class="custom-control custom-${quiz.type || "checkbox" }">
        <input type="${quiz.type || "checkbox" }" class="custom-control-input" value="${i}" name="${id}" id="quiz-${id}-${i}">
        <label class="custom-control-label ml-2" for="quiz-${id}-${i}">${c}</label>
      </div>
    `).join('')}
    </div>
    <button type="button" class="btn btn-success show-answer mt-3" data-answer="${id}" data-toggle="collapse" data-target="#answer-${id}" aria-expanded="false">Afficher Réponse</button>
    <div class="answer collapse mt-3" data-answer="${id}" id="answer-${id}">
     <div class="card card-body">
      Réponse(s) : ${quiz.answerDisplay}
      ${quiz.help ? `
        <hr />
          ${quiz.help}
      ` : '' }
     </div>
    </div>
    </fieldset></li>`;
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
      if (quiz.type === "checkbox") {
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
