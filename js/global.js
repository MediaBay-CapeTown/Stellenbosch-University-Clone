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

          // Staff page specific
          sectionAcademicStaffTitle: "Academic Staff",
          sectionAdministrativeStaffTitle: "Administrative Staff",

          staffRoleGeorgeAzzopardi: "Associate Professor Extraordinary",
          staffInfoGeorgeAOffice: "Office: Remote",
          staffResearchGeorgeAzzopardi:
            "Brain-inspired computing, Computer Vision, Pattern Recognition, Machine Learning",

          staffRoleWillemBester: "Junior Lecturer",
          staffInfoWillemBOffice: "Office: A508",
          staffResearchWillemBester:
            "Software Engineering, Formal Methods, Formal Language and Automata Theory",

          staffRoleJudithBishop: "Professor Extraordinary",
          staffResearchJudithBishop:
            "Programming languages, software engineering, mobile computing, open source software",

          staffRoleLoekCleophas: "Associate Professor Extraordinary",
          staffInfoLoekCleophasOffice: "Office: Remote",
          staffResearchLoekCleophas:
            "Model-driven engineering, Digital Twins, Algorithm + model variability",

          staffRoleMarcelDunaiski: "Senior Lecturer",
          staffInfoMarcelDunaiskiOffice: "Office: A519",
          staffResearchMarcelDunaiski:
            "Data Science, Informetrics, Scientometrics",

          staffRoleDavidEffendi: "Research Fellow",
          staffInfoDavidEffendiOffice: "Office: Remote",
          staffResearchDavidEffendi: "Program analysis, static analysis",

          staffRoleAndriesEngelbrecht: "Professor",
          staffInfoAndriesEngelbrechtOffice:
            "Office: B2023, Industrial Engineering Building",
          staffResearchAndriesEngelbrecht:
            "Swarm intelligence, Evolutionary computation, Hyper-heuristics, Neural networks, Machine learning, Data analytics, Optimization",

          staffRoleBerndFischer: "Professor",
          staffInfoBerndFischerOffice: "Office: A513",
          staffResearchBerndFischer:
            "Software engineering, formal methods, program analysis, program generation, program verification, artificial intelligence",

          staffRoleTrienkoGrobler: "Lecturer",
          staffInfoTrienkoGroblerOffice: "Office: A510",
          staffResearchTrienkoGrobler:
            "Machine learning, remote sensing, radio interferometry, coding theory",

          staffRoleMcEloryHoffmann: "Senior Lecturer Extraordinary",
          staffInfoMcEloryHoffmannOffice: "Office: Remote",
          staffResearchMcEloryHoffmann:
            "Computer vision, machine learning, smart cameras",

          staffRoleCorneliaInggs: "Senior Lecturer",
          staffInfoCorneliaInggsOffice: "Office: A509",
          staffResearchCorneliaInggs:
            "Formal methods, model checking, concurrency",

          staffRoleMariaKeet: "Professor Extraordinary",
          staffInfoMariaKeetOffice: "Office: Remote",
          staffResearchMariaKeet:
            "Ontology, Semantic Web, Conceptual Modeling, Knowledge Representation and reasoning",

          staffRoleSteveKroon: "Associate Professor",
          staffInfoSteveKroonOffice: "Office: A515",
          staffResearchSteveKroon:
            "Artificial intelligence/machine learning, statistical learning theory",

          staffRoleMkhuseliNgxande: "Lecturer",
          staffInfoMkhuseliNgxandeOffice: "Office: A518",
          staffResearchMkhuseliNgxande:
            "Machine learning, computer vision, bioinformatics",

          staffRoleFrancescoPetruccione: "Visiting Academic",
          staffInfoFrancescoPetruccioneOffice: "Office: MIV 1003",
          staffResearchFrancescoPetruccione:
            "Interim director of NITheCS and Professor Extraordinary in Physics",

          staffRoleLaurettePretorius: "Associate Professor Extraordinary",
          staffResearchLaurettePretorius:
            "Multilingual NLP, Semantic computing, Ontology development, Machine translation",

          staffRoleMoeketsiRaselimo: "Lecturer Extraordinary",
          staffInfoMoeketsiRaselimoOffice: "Office: Remote",
          staffResearchMoeketsiRaselimo:
            "Programming Languages, Software Testing, Fuzzing",

          staffRoleGavinRens: "Lecturer",
          staffInfoGavinRensOffice: "Office: A508",
          staffResearchGavinRens:
            "Cognitive Robotics, Reinforcement learning",

          staffRoleWilliamTucker: "Professor",
          staffInfoWilliamTuckerOffice: "Office: A522",
          staffResearchWilliamTucker:
            "Computer networks, HCI, ethical computing",

          staffRoleBrinkVanDerMerwe: "Professor & Head of Division",
          staffInfoBrinkVanDerMerweOffice: "Office: A511",
          staffResearchBrinkVanDerMerwe: "Tree automata, grammar learning",

          staffRoleLynetteVanZijl: "Professor",
          staffInfoLynetteVanZijlOffice: "Office: A520",
          staffResearchLynetteVanZijl:
            "Automata implementation, assistive technologies",

          staffRoleWolfTiloBalke: "Visiting Academic",
          staffResearchWolfTiloBalke:
            "Query Processing, Personalization, Distributed Retrieval",

          staffRoleWillemVisser: "Part-time Professor",
          staffInfoWillemVisserOffice: "Office: A517",
          staffResearchWillemVisser:
            "Software engineering, symbolic execution, model checking",

          staffRoleFabianYamaguchi: "Professor Extraordinary",
          staffResearchFabianYamaguchi:
            "Computer security, Program analysis, Machine learning",

          staffInfoEmileDreyerOffice: "Office: A507",
          staffRoleGaynorFortuin: "Administrative Officer",
          staffInfoGaynorFortuinOffice: "Office: A514",
          staffRoleDerrickStephanus: "Assistant",
          staffInfoDerrickStephanusOffice: "Office: A507",
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

          // Staff page specific
          sectionAcademicStaffTitle: "Akademiese Personeel",
          sectionAdministrativeStaffTitle: "Administratiewe Personeel",

          staffRoleGeorgeAzzopardi: "Buitengewone Medeprofessor",
          staffInfoGeorgeAOffice: "Kantoor: Afgeleë",
          staffResearchGeorgeAzzopardi:
            "Brein-geïnspireerde berekening, rekenaarvisie, patroneherkenning, masjienleer",

          staffRoleWillemBester: "Junior Lektor",
          staffInfoWillemBOffice: "Kantoor: A508",
          staffResearchWillemBester:
            "Sagteware-ingenieurswese, formele metodes, formele tale en automatatheorie",

          staffRoleJudithBishop: "Buitengewone Professor",
          staffResearchJudithBishop:
            "Programmeer tale, sagteware-ingenieurswese, mobiele rekenaars, oopbronsagteware",

          staffRoleLoekCleophas: "Buitengewone Medeprofessor",
          staffInfoLoekCleophasOffice: "Kantoor: Afgeleë",
          staffResearchLoekCleophas:
            "Modelgedrewe ingenieurswese, digitale tweelinge, algoritme- en modelvariasie",

          staffRoleMarcelDunaiski: "Senior Lektor",
          staffInfoMarcelDunaiskiOffice: "Kantoor: A519",
          staffResearchMarcelDunaiski:
            "Datawetenskap, informetrie, scientometrie",

          staffRoleDavidEffendi: "Navorsingsgenoot",
          staffInfoDavidEffendiOffice: "Kantoor: Afgeleë",
          staffResearchDavidEffendi: "Programontleding, statiese ontleding",

          staffRoleAndriesEngelbrecht: "Professor",
          staffInfoAndriesEngelbrechtOffice:
            "Kantoor: B2023, Bedryfsingenieurswese-gebou",
          staffResearchAndriesEngelbrecht:
            "Swermintelligensie, evolusionêre berekening, hiper-heuristieke, neurale netwerke, masjienleer, data-analise, optimering",

          staffRoleBerndFischer: "Professor",
          staffInfoBerndFischerOffice: "Kantoor: A513",
          staffResearchBerndFischer:
            "Sagteware-ingenieurswese, formele metodes, programontleding, programgenerering, programverifikasie, kunsmatige intelligensie",

          staffRoleTrienkoGrobler: "Lektor",
          staffInfoTrienkoGroblerOffice: "Kantoor: A510",
          staffResearchTrienkoGrobler:
            "Masjienleer, afstandwaarneming, radio-interferometrie, koderingsteorie",

          staffRoleMcEloryHoffmann: "Senior Lektor (Buitengewoon)",
          staffInfoMcEloryHoffmannOffice: "Kantoor: Afgeleë",
          staffResearchMcEloryHoffmann:
            "Rekenaarvisie, masjienleer, slim kameras",

          staffRoleCorneliaInggs: "Senior Lektor",
          staffInfoCorneliaInggsOffice: "Kantoor: A509",
          staffResearchCorneliaInggs:
            "Formele metodes, modelkontrole, gelyktydigheid",

          staffRoleMariaKeet: "Buitengewone Professor",
          staffInfoMariaKeetOffice: "Kantoor: Afgeleë",
          staffResearchMariaKeet:
            "Ontologie, Semantiese Web, konseptuele modellering, kennisvoorstelling en -afleiding",

          staffRoleSteveKroon: "Medeprofessor",
          staffInfoSteveKroonOffice: "Kantoor: A515",
          staffResearchSteveKroon:
            "Kunsmatige intelligensie/masjienleer, statistiese leertheorie",

          staffRoleMkhuseliNgxande: "Lektor",
          staffInfoMkhuseliNgxandeOffice: "Kantoor: A518",
          staffResearchMkhuseliNgxande:
            "Masjienleer, rekenaarvisie, bioinformatika",

          staffRoleFrancescoPetruccione: "Besoekende Akademikus",
          staffInfoFrancescoPetruccioneOffice: "Kantoor: MIV 1003",
          staffResearchFrancescoPetruccione:
            "Waarnemende direkteur van NITheCS en buitengewone professor in Fisika",

          staffRoleLaurettePretorius: "Buitengewone Medeprofessor",
          staffResearchLaurettePretorius:
            "Meertalige NVT, semantiese rekenaarwese, ontologie-ontwikkeling, masjienvertaling",

          staffRoleMoeketsiRaselimo: "Buitengewone Lektor",
          staffInfoMoeketsiRaselimoOffice: "Kantoor: Afgeleë",
          staffResearchMoeketsiRaselimo:
            "Programmeer tale, sagtoetsing, fuzzing",

          staffRoleGavinRens: "Lektor",
          staffInfoGavinRensOffice: "Kantoor: A508",
          staffResearchGavinRens:
            "Kognitiewe robotika, versterkingsleer",

          staffRoleWilliamTucker: "Professor",
          staffInfoWilliamTuckerOffice: "Kantoor: A522",
          staffResearchWilliamTucker:
            "Rekenaarnetwerke, mens-rekenaar-interaksie, etiese rekenaarwese",

          staffRoleBrinkVanDerMerwe: "Professor en Hoof van Afdeling",
          staffInfoBrinkVanDerMerweOffice: "Kantoor: A511",
          staffResearchBrinkVanDerMerwe: "Boom-automaten, grammatika-opleiding",

          staffRoleLynetteVanZijl: "Professor",
          staffInfoLynetteVanZijlOffice: "Kantoor: A520",
          staffResearchLynetteVanZijl:
            "Automata-implementering, ondersteunende tegnologieë",

          staffRoleWolfTiloBalke: "Besoekende Akademikus",
          staffResearchWolfTiloBalke:
            "Navraagverwerking, personalisering, verspreide herwinning",

          staffRoleWillemVisser: "Deeltydse Professor",
          staffInfoWillemVisserOffice: "Kantoor: A517",
          staffResearchWillemVisser:
            "Sagteware-ingenieurswese, simboliese uitvoer, modelkontrole",

          staffRoleFabianYamaguchi: "Buitengewone Professor",
          staffResearchFabianYamaguchi:
            "Rekenaarsekuriteit, programontleding, masjienleer",

          staffInfoEmileDreyerOffice: "Kantoor: A507",
          staffRoleGaynorFortuin: "Administratiewe Beampte",
          staffInfoGaynorFortuinOffice: "Kantoor: A514",
          staffRoleDerrickStephanus: "Assistent",
          staffInfoDerrickStephanusOffice: "Kantoor: A507",
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
        syncToggleWithLanguage(currentLang);

        const toggle = document.getElementById("languageToggle");
        if (!toggle) return;

        toggle.addEventListener("change", () => {
          const newLang = toggle.checked ? "af" : "en";
          applyLanguage(newLang);
          saveLanguage(newLang);
        });
      }

      document.addEventListener("DOMContentLoaded", initLanguageToggle);