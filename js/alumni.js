// Code extracted from alumni-page.html inline script

const doctorStudentsContainer = document.getElementById("doctor-students");
const mastersStudentsContainer = document.getElementById("masters-students");

if (document.getElementById("doctor-select")) {
  document.getElementById("doctor-select").addEventListener("change", function() {
      const selectedYear = this.value;
      const students = doctorStudentsContainer.querySelectorAll(".student-card");

      students.forEach(student => {
          if (selectedYear === "" || student.dataset.year === selectedYear) {
              student.style.display = "block";
          } else {
              student.style.display = "none";
          }
      });
  });
}

if (document.getElementById("masters-select")) {
  document.getElementById("masters-select").addEventListener("change", function() {
      const selectedYear = this.value;
      const students = mastersStudentsContainer.querySelectorAll(".student-card");

      students.forEach(student => {
          if (selectedYear === "" || student.dataset.year === selectedYear) {
              student.style.display = "block";
          } else {
              student.style.display = "none";
          }
      });
  });
}



function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}


document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "header.html");
  loadComponent("footer-placeholder", "footer.html");
});
  
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          heading: ["var(--font-heading-name)", "serif"],
          body: ["var(--font-body-name)", "sans-serif"],
        },
        spacing: {
          base: "var(--space-base)",
        },
        borderRadius: {
          small: "var(--radius-small)",
          large: "var(--radius-large)",
        },
        boxShadow: {
          custom: "var(--shadow-custom)",
          "custom-hover": "var(--shadow-custom-hover)",
        },
        colors: {
          primary: {
            50: "#f6e9ec",
            100: "#e7c7cf",
            200: "#d6a2b0",
            300: "#c47c90",
            400: "#b45f77",
            500: "#a3425f", // Base maroon
            600: "#87344d",
            700: "#68263b",
            800: "#4c1a2a",
            900: "#300e19",
          },
          secondary: {
            50: "#fef5e7",
            100: "#fde5b8",
            200: "#fcd485",
            300: "#fbc352",
            400: "#fab52e",
            500: "#f9a80a",
            600: "#e09500",
            700: "#b87a00",
            800: "#8f5f00",
            900: "#664400",
          },
          neutral: {
            50: "#f8f9fa",
            100: "#f1f3f5",
            200: "#e9ecef",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#adb5bd",
            600: "#6c757d",
            700: "#495057",
            800: "#343a40",
            900: "#212529",
          },
          background: {
            50: "#ffffff",
            100: "#f8f9fa",
            200: "#f1f3f5",
            300: "#e9ecef",
            400: "#dee2e6",
            500: "#ced4da",
            600: "#adb5bd",
            700: "#6c757d",
            800: "#343a40",
            900: "#212529",
          },
        },
      },
    },
  };

