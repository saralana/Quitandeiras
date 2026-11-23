/*
  QUITANDEIRAS — versão revisada a partir da primeira versão aprovada.
  Estrutura esperada:
    assets/images/home-hero.jpg
    assets/images/icons/<slug>.png
    assets/images/gallery/<slug>/01.jpg, 02.jpg ... até 10.jpg
    assets/sounds/<slug>/<nome-original>.mp3
    assets/fonts/LeagueSpartan-*.ttf

  Cada quitandeira tem sua própria descrição, galeria e playlist. Os títulos da playlist são derivados dos nomes dos MP3 configurados em PEOPLE.
  IMPORTANTE: para o navegador localizar as fotos automaticamente, nomeie-as
  em sequência (01, 02, 03...) usando .jpg, .jpeg, .png ou .webp.
*/

const ASSETS = "./assets";
const IMAGE_ASSETS = `${ASSETS}/images`;
const ICONS = `${IMAGE_ASSETS}/icons`;
const TITLE_IMAGES = `${IMAGE_ASSETS}/titles`;
const MAX_GALLERY_IMAGES = 100;
const GALLERY_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP"];
const makeAssetUrl = (relativePath) => new URL(relativePath, document.baseURI).href;

// A playlist usa os nomes reais dos arquivos MP3.
// O título mostrado no site é o nome do arquivo sem a extensão.
// Os caminhos são normalizados em NFD para compatibilidade com nomes gravados no macOS.
const makePlaylist = (slug, files = []) => files.map((filename) => ({
  title: filename.replace(/\.mp3$/i, "").replace(/_/g, " ").replace(/\s+/g, " ").trim().normalize("NFC"),
  file: makeAssetUrl(`${ASSETS}/sounds/${slug}/${filename.normalize("NFD")}`)
}));

