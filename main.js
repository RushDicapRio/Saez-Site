const PROJECTS_DATA = {
  booster: {
    id: 'booster',
    name: 'Saez Booster',
    tag: 'TCG Multivers Anime & Marché P2P',
    category: 'tcg',
    pageUrl: './pages/saez-booster.html',
    mainImage: './assets/screen_booster_packs.png',
    photos: [
      { url: './assets/screen_booster_packs.png', title: 'Interface des Boosters & Tirage Journalier' },
      { url: './assets/screen_booster_draw.png', title: 'Révélation des Cartes avec Raretés & Effets' },
      { url: './assets/screen_booster_vitrine.png', title: 'Vitrine Complète des 200+ Sagas & Inventaire' },
      { url: './assets/screen_booster_badges.png', title: 'Salle des Badges par Animé & Paliers 1 à 10' }
    ],
    platform: 'Web App & Android APK (Capacitor)',
    tech: 'React 19 • TypeScript • Web Audio API • Local & P2P Sync',
    version: 'v2.1.0 Stable',
    hasGithub: true,
    githubUrl: 'https://github.com/votre-nom/saez-booster',
    description: `
      <p><strong>Saez Booster</strong> est le jeu de cartes à collectionner officiel de l'univers Saez, réunissant plus de 200 sagas d'animés cultes (Dragon Ball, Naruto, One Piece, Bleach, Jujutsu Kaisen, Demon Slayer, Solo Leveling, etc.).</p>
      <p style="margin-top: 10px;">L'application propose une expérience d'ouverture de boosters dynamique avec déchirement de paquet, fanfare sonore générée en direct et 6 niveaux de rareté de cartes (Bronze, Argent, Or, Platine, Légende Mythique et Suprême Mystique).</p>
      <p style="margin-top: 10px;">Profitez également du Marché mondial P2P entre collectionneurs, du Hall of Fame des Badges avec 10 paliers de maîtrise par saga, et des outils intégrés au panneau administrateur pour personnaliser les cartes et badges selon vos envies.</p>
    `,
    features: [
      'Plus de 200 sagas d\'animés officielles et des milliers de cartes exclusives',
      '6 paliers de rareté : Bronze, Argent, Or, Platine, Mythique et Mystique',
      'Ouverture de boosters animée avec synthèse audio Web Audio API en direct',
      'Marché virtuel en temps réel avec rachat automatique et expiration paramétrable',
      'Salle des Badges avec 10 paliers de progression personnalisables par saga',
      'Éditeur officiel de cartes et éditeur de badges intégrés au panel développeur'
    ]
  },
  anime: {
    id: 'anime',
    name: 'Saez Anime',
    tag: 'Streaming & VOD Haute Définition',
    category: 'media',
    pageUrl: './pages/saez-anime.html',
    mainImage: './assets/anime_showcase.jpg',
    photos: [
      { url: './assets/anime_showcase.jpg', title: 'Catalogue & Lecteur Vidéo Streaming HD' },
      { url: './assets/saez_anime_login.png', title: 'Interface Officielle & Écran de Connexion' }
    ],
    platform: 'Desktop (Tauri) & Navigateur Web',
    tech: 'React 19 • Tauri • Lecteur HD • Sync Cloud',
    version: 'v1.1.2 Stable',
    hasGithub: true,
    githubUrl: 'https://github.com/votre-nom/saez-anime',
    description: `
      <p><strong>Saez Anime</strong> est une application de streaming moderne conçue pour vous offrir un confort de visionnage absolu sans interruptions publicitaires.</p>
      <p style="margin-top: 10px;">Intégrant le choix complet des versions et langues (VF officielle, VFC Crunchyroll, VFN Netflix, VOJPN Japonaise, VASTFR), l'application vous garantit un accès direct à vos séries préférées.</p>
      <p style="margin-top: 10px;">Le lecteur vidéo haute performance intègre le choix des résolutions, la reprise automatique de lecture et la synchronisation continue de votre progression sur le Cloud.</p>
    `,
    features: [
      'Catalogue de plus de 200 séries avec fiches, synopsis et genres détaillés',
      'Flux vidéo haute définition sans aucune coupure publicitaire',
      'Gestion complète des versions : VF, VFC, VFN, VOJPN, VASTFR',
      'Reprise de lecture automatique et historique synchronisé sur le Cloud',
      'Lecteur vidéo ultra-réactif avec raccourcis clavier et mode cinéma'
    ]
  },
  music: {
    id: 'music',
    name: 'Saez Music',
    tag: 'Application Mobile Streaming Android APK',
    category: 'media',
    pageUrl: './pages/saez-music.html',
    mainImage: './assets/screen_music_home.png',
    photos: [
      { url: './assets/screen_music_home.png', title: 'Accueil Mobile & Import Morceaux Likés' },
      { url: './assets/screen_music_player.png', title: 'Lecteur Audio Hi-Fi & Vinyle 3D Rotatif' },
      { url: './assets/music_icon.png', title: 'Icône Native de l\'Application Android APK' }
    ],
    platform: 'Android APK (Saez Music.apk) & Smartphone',
    tech: 'Web Audio API • Capacitor Android • Import YouTube Music',
    version: 'v1.5.0 Stable',
    hasGithub: true,
    githubUrl: 'https://github.com/votre-nom/saez-music',
    description: `
      <p><strong>Saez Music</strong> est l'application mobile smartphone officielle conçue spécifiquement pour les passionnés d'Openings, Endings et musiques de jeux vidéo.</p>
      <p style="margin-top: 10px;">Vous pouvez importer vos propres morceaux likés de YouTube Music (via YouTube Music) directement dans votre bibliothèque sans aucune manipulation complexe.</p>
      <p style="margin-top: 10px;">Profitez d'un lecteur complet avec halo lumineux d'ambiance, animation vinyle, mode karaoké paroles en direct et lecture en arrière-plan sous Android.</p>
    `,
    features: [
      'Vous pouvez importer vos propres morceaux likés de YouTube Music (via YouTube Music)',
      'Connexion Google transparente en un clic sans aucun copier-coller de cookies',
      'Lecteur plein écran interactif avec vinyle tournant 33T et spectre audio',
      'Mode paroles synchronisées en direct pour chanter vos génériques préférés',
      'Catégories dédiées : Anime & Manga, J-Pop, Hardstyle, Gaming, Lofi & Chill',
      'Disponible en application mobile native Android (fichier Saez Music.apk)'
    ]
  },
  saez: {
    id: 'saez',
    name: 'Saez',
    tag: 'Suite Desktop & Lanceur Centralisé',
    category: 'hub',
    pageUrl: './pages/saez.html',
    mainImage: './assets/saez_desktop_showcase.jpg',
    photos: [
      { url: './assets/saez_desktop_showcase.jpg', title: 'Interface Réelle du Logiciel Saez (Lanceur & Profil Joueur)' },
      { url: './assets/saez_anime_login.png', title: 'Système d\'Authentification & Sécurité Locale' },
      { url: './assets/official_bg.jpg', title: 'Direction Artistique Officielle Saez' }
    ],
    platform: 'Desktop Windows EXE (Tauri 2.0 Core)',
    tech: 'Rust • Tauri 2.0 • Unified Storage • Cloud Sync',
    version: 'v2.0.0 Core Master',
    hasGithub: false, 
    githubUrl: '',
    description: `
      <p><strong>Saez</strong> est l'application maîtresse de tout l'écosystème numérique. Ce logiciel centralisé réunit l'ensemble des modules sous un tableau de bord unifié et sécurisé.</p>
      <p style="margin-top: 10px;">Depuis cette application, lancez vos paquets dans <em>Saez Booster</em>, visionnez vos épisodes dans <em>Saez Anime</em> et accédez au panneau d'administration global.</p>
      <p style="margin-top: 10px;">Le logiciel <strong>Saez</strong> synchronise automatiquement vos profils, votre or virtuel, vos succès, vos niveaux XP et vos sauvegardes cloud.</p>
    `,
    features: [
      'Lanceur centralisé pour l\'ensemble des logiciels de l\'écosystème',
      'Panneau d\'administration central pour paramétrer tous les modules',
      'Synchronisation unique des comptes utilisateurs, or virtuel et XP',
      'Gestionnaire de sauvegardes locales et synchronisation Cloud automatique',
      'Interface haute fidélité en verre fumé aux couleurs officielles Saez',
      'Distribution et accès exclusifs réservés à la communauté Discord officielle'
    ]
  },
  bot: {
    id: 'bot',
    name: 'Saez Discord Bot',
    tag: 'Robot Communautaire & Infrastructure Serveur',
    category: 'bot',
    pageUrl: './pages/bot-discord.html',
    mainImage: './assets/bot_help_screenshot.jpg',
    photos: [
      { url: './assets/bot_help_screenshot.jpg', title: 'Menu Interactif /help & 52 Catégories en Direct' },
      { url: './assets/bot_discord_showcase.jpg', title: 'Lecteur Musical & Présence Streaming Active' }
    ],
    platform: 'Serveur Cloud & Discord.js v14',
    tech: 'Discord.js v14.16 • Node.js 18+ • MongoDB Atlas',
    version: 'v14.2.0 Production',
    hasGithub: true,
    githubUrl: 'https://github.com/votre-nom/saez-discord-bot',
    description: `
      <p><strong>Saez Discord Bot (v14)</strong> est le compagnon officiel et indispensable de la communauté Discord.</p>
      <p style="margin-top: 10px;">Interconnecté avec MongoDB Atlas, il propose 80 commandes slash, plus de 380 sous-commandes et 52 catégories incluant la modération avancée, la sécurité anti-raid, les statuts vocaux 24/7, les jeux communautaires et la musique.</p>
    `,
    features: [
      'Menu d\'aide interactif /help avec menu déroulant dynamique classé par modules',
      '80 commandes slash complètes et plus de 380 sous-commandes spécialisées',
      'Synchronisation MongoDB Atlas avec les profils et le catalogue',
      'Compteurs statistiques 24/7 en salons vocaux avec algorithme anti-rate-limit',
      'Système anti-raid, protection contre les liens non autorisés et sanctions automatiques',
      'Lecteur audio Hi-Fi, web-radios lofi 24/7, quiz et mini-jeux communautaires'
    ]
  }
};
const OFFICIAL_DISCORD_URL = 'https://discord.gg/4djy4pesKd';
const DISCORD_STORAGE_KEY = 'saez_community_discord_link_v2';
try {
  localStorage.removeItem('saez_community_discord_link_v1');
  const storedOld = localStorage.getItem(DISCORD_STORAGE_KEY);
  if (!storedOld || storedOld.includes('votre-lien-discord')) {
    localStorage.setItem(DISCORD_STORAGE_KEY, OFFICIAL_DISCORD_URL);
  }
} catch (e) {}
function getStoredDiscordUrl() {
  try {
    const stored = localStorage.getItem(DISCORD_STORAGE_KEY);
    if (stored && !stored.includes('votre-lien-discord')) {
      return stored;
    }
  } catch (e) {}
  return OFFICIAL_DISCORD_URL;
}
function updateDiscordLinks(newUrl) {
  let url = (newUrl || '').trim() || OFFICIAL_DISCORD_URL;
  if (url.includes('votre-lien-discord')) {
    url = OFFICIAL_DISCORD_URL;
  }
  try {
    localStorage.removeItem('saez_community_discord_link_v1');
    localStorage.setItem(DISCORD_STORAGE_KEY, url);
  } catch (e) {}
  const discordButtons = document.querySelectorAll('a[href*="discord"], .btn-discord');
  discordButtons.forEach((btn) => {
    btn.setAttribute('href', url);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
  const displayEl = document.getElementById('current-discord-url');
  if (displayEl) {
    displayEl.textContent = url;
  }
}
document.addEventListener('click', (e) => {
  const target = e.target.closest && e.target.closest('a[href*="discord"], .btn-discord');
  if (target) {
    const currentHref = target.getAttribute('href') || '';
    if (currentHref.includes('votre-lien-discord') || !currentHref.startsWith('http')) {
      target.setAttribute('href', OFFICIAL_DISCORD_URL);
      target.setAttribute('target', '_blank');
      target.setAttribute('rel', 'noopener noreferrer');
    }
  }
}, true);
const modalBackdrop = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
function openProjectModal(projectId) {
  const project = PROJECTS_DATA[projectId];
  if (!project || !modalBackdrop) return;
  const modalImg = document.getElementById('modal-img');
  modalImg.src = project.mainImage;
  document.getElementById('modal-tag').textContent = project.tag;
  document.getElementById('modal-title').textContent = project.name;
  document.getElementById('modal-description').innerHTML = project.description;
  document.getElementById('modal-platform').textContent = project.platform;
  document.getElementById('modal-tech').textContent = project.tech;
  document.getElementById('modal-version').textContent = project.version;
  const thumbsContainer = document.getElementById('modal-gallery-thumbs');
  thumbsContainer.innerHTML = '';
  if (project.photos && project.photos.length > 0) {
    project.photos.forEach((photo, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `gallery-thumb-btn ${idx === 0 ? 'active' : ''}`;
      btn.title = photo.title || `Capture ${idx + 1}`;
      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = photo.title || 'Capture';
      btn.appendChild(img);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        modalImg.style.opacity = '0.3';
        setTimeout(() => {
          modalImg.src = photo.url;
          modalImg.style.opacity = '1';
        }, 150);
      });
      thumbsContainer.appendChild(btn);
    });
  }
  const listEl = document.getElementById('modal-features-list');
  listEl.innerHTML = '';
  project.features.forEach((feat) => {
    const li = document.createElement('li');
    li.textContent = feat;
    listEl.appendChild(li);
  });
  const githubBtn = document.getElementById('modal-github-btn');
  if (githubBtn) {
    if (project.hasGithub && project.githubUrl) {
      githubBtn.style.display = 'inline-flex';
      githubBtn.href = project.githubUrl;
    } else {
      githubBtn.style.display = 'none'; 
    }
  }
  const discordBtn = document.getElementById('modal-discord-btn');
  if (discordBtn) {
    discordBtn.href = getStoredDiscordUrl();
  }
  const pageBtn = document.getElementById('modal-page-btn');
  if (pageBtn) {
    if (project.pageUrl) {
      pageBtn.style.display = 'inline-flex';
      pageBtn.href = project.pageUrl;
    } else {
      pageBtn.style.display = 'none';
    }
  }
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProjectModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
function initSaezPortal() {
  const initialDiscord = getStoredDiscordUrl();
  updateDiscordLinks(initialDiscord);
  const editDiscordBtn = document.getElementById('edit-discord-link-btn');
  if (editDiscordBtn) {
    editDiscordBtn.addEventListener('click', () => {
      const current = getStoredDiscordUrl();
      const entered = window.prompt(
        'Collez le lien d\'invitation officiel de votre serveur Discord (ex: https://discord.gg/4djy4pesKd) :',
        current
      );
      if (entered !== null) {
        updateDiscordLinks(entered);
        window.alert('Votre lien Discord a été mis à jour avec succès sur tout le site !');
      }
    });
  }
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          if (card.classList.contains('featured-hub') && window.innerWidth > 900) {
            card.style.display = 'grid';
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  const modalTriggers = document.querySelectorAll('.btn-open-modal');
  modalTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });
  projectCards.forEach((card) => {
    if (card.id === 'site') {
      return;
    }
    const media = card.querySelector('.card-media');
    if (media) {
      media.style.cursor = 'pointer';
      media.addEventListener('click', () => {
        const id = card.id === 'saez-core' ? 'saez' : card.id;
        openProjectModal(id);
      });
    }
  });
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }
  const backdrop = document.getElementById('project-modal');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeProjectModal();
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSaezPortal);
} else {
  initSaezPortal();
}