const translations = {
  en: {
    brandNameShort: "Stellenbosch",
    brandUniversity: "University",

    labelEn: "EN",
    labelAf: "AF",

    navAbout: "About",
    navAcademics: "Academics",
    navPeople: "People",
    navNews: "News",
    navContact: "Contact",
    navLinks: "Links",
    navUndergraduate: "Undergraduate",
    navPostgraduate: "Postgraduate",
    navResearch: "Research",
    navStaff: "Staff",
    navAlumni: "Alumni",
    navStudents: "Students",
    navStellenboschUniversity: "Stellenbosch University",
    navScienceFaculty: "Science Faculty",
    navMathematicalSciences: "Mathematical Sciences",
    navInstituteOfAppliedCS: "Institute of Applied CS",
    navTelkomNSNCEO: "Telkom-NSN CEO",

    ctaApplyNow: "Apply Now",

    footerBrandFull: "Stellenbosch University",
    footerEst: "Est. 1918",
    footerDescription:
      "A leading African research university committed to excellence, innovation, and inclusive education for a better world.",

    footerAcademicsHeading: "Academics",
    footerUndergraduate: "Undergraduate",
    footerPostgraduate: "Postgraduate",
    footerResearch: "Research",
    footerFaculties: "Faculties",
    footerShortCourses: "Short Courses",

    footerAboutHeading: "About SU",
    footerAboutUs: "About Us",
    footerPeople: "People",
    footerNews: "News",
    footerCampusMap: "Campus Map",
    footerSustainability: "Sustainability",

    footerContactHeading: "Contact",
    footerAddress: "Victoria St, Stellenbosch, 7600, South Africa",
    footerPhone1: "+27 61 729 8858",
    footerPhone2: "+27 21 808 9111",
    footerEmail: "info@sun.ac.za",

    footerPrivacyPolicy: "Privacy Policy",
    footerTermsOfUse: "Terms of Use",
    footerAccessibility: "Accessibility",
    footerCopyright:
      "© 2026 Stellenbosch University & MediaBay. All rights reserved.",

    // Alumni page specific
    alumniFacultyTitle: "Alumni Faculty",
    doctoralGraduatesTitle: "Doctoral Graduates",
    mastersGraduatesTitle: "Masters Graduates",
    selectYearDoctoral: "Select Year",
    selectYearMasters: "Select Year",
  },
  af: {
    brandNameShort: "Stellenbosch",
    brandUniversity: "Universiteit",

    labelEn: "EN",
    labelAf: "AF",

    navAbout: "Oor",
    navAcademics: "Akademies",
    navPeople: "Mense",
    navNews: "Nuus",
    navContact: "Kontak",
    navLinks: "Skakels",
    navUndergraduate: "Voorgraadse",
    navPostgraduate: "Nagraadse",
    navResearch: "Navorsing",
    navStaff: "Personeel",
    navAlumni: "Alumni",
    navStudents: "Studente",
    navStellenboschUniversity: "Universiteit Stellenbosch",
    navScienceFaculty: "Wetenskapsfakulteit",
    navMathematicalSciences: "Wiskundige Wetenskappe",
    navInstituteOfAppliedCS: "Instituut vir Toegepaste Rekenaarwetenskap",
    navTelkomNSNCEO: "Telkom-NSN HUB",

    ctaApplyNow: "Doen Nou Aansoek",

    footerBrandFull: "Universiteit Stellenbosch",
    footerEst: "Gest. 1918",
    footerDescription:
      "’n Toonaangewende Afrika-navorsingsuniversiteit wat toegewy is aan uitnemendheid, innovasie en inklusiewe onderrig vir ’n beter wêreld.",

    footerAcademicsHeading: "Akademies",
    footerUndergraduate: "Voorgraadse",
    footerPostgraduate: "Nagraadse",
    footerResearch: "Navorsing",
    footerFaculties: "Fakulteite",
    footerShortCourses: "Kort Kursusse",

    footerAboutHeading: "Oor SU",
    footerAboutUs: "Oor Ons",
    footerPeople: "Mense",
    footerNews: "Nuus",
    footerCampusMap: "Kampuskaart",
    footerSustainability: "Volhoubaarheid",

    footerContactHeading: "Kontak",
    footerAddress: "Victoria Straat, Stellenbosch, 7600, Suid-Afrika",
    footerPhone1: "+27 61 729 8858",
    footerPhone2: "+27 21 808 9111",
    footerEmail: "info@sun.ac.za",

    footerPrivacyPolicy: "Privaatheidsbeleid",
    footerTermsOfUse: "Gebruiksvoorwaardes",
    footerAccessibility: "Toeganklikheid",
    footerCopyright:
      "© 2026 Universiteit Stellenbosch & MediaBay. Alle regte voorbehou.",

    // Alumni page specific
    alumniFacultyTitle: "Alumni-fakulteit",
    doctoralGraduatesTitle: "Doktorale Gegradueerdes",
    mastersGraduatesTitle: "Meestersgegradueerdes",
    selectYearDoctoral: "Kies Jaar",
    selectYearMasters: "Kies Jaar",
  },
};

const DEFAULT_LANG = "en";
const STORAGE_KEY = "siteLanguage";

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (e) {
    // ignore
  }
  return DEFAULT_LANG;
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // ignore
  }
}

let mastersTranslations = null;
let mastersTranslationsLoaded = false;

function loadMastersTranslations() {
  if (mastersTranslationsLoaded) {
    return Promise.resolve(mastersTranslations);
  }
  return fetch("i18n-alumni-masters.json")
    .then((res) => res.json())
    .then((data) => {
      mastersTranslations = data;
      mastersTranslationsLoaded = true;
      return data;
    })
    .catch(() => {
      mastersTranslationsLoaded = true;
      mastersTranslations = null;
      return null;
    });
}

function applyMastersLanguage(lang) {
  if (!mastersTranslations || !mastersTranslations[lang]) return;
  const langPack = mastersTranslations[lang];
  document.querySelectorAll('[data-key^="mastersThesis"]').forEach((el) => {
    const key = el.getAttribute("data-key");
    const value = langPack[key];
    if (typeof value === "string") {
      el.textContent = value;
    }
  });
}

function applyLanguage(lang) {
  const langPack = translations[lang] || translations[DEFAULT_LANG];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    const value = langPack[key];
    if (typeof value === "string") {
      el.textContent = value;
    }
  });
}

function syncToggleWithLanguage(lang) {
  const toggle = document.getElementById("languageToggle");
  if (!toggle) return;
  toggle.checked = lang === "af";
}

function initLanguageToggle() {
  const currentLang = getInitialLanguage();
  applyLanguage(currentLang);
  loadMastersTranslations().then(() => {
    applyMastersLanguage(currentLang);
  });
  syncToggleWithLanguage(currentLang);

  const toggle = document.getElementById("languageToggle");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    const newLang = toggle.checked ? "af" : "en";
    applyLanguage(newLang);
    loadMastersTranslations().then(() => {
      applyMastersLanguage(newLang);
    });
    saveLanguage(newLang);
  });
}

document.addEventListener("DOMContentLoaded", initLanguageToggle);
