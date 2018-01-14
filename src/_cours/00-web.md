---
title: Introduction Web
chapitre: Web
permalink: /cours/web.html
---

Le Web, ou également nommé **WWW** (Word Wide Web), est un des services
d'Internet les plus connus:

- FTP: transfert de fichier
- IMAP, POP3, SMTP: Le courrier électronique (l'email)
- HTTP: Web (documents hypertextes)

Le Web est un système permettant d'accéder à un ensemble des documents
hypertextes en utilisant principalement navigateur. Le Web était développé par
Tim Berners-Lee au CERN (Suisse) en 1990.

Les composents du Web
---------------------

Un document hypertexte est principalement un document texte écrit en
HTML/CSS/JavaScript contenant des unités d'information liées entre elles par
des hyperliens. Mais, le type du document peut être aussi un texte, audio,
image, vidéo ou binaire.

Les documents en Web sont regrouper en ensembles des sites Web identifiés par
des noms de domaines. Pour accéder à un document dans un site Web, on saisi
l'URL: le nom de domaine de cet site Web et le chemin du document dans la barre
d'adresse de le navigateur. Exemples des sites Web populaires:

- [Google](https://google.com)
- [Wikipédia](https://fr.wikipedia.org/wiki/World_Wide_Web)
- [GitHub](https://github.com)

Pour l'échange de ces documents, le Web utilise le protocole HTTP (HyperText
Transfer Protocol) qui permet la communication entre le client (navigateur) et
le serveur. On peut nommer comme navigateurs principales dans le marché:

- **Google Chrome** - développé par Google depuis 2008. Il était basé sur le
  même moteur de rendu que Safari jusqu'à 2013
- **Firefox** - développé par Mozilla depuis 2004 comme un successeur de
  **Netscape**
- **Safari** - développé par Apple depuis 2003
- **Microsoft Edge** - développé par Microsoft comme successeur d'**Internet
  Explorer** développé depuis 1995
- **Opera** - développé depuis 1994. Depuis 2013, il est basé sur le même
  moteur de rendu que Chrome

![L’évolution des navigateurs entre 1993 et 2016](assets/imgs/navigateurs-timeline-by-cours-web.ch.png "L’évolution des navigateurs entre 1993 et 2016")

Le fonctionnement du Web
------------------------

Le Web fonctionne suivant l'architecture serveur-clients où les ordinateurs
connéectées sont des clients et des serveurs.

- **Les clients** correspondent aux appareils connectés sur Internet utilisés
  par les personnes qui utilisent des sites Web et aux logiciels utilisés pour
  consulter les pages Web (par exemples les navigateurs Web: Firefox, Chrome,
  ...)
- **Les serveurs** sont les ordinateurs qui stockent les pages Web, des sites
  ou des applications Web. Lorsqu'un appareil "client" souhaite accéder à une
  page Web, une copie de page est générée par le serveur et téléchargée vers le
  client.

De plus le Web se compose d'autres parties qui se trouvent entre le client et
le serveur pour assurer le fonctionnement du Web:

- **Internet TCP/IP**: _Transmission Control Protocol / Internet Protocol_,
  sont des protocoles ui définissent comment les données sont transférées à
  travers le Web.
- **DNS**: _Domain Name System_, est un système qui ressemble à un annuaire
  pour les sites Web. Le navigateur utilise le DNS pour résoudre l'adresse IP
  du serveur avant de récupere le site Web. En effet, le navigateur a besoin de
  savoir sur quel serveur le site Web est situé pour pouvoir envoyer des
  requêtes HTTP au bon endroit.
- **HTTP**: _HyperText Transfer Protocol_, est un protocole d'application qui
  définit le language avec laquel les clients et les serveurs communiquent. Il
  était inventé par Tim Berners-Lee au CERN en 1990 comme le protocol d'echange
  des documents HTML.
