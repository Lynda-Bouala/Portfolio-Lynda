const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      parcours: "Parcours",
      motivation: "Motivation",
      experiences: "Expériences",
      interests: "Intérêts",
      languages: "Langues",
      cv: "Mon CV",
      contact: "Contact",
    },

    hero: {
      greeting: "Bonjour, je suis Lynda 👋",
      title: "Étudiante en informatique",
      description:
        "Étudiante en BUT Informatique à l'Université Sorbonne Paris Nord, je m'intéresse au développement, aux systèmes et réseaux et aux bases de données.",
      projectsButton: "Voir mes projets",
      contactButton: "Me contacter",
    },

    about: {
      label: "À PROPOS",
      title: "Qui suis-je ?",

      paragraph1:
        "Je suis Lynda Bouala, étudiante en BUT Informatique à l'Université Sorbonne Paris Nord.",

      paragraph2:
        "Ma formation me permet de développer des compétences dans différents domaines de l'informatique, notamment le développement, les systèmes et réseaux ainsi que les bases de données.",

      paragraph3:
        "J'aime apprendre à travers des projets concrets, travailler en équipe et découvrir de nouvelles technologies.",

      paragraph4:
        "Je souhaite aujourd'hui mettre mes connaissances en pratique dans le cadre d'un stage et continuer à développer mon expérience professionnelle.",

      info: {
        formation: {
          label: "Formation",
          value: "BUT Informatique",
        },

        university: {
          label: "Université",
          value: "Université Sorbonne Paris Nord",
        },

        location: {
          label: "Localisation",
          value: "93430 Villetaneuse, Île-de-France",
        },
      },
    },

    skills: {
      label: "MES COMPÉTENCES",
      title: "Ce que je sais faire",
      description:
        "Des compétences développées à travers ma formation et mes différents projets.",

      development: {
        title: "Développement",
        description:
          "Conception et développement de programmes et applications avec différents langages.",
      },

      databases: {
        title: "Bases de données",
        description:
          "Modélisation, création et manipulation de bases de données relationnelles.",
      },

      systems: {
        title: "Systèmes & Réseaux",
        description:
          "Configuration et utilisation d'environnements Linux et découverte des services réseau.",
      },

      tools: {
        title: "Outils & Environnement",
        description:
          "Utilisation d'outils de développement et travail en environnement collaboratif.",
      },
    },

    projects: {
      label: "MES PROJETS",
      title: "Quelques projets réalisés",
      description:
        "Des projets universitaires qui m'ont permis de développer mes compétences en programmation, bases de données, systèmes et développement web.",

      more: "En savoir plus →",
      modalLabel: "PROJET",
      technologies: "Technologies utilisées",

      linux: {
        title: "Environnement Linux",

        description:
          "Installation et configuration d'un environnement Linux, puis mise en place de services système et réseaux dans le cadre de deux projets universitaires.",

        modalDescription:
          "Ce projet regroupe deux SAE réalisées autour d'un environnement Linux. La SAE1.03 porte sur l'installation et la configuration d'un poste de développement, tandis que la SAE2.03 est consacrée à l'installation et à la configuration de services réseaux.",

        sae103:
          "Installation de Kubuntu sur un PC reconditionné à partir de zéro, avec partitionnement manuel du disque, configuration du réseau Eduroam et mise en place d'un environnement de développement. J'ai installé et configuré notamment Apache, PHP, PostgreSQL, Visual Studio Code, Java et Python. J'ai également travaillé avec le terminal Linux, la gestion des fichiers et répertoires ainsi que les droits d'accès et les propriétaires.",

        sae203:
          "Mise en place de services réseaux sur l'environnement Linux installé précédemment. Le projet comprend la configuration d'un environnement LAMP avec Apache, PHP et MariaDB, la création d'utilisateurs et de bases de données, ainsi que la mise en place de services FTP avec vsftpd et SSH. J'ai également utilisé VirtualBox et Marionnet pour les travaux réseaux et Wireshark pour analyser les échanges réseau.",

        skills:
          "Administration Linux, ligne de commande, installation et configuration de services, gestion des utilisateurs et permissions, bases de données, développement web, réseaux, virtualisation et analyse de trames.",
      },

      database: {
        title: "Bases de données",

        description:
          "Conception et exploitation de bases de données à travers plusieurs projets universitaires.",

        modalDescription:
          "Ce projet regroupe deux SAE autour des bases de données. Elles m'ont permis de travailler sur la modélisation, la création, la manipulation et l'exploitation de bases de données relationnelles.",

        sae104:
          "La SAE104 m'a permis de travailler sur la conception et l'exploitation d'une base de données, en mettant en pratique la modélisation des données et les requêtes SQL.",

        sae204:
          "La SAE204 porte sur l'analyse de stations-service et des prix des carburants à partir de données ouvertes. J'ai travaillé sur la modélisation de la base, la création des tables, les relations entre les données, les requêtes SQL ainsi que l'exploitation et l'analyse des données avec Python et Grafana.",

        skills:
          "Modélisation de données, bases de données relationnelles, SQL, traitement de données, analyse de données et visualisation.",
      },

      nuit: {
        title: "La Nuit de l'Info",

        description:
          "Développement en équipe d'une application web autour du numérique inclusif, responsable et durable, dans le cadre de la Nuit de l'Info 2025.",

        modalDescription:
          "Projet réalisé en équipe dans le cadre de la Nuit de l'Info 2025. Le sujet portait sur la démarche NIRD (Numérique Inclusif, Responsable et Durable) et la création d'une application web permettant de sensibiliser différents publics aux enjeux de l'autonomie et de la responsabilité numériques.",

        context:
          "Le projet s'inscrit dans la démarche NIRD, qui vise à aider les établissements scolaires à réduire leurs dépendances numériques et à adopter progressivement des solutions plus inclusives, responsables et durables.",

        mission:
          "Notre équipe devait concevoir et développer une application web permettant de faire découvrir la démarche NIRD de manière pédagogique, attractive et engageante. L'application devait notamment encourager la compréhension, la contribution et l'adoption progressive de solutions numériques responsables.",

        features: [
          "Conception d'une interface web attractive et accessible",
          "Présentation pédagogique de la démarche NIRD",
          "Mise en valeur des solutions et alternatives proposées par NIRD",
          "Création d'une expérience interactive et engageante",
          "Travail en équipe sur la conception et le développement",
          "Prise en compte de l'accessibilité et du numérique responsable",
          "Utilisation de ressources libres de droit",
        ],

        skills:
          "Développement web, HTML, CSS, JavaScript, conception d'interface, accessibilité, numérique responsable, travail en équipe et gestion d'un projet dans un temps limité.",
      },

      findmyword: {
        title: "FindMyWord",

        description:
          "Développement en binôme d'une application console Java inspirée du jeu Wordle. Le projet met en œuvre les principes de la programmation orientée objet à travers la gestion des joueurs, des parties, des mots et des sources de données.",

        modalDescription:
          "Projet réalisé en binôme dans le cadre de la SAÉ 2.01 – Bases de la programmation objet. L'application FindMyWord reprend les principales règles de Wordle : le joueur doit retrouver un mot secret de cinq lettres en six tentatives maximum.",

        context:
          "Conception et développement d'une application console Java dans le cadre d'une SAÉ consacrée à la programmation orientée objet.",

        features: [
          "Jeu en multijoueur avec alternance des tours",
          "Gestion de plusieurs manches",
          "Calcul dynamique des scores",
          "Validation des mots saisis",
          "Analyse des lettres avec les états OK / PRESENT / ABSENT",
          "Affichage de la grille et de la progression",
          "Choix aléatoire des mots depuis un fichier JSON",
          "Tests avec possibilité de fixer le mot secret",
          "Gestion des erreurs de saisie",
        ],

        architecture:
          "L'application est organisée en plusieurs packages afin de séparer les responsabilités : model, view et repository. Cette organisation permet de séparer la logique du jeu, l'affichage et l'accès aux données.",

        classes:
          "Les principales classes sont Word, StatutLettre, Joueur, Game, WordRepository, RetrieveWordsFromJSON, RetrieveFixeWordsFromJSON et Main.",

        skills:
          "Java, programmation orientée objet, UML, encapsulation, polymorphisme, JSON, tests unitaires, débogage et travail en binôme.",

        report:
          "https://docs.google.com/document/d/1mS6qzF9-eZYq88KGqXA3tNKeJfCqsaJIuL-M4hh3828/edit?tab=t.0",

        reportButton: "Voir le rapport ↗",
      },

      // =====================================
      // PROJET 05 — POUDLARD
      // =====================================

      poudlard: {
        title: "Le nouveau choixpeau pas magique de Poudlard",

        description:
          "Développement en binôme d'un programme Python permettant de répartir des élèves dans les quatre maisons de Poudlard à partir de leurs réponses à un questionnaire.",

        modalDescription:
          "Projet réalisé en binôme dans le cadre des SAÉ 1.01 et 1.02. Le projet consiste à développer puis améliorer une méthode informatique de répartition des élèves dans les maisons de Poudlard à partir de leurs réponses à un questionnaire.",

        context:
          "Dans la SAÉ 1.01, une première méthode répartit les élèves selon leurs réponses à quatre questions associées aux caractéristiques des quatre maisons. Dans la SAÉ 1.02, cette méthode est améliorée grâce à dix questions et à une comparaison des réponses avec celles de références représentant les différentes maisons.",

        features: [
          "Lecture et traitement de fichiers de réponses",
          "Création et manipulation de tableaux et dictionnaires",
          "Répartition des élèves selon leurs réponses",
          "Mise en place de tests unitaires",
          "Calcul de la distance euclidienne entre deux réponses",
          "Classification d'un élève selon la référence la plus proche",
          "Implémentation de la méthode des k plus proches voisins",
          "Comparaison expérimentale de différentes méthodes de répartition",
        ],

        architecture:
          "La SAÉ 1.01 utilise une structure de données contenant le nom de chaque élève et ses quatre réponses. La SAÉ 1.02 fait évoluer cette structure vers un dictionnaire associant chaque élève à ses dix réponses et utilise des profils de référence représentant les différentes maisons.",

        skills:
          "Python, algorithmique, structures de données, dictionnaires, fichiers TXT et JSON, distance euclidienne, classification, k plus proches voisins, tests unitaires, analyse de résultats et travail en binôme.",
      },
    },

    parcours: {
      label: "MON PARCOURS",
      title: "Mon parcours académique",
      description:
        "Un parcours qui m'a progressivement menée vers le domaine de l'informatique.",

      bac: {
        title: "Baccalauréat technique – Mathématiques, Génie civil",
        location: "Tizi-Ouzou, Algérie",
        grade: "Mention Excellente · 18,68/20",
        description:
          " Une formation scientifique et technique qui m'a permis de développer ma rigueur, ma logique et mes capacités d'analyse et de résolution de problèmes.",
      },

      esi: {
        title: "École Supérieure en Informatique",
        location: "Algérie",
        description:
          "Première année de formation en informatique, avec une découverte de la programmation, de l'algorithmique et des fondamentaux de l'informatique.",
      },

      but: {
        title: "BUT Informatique",
        location: "Université Sorbonne Paris Nord",
        description:
          "Formation orientée vers le développement, les bases de données, les systèmes et réseaux, avec de nombreux projets réalisés en équipe.",
      },

      current: {
        year: "Aujourd'hui",
        title: "Deuxième année de BUT Informatique",
        location: "Université Sorbonne Paris Nord",
        description:
          "Je poursuis mon parcours en approfondissant mes compétences techniques à travers des projets universitaires et des mises en pratique concrètes.",
      },
    },

    motivation: {
      label: "MA MOTIVATION",
      title: "Pourquoi l'informatique ?",

      paragraph1:
        "J'aime l'informatique pour sa capacité à transformer une idée en une solution concrète. Ce qui me plaît particulièrement est de comprendre comment les choses fonctionnent et de chercher des solutions aux problèmes.",

      paragraph2:
        "Au fil de ma formation, j'ai découvert différents domaines comme le développement, les bases de données ainsi que les systèmes et réseaux. Cette diversité correspond à ma curiosité et à mon envie d'apprendre.",

      paragraph3:
        "Je souhaite aujourd'hui continuer à progresser à travers des expériences concrètes, travailler en équipe et mettre mes connaissances en pratique dans un environnement professionnel.",

      points: {
        curious: {
          title: "Curieuse",
          description:
            "J'aime découvrir de nouvelles technologies et comprendre leur fonctionnement.",
        },

        motivated: {
          title: "Motivée",
          description:
            "Je cherche constamment à progresser et à développer mes compétences.",
        },

        teamwork: {
          title: "Esprit d'équipe",
          description:
            "J'apprécie les projets collaboratifs et le partage des connaissances.",
        },
      },
    },

    experiences: {
      label: "MON EXPÉRIENCE",
      title: "Expériences professionnelles",
      description:
        "Des expériences qui m'ont permis de développer mon sens des responsabilités, mon organisation et mon aisance dans le travail.",

      cashier: {
        title: "CAISSIÈRE",
        description:
          "Accueil et accompagnement des clients, gestion des opérations en caisse et travail en équipe dans un environnement dynamique.",
      },

      childcare: {
        title: "GARDE D'ENFANTS",
        description:
          "Garde d'enfants et accompagnement dans les activités quotidiennes, avec gestion des responsabilités et organisation des activités.",
      },
    },

    interests: {
      label: "MES CENTRES D'INTÉRÊT",
      title: "Centres d'intérêt",
      description:
        "Quelques passions et centres d'intérêt qui font partie de ma personnalité.",

      basket: {
        title: "Basket",
        description:
          "Le basket m'intéresse pour son côté collectif et stratégique. J'aime l'esprit d'équipe, la communication et la recherche constante de progression.",
        tags: ["Esprit d'équipe", "Stratégie", "Discipline"],
      },

      math: {
        title: "Mathématiques",
        description:
          "Les mathématiques ont toujours fait partie de mon parcours. J'apprécie particulièrement la logique, la résolution de problèmes et le raisonnement.",
        tags: ["Logique", "Résolution de problèmes", "Analyse"],
      },

      cooking: {
        title: "Cuisine",
        description:
          "La cuisine est pour moi un moyen d'être créative et de découvrir de nouvelles saveurs. J'aime préparer de nouveaux plats et expérimenter différentes recettes.",
        tags: ["Créativité", "Découverte", "Recettes"],
      },

      reading: {
        title: "Lecture",
        description:
          "La lecture me permet de découvrir de nouvelles idées, d'explorer différents univers et de développer ma curiosité.",
        tags: ["Curiosité", "Apprentissage", "Découverte"],
      },

      gaming: {
        title: "Gaming",
        description:
          "J'aime les jeux vidéo pour leurs univers interactifs et leurs défis. Certains jeux développent également la réflexion, la stratégie et la résolution de problèmes.",
        tags: ["Stratégie", "Résolution de problèmes", "Créativité"],
      },

      civil: {
        title: "Génie civil",
        description:
          "Mon parcours en génie civil m'a permis de découvrir un domaine technique différent de l'informatique. J'ai apprécié le côté concret, la précision et la conception de projets.",
        tags: ["Technique", "Conception", "Précision"],
      },

      cinema: {
        title: "Cinéma",
        description:
          "Le cinéma me plaît pour les histoires, les univers et les différentes façons de transmettre des émotions et des idées.",
        tags: ["Histoires", "Créativité", "Découverte"],
      },
    },

    languages: {
      label: "MES LANGUES",
      title: "Langues",
      description:
        "Les langues que je pratique dans mon parcours personnel et académique.",

      french: {
        name: "Français",
        level: "Niveau C2",
      },

      arabic: {
        name: "Arabe",
        level: "Langue maternelle · Niveau C2",
      },

      english: {
        name: "Anglais",
        level: "Niveau B2",
      },

      kabyle: {
        name: "Kabyle",
        level: "Langue maternelle · Niveau C2",
      },
    },

    cv: {
      label: "VOUS SOUHAITEZ EN SAVOIR PLUS ?",
      title: "Découvrez mon parcours",
      description:
        "Téléchargez mon CV pour découvrir en détail mes expériences, mes compétences et ma formation.",
      view: "Voir mon CV",
      download: "Télécharger mon CV",
    },

    contact: {
      label: "CONTACT",
      title: "Travaillons ensemble",
      description:
        "Vous avez un projet, une opportunité ou souhaitez simplement échanger ? N'hésitez pas à me contacter.",

      email: {
        label: "Email",
        text: "Me contacter par email",
      },

      linkedin: {
        label: "LinkedIn",
        text: "Voir mon profil",
      },

      github: {
        label: "GitHub",
        text: "Voir mes projets",
      },
    },

    footer: {
      description: "Portfolio personnel · BUT Informatique",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      parcours: "Education",
      motivation: "Why Computer Science?",
      experiences: "Experience",
      interests: "Interests",
      languages: "Languages",
      cv: "My CV",
      contact: "Contact",
    },

    hero: {
      greeting: "Hello, I’m Lynda 👋",
      title: "Computer Science Student",
      description:
        "Computer Science student at Université Sorbonne Paris Nord, interested in software development, systems and networks, and databases.",
      projectsButton: "View my projects",
      contactButton: "Contact me",
    },

    about: {
      label: "ABOUT ME",
      title: "Who am I?",

      paragraph1:
        "I am Lynda Bouala, a Computer Science student at Université Sorbonne Paris Nord.",

      paragraph2:
        "My studies allow me to develop skills in different areas of computer science, including software development, systems and networks, and databases.",

      paragraph3:
        "I enjoy learning through practical projects, working as part of a team, and discovering new technologies.",

      paragraph4:
        "I am now looking to put my knowledge into practice through an internship and continue developing my professional experience.",

      info: {
        formation: {
          label: "Education",
          value: "Computer Science",
        },

        university: {
          label: "University",
          value: "Université Sorbonne Paris Nord",
        },

        location: {
          label: "Location",
          value: "93430 Villetaneuse, Île-de-France",
        },
      },
    },

    skills: {
      label: "MY SKILLS",
      title: "What I can do",
      description: "Skills developed through my studies and various projects.",

      development: {
        title: "Development",
        description:
          "Design and development of programs and applications using different programming languages.",
      },

      databases: {
        title: "Databases",
        description: "Design, creation and management of relational databases.",
      },

      systems: {
        title: "Systems & Networks",
        description:
          "Configuration and use of Linux environments and introduction to network services.",
      },

      tools: {
        title: "Tools & Environment",
        description:
          "Use of development tools and collaborative working environments.",
      },
    },

    projects: {
      label: "MY PROJECTS",
      title: "Some projects I have worked on",
      description:
        "University projects that allowed me to develop my skills in programming, databases, systems and web development.",

      more: "Learn more →",
      modalLabel: "PROJECT",
      technologies: "Technologies used",

      database: {
        title: "Databases",

        description:
          "Database design and exploitation through several university projects.",

        modalDescription:
          "This project brings together two projects focused on databases. They allowed me to work on data modelling, database creation, management and exploitation of relational databases.",

        sae104:
          "SAE104 allowed me to work on the design and exploitation of a database, applying data modelling and SQL queries.",

        sae204:
          "SAE204 focused on analysing service stations and fuel prices using open data. I worked on database modelling, table creation, relationships between data, SQL queries, as well as data processing and analysis using Python and Grafana.",

        skills:
          "Data modelling, relational databases, SQL, data processing, data analysis and visualization.",
      },

      linux: {
        title: "Linux Environment",

        description:
          "Installation and configuration of a Linux environment, followed by the setup of system and network services through two university projects.",

        modalDescription:
          "This project brings together two projects based on a Linux environment. SAE1.03 focused on installing and configuring a development workstation, while SAE2.03 focused on installing and configuring network services.",

        sae103:
          "Installation of Kubuntu on a refurbished PC from scratch, including manual disk partitioning, Eduroam network configuration and the setup of a development environment. I installed and configured Apache, PHP, PostgreSQL, Visual Studio Code, Java and Python. I also worked with the Linux terminal, file and directory management, access permissions and file ownership.",

        sae203:
          "Setup of network services on the previously installed Linux environment. The project included configuring a LAMP environment with Apache, PHP and MariaDB, creating users and databases, and setting up FTP using vsftpd and SSH services. I also used VirtualBox and Marionnet for network exercises and Wireshark to analyse network traffic.",

        skills:
          "Linux administration, command line, service installation and configuration, user and permission management, databases, web development, networking, virtualization and network traffic analysis.",
      },

      nuit: {
        title: "La Nuit de l’Info",

        description:
          "Team-based development of a web application focused on inclusive, responsible and sustainable digital practices as part of La Nuit de l’Info 2025.",

        modalDescription:
          "Team project developed as part of La Nuit de l’Info 2025. The challenge focused on the NIRD approach (Inclusive, Responsible and Sustainable Digital Technology) and the creation of a web application to raise awareness among different audiences about digital autonomy and responsibility.",

        context:
          "The project was based on the NIRD approach, which aims to help schools reduce their digital dependencies and progressively adopt more inclusive, responsible and sustainable solutions.",

        mission:
          "Our team had to design and develop a web application introducing the NIRD approach in a fun, educational and engaging way. The application was intended to encourage understanding, contribution and the gradual adoption of responsible digital solutions.",

        features: [
          "Design of an attractive and accessible web interface",
          "Educational presentation of the NIRD approach",
          "Highlighting solutions and alternatives promoted by NIRD",
          "Creation of an interactive and engaging experience",
          "Team-based design and development",
          "Consideration of accessibility and responsible digital practices",
          "Use of royalty-free resources",
        ],

        skills:
          "Web development, HTML, CSS, JavaScript, interface design, accessibility, responsible digital practices, teamwork and project management under time constraints.",
      },

      findmyword: {
        title: "FindMyWord",

        description:
          "Development of a Java console application inspired by Wordle. The project applies object-oriented programming principles through player, game, word and data-source management.",

        modalDescription:
          "A team project developed as part of SAÉ 2.01 – Object-Oriented Programming. FindMyWord follows the main rules of Wordle: the player must guess a secret five-letter word within a maximum of six attempts.",

        context:
          "Design and development of a Java console application as part of a project focused on object-oriented programming.",

        features: [
          "Multiplayer game with alternating turns",
          "Management of multiple rounds",
          "Dynamic score calculation",
          "Validation of user input",
          "Letter analysis using OK / PRESENT / ABSENT states",
          "Game grid and progress display",
          "Random word selection from a JSON file",
          "Testing with a fixed secret word",
          "Input error handling",
        ],

        architecture:
          "The application is organized into several packages to separate responsibilities: model, view and repository. This structure separates game logic, display and data access.",

        classes:
          "The main classes are Word, StatutLettre, Joueur, Game, WordRepository, RetrieveWordsFromJSON, RetrieveFixeWordsFromJSON and Main.",

        skills:
          "Java, object-oriented programming, UML, encapsulation, polymorphism, JSON, unit testing, debugging and teamwork.",

        report:
          "https://docs.google.com/document/d/1mS6qzF9-eZYq88KGqXA3tNKeJfCqsaJIuL-M4hh3828/edit?tab=t.0",

        reportButton: "View the report ↗",
      },

      // =====================================
      // PROJECT 05 — HOGWARTS
      // =====================================

      poudlard: {
        title: "The New Not-So-Magical Sorting Hat",

        description:
          "Pair development of a Python program designed to sort students into the four Hogwarts houses based on their questionnaire answers.",

        modalDescription:
          "Pair project developed as part of SAEs 1.01 and 1.02. The project involved developing and improving a computer-based method for assigning students to Hogwarts houses based on their questionnaire answers.",

        context:
          "In SAE 1.01, a first method assigns students to one of the four houses according to their answers to four questions associated with the characteristics of each house. In SAE 1.02, this method is improved using ten questions and by comparing students' answers with reference profiles representing the different houses.",

        features: [
          "Reading and processing answer files",
          "Creation and manipulation of arrays and dictionaries",
          "Student assignment based on questionnaire answers",
          "Implementation of unit tests",
          "Calculation of Euclidean distance between answers",
          "Student classification based on the closest reference",
          "Implementation of the k-nearest neighbors method",
          "Experimental comparison of different classification methods",
        ],

        architecture:
          "SAE 1.01 uses a data structure containing each student's name and four answers. SAE 1.02 evolves this structure into a dictionary associating each student with ten answers and uses reference profiles representing the different houses.",

        skills:
          "Python, algorithms, data structures, dictionaries, TXT and JSON files, Euclidean distance, classification, k-nearest neighbors, unit testing, result analysis and teamwork.",
      },
    },

    parcours: {
      label: "MY EDUCATION",
      title: "My academic journey",
      description:
        "An academic journey that gradually led me towards the field of computer science.",

      bac: {
        title: "Technical Baccalaureate – Mathematics, Civil Engineering",
        location: "Tizi-Ouzou, Algeria",
        grade: "Excellent · 18.68/20",
        description:
          " A scientific and technical education that helped me develop rigor, logical thinking, analytical skills and problem-solving abilities.",
      },

      esi: {
        title: "Higher School of Computer Science",
        location: "Algeria",
        description:
          "First year of computer science studies, with an introduction to programming, algorithms and the fundamentals of computer science.",
      },

      but: {
        title: "Bachelor of Technology in Computer Science",
        location: "Université Sorbonne Paris Nord",
        description:
          "A program focused on software development, databases, systems and networks, with many team-based projects.",
      },

      current: {
        year: "Today",
        title: "Second Year of Computer Science",
        location: "Université Sorbonne Paris Nord",
        description:
          "I am continuing my studies by strengthening my technical skills through university projects and practical work.",
      },
    },

    motivation: {
      label: "MY MOTIVATION",
      title: "Why Computer Science?",

      paragraph1:
        "I like computer science because of its ability to turn an idea into a concrete solution. What I particularly enjoy is understanding how things work and finding solutions to problems.",

      paragraph2:
        "Throughout my studies, I have discovered different areas such as software development, databases, systems and networks. This diversity matches my curiosity and my desire to keep learning.",

      paragraph3:
        "I now want to continue improving through practical experiences, work as part of a team and apply my knowledge in a professional environment.",

      points: {
        curious: {
          title: "Curious",
          description:
            "I enjoy discovering new technologies and understanding how they work.",
        },

        motivated: {
          title: "Motivated",
          description: "I constantly seek to improve and develop my skills.",
        },

        teamwork: {
          title: "Team Player",
          description:
            "I enjoy collaborative projects and sharing knowledge with others.",
        },
      },
    },

    experiences: {
      label: "MY EXPERIENCE",
      title: "Professional Experience",
      description:
        "Experiences that helped me develop my sense of responsibility, organization and ability to work effectively.",

      cashier: {
        title: "CASHIER",
        description:
          "Welcoming and assisting customers, handling checkout operations and working as part of a team in a dynamic environment.",
      },

      childcare: {
        title: "CHILDCARE",
        description:
          "Looking after children and supporting them in their daily activities, while managing responsibilities and organizing activities.",
      },
    },

    interests: {
      label: "MY INTERESTS",
      title: "Interests",
      description:
        "Some passions and interests that are part of my personality.",

      basket: {
        title: "Basketball",
        description:
          "I enjoy basketball for its team-oriented and strategic aspects. I appreciate teamwork, communication and the constant pursuit of improvement.",
        tags: ["Teamwork", "Strategy", "Discipline"],
      },

      math: {
        title: "Mathematics",
        description:
          "Mathematics has always been part of my academic journey. I particularly enjoy logic, problem-solving and reasoning.",
        tags: ["Logic", "Problem Solving", "Analysis"],
      },

      cooking: {
        title: "Cooking",
        description:
          "Cooking is a way for me to be creative and discover new flavors. I enjoy preparing new dishes and experimenting with different recipes.",
        tags: ["Creativity", "Discovery", "Recipes"],
      },

      reading: {
        title: "Reading",
        description:
          "Reading allows me to discover new ideas, explore different worlds and develop my curiosity.",
        tags: ["Curiosity", "Learning", "Discovery"],
      },

      gaming: {
        title: "Gaming",
        description:
          "I enjoy video games for their interactive worlds and challenges. Some games also develop strategic thinking, problem-solving and creativity.",
        tags: ["Strategy", "Problem Solving", "Creativity"],
      },

      civil: {
        title: "Civil Engineering",
        description:
          "My background in civil engineering allowed me to discover a technical field different from computer science. I appreciated its practical side, precision and project design.",
        tags: ["Technical", "Design", "Precision"],
      },

      cinema: {
        title: "Cinema",
        description:
          "I enjoy cinema for its stories, different worlds and the various ways it can convey emotions and ideas.",
        tags: ["Stories", "Creativity", "Discovery"],
      },
    },

    languages: {
      label: "MY LANGUAGES",
      title: "Languages",
      description: "Languages I use in my personal and academic life.",

      french: {
        name: "French",
        level: "C2 Level",
      },

      arabic: {
        name: "Arabic",
        level: "Native language · C2 Level",
      },

      english: {
        name: "English",
        level: "B2 Level",
      },

      kabyle: {
        name: "Kabyle",
        level: "Native language · C2 Level",
      },
    },

    cv: {
      label: "WANT TO KNOW MORE?",
      title: "Discover my background",
      description:
        "Download my CV to learn more about my experience, skills and education.",
      view: "View my CV",
      download: "Download my CV",
    },

    contact: {
      label: "CONTACT",
      title: "Let's work together",
      description:
        "Do you have a project, an opportunity, or simply want to get in touch? Feel free to contact me.",

      email: {
        label: "Email",
        text: "Contact me by email",
      },

      linkedin: {
        label: "LinkedIn",
        text: "View my profile",
      },

      github: {
        label: "GitHub",
        text: "View my projects",
      },
    },

    footer: {
      description: "Personal portfolio · Computer Science",
    },
  },
};

export default translations;
