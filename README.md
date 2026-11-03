# 🌐 Saez.hub — Portail Vitrine Officiel de l'Écosystème

> **Le hub central et vitrine officielle regroupant l'ensemble des logiciels, applications mobiles, jeux et services créés par Saez.**

---

## 🎯 À quoi sert exactement ce site ?

Le site **Saez.hub** est la porte d'entrée principale et la vitrine officielle de tout l'écosystème numérique **Saez**. 

Conçu avec un design moderne en **Glassmorphism sombre** et des animations soignées, il a pour objectifs principaux :

1. **Centraliser tous les projets** : Regrouper au même endroit tous les logiciels (PC Windows), applications mobiles (Android APK), plateformes de streaming et bots créés par Saez.
2. **Présenter chaque création en détail** : Pour chaque projet, le site offre un résumé clair, les technologies utilisées (React, TypeScript, Tauri, Rust, Node.js...), les statuts de version, ainsi qu'une **page dédiée** et une **modale interactive** avec de véritables captures d'écran.
3. **Distribuer les accès & téléchargements** : Fournir aux utilisateurs les liens directs vers les dépôts de code GitHub, les fichiers exécutables / APK et les accès bêta privés.
4. **Fédérer la communauté** : Intégrer un pont permanent vers le **serveur Discord officiel** ([https://discord.gg/4djy4pesKd](https://discord.gg/4djy4pesKd)), permettant aux membres d'obtenir du support, d'échanger des cartes TCG et de tester les avant-premières.

---

## 🚀 Les 6 Projets Présentés sur le Site

| Projet | Catégorie | Plateforme | Description sommaire |
| :--- | :--- | :--- | :--- |
| **🃏 Saez Booster** | TCG & Collection | Web & Android APK | Jeu de cartes à collectionner officiel (200+ sagas d'animés, 6 paliers de rareté, marché mondial de joueurs P2P, ouverture de paquets animée avec audio direct, éditeurs de cartes et badges intégrés). |
| **🎬 Saez Anime** | Streaming HD | Desktop (Tauri) & Web | Plateforme de streaming haute définition sans coupure publicitaire. Catalogue complet multi-versions (VF, VFC, VFN, VOJPN, VASTFR), lecteur vidéo performant et historique cloud. |
| **🎵 Saez Music** | Audio & Streaming | Android APK (Mobile) | Application mobile dédiée aux génériques d'animés (OST), J-Pop et gaming. Import de morceaux likés YouTube Music, lecteur avec vinyle 3D interactif et paroles synchronisées. |
| **⚡ Saez (Core Master)** | Suite Logicielle PC | Desktop Windows EXE | Le lanceur centralisé tout-en-un sous Tauri 2.0 / Rust. Il synchronise l'ensemble des modules, les profils, les niveaux XP, l'or virtuel et les sauvegardes cloud. Accès exclusif réservé au Discord. |
| **🤖 Saez Discord Bot** | Bot Communautaire | Cloud (Discord.js v14) | Robot officiel propulsé par Discord.js v14 et MongoDB Atlas. 80 commandes slash, 380+ sous-commandes, 52 catégories, menu interactif `/help`, compteurs vocaux 24/7 et sécurité anti-raid. |
| **🌐 Saez.hub** | Portail Vitrine | Web Responsive | Le portail web lui-même, optimisé pour PC, tablette et smartphone. |

---

## 📂 Structure des Fichiers du Site

```text
Saez Site/
├── index.html               # Page d'accueil principale (Hero, stats, catalogue filtrable, modale, bannière Discord)
├── style.css                # Design system complet (Variables CSS, Glassmorphism, animations néon, responsive)
├── main.js                  # Logique JavaScript (Filtres thématiques, modale dynamique avec captures réelles, gestion Discord sécurisée)
├── lancer-site.bat          # Script de lancement rapide en local (serveur HTTP Python automatique)
├── README.md                # Cette documentation complète du site
├── assets/                  # Captures réelles, bannières, logos officiels et icônes
│   ├── official_logo.png
│   ├── screen_booster_packs.png
│   ├── screen_booster_draw.png
│   ├── screen_booster_vitrine.png
│   ├── screen_booster_badges.png
│   ├── anime_showcase.jpg
│   ├── screen_music_home.png
│   ├── screen_music_player.png
│   ├── saez_desktop_showcase.jpg
│   ├── bot_help_screenshot.jpg
│   └── bot_discord_showcase.jpg
└── pages/                   # Pages HTML détaillées dédiées à chaque projet
    ├── saez-booster.html    # Page complète dédiée à Saez Booster
    ├── saez-anime.html      # Page complète dédiée à Saez Anime
    ├── saez-music.html      # Page complète dédiée à Saez Music
    ├── saez.html            # Page complète dédiée au logiciel Saez
    └── bot-discord.html     # Page complète dédiée au Bot Discord v14
```

---

## 🎨 Fonctionnalités & Expérience Utilisateur

- **Filtrage instantané par catégorie** : Possibilité de filtrer les projets en un clic (*Tous*, *TCG & Cartes*, *Streaming & Audio*, *Suite Logicielle*, *Bot Discord*).
- **Pop-up d'Aperçu Haute Définition (Modale)** : En cliquant sur le bouton **Aperçu** ou sur l'image d'un projet, une modale grand format s'ouvre avec un carrousel de captures réelles, la liste détaillée des fonctionnalités, la fiche technique et les accès directs.
- **Navigation Multi-Pages** : Chaque logiciel possède également une page web complète autonome dans le dossier `/pages/` pour une lecture approfondie.
- **Sécurité et Liens Discord vérifiés** : Tous les boutons Discord du site pointent vers l'invitation officielle sécurisée [`https://discord.gg/4djy4pesKd`](https://discord.gg/4djy4pesKd) avec ouverture automatique dans un nouvel onglet (`target="_blank"`).
- **Compatibilité Responsive** : Interface fluide s'adaptant parfaitement aux écrans PC ultra-larges, aux ordinateurs portables, aux tablettes et aux smartphones.

---

## 💻 Comment Lancer le Site en Local

### Option 1 : Via le script automatique (Recommandé)
Faites simplement un double-clic sur le fichier :
```bash
lancer-site.bat
```
Ce script démarre un serveur web local léger et ouvre automatiquement votre navigateur sur le site.

### Option 2 : Via VS Code Live Server
1. Ouvrez le dossier `Saez Site` dans Visual Studio Code.
2. Faites un clic droit sur `index.html` puis sélectionnez **Open with Live Server**.
3. Le site s'ouvre sur `http://localhost:5500/` ou `http://localhost:5500/Saez%20Site/index.html`.

---

## 🔗 Liens Officiels

- **Discord Officiel de la Communauté** : [https://discord.gg/4djy4pesKd](https://discord.gg/4djy4pesKd)
- **Auteur & Développeur** : Saez
- **Droits** : © 2026 Saez.hub Multiverse — Tous droits réservés.