// Textos de apresentação distintos para cada página.
// São textos editoriais provisórios sobre o material documentado pelo projeto;
// não atribuem histórias pessoais, receitas específicas ou dados biográficos não fornecidos.
// Substitua estes parágrafos pelos textos finais/entrevistas quando estiverem aprovados.
const PEOPLE = [
  {
    slug: "edimara", name: "Edimara", icon: `${ICONS}/edimara.png`,
    menuTitleImage: `${TITLE_IMAGES}/edimara-claro.png`,
    pageTitleImage: `${TITLE_IMAGES}/edimara-vinho.png`,
    kicker: "REGISTROS E MEMÓRIAS",
    description: [
      "Edimara vive em Guanhães, em um bairro próximo à rodovia que liga a cidade do Vale do Aço à capital. Seu sustento vem predominantemente das quitandas que vende no mercado da cidade. Além disso, ela cozinha para eventos e fornece almoço para trabalhadores de uma fábrica que fica próxima à casa dela.",
      "Aprendeu a fazer quitandas quando ainda morava na roça, com uma vizinha, e afirma que com o passar dos anos foi mudando todas as receitas “para melhor”, dando seu toque, como as raspas de limão e queijo ralado que acrescentou ao biscoito “dedinho”.  Tinha na filha a esperança da continuidade de seu ofício, mas ela faleceu há 3 anos, deixando uma netinha, xodó de Edimara e que espia com atenção os gestos da avó e pode, quem sabe, dar continuidade ao legado."
    ],
    galleryDirectory: "edimara", galleryCaptions: [], playlist: makePlaylist("edimara", [
      "Biscoito de limão - Chegada da irmã (lindalva).mp3",
      "Dedinho - Preco Merenda - Casa da Infância.mp3",
      "Dedinho_DOIS - Preco Merenda - Casa da Infância.mp3",
      "Edimara_1 - início quitanda, quando eu morrer acaba.mp3",
      "Edimara_2 - início quitanda, quando eu morrer acaba.mp3",
      "Edimara_3 - início quitanda, quando eu morrer acaba.mp3",
      "É uma técnica.mp3",
      "Rosca da Rainha _ Primeiras Quitandas.mp3",
      "Rosca de bicarbonato.mp3"
    ])
  },
  {
    slug: "madalena", name: "Madalena", icon: `${ICONS}/madalena.png`,
    menuTitleImage: `${TITLE_IMAGES}/madalena-claro.png`,
    pageTitleImage: `${TITLE_IMAGES}/madalena-vinho.png`,
    kicker: "SABERES DA QUITANDA",
    description: [
      "Madalena vive no Quilombo dos Antunes, bem no alto da serra, no mesmo terreno em que moram uma das filhas e o irmão. Conta que aprendeu a fazer quitanda observando uma senhora para quem trabalhou desde muito nova,  e não com a mãe, já que o preparo da quitanda era coisa de gente rica que, segundo ela, “tinha mais tempo”.",
      "Ali, observando, ela memorizou tudo e passou a replicar as receitas, assadas em seu forno à lenha que fica na área externa da casa.",
      "A filha aprendeu a fazer quitandas com ela e diz que a mãe assa quilos e quilos de biscoitos, bolos e outras delícias para distribuir com a família e amigos: “Ela é assim, ela não sabe fazer e não dar pra ninguém. Ela faz e repassa.”"
    ],
    galleryDirectory: "madalena", galleryCaptions: [], playlist: makePlaylist("madalena", [
      "Biscoito Parte 1 - Bolo na Brasa.mp3",
      "Biscoito Parte 2.mp3",
      "Biscoito_DOIS_Parte 1 - Bolo na Brasa.mp3",
      "Contação de História - Inicio Quitanda - Mãe Cente.mp3",
      "Contação de História_DOIS - Inicio Quitanda - Mãe Cente.mp3",
      "Enrolando Biscoito - Receita.mp3",
      "Enrolando biscoito_2 _ Receita.mp3",
      "Forno - Mamãe Gosta de Compartilhar.mp3",
      "Pré Biscoito - Primeira Quitanda.mp3",
      "Pré Biscoito_DOIS_Primeira Quitanda.mp3"
    ])
  },
  {
    slug: "maria-da-luz", name: "Maria da Luz", icon: `${ICONS}/maria-da-luz.png`,
    menuTitleImage: `${TITLE_IMAGES}/maria-da-luz-claro.png`,
    pageTitleImage: `${TITLE_IMAGES}/maria-da-luz-vinho.png`,
    kicker: "IMAGENS E RELATOS",
    description: [
      "Maria da Luz vive no Quilombo Maitaca, onde planta hortaliças e legumes para fornecer ao programa de merenda escolar do município, além de coletar sementes que são vendidas a uma empresa de reflorestamento. Aprendeu a fazer quitandas com a mãe. Segundo ela, como antigamente era mais difícil ir até a cidade, tudo tinha que ser feito ali:  “minha avó, minha tia, minha mãe, elas se juntavam e faziam aquele tanto de quitanda pra encher as latas.”",
      "Na cozinha dela, muitos chuchus verdinhos estão ali na beira da pia esperando para serem preparados, mas não de um jeito usual. A visita à casa de Maria da Luz trouxe uma receita inusitada: o suco de chuchu, couve e limão. Para ela o suco é bom pra tudo, mas principalmente para desinchar."
    ],
    galleryDirectory: "maria-da-luz", galleryCaptions: [], playlist: makePlaylist("maria-da-luz", [])
  },
  {
    slug: "silvana", name: "Silvana", icon: `${ICONS}/silvana.png`,
    menuTitleImage: `${TITLE_IMAGES}/silvana-claro.png`,
    pageTitleImage: `${TITLE_IMAGES}/silvana-vinho.png`,
    kicker: "GESTOS E TRADIÇÃO",
    description: [
      "Silvana vive no Quilombo Maitaca. Chegou a se mudar para Belo Horizonte, onde estudou e trabalhou, mas resolveu voltar para criar sua filhinha na tranquilidade que afirma só encontrar em seu território. Aprendeu a fazer quitandas com a mãe, mas gosta também de pesquisar receitas e experimentar. As irmãs não têm paciência para cozinhar, enquanto ela gosta de preparos demorados e que exigem delicadeza.",
      "Quando estava em BH ouviu dizer de um tal “café colonial” e quando entendeu o que era logo disse: “uai, mas isso é a mesa posta da roça, que fica o dia todinho cheia pra quem chegar poder comer uma coisinha”.",
      "Deseja ensinar o que sabe para a pequena Helena, que dá seus primeiros passos na cozinha da avó, Maria da Luz."
    ],
    galleryDirectory: "silvana", galleryCaptions: [], playlist: makePlaylist("silvana", [])
  },
  {
    slug: "tia-nega", name: "Tia Nega", icon: `${ICONS}/tia-nega.png`,
    menuTitleImage: `${TITLE_IMAGES}/tia-nega-claro.png`,
    pageTitleImage: `${TITLE_IMAGES}/tia-nega-vinho.png`,
    kicker: "MEMÓRIA QUE PERMANECE",
    description: [
      "Ivanete, mais conhecida como Tia Nega, mora no Sampaio, zona rural de Guanhães. Aprendeu a fazer quitandas com a mãe e afirma: “Eu sigo do mesmo jeito. Não tem livro, não tem caderno, não tem nada. Marco tudo na cabeça. Não tem receita, nada não.”",
      "Desde 2013 ela fornece quitandas para as escolas da região, por meio de um programa que prevê a compra de insumos de produtores rurais. Por causa disso precisou adaptar sua cozinha de produção, que teve que ficar em um cômodo separado e passou a usar um forno à lenha industrial, que torna o processo mais ágil.",
      "Mas, segundo ela, o sabor que o forno tradicional confere às quitandas é único e planeja reconstruí-lo em outro cômodo da casa, onde atualmente ela já tem um fogo de chão para preparo de toneladas de doces para a festa do Rosário."
    ],
    galleryDirectory: "tia-nega", galleryCaptions: [], playlist: makePlaylist("tia-nega", [
      "Enrolando rosquinha - Mae.mp3",
      "Enrolando rosquinha_DOIS - Mae.mp3",
      "Enrolando rosquinha_TRES - Mae.mp3",
      "Entrevista Nega P1.mp3",
      "Entrevista Nega P1_DOIS.mp3",
      "Festa do Rosario.mp3",
      "Rosquinha - gostaria de me vestir de branco.mp3",
      "Rosquinha_DOIS_ gostaria de me vestir de branco.mp3",
      "Rosquinha_QUATRO_gostaria de me vestir de branco.mp3",
      "Rosquinha_TRES_gostaria de me vestir de branco.mp3"
    ])
  }
];

