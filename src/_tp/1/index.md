---
title: TP1 - Introduction Web
description: Evalouer votre connessance en Web et ses utilisations.
---

On suppose qu’un site web est composé de:

- Une page d’accueil `index.html`
- Un dossier `Produits` contenant la page `produits.html`
- Un dossier `images` contenant les images des produits
  [salon.png](solution/images/salon.png) et
  [salleamanger.png](solution/images/salleamanger.png)

On vous demande d’écrire le code HTML 5 de la page `index.html` d’un
site web pour réaliser la page suivante en respectant les directives
ci-dessous:

![](assets/tp1-ex1-screenshot.png)

Sachant que:

- « Nos Produits » est un lien hypertexte vers la page `produits.html`
- « Fabrication » est un lien vers la page `fabrication.html`
- « Nous Contacter » est un lien Email vers la société
- L’image du pied de la page s’appelle [fb.png]() est un lien hypertexte vers
  le site [www.facebook.com](htttps://www.facebook.com/)

Les éléments de la page `index.html` ont les caractéristiques suivantes:

L’entête de la page
: Est de largeur 600px, de positions 40 px à partir du haut et 60 px à partir
de la gauche. Couleur de fond: bleue

La zone de navigation
: De position 30 px à gauche et 120 à partir du haut, police: Arial de taille
1px

ul
: Le style des puces: circulaire

li
: Les items des listes sont de police « serif ». De couleur de fond : #ffffcc.
De couleur de contour : #555

Les liens
: Sont en rouge et itallique. Seront soulignés lorsque l’utilisateur pointe sur
le lien

La section
: Positions: 250px à partir de la gauche et 130 à partir du haut

Pied de page
: De largeur: 600px; hauteur: 25px; positions: gauche: 40px; bas: 100px;
bordure: bleue 2px

La couleur de fond
: #e6ffff

La page `produits.html` contient le tableau suivant (de largeur 600px, de
couleur de fond: #ffffe6) faisant référence aux deux images
[salon.png](solution/images/salon.png) et
[salleamanger.png](solution/images/salleamanger.png) du répertoire `images`.

![](assets/tp1-ex1-screenshot-2.png)

La page `fabrication.html` contient un formulaire pour inscrire le nom, prénom,
téléphone, ville, produits choisis.

![](assets/tp1-ex1-screenshot-3.png)

{: .table .table-hover .table-responsive}
| Balise | Style |
|--------|-------|
| Form | marge en haut: 10px<br/> marge à gauche: 350px<br /> largeur: 450px<br /> espacement: 15px<br /> couleur d’arrière plan: #92cd5c<br /> polices: Georgia, "Times New Roman", Times, serif<br /> taille: 14px<br />coins arrondis: 10px pour les 4 coins
| Legend couleur | couleur du texte: #384313<br/> taille: 16px<br/> gras
| fieldset | pas de bordure
| label | Italique
| textarea, select, input | couleur d’arrière plan: #e4f9a6<br/> pas de bordure<br/> polices: Georgia, "Times New Roman", "serif"<br/> taille: 12px<br/> espacement: 5px<br/> coins arrondis: 10px pour les 4 coins
| li | Bordure: 2px solid #e3ebc3<br/> couleur d’arrière plan: #b9cf6a<br/> espacement: 5px<br /> marge en bas: 2px<br/> coins arrondis: 10px pour les 4 coins
| submit | couleur d’arrière plan: #384313<br /> pas de bordure<br /> couleur du texte: #ffffff<br /> polices: Georgia, "Times New Roman", Times, serif<br /> taille: 18px<br /> ombre: 0 1px 1px #000000<br/> alignement centre du texte<br /> marge à gauche: 200px<br /> mettre les caractères en majuscule
| Lors du passage de la souris sur submit | couleur d’arrière plan: #1e2506<br/> curseur forme de la main<br /> ombre: 0 1px 1px #c0d576

Les resources à utiliser pour développer la page `fabrication.html`
sont: [visa.png](solution/images/visa.png),
[mastercard.png](solution/images/mastercard.png) et
[Amex.png](solution/images/Amex.png) à déplacer dans le dossier `images`.
