---
title: Multimedia
chapitre: HTML5
permalink: /cours/multimedia.html
---

Avant le HTML5, pour l'ajout du contenu multimédia ou des animations dans une
page web, les développeurs ont utilisé des plugins embarqués dans la page du
web comme des plugins des lecteurs vidéos/audio (VLC, RealPlayer, QuickTime,
Windows Media Player, ...) ou des plateformes propriétaire comme Adobe Flash
(anciennement Macromedia Flash) et Microsoft Silverlight. Ces solutions avons
des limites comme le manque d'intégration avec le HTML/CSS, problèmes des
sécurités et de stabilités, et manque d'accessibilité.

HTML5 a ajouté un support native des contenus multimédia et des animations en
utilisant un combinaison de HTML5, CSS3 et JavaScript. Dans ce section, on va
démontrer seulement les fonctionnalités fondamentales du HTML5 sans CSS3 et
JavaScript.

Les Vidéos
----------

La balise `<video>` permet d'intégrer un vidéo dans la page web. Un exemple
d'un élément vidéo:

```html
<video src="mon-video.mp4" controls></video>
```

Les attributs principales d'élément vidéo sont:

- **src**: l'URL du vidéo à afficher.
- **controls**: attribut booléen pour afficher les contrôles de base du lecteur
vidéo (lecture, pause, contrôle du volume).
- **poster**: L'URL de l'image à afficher jusqu'à l'utilisateur play le vidéo.
- **autoplay**: attribut booléen pour spécifier que le vidéo doit commencer
automatiquement quand la page est chargée.
- **preload**: charger le contenu du fichier vidéo en même temps que la page
  web. La valeur `auto` permet de charge tout le contenu du fichier. La valeur
  `metadata` (par défaut dans la majorité des navigateurs) permet de charge que
  les données méta du fichier vidéo (longueur du vidéo, ...). La valeur `none`
  permet de ne charger aucun données du vidéo.
- **loop**: attribut booléen permet de répéter le vidéo en boucle.
- **muted**: attribut booléen permet de mettre le volume du vidéo en 0.


Les navigateurs supportent des multiples des formats du vidéo. Ce support
diffère entre les navigateurs. Les deux formats vidéo principales sont:

- **WebM**: Un conteneur vidéo développé par Google avec le codage vidéo
  **VP8** ou **VP9** et le codage audio **Vorbis** ou **Opus**. Il est supporté
  par la majorité des navigateurs à l'exception du Safari.
- **MP4**: Un conteneur vidéo avec le codage vidéo **H.264** ou **H.265** et le
  codage audio **MP3** ou **AAC**. Il est supporté par la majorité des
  navigateurs avec l'exception du Opera.

Pour fournir plus d'un format de vidéo, on peut utilisé la balise `<source>`
qui accepte L'URL du vidéo dans l'attribut `src` et le format MIME du vidéo
dans l'attribut `type`.

```html
<video controls>
  <source src="mon-video.webm" type="video/webm" />
  <source src="mon-video.mp4" type="video/mp4" />
</video>
```

Les audio
---------

L'élément audio du HTML5 fonctionne de même façon que l'élément vidéo même il
est limité aux formats audio.

```html
<audio controls>
  <source src="mon-audio.mp3" type="audio/mp3" />
  <source src="mon-audio.ogg" type="audio/ogg" />
  <source src="mon-audio.webm" type="audio/webm" />
</audio>
```

Les formats principales d'audio sont:

- **MP3**: Supporté par la majorité des navigateur.
- **WebM**: Utilise le codage audio **Vorbis**. Il est supporté par la majorité
  navigateur à l'exception du Safari.
- **OGG**: Supporté principalement par Firefox et Google Chrome. Il peut
  utiliser le codage audio **Opus** ou **Vorbis** ou **FLAC**.

Les images vectorielles
-----------------------

Les images sont divisés en deux types principales:

- Les images pixels: dont l'unité est le pixel. Les formats les plus connus
  sont: **JPEG**, **PNG**, **GIF**, **BMP**. Ces images perdent la qualité
  quand ils sont agrandis plus que sont tailles original.
- Les images vectoriels: dont l'unité est des éléments géométriques tel que un
  rectangle, un cercle,... . Ces images ne perdent pas la qualité quand ils sont
  agrandis. La format la plus connue est **SVG**.

La format **SVG** (**S**calable **V**ector **G**raphics) est un format d'image
vectoriel basé sur la langage XML développé par **W3C** depuis 1999. Cette
format est supportée par la majorité des éditeurs des images vectorielles. Il
est utilisé dans le web pour structuré des images complexe que le HTML/CSS peut
structurer.  SVG est désigné pour d'intégrer bien avec les technologies du web
comme le HTML et CSS. Il support les animations aussi. La version courante est
**SVG 1.1**.  La version **SVG 2.0** est en cours de développement.

Pour afficher un fichier SVG, on utilise la balise `<img>`.

```html
<img src="mon-image.svg" />
```

On peut aussi intégrer le code SVG directement dans notre code HTML en
utilisant la balise SVG.

```html
{% include_absolute _cours/demos/image-svg.html %}
```
<p>
  <iframe height='240' scrolling='no' src='demos/image-svg.html'></iframe>
</p>

Remarque
--------

Ils y a un grand nombre des vendeurs des services de vidéos en ligne
([YouTube](https://www.youtube.com/), [Vimeo](https://vimeo.com/),
[Dailymotion](https://dailymotion.com), ...) et des services d'audio en ligne
([Soundcloud](https://soundcloud.com/), ...) qui sont gratuites et payantes.
Ces services permettent d'héberger les vidéos/audio dans ses serveurs sans
limites de tailles ou de bindwidths. Ces services permettre d'intégrer leurs
lecteurs vidéos/audio dans vos pages web facilement avec un énormes nombres des
fonctionnalités. Ils sont la solutions la plus préférées pour ajouter des
contenus multimédias aux sites web.

Le code d'intégration est fourni par ces services. Par exemple, YouTube fourni
le code d'intégration dans le dialogue du partage du vidéo. Le code suivant est
le code d'intégration d'un vidéo YouTube:

```html
{% include_absolute _cours/demos/video-youtube.html %}
```
