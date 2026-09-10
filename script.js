document.getElementById("year").textContent = new Date().getFullYear();

const i18n = {
  pt: {
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.overview": "Panorama",
    "nav.skills": "Ferramentas",
    "nav.contact": "Contato",

    "hero.eyebrow": "Análise de Dados · BI · Produtos de Dados",
    "hero.sub": "Cinco anos transformando dados públicos e empresariais em análises, produtos e decisões. De estagiário a Product Owner na Driva, hoje pesquisador na UTFPR.",
    "hero.cta_projects": "Ver projetos",
    "hero.location": "Curitiba, PR — Brasil",
    "hero.stack": "Trabalho com",

    "about.title": "Sobre",
    "about.p1": "Analista de Dados com cinco anos de experiência em BI e produtos de dados, combinando análise, pipelines reprodutíveis e comunicação com áreas de negócio.",
    "about.p2": "Evoluiu de Estagiário de Inteligência de Mercado a Product Owner e Analista de Dados na Driva Tecnologia. Hoje conduz pesquisas institucionais no Observatório Beatriz Nascimento (UTFPR) e mantém projetos autorais de dados públicos, como o Cine Brasilis, o EduData e o Germany in Data.",
    "about.p3": "Atua com Python, SQL, Power BI e Machine Learning aplicado, priorizando análise de dados como eixo central e desenvolvimento como capacidade de construir pipelines, produtos analíticos e interfaces.",

    "exp.title": "Experiência",
    "exp.obn.role": "Bolsista da Área de Dados",
    "exp.obn.desc": "Análise de dados institucionais sobre desigualdades socioeconômicas, de gênero e raciais na UTFPR, incluindo o efeito de auxílios financeiros sobre permanência e desempenho. Conduziu estudo sobre evasão no Campus Toledo e desenvolve análise jurisprudencial sobre bancas de heteroidentificação.",
    "exp.cb.role": "Criador e Mantenedor",
    "exp.cb.desc": "Plataforma de valorização e descoberta do cinema brasileiro, com reportagem no Metrópoles. Design, arquitetura e implementação web, base de ~26 mil obras (ANCINE + TMDB) e sistema de recomendação com embeddings BERT multilíngue.",
    "exp.gb.role": "Diretor de Gestão · equipe de competição de drones",
    "exp.gb.desc": "Coordenação de viagens para competições, orçamento e prestação de contas, captação de recursos e gestão de bem-estar da equipe.",
    "exp.hi.role": "Assessor de Gestão de Pessoas",
    "exp.hi.desc": "Ações culturais e organizacionais, capacitação sobre uso de dados para vendas no Curitiba Júnior 2025.2 e treinamento interno de Introdução a Business Intelligence.",
    "exp.driva.role": "Estagiário de Inteligência de Mercado → Product Owner → Analista de Dados",
    "exp.driva.desc": "Desenvolveu e conduziu a evolução do produto de Dados Jurídicos (JUDI). Como Product Owner, geriu o produto e supervisionou equipe de duas pessoas. Estruturação de dados e Business Intelligence em Power BI, com contato direto com clientes nacionais e internacionais.",

    "proj.title": "Projetos",
    "proj.cb.kind": "Plataforma web · Dados públicos · NLP",
    "proj.cb.desc": 'Plataforma de descoberta do cinema brasileiro. ~26 mil obras (ANCINE + TMDB), mapa interativo por região e recomendação por NLP (embeddings BERT multilíngue + similaridade de cosseno). Publicado em domínio próprio, com reportagem no <a href="https://www.metropoles.com/entretenimento/cinema/alunos-de-federal-criam-site-com-25-mil-sugestoes-do-cinema-brasileiro" target="_blank" rel="noopener">Metrópoles</a>.',
    "proj.fig.kind": "Jogo diário bilíngue · Produto web",
    "proj.fig.desc": "Jogo diário de adivinhação de figuras históricas, em português e inglês, publicado em domínio próprio. Catálogo editorial de 500 fichas com retratos, calendário de desafios anteriores, pipeline de curadoria e validação de conteúdo, testes end to end e publicação por canal de release.",
    "proj.gid.kind": "Análise econômica · Machine Learning",
    "proj.gid.desc": "Investigação sobre a estagnação econômica alemã (2019–2025). Pipeline reprodutível em cinco fontes públicas, nowcasting com ElasticNetCV vs. baseline AR(1) e atribuição de fatores com XGBoost + SHAP.",
    "proj.edu.kind": "Microdados públicos · Análise contrafactual",
    "proj.edu.desc": "Impacto do ensino remoto na educação básica (2019–2024) a partir de SAEB/INEP, ENEM, Censo Escolar e INSE. Clusterização socioeconômica com KMeans e modelo contrafactual com RandomForest para medir alargamento de gaps.",
    "proj.oasis.kind": "Aplicação web local-first",
    "proj.oasis.desc": "Aplicação web local-first e estática para acompanhamento de matriz curricular e validação de pré-requisitos em cinco cursos de engenharia. Parsing de PDFs oficiais com pdfplumber.",
    "proj.bt.kind": "Aplicação desktop · Build automatizado",
    "proj.bt.desc": "Aplicação desktop em Python para download e conversão de mídia, com build e distribuição automatizados por GitHub Actions, PyInstaller e Inno Setup.",
    "proj.more": "Ver todos os repositórios",

    "chart.title": "Panorama de projetos",
    "chart.lede": "Distribuição dos projetos pessoais e acadêmicos por natureza do trabalho. O eixo profissional é a análise de dados, e o restante mostra a amplitude de contextos em que os projetos foram construídos.",
    "chart.center": "projetos",
    "chart.cat.data": "Dados e análise",
    "chart.cat.web": "Web e produtos",
    "chart.cat.academic": "Acadêmicos",
    "chart.cat.apps": "Aplicações e automação",
    "chart.cat.embedded": "Embarcados e experimentos",

    "skills.title": "Competências e ferramentas",
    "skills.data.title": "Análise de Dados",
    "skills.data.desc": "Análise exploratória, séries temporais, testes de hipótese, regressão linear e logística, decomposição de gaps, análise contrafactual e de resíduos.",
    "skills.eng.title": "Engenharia de Dados",
    "skills.eng.desc": "Coleta em APIs públicas (REST, JSON-stat, SDMX), web scraping, pipelines reprodutíveis, versionamento de dados e testes automatizados.",
    "skills.ml.title": "Machine Learning",
    "skills.ml.desc": "Clusterização, modelos contrafactuais, regularização, validação em janela expansiva, atribuição de fatores e embeddings para recomendação.",
    "skills.dev.title": "Desenvolvimento",
    "skills.dev.desc": "Interfaces web estáticas e local-first, aplicações desktop, automação de build e publicação contínua.",
    "skills.bi.title": "BI e Comunicação",
    "skills.bi.desc": "Painéis e relatórios analíticos, storytelling de dados e tradução de análise técnica para áreas de negócio.",
    "skills.lang.title": "Idiomas",
    "skills.lang.desc": "Português (nativo) · Inglês C2 (Cambridge Proficiency) · Espanhol intermediário",

    "tools.lang": "Linguagens",
    "tools.data": "Dados e Machine Learning",
    "tools.bi": "BI e Visualização",
    "tools.web": "Web e Frameworks",
    "tools.dev": "Versionamento e Automação",
    "tools.ai": "Ferramentas de IA",

    "contact.title": "Contato",
    "contact.lede": "Aberto a conversas sobre dados, produtos e colaborações.",
    "footer.built": "Feito com HTML, CSS e JS — hospedado no GitHub Pages",

    "common.present": "atual",
    "date.jun": "Jun.",
    "date.jul": "Jul.",
    "date.fev": "Fev.",
    "date.set": "Set.",
    "date.nov": "Nov.",
  },

  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.overview": "Overview",
    "nav.skills": "Tools",
    "nav.contact": "Contact",

    "hero.eyebrow": "Data Analysis · BI · Data Products",
    "hero.sub": "Five years turning public and business data into analyses, products and decisions. From intern to Product Owner at Driva, now a researcher at UTFPR.",
    "hero.cta_projects": "View projects",
    "hero.location": "Curitiba, PR — Brazil",
    "hero.stack": "I work with",

    "about.title": "About",
    "about.p1": "Data Analyst with five years of experience in BI and data products, combining analysis, reproducible pipelines and communication with business teams.",
    "about.p2": "Progressed from Market Intelligence Intern to Product Owner and Data Analyst at Driva Tecnologia. Now conducts institutional research at the Beatriz Nascimento Observatory (UTFPR) and maintains independent public-data projects such as Cine Brasilis, EduData and Germany in Data.",
    "about.p3": "Works with Python, SQL, Power BI and applied Machine Learning, treating data analysis as the core focus and development as a capability for building pipelines, analytical products and interfaces.",

    "exp.title": "Experience",
    "exp.obn.role": "Data Research Fellow",
    "exp.obn.desc": "Analysis of institutional data on socioeconomic, gender and racial inequalities at UTFPR, including the effect of financial aid on student retention and performance. Led a study on dropout rates at Toledo Campus and develops case-law analysis on racial self-identification review boards.",
    "exp.cb.role": "Creator and Maintainer",
    "exp.cb.desc": "Discovery platform for Brazilian cinema, featured in Metrópoles. Design, architecture and web implementation, a catalogue of ~26,000 titles (ANCINE + TMDB) and a recommendation system using multilingual BERT embeddings.",
    "exp.gb.role": "Management Director · drone competition team",
    "exp.gb.desc": "Coordination of team travel for competitions, budget and accountability, fundraising and team well-being management.",
    "exp.hi.role": "People Management Advisor",
    "exp.hi.desc": "Cultural and organizational initiatives, training on data-driven sales at Curitiba Júnior 2025.2, and internal Introduction to Business Intelligence training.",
    "exp.driva.role": "Market Intelligence Intern → Product Owner → Data Analyst",
    "exp.driva.desc": "Developed and led the evolution of the Legal Data product (JUDI). As Product Owner, managed the product and supervised a two-person team. Data structuring and Business Intelligence in Power BI, with direct contact with national and international clients.",

    "proj.title": "Projects",
    "proj.cb.kind": "Web platform · Public data · NLP",
    "proj.cb.desc": 'Discovery platform for Brazilian cinema. ~26,000 titles (ANCINE + TMDB), an interactive regional map and NLP-based recommendations (multilingual BERT embeddings + cosine similarity). Published on its own domain, featured in <a href="https://www.metropoles.com/entretenimento/cinema/alunos-de-federal-criam-site-com-25-mil-sugestoes-do-cinema-brasileiro" target="_blank" rel="noopener">Metrópoles</a>.',
    "proj.fig.kind": "Bilingual daily game · Web product",
    "proj.fig.desc": "Daily guessing game about historical figures, in Portuguese and English, published on its own domain. Editorial catalogue of 500 entries with portraits, a calendar of past challenges, a curation and content validation pipeline, end to end tests and release channel publishing.",
    "proj.gid.kind": "Economic analysis · Machine Learning",
    "proj.gid.desc": "Investigation into Germany's economic stagnation (2019–2025). Reproducible pipeline across five public sources, GDP nowcasting with ElasticNetCV vs. an AR(1) baseline, and factor attribution with XGBoost + SHAP.",
    "proj.edu.kind": "Public microdata · Counterfactual analysis",
    "proj.edu.desc": "Impact of remote schooling on basic education (2019–2024) using SAEB/INEP, ENEM, School Census and INSE data. Socioeconomic clustering with KMeans and a counterfactual RandomForest model to measure widening gaps.",
    "proj.oasis.kind": "Local-first web application",
    "proj.oasis.desc": "Local-first, static web app for tracking curriculum requirements and prerequisite validation across five engineering programs. Official PDF parsing with pdfplumber.",
    "proj.bt.kind": "Desktop application · Automated builds",
    "proj.bt.desc": "Python desktop application for media download and conversion, with automated build and distribution via GitHub Actions, PyInstaller and Inno Setup.",
    "proj.more": "View all repositories",

    "chart.title": "Project overview",
    "chart.lede": "Distribution of personal and academic projects by the nature of the work. The professional focus is data analysis, and the rest shows the range of contexts these projects were built in.",
    "chart.center": "projects",
    "chart.cat.data": "Data and analysis",
    "chart.cat.web": "Web and products",
    "chart.cat.academic": "Academic",
    "chart.cat.apps": "Applications and automation",
    "chart.cat.embedded": "Embedded and experiments",

    "skills.title": "Skills and tools",
    "skills.data.title": "Data Analysis",
    "skills.data.desc": "Exploratory analysis, time series, hypothesis testing, linear and logistic regression, gap decomposition, counterfactual and residual analysis.",
    "skills.eng.title": "Data Engineering",
    "skills.eng.desc": "Collection from public APIs (REST, JSON-stat, SDMX), web scraping, reproducible pipelines, data versioning and automated tests.",
    "skills.ml.title": "Machine Learning",
    "skills.ml.desc": "Clustering, counterfactual models, regularization, expanding window validation, factor attribution and embeddings for recommendation.",
    "skills.dev.title": "Development",
    "skills.dev.desc": "Static and local-first web interfaces, desktop applications, build automation and continuous publishing.",
    "skills.bi.title": "BI and Communication",
    "skills.bi.desc": "Dashboards and analytical reports, data storytelling and translating technical analysis for business teams.",
    "skills.lang.title": "Languages",
    "skills.lang.desc": "Portuguese (native) · English C2 (Cambridge Proficiency) · Spanish (intermediate)",

    "tools.lang": "Languages",
    "tools.data": "Data and Machine Learning",
    "tools.bi": "BI and Visualization",
    "tools.web": "Web and Frameworks",
    "tools.dev": "Version control and Automation",
    "tools.ai": "AI tooling",

    "contact.title": "Contact",
    "contact.lede": "Open to conversations about data, products and collaborations.",
    "footer.built": "Built with HTML, CSS and JS — hosted on GitHub Pages",

    "common.present": "present",
    "date.jun": "Jun.",
    "date.jul": "Jul.",
    "date.fev": "Feb.",
    "date.set": "Sep.",
    "date.nov": "Nov.",
  },
};