// Elementos da página. Se algum ID do HTML mudar, o erro é explícito no console.
const $ = (id) => document.getElementById(id);
const requiredIds = [
  "home-view", "person-view", "home-nav", "person-nav", "person-name", "person-icon",
  "home-wordmark-image", "home-wordmark-fallback", "person-wordmark-image", "person-wordmark-fallback",
  "person-title-image", "person-title-fallback", "about-title-image", "about-title-fallback",
  "story-kicker", "story-copy", "gallery-image", "gallery-empty", "gallery-empty-title",
  "gallery-empty-message", "gallery-empty-path", "gallery-caption", "gallery-count", "gallery-dots",
  "gallery-prev", "gallery-next", "playlist", "audio-element", "play-audio", "audio-progress",
  "current-time", "duration", "current-track-title", "audio-status", "track-count",
  "about-backdrop", "about-drawer", "drawer-close", "previous-track", "next-track"
];
const missingIds = requiredIds.filter((id) => !$(id));
if (missingIds.length) {
  console.error("Quitandeiras: faltam elementos no index.html:", missingIds.join(", "));
  throw new Error(`HTML incompatível com script.js. IDs ausentes: ${missingIds.join(", ")}`);
}

const homeView = $("home-view");
const personView = $("person-view");
const homeNav = $("home-nav");
const personNav = $("person-nav");
const personName = $("person-name");
const personTitleImage = $("person-title-image");
const personTitleFallback = $("person-title-fallback");
const personIcon = $("person-icon");
const homeWordmarkImage = $("home-wordmark-image");
const homeWordmarkFallback = $("home-wordmark-fallback");
const personWordmarkImage = $("person-wordmark-image");
const personWordmarkFallback = $("person-wordmark-fallback");
const aboutTitleImage = $("about-title-image");
const aboutTitleFallback = $("about-title-fallback");
const storyKicker = $("story-kicker");
const storyCopy = $("story-copy");
const galleryImage = $("gallery-image");
const galleryEmpty = $("gallery-empty");
const galleryEmptyTitle = $("gallery-empty-title");
const galleryEmptyMessage = $("gallery-empty-message");
const galleryEmptyPath = $("gallery-empty-path");
const galleryCaption = $("gallery-caption");
const galleryCount = $("gallery-count");
const galleryDots = $("gallery-dots");
const galleryPrevButton = $("gallery-prev");
const galleryNextButton = $("gallery-next");
const playlistElement = $("playlist");
const audio = $("audio-element");
const playButton = $("play-audio");
const progress = $("audio-progress");
const currentTimeLabel = $("current-time");
const durationLabel = $("duration");
const currentTrackTitle = $("current-track-title");
const audioStatus = $("audio-status");
const trackCount = $("track-count");
const aboutBackdrop = $("about-backdrop");
const aboutDrawer = $("about-drawer");

