document.getElementById("year").textContent = new Date().getFullYear();

const i18n = {
  pt: {
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.skills": "Skills",
    "nav.contact": "Contato",
    "hero.eyebrow": "Análise de Dados · BI · Produtos de Dados",
    "hero.sub": "Cinco anos transformando dados públicos e empresariais em análises, produtos e decisões. De estagiário a Product Owner na Driva, hoje pesquisador na UTFPR.",
    "hero.cta_projects": "Ver projetos",
    "hero.location": "Curitiba, PR — Brasil",
    "hero.stat1": "anos de experiência",
    "hero.stat2": "obras catalogadas (Cine Brasilis)",
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
    "proj.cb.desc": 'Plataforma de descoberta do cinema brasileiro. ~26 mil obras (ANCINE + TMDB), mapa interativo por região e recomendação por NLP (embeddings BERT multilíngue + similaridade de cosseno). Publicado em domínio próprio, com reportagem no <a href="https://www.metropoles.com/entretenimento/cinema/alunos-de-federal-criam-site-com-25-mil-sugestoes-do-cinema-brasileiro" target="_blank" rel="noopener">Metrópoles</a>.',
    "proj.gid.desc": "Investigação sobre a estagnação econômica alemã (2019–2025). Pipeline reprodutível em cinco fontes públicas, nowcasting com ElasticNetCV vs. baseline AR(1) e atribuição de fatores com XGBoost + SHAP.",
    "proj.edu.desc": "Impacto do ensino remoto na educação básica (2019–2024) a partir de SAEB/INEP, ENEM, Censo Escolar e INSE. Clusterização socioeconômica com KMeans e modelo contrafactual com RandomForest para medir alargamento de gaps.",
    "proj.oasis.desc": "Aplicação web local-first e estática para acompanhamento de matriz curricular e validação de pré-requisitos em cinco cursos de engenharia. Parsing de PDFs oficiais com pdfplumber.",
    "proj.bt.desc": "Aplicação desktop em Python para download e conversão de mídia, com build e distribuição automatizados por GitHub Actions, PyInstaller e Inno Setup.",
    "proj.more": "Ver todos os repositórios",
    "skills.title": "Competências",
    "skills.data.title": "Análise de Dados",
    "skills.data.desc": "Análise exploratória, séries temporais, testes de hipótese, regressão linear e logística, decomposição de gaps, análise contrafactual e de resíduos.",
    "skills.eng.title": "Engenharia de Dados",
    "skills.eng.desc": "Python (Pandas, NumPy, PyArrow/Parquet), SQL, NoSQL, APIs públicas, web scraping, pipelines reprodutíveis, pytest.",
    "skills.ml.title": "Machine Learning",
    "skills.ml.desc": "scikit-learn, XGBoost, SHAP, statsmodels, sentence-transformers / embeddings.",
    "skills.dev.title": "Desenvolvimento",
    "skills.dev.desc": "HTML/CSS/JS, TypeScript, React, Tailwind, Git/GitHub, GitHub Actions.",
    "skills.bi.title": "BI & Visualização",
    "skills.bi.desc": "Power BI, Excel avançado, Matplotlib, storytelling de dados.",
    "skills.lang.title": "Idiomas",
    "skills.lang.desc": "Português (nativo) · Inglês C2 (Cambridge Proficiency) · Espanhol intermediário",
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
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.eyebrow": "Data Analysis · BI · Data Products",
    "hero.sub": "Five years turning public and business data into analyses, products and decisions. From intern to Product Owner at Driva, now a researcher at UTFPR.",
    "hero.cta_projects": "View projects",
    "hero.location": "Curitiba, PR — Brazil",
    "hero.stat1": "years of experience",
    "hero.stat2": "titles catalogued (Cine Brasilis)",
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
    "proj.cb.desc": 'Discovery platform for Brazilian cinema. ~26,000 titles (ANCINE + TMDB), an interactive regional map and NLP-based recommendations (multilingual BERT embeddings + cosine similarity). Published on its own domain, featured in <a href="https://www.metropoles.com/entretenimento/cinema/alunos-de-federal-criam-site-com-25-mil-sugestoes-do-cinema-brasileiro" target="_blank" rel="noopener">Metrópoles</a>.',
    "proj.gid.desc": "Investigation into Germany's economic stagnation (2019–2025). Reproducible pipeline across five public sources, GDP nowcasting with ElasticNetCV vs. an AR(1) baseline, and factor attribution with XGBoost + SHAP.",
    "proj.edu.desc": "Impact of remote schooling on basic education (2019–2024) using SAEB/INEP, ENEM, School Census and INSE data. Socioeconomic clustering with KMeans and a counterfactual RandomForest model to measure widening gaps.",
    "proj.oasis.desc": "Local-first, static web app for tracking curriculum requirements and prerequisite validation across five engineering programs. Official PDF parsing with pdfplumber.",
    "proj.bt.desc": "Python desktop application for media download and conversion, with automated build and distribution via GitHub Actions, PyInstaller and Inno Setup.",
    "proj.more": "View all repositories",
    "skills.title": "Skills",
    "skills.data.title": "Data Analysis",
    "skills.data.desc": "Exploratory analysis, time series, hypothesis testing, linear and logistic regression, gap decomposition, counterfactual and residual analysis.",
    "skills.eng.title": "Data Engineering",
    "skills.eng.desc": "Python (Pandas, NumPy, PyArrow/Parquet), SQL, NoSQL, public APIs, web scraping, reproducible pipelines, pytest.",
    "skills.ml.title": "Machine Learning",
    "skills.ml.desc": "scikit-learn, XGBoost, SHAP, statsmodels, sentence-transformers / embeddings.",
    "skills.dev.title": "Development",
    "skills.dev.desc": "HTML/CSS/JS, TypeScript, React, Tailwind, Git/GitHub, GitHub Actions.",
    "skills.bi.title": "BI & Visualization",
    "skills.bi.desc": "Power BI, advanced Excel, Matplotlib, data storytelling.",
    "skills.lang.title": "Languages",
    "skills.lang.desc": "Portuguese (native) · English C2 (Cambridge Proficiency) · Spanish (intermediate)",
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

let currentLang = "pt";
try {
  currentLang = localStorage.getItem("lang") || "pt";
} catch (e) {}
applyLang(currentLang);

let currentTheme = null;
try {
  currentTheme = localStorage.getItem("theme");
} catch (e) {}
if (currentTheme) applyTheme(currentTheme);

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  applyLang(currentLang);
});

themeBtn.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark"
    || (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  applyTheme(isDark ? "light" : "dark");
});

const revealTargets = document.querySelectorAll(
  ".section, .tl-item, .project-card, .skill-group"
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
