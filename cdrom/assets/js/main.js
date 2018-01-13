"use strict";

const attestationsGallery = $("#attestations-gallery");
attestationsGallery.justifiedGallery({
  border: 6,
}).on('jg.complete', function() {
  attestationsGallery.lightGallery({
    thumbnail: true,
    zoom: true,
    fullscreen: true,
  });
});