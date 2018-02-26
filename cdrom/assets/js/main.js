"use strict";

const galleries = $(".gallery");
galleries.justifiedGallery({
  border: 6,
}).on('jg.complete', function() {
  galleries.lightGallery({
    // subHtmlSelectorRelative: true,
    thumbnail: true,
    zoom: true,
    fullscreen: true,
    video: true,
  });
});

let isTabChanging = false;
$('.tabs nav a[data-toggle="tab"]').on('show.bs.tab', function(e) {
  if (isTabChanging) {
    e.preventDefault();
    return;
  }
  const $nextPage = $(e.target.hash); // newly activated tab
  let $currPage;
  if (e.relatedTarget) {
    $currPage = $(e.relatedTarget.hash); // previous active tab
  } else {
    $currPage = $("#tab-landing");
  }

  isTabChanging = true;
  $("main").addClass("changing");
  $nextPage.css('display', 'block');
  if ($currPage) {
    $currPage.removeClass('tab-pane-out');
    $currPage.addClass('tab-pane-out').on('animationend', function() {
      $currPage.off('animationend');
      $currPage.removeClass('tab-pane-out');
    });
  }

  $nextPage.removeClass('tab-pane-in');
  $nextPage.addClass('tab-pane-in').on('animationend', function() {
    $nextPage.off('animationend');
    $nextPage.removeClass('tab-pane-in');
    $("main").removeClass("changing");
    if ($currPage) {
      $currPage.css('display', 'none');
    }
    isTabChanging = false;
  });
});