const root = document.documentElement;
const langBtn = document.getElementById("lang-toggle");
const themeBtn = document.getElementById("theme-toggle");

/* ---------- project mix chart ---------- */

const projectMix = [
  { key: "data", count: 4, color: "var(--seg-1)" },
  { key: "web", count: 5, color: "var(--seg-2)" },
  { key: "academic", count: 5, color: "var(--seg-3)" },
  { key: "apps", count: 3, color: "var(--seg-4)" },
  { key: "embedded", count: 3, color: "var(--seg-5)" },
];

function renderChart() {
  const svg = document.querySelector(".donut");
  const group = svg?.querySelector(".donut-segments");
  const legend = document.querySelector(".chart-legend");
  if (!group || !legend) return;

  const total = projectMix.reduce((sum, item) => sum + item.count, 0);
  const svgNS = "http://www.w3.org/2000/svg";
  let cumulative = 0;

  projectMix.forEach((item, index) => {
    const pct = (item.count / total) * 100;

    const seg = document.createElementNS(svgNS, "circle");
    seg.setAttribute("class", "donut-seg");
    seg.setAttribute("cx", "21");
    seg.setAttribute("cy", "21");
    seg.setAttribute("r", "15.9155");
    seg.setAttribute("stroke", item.color);
    seg.setAttribute("stroke-dasharray", `${pct} ${100 - pct}`);
    seg.setAttribute("stroke-dashoffset", `${25 - cumulative}`);
    group.appendChild(seg);

    const row = document.createElement("li");
    row.className = "legend-item";
    row.innerHTML = `
      <span class="legend-dot" style="background:${item.color}"></span>
      <span class="legend-name" data-i18n="chart.cat.${item.key}"></span>
      <span class="legend-count">${item.count}</span>
      <span class="legend-pct">${pct.toFixed(0)}%</span>
    `;
    legend.appendChild(row);

    const activate = () => {
      svg.classList.add("has-active");
      seg.classList.add("is-active");
    };
    const deactivate = () => {
      svg.classList.remove("has-active");
      seg.classList.remove("is-active");
    };
    row.addEventListener("mouseenter", activate);
    row.addEventListener("mouseleave", deactivate);
    seg.addEventListener("mouseenter", activate);
    seg.addEventListener("mouseleave", deactivate);

    cumulative += pct;
  });

  const centerNum = document.querySelector(".donut-num");
  if (centerNum) centerNum.textContent = String(total);
}

/* ---------- language and theme ---------- */

function applyLang(lang) {
  root.setAttribute("data-lang", lang);
  root.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang]?.[key];
    if (value !== undefined) el.innerHTML = value;
  });
  langBtn.textContent = lang === "pt" ? "EN" : "PT";
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
}

renderChart();

let currentLang = "pt";
try {
  currentLang = localStorage.getItem("lang") || "pt";
} catch (e) {}
applyLang(currentLang);

let storedTheme = null;
try {
  storedTheme = localStorage.getItem("theme");
} catch (e) {}
if (storedTheme) applyTheme(storedTheme);

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  applyLang(currentLang);
});

themeBtn.addEventListener("click", () => {
  const isDark =
    root.getAttribute("data-theme") === "dark" ||
    (!root.getAttribute("data-theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  applyTheme(isDark ? "light" : "dark");
});

/* ---------- scroll reveal ---------- */

const revealTargets = document.querySelectorAll(
  ".section, .tl-item, .project-card, .skill-group, .tool-group, .chart-block"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((el) => el.classList.add("in-view"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => observer.observe(el));
}
