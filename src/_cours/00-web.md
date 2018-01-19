---
title: Introduction au Web
chapitre: Web
permalink: /cours/web.html
---

Le Web est un système permettant d'accéder à un ensemble de documents
hypertextes en utilisant principalement un navigateur. Le Web était développé
par Tim Berners-Lee au CERN (Suisse) en 1990.

**Internet** : Un système de communication qui permet aux ordinateurs autour du
monde de communiquer et de s'échanger des informations entre eux.

**Le Web** ou World Wide Web (toile d’araignée mondiale) ou le WWW : est un
système hypertexte public fonctionnant sur Internet et qui permet de consulter,
avec un navigateur, des pages mises en ligne dans des sites.

**Hypertexte** : Ensemble de textes et d’autres documents qui peuvent être
consultés à partir d’un système d’envoi hiérarchisé.


Les composants du Web
---------------------

Un document hypertexte est principalement un document texte écrit en
HTML/CSS/JavaScript contenant des unités d'information liées entre elles par
des hyperliens. Mais, le type du document peut être aussi texte, audio, image,
vidéo ou binaire.

Les documents en Web sont regroupés en ensembles de sites Web identifiés par
des noms de domaines. Pour accéder à un document dans un site Web, on saisit
l'URL (_Unified Ressource Link_), le nom du domaine du site et le chemin du
document dans la barre d'adresse du navigateur. Exemples de sites Web :

- Site de l'ISET de Sfax : [www.isetsf.rnu.tn](http://www.isetsf.rnu.tn)
- L'article Web dans Wikipédiai : [fr.wikipedia.org/wiki/World_Wide_Web](https://fr.wikipedia.org/wiki/World_Wide_Web)

Pour l'échange de ces documents, le Web utilise le protocole HTTP (HyperText
Transfer Protocol) qui permet la communication entre le client (navigateur) et
le serveur. On peut nommer comme navigateurs principaux dans le marché :

- **Google Chrome** - développé par Google depuis 2008. Il était basé sur le
  même moteur de rendu que Safari jusqu'à 2013
- **Firefox** - développé par Mozilla depuis 2004 comme un successeur de
  **Netscape**
- **Safari** - développé par Apple depuis 2003
- **Microsoft Edge** - développé par Microsoft comme successeur
  d'**Internet Explorer** développé depuis 1995
- **Opera** - développé depuis 1994. Depuis 2013, il est basé sur le même
  moteur de rendu que Chrome

<figure>
  <img src="assets/imgs/navigateurs-timeline-by-cours-web.ch.png" alt="L’évolution des navigateurs entre 1993 et 2016" />
  <figcaption>L'évolution des navigateurs entre 1993 et 2016. Par <cite><a href="https://cours-web.ch/" target="_blank">cours-web.ch</a></cite></figcaption>
</figure>

Le fonctionnement du Web
------------------------

Le Web fonctionne suivant l'architecture Client/Serveur où les ordinateurs
connectés sont des clients et des serveurs.

- **Les clients** correspondent aux appareils connectés sur Internet et aux
  logiciels utilisés pour consulter les pages Web (par exemples les navigateurs
  Web : Firefox, Chrome, ...)
- **Les serveurs** sont les ordinateurs qui stockent des pages Web, des sites
  ou des applications Web. Lorsqu'un appareil "client" souhaite accéder à une
  page Web, une copie de page est générée par le serveur et téléchargée vers le
  client.

De plus le Web se compose d'autres concepts réseaux qui se trouvent entre le
client et le serveur pour assurer son fonctionnement :

- **Internet TCP/IP** : _Transmission Control Protocol / Internet Protocol_,
  sont des protocoles qui définissent la manière dont les données sont
  transférées à travers le Web.
- **DNS** : _Domain Name System_, est un système qui ressemble à un annuaire
  pour les sites Web. Le navigateur utilise le DNS pour résoudre l'adresse IP
  du serveur avant de récupérer le site Web. En effet, le navigateur a besoin
  de savoir sur quel serveur le site Web est situé pour pouvoir envoyer des
  requêtes HTTP au bon endroit.
- **HTTP** : _HyperText Transfer Protocol_, est un protocole d'application qui
  définit le language avec lequel les clients et les serveurs communiquent. Il
  était inventé par Tim Berners-Lee au CERN en 1990 comme protocole d'échange
  des documents HTML.