let activePerson = null;
let activeGalleryIndex = 0;
let activeTrackIndex = 0;
let currentPlaylist = [];
let drawerIsOpen = false;
let routeRenderId = 0;
let galleryLoadId = 0;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function wireImageFallback(image, fallback) {
  const showFallback = () => {
    image.hidden = true;
    fallback.hidden = false;
  };
  const showImage = () => {
    image.hidden = false;
    fallback.hidden = true;
  };
  image.addEventListener("error", showFallback);
  image.addEventListener("load", showImage);
  // Covers images whose load/error event fired before this function ran.
  if (image.complete) {
    if (image.naturalWidth > 0) showImage();
    else showFallback();
  }
}

function createNavigation(container, { compact = false } = {}) {
  container.innerHTML = "";
  if (compact) {
    const homeLink = document.createElement("a");
    homeLink.href = "#home";
    homeLink.className = "home-link";
    homeLink.setAttribute("aria-label", "Voltar à página inicial");
    homeLink.title = "Voltar à página inicial";

    homeLink.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    `;

    container.append(homeLink);
  }

  PEOPLE.forEach((person) => {
    const link = document.createElement("a");
    link.href = `#${person.slug}`;
    link.setAttribute("aria-label", person.name);

    if (!compact) {
      link.className = "home-nav-link";
      const icon = document.createElement("img");
      icon.src = makeAssetUrl(`${ICONS}/${person.slug}.png`);
      icon.alt = "";
      icon.loading = "eager";

      const titleImage = document.createElement("img");
      titleImage.className = "home-nav-title-image";
      titleImage.alt = person.name;
      titleImage.loading = "eager";

      const fallback = document.createElement("span");
      fallback.className = "home-nav-name-fallback";
      fallback.textContent = person.name;
      fallback.hidden = true;
      titleImage.addEventListener("error", () => {
        titleImage.hidden = true;
        fallback.hidden = false;
      }, { once: true });
      titleImage.addEventListener("load", () => {
        titleImage.hidden = false;
        fallback.hidden = true;
      }, { once: true });
      titleImage.src = makeAssetUrl(person.menuTitleImage);
      link.append(icon, titleImage, fallback);
    } else {
      link.className = "person-nav-image-link";
      const titleImage = document.createElement("img");
      titleImage.className = "person-nav-title-image";
      titleImage.alt = person.name;

      const fallback = document.createElement("span");
      fallback.className = "person-nav-name-fallback";
      fallback.textContent = person.name;
      fallback.hidden = true;
      titleImage.addEventListener("error", () => {
        titleImage.hidden = true;
        fallback.hidden = false;
      }, { once: true });
      titleImage.addEventListener("load", () => {
        titleImage.hidden = false;
        fallback.hidden = true;
      }, { once: true });
      titleImage.src = makeAssetUrl(person.pageTitleImage);
      link.append(titleImage, fallback);
    }
    container.append(link);
  });
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function setRoute() {
  const slug = window.location.hash.replace(/^#/, "").trim();
  const person = PEOPLE.find((item) => item.slug === slug);
  closeAbout(false);
  if (!person) {
    showHome();
    return;
  }
  showPerson(person);
}

function showHome() {
  routeRenderId += 1;
  galleryLoadId += 1;
  stopAudio();
  activePerson = null;
  homeView.hidden = false;
  personView.hidden = true;
  document.title = "Quitandeiras";
  document.body.classList.remove("person-page");
}

async function showPerson(person) {
  const renderId = ++routeRenderId;
  galleryLoadId += 1;
  activePerson = { ...person, gallery: [] };
  homeView.hidden = true;
  personView.hidden = false;
  document.body.classList.add("person-page");
  document.title = `${person.name} — Quitandeiras`;
  personName.setAttribute("aria-label", person.name);
  personTitleFallback.textContent = person.name;
  personTitleImage.alt = person.name;
  // Rebind fallback handlers before changing the image source.
  personTitleImage.onerror = () => { personTitleImage.hidden = true; personTitleFallback.hidden = false; };
  personTitleImage.onload = () => { personTitleImage.hidden = false; personTitleFallback.hidden = true; };
  personTitleImage.hidden = false;
  personTitleFallback.hidden = true;
  personTitleImage.src = makeAssetUrl(person.pageTitleImage);
  personIcon.src = makeAssetUrl(`${ICONS}/${person.slug}.png`);
  personIcon.alt = `Ícone de ${person.name}`;
  storyKicker.textContent = person.kicker;
  storyCopy.replaceChildren(...person.description.map((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    return p;
  }));

  createNavigation(personNav, { compact: true });
  [...personNav.querySelectorAll("a")].forEach((link) => {
    if (link.getAttribute("href") === `#${person.slug}`) link.setAttribute("aria-current", "page");
  });

  activeGalleryIndex = 0;
  galleryImage.hidden = true;
  galleryEmpty.hidden = false;
  galleryEmptyTitle.textContent = "CARREGANDO GALERIA";
  galleryEmptyMessage.textContent = "Localizando as fotografias desta quitandeira.";
  galleryEmptyPath.textContent = `assets/images/gallery/${person.galleryDirectory}/`;
  galleryPrevButton.hidden = true;
  galleryNextButton.hidden = true;
  galleryCount.textContent = "00 / 00";
  galleryDots.replaceChildren();
  galleryCaption.textContent = "Galeria de fotografias";

  currentPlaylist = person.playlist || [];
  activeTrackIndex = 0;
  renderPlaylist();
  loadTrack(0, false);

  const loadedGallery = await loadPersonGallery(person);
  if (renderId !== routeRenderId || activePerson?.slug !== person.slug) return;
  activePerson.gallery = loadedGallery;
  activeGalleryIndex = 0;
  renderGallery();
}

function probeImage(relativePath) {
  return new Promise((resolve) => {
    const image = new Image();
    const url = makeAssetUrl(relativePath);
    image.onload = () => resolve(url);
    image.onerror = () => resolve(null);
    image.src = url;
  });
}

async function findNumberedImage(person, index) {
  const padded = String(index + 1).padStart(2, "0");
  const unpadded = String(index + 1);
  const bases = [...new Set([padded, unpadded])];
  for (const base of bases) {
    for (const extension of GALLERY_EXTENSIONS) {
      const relativePath = `${IMAGE_ASSETS}/gallery/${person.galleryDirectory}/${base}.${extension}`;
      const found = await probeImage(relativePath);
      if (found) {
        const caption = person.galleryCaptions?.[index] || `${person.name} · Fotografia ${padded}`;
        return { src: found, caption, alt: `${person.name} — ${caption}` };
      }
    }
  }
  return null;
}

async function loadPersonGallery(person) {
  const photos = [];
  for (let index = 0; index < MAX_GALLERY_IMAGES; index += 1) {
    const photo = await findNumberedImage(person, index);
    if (!photo) break; // A sequência deve ser contínua: 01, 02, 03...
    photos.push(photo);
  }
  return photos;
}

function renderGallery() {
  if (!activePerson) return;
  const gallery = activePerson.gallery || [];
  galleryDots.replaceChildren();

  if (!gallery.length) {
    galleryImage.hidden = true;
    galleryEmpty.hidden = false;
    galleryEmptyTitle.textContent = "GALERIA EM PREPARAÇÃO";
    galleryEmptyMessage.textContent = "Adicione fotografias numeradas nesta pasta para que elas apareçam aqui:";
    galleryEmptyPath.textContent = `assets/images/gallery/${activePerson.galleryDirectory}/01.jpg`;
    galleryCaption.textContent = "Nenhuma fotografia encontrada";
    galleryCount.textContent = "00 / 00";
    galleryPrevButton.hidden = true;
    galleryNextButton.hidden = true;
    return;
  }

  galleryImage.hidden = false;
  galleryEmpty.hidden = true;
  const item = gallery[activeGalleryIndex];
  galleryImage.src = item.src;
  galleryImage.alt = item.alt;
  galleryCaption.textContent = item.caption;
  galleryCount.textContent = `${String(activeGalleryIndex + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
  galleryPrevButton.hidden = gallery.length < 2;
  galleryNextButton.hidden = gallery.length < 2;

  gallery.forEach((photo, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "gallery-dot";
    dot.setAttribute("aria-label", `Ver fotografia ${index + 1}`);
    dot.setAttribute("aria-current", String(index === activeGalleryIndex));
    dot.addEventListener("click", () => {
      activeGalleryIndex = index;
      renderGallery();
    });
    galleryDots.append(dot);
  });
}

function changeGallery(direction) {
  if (!activePerson?.gallery?.length) return;
  const length = activePerson.gallery.length;
  activeGalleryIndex = (activeGalleryIndex + direction + length) % length;
  renderGallery();
}

function renderPlaylist() {
  playlistElement.replaceChildren();
  trackCount.textContent = `${String(currentPlaylist.length).padStart(2, "0")} ÁUDIOS`;
  currentPlaylist.forEach((track, index) => {
    const li = document.createElement("li");
    li.className = "playlist-item";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "playlist-button";
    button.setAttribute("aria-current", String(index === activeTrackIndex));
    button.innerHTML = `<span class="playlist-number">${String(index + 1).padStart(2, "0")}</span><span class="playlist-name">${escapeHTML(track.title)}</span><span class="playlist-duration">OUVIR</span>`;
    button.addEventListener("click", () => loadTrack(index, true));
    li.append(button);
    playlistElement.append(li);
  });
}

function loadTrack(index, autoplay = false) {
  if (!currentPlaylist.length) return;
  activeTrackIndex = (index + currentPlaylist.length) % currentPlaylist.length;
  const track = currentPlaylist[activeTrackIndex];
  audio.pause();
  audio.src = track.file;
  audio.load();
  currentTrackTitle.textContent = track.title;
  audioStatus.textContent = "Selecione uma faixa para ouvir";
  currentTimeLabel.textContent = "00:00";
  durationLabel.textContent = "00:00";
  progress.value = 0;
  setPlayingState(false);
  renderPlaylist();
  if (autoplay) {
    audio.play().catch(() => {
      audioStatus.textContent = `Não foi possível abrir ${track.file}`;
    });
  }
}

function stopAudio() {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  setPlayingState(false);
}

function setPlayingState(isPlaying) {
  playButton.classList.toggle("is-playing", isPlaying);
  playButton.setAttribute("aria-label", isPlaying ? "Pausar áudio" : "Reproduzir áudio");
}

async function toggleAudio() {
  if (!currentPlaylist.length) return;
  if (!audio.getAttribute("src")) loadTrack(activeTrackIndex, false);
  if (audio.paused) {
    try {
      await audio.play();
    } catch (error) {
      audioStatus.textContent = `Confira o arquivo: ${currentPlaylist[activeTrackIndex].file}`;
    }
  } else {
    audio.pause();
  }
}

function openAbout() {
  drawerIsOpen = true;
  aboutBackdrop.hidden = false;
  requestAnimationFrame(() => {
    aboutBackdrop.classList.add("is-visible");
    aboutDrawer.classList.add("is-open");
    aboutDrawer.setAttribute("aria-hidden", "false");
  });
  document.body.classList.add("drawer-open");
  $("drawer-close").focus();
}

function closeAbout(restoreFocus = true) {
  if (!drawerIsOpen) return;
  drawerIsOpen = false;
  aboutBackdrop.classList.remove("is-visible");
  aboutDrawer.classList.remove("is-open");
  aboutDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  window.setTimeout(() => { aboutBackdrop.hidden = true; }, 390);
  if (restoreFocus) document.querySelector(".js-about-open")?.focus();
}

wireImageFallback(homeWordmarkImage, homeWordmarkFallback);
wireImageFallback(personWordmarkImage, personWordmarkFallback);
wireImageFallback(aboutTitleImage, aboutTitleFallback);
wireImageFallback(personTitleImage, personTitleFallback);

createNavigation(homeNav);
window.addEventListener("hashchange", setRoute);
document.querySelectorAll(".js-about-open").forEach((button) => button.addEventListener("click", openAbout));
$("drawer-close").addEventListener("click", () => closeAbout());
aboutBackdrop.addEventListener("click", () => closeAbout());
galleryPrevButton.addEventListener("click", () => changeGallery(-1));
galleryNextButton.addEventListener("click", () => changeGallery(1));
playButton.addEventListener("click", toggleAudio);
$("previous-track").addEventListener("click", () => loadTrack(activeTrackIndex - 1, true));
$("next-track").addEventListener("click", () => loadTrack(activeTrackIndex + 1, true));
progress.addEventListener("input", () => {
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  }
});
audio.addEventListener("loadedmetadata", () => {
  durationLabel.textContent = formatTime(audio.duration);
  audioStatus.textContent = "Pronto para ouvir";
});
audio.addEventListener("timeupdate", () => {
  currentTimeLabel.textContent = formatTime(audio.currentTime);
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});
audio.addEventListener("play", () => {
  setPlayingState(true);
  audioStatus.textContent = "Reproduzindo";
});
audio.addEventListener("pause", () => setPlayingState(false));
audio.addEventListener("ended", () => {
  if (activeTrackIndex < currentPlaylist.length - 1) loadTrack(activeTrackIndex + 1, true);
  else {
    setPlayingState(false);
    audioStatus.textContent = "Fim da playlist";
  }
});
audio.addEventListener("error", () => {
  if (activePerson && currentPlaylist[activeTrackIndex]) {
    audioStatus.textContent = `Adicione o arquivo: assets/sounds/${activePerson.slug}/${String(activeTrackIndex + 1).padStart(2, "0")}.mp3`;
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawerIsOpen) closeAbout();
  if (activePerson && !drawerIsOpen && event.key === "ArrowLeft") changeGallery(-1);
  if (activePerson && !drawerIsOpen && event.key === "ArrowRight") changeGallery(1);
});

setRoute();
