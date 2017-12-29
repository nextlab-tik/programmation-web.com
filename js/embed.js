"use strict";

function initGist() {
  const embedsC = document.getElementsByClassName("embed-gist");
  for (const embedC of embedsC) {
    if (embedC.classList.contains("embed-loaded")) {
      continue;
    }
    const opt = embedC.dataset;
    embedC.innerHTML = `
    <script src="https://gist.github.com/${opt.gist}.js?"></script>
    `;
    embedC.classList.add("embed-loaded");
  }
}

function initPlunker() {
  const embedsC = document.getElementsByClassName("embed-plnkr");
  for (const embedC of embedsC) {
    if (embedC.classList.contains("embed-loaded")) {
      continue;
    }
    const opt = embedC.dataset;
    embedC.innerHTML = `
      <iframe height='${opt.height || 265}' scrolling='no' src='https://embed.plnkr.co/gist/${opt.gist}?show=${opt.show || "preview"}' frameborder='no'  allowfullscreen='true' style='width: 100%;'></iframe>
    `;
    embedC.classList.add("embed-loaded");
  }
}
function initCodePen() {
  const embedsC = document.getElementsByClassName("embed-codepen");
  for (const embedC of embedsC) {
    if (embedC.classList.contains("embed-loaded")) {
      continue;
    }
    const opt = embedC.dataset;
    embedC.innerHTML = `
      <iframe height='${opt.height || 265}' scrolling='no' title='${opt.title}' src='https://codepen.io/${opt.username}/embed/${opt.id}/?height=${opt.height || 265}&theme-id=dark&default-tab=${opt.tab || "result"}&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>
    `;
    embedC.classList.add("embed-loaded");
  }
}
initGist();
initPlunker();
initCodePen();
