<h1 align="center">tchoup-bento</h1>

<p align="center">
  <a href="#description">Description</a> •
  <a href="#contribution">Contribution</a> •
  <a href="#àpropos">About</a> 
</p>

Un outil personnel pour créer et gérer des pages bento (type Linktree) directement en code. Une alternative simple et efficace suite à la fermeture du site Bento.

Actuellement, ce projet est déployé grâce à **Vercel**.

## Description 

tchoup-bento est une solution minimaliste pour créer des pages de liens personnalisées (bentos) en écrivant directement du code. Inspiré par Bento.me avant sa fermeture, ce projet offre un contrôle total sur l'apparence et le contenu de votre page de liens, sans interface d'administration complexe.

Le projet adopte une philosophie "code-first" : toutes les modifications se font directement dans le code source, offrant ainsi une flexibilité maximale et une personnalisation illimitée.

### Usage  

Ce projet est actuellement conçu pour un usage personnel. 

Pour créer votre propre bento :

1. Clonez le projet et modifiez directement les composants Vue
2. Personnalisez les liens, les couleurs et la mise en page dans le code
3. Déployez votre version sur Vercel ou toute autre plateforme de votre choix

### Fonctionnalités

* Création de pages bento personnalisées en code
* Design responsive et moderne
* Navigation fluide avec Vue Router (dans le cas où vous voulez plusieurs Bento)
* Aucune base de données requise - tout est statique et rapide

#### À venir 

* Interface d'édition graphique pour modifier les bentos sans toucher au code
* Système de thèmes préconçus
* Export/Import de configurations

### Build With

* [Vue.js 3](https://vuejs.org/) - Framework JavaScript progressif
* [Vite](https://vitejs.dev/) - Build tool rapide et moderne
* [Vue Router](https://router.vuejs.org/) - Router officiel pour Vue.js
* CSS pur - Pas de framework CSS, styling personnalisé

### Déploiement

1. Le code source est poussé sur la branche principale du dépôt GitHub. 
2. Une action de déploiement automatique Vercel est déclenchée. 
3. Le build est généré et déployé sur Vercel automatiquement.

## Contribution

### How To 

Nous accueillons les contributions avec plaisir ! Pour contribuer :

1. Ouvrez une **[issue](https://github.com/Tchoup7790/tchoup-bento/issues)** pour décrire votre problème ou la fonctionnalité que vous aimeriez avoir.
2. Lorsque **l'issue** est approuvée, créez une **branch** pour vos modifications :
```bash
git checkout -b feature/nom-feature
```
3. Ouvrez une **[Pull Request](https://github.com/Tchoup7790/tchoup-bento/pulls)** avec une description claire des modifications.

### Pré-requis

Liste des pré-requis nécessaires :

* [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) installé

### Initialisation du projet 

1. Clonez le dépôt
```bash
git clone https://github.com/Tchoup7790/tchoup-bento.git
```

2. Accédez au dossier du projet
```bash
cd ./tchoup-bento
```

3. Installez les dépendances
```bash
npm install
```

4. Lancez le serveur de développement
```bash
npm run dev
```

Le projet sera accessible sur `http://localhost:5173` (ou le port indiqué dans votre terminal).

### Build pour la production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Pour prévisualiser le build de production localement :

```bash
npm run preview
```

## ÀPropos

### Auteurs

* [Tchoup7790](https://github.com/Tchoup7790)

### Contact

For any questions or suggestions, feel free to open an issue or contact me directly at [juliojuliobaptiste@gmail.com](mailto:juliojuliobaptiste@gmail.com).

### License 

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
