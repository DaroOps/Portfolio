const messages = {
    en: {
        languages: {
            english: 'English',
            spanish: 'Spanish',
       },
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        services: 'Services',
        mission: 'Mission',
        vision: 'Vision',
        certifications: 'Certifications',
        contact: 'Contact',
      },
      home: {
        presentation: 'Hi, I am',
        name: 'David Romero',
        title: 'Welcome to my digital world',
        gameDev: "Game developer",
        gameDevSubtitle: "Creating immersive virtual worlds with Unity and Godot.",
        fullstackDev: "Fullstack developer",
        fullstackDevSubtitle: "Building scalable and robust applications",
        hobby: "Enthusiast of 3D printing, videogames and digital art",
        explore: 'Explore my portfolio and discover how I combine technology and creativity in my professional projects',
        cv: 'Resume',
      },
      about: {
        title: 'About me',
        content: "I'm a full stack developer with a passion for tech and 3D printing. My experience spans from web development to videogame creation, which has allowed me to acquire a diverse set of technical and soft skills.",
        highlights: {
          title: 'My Skills',
          frontend: 'Web Development',
          frontendExperience: 'Experience in Vue.js, React.js, Express.js and databases like MongoDB, PostgreSQL and MySQL.',
          gamedev: 'Videogame Development',
          gamedevExperience: 'Competent in C#, Unity and Godot for creating unique interactive experiences.',
          backend: 'Fullstack Development',
          dprinting: '3D Printing',
          dprintingExperience: 'Enthusiast of 3D printing, applying this technology in innovative projects.',
          uiux: 'UI/UX Design',
          cloud: 'Cloud',
          devops: 'DevOps',
          ai: 'Artificial Intelligence',
          design: 'Design',
        },
        softSkills: {
          title: 'Soft Skills',
          agile: 'Efficient time management',
          teamwork: 'Working in a team',
          collaboration: 'Collaboration',
          communication: 'Effective communication',
          leadership: 'Leadership',
        },
      },
      skills:{
        title: 'My Skills',
      },
      projects: {
        title: 'My Projects',
        projects: {
          cineapp:{
            title: 'Cine App',
            description:'Application for booking cinema seats in real-time with Stripe payment gateway and JWT authentication. Developed with best practices.',
            technologies: ['Express', 'JWT', 'MongoDB', 'Vue 3', 'WebSocket', 'Cloudinary', 'Stripe'],
            type: 'Fullstack'
            },
            wof:{
            title: 'WoF',
            description: 'Platform that connects nurses with pet owners. Team-based project developed with Scrum methodology and adjusted timelines.',
            technologies: ['WebSocket', 'Auth0', 'React', 'PostgreSQL', 'Sequelize', 'SASS', 'Cloudinary'],
            type: 'Fullstack'
          },
          videogamesexplorer:{
            title: 'Videogames Explorer',
            description: 'Application for exploring videogames, with filtering, favorites and user authentication features.',
            technologies: ['Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize'],
            type: 'Fullstack'
          },
          rickandmortyexplorer:{
            title: 'Rick and Morty Explorer',
            description: 'Explore the universe of Rick and Morty with login, favorites and detailed character descriptions.',
            technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Sequelize'],
            type: 'Fullstack'
          },
          spotifyclone:{
            title: 'Spotify Clone',
            description: 'Clone of Spotify developed entirely with JavaScript and Web Components to understand modern frameworks.',
            technologies: ['JavaScript', 'Web Components', 'HTML', 'CSS'],
            type: 'Frontend'
          },
          savethesea:{
            title: 'Save the Sea',
            description: 'Educational videogame to convince about waste disposal in beaches. Freelance project with direct contact with the client.',
            technologies: ['Unity', 'C#', 'Blender'],
            type: 'Game Development'
          },
          foodlover:{
            title: 'FoodLover',
            description: 'Landing page of a fictitious restaurant that showcases the best practices of semantic HTML writing.',
            technologies: ['HTML', 'CSS'],
            type: 'Frontend'
          }
        }
      },
      contact: {
        title: 'Contact Me',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',

        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Submit',
          loading: 'Sending...',
          error: 'An error occurred while sending the message. Please try again later.',
        }
      },
      footer: {
        allRights: 'All Rights Reserved',
        by: 'By',
        daro: 'DaroOps',
      },
      certifications: {
        title: 'My Certifications',
        certifications: {
          fullstackbootcamp: {
            title: 'Full Stack Developer',
            issuer: 'HENRY Bootcamp',
            description: 'Intensive full stack web development program covering front-end and back-end technologies.',
            date: 'January 2024',
            link: 'https://www.fullstackbootcamp.com/certifications/daroops',
          },
          unitycertified: {
            title: 'Unity Certified Developer',
            issuer: 'Unity Technologies',
            description: 'Certification that validates skills in game and interactive application development with Unity.',
            date: 'July 2023',
            link: 'https://unity.com/products/unity-certifications/1234567890',
          },
          englishcertificationb2: {
            title: 'English Certification B2',
            issuer: 'ES-SET',
            description: 'Intermediate high-level English certification, equivalent to the B2 level of the Common European Framework of Reference.',
            date: 'September 2023',
            link: 'https://www.es-set.org/verify/1234567890',
          },
          git: {
            title: 'Git: from Novice to Expert',
            issuer: 'Mastermind',
            description: 'Complete course on version control with Git, from basic concepts to advanced workflows.',
            date: 'November 2023',
            link: 'https://mastermind.dev/certificates/git/1234567890',
          },
          linux: {
            title: 'Linux Customization',
            issuer: 'Mastermind',
            description: 'Advanced course on customizing and optimizing Linux development environments.',
            date: 'January 2024',
            link: 'https://mastermind.dev/certificates/linux/1234567890',
          },
        }
      },
      services: {
        title: 'My Services',
        services: {
          frontend: {
            title: 'Frontend Development',
            description: 'Creating engaging and responsive user interfaces.',
            icon: 'fas fa-paint-brush',
            features: ['UI/UX Design','HTML5, CSS3 and JavaScript Development','Frameworks: Vue.js, React','Performance Optimization','Web Accessibility']
          },
          fullstack: {
            title: 'Fullstack Development',
            description: 'Building scalable and robust applications from the frontend to the backend.',
            icon: 'fas fa-laptop-code',
            features: [
              'Web Applications with Vue.js and React',
              'RESTful APIs with Express.js',
              'SQL and NoSQL Databases',
              'Payment Gateways Integration',
              'Authentication and Authorization'
            ]
          },
          gamedev: {
            title: 'Game Development',
            description: 'Creating immersive virtual worlds with Unity and Godot.',
            icon: 'fas fa-gamepad',
            features: [
              'Unity and C# Development',
              'Game Mechanics Design',
              'Performance Optimization',
              '3D Graphics Integration',
              'App Store Publishing'
            ]
          }, 
          cosultoring: {
            title: 'Technical Consulting',
            description: 'Advising on technologies and best practices of software development.',
            icon: 'fas fa-comments',
            features: [
              'Software Architecture',
              'Stack Technology Selection',
              'Development Process Optimization',
              'Agile Methodologies Implementation',
              'Code Review and Mentoring'
            ]
          },
          printing: {
            title: '3D Printing and Prototyping',
            description: 'Services for designing and printing 3D models for custom prototypes.',
            icon: 'fas fa-cube',
            features: [
              '3D Design for Printing',
              'Quick Prototyping',
              'Custom Model Printing',
              'Materials and Techniques Advice',
              'Printed Models Postprocessing'
            ]
          }
        },
      }
    },
    es: {
        languages: {
            english: 'Inglés',
            spanish: 'Español',
       },
      nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        projects: 'Proyectos',
        services: 'Servicios',
        certifications: 'Certificaciones',
        mission: 'Misión',
        vision: 'Visión',
        contact: 'Contacto',
      },
      home: {
        presentation: 'Hola, soy',
        name: 'David Romero',
        title: 'Bienvenido a mi mundo digital',
        gameDev: "Desarrollador de videojuegos",
        gameDevSubtitle: "Creando experiencias en mundos virtuales con Unity y Godot.",
        fullstackDev: "Desarrollador Fullstack",
        fullstackDevSubtitle: "Construyendo soluciones escalables y aplicaciones robustas",
        hobby: "Entusiasta de la impresión 3D, videojuegos y el arte digital",
        explore: 'Explora mi portafolio y descubre cómo me fusiono la tecnología y creatividad en mis proyectos profesionales',
        cv: 'Resumen',
      },
      about: {
        title: 'Sobre mí',
        content: "Soy un desarrollador full stack con un impetu por el mundo tech y la impresión 3D. Mi experiencia abarca desde el desarrollo web hasta la creación de videojuegos, lo que me ha permitido adquirir un conjunto diverso de habilidades técnicas y blandas.",
        highlights: {
          title: 'Mis Habilidades',
          frontend: 'Desarrollo Web',
          frontendExperience: 'Experiencia en Vue.js, React.js, Express.js y bases de datos como MongoDB, PostgreSQL y MySQL.',
          gamedev: 'Desarrollo de Videojuegos',
          gamedevExperience: 'Competente en C#, Unity y Godot para la creación de experiencias interactivas únicas.',
          backend: 'Desarrollo Fullstack',
          dprinting: 'Impresión 3D',
          dprintingExperience: 'Entusiasta de la impresión 3D, aplicando esta tecnología en proyectos innovadores.',
          uiux: 'Diseño UI/UX',
          cloud: 'Cloud',
          devops: 'DevOps',
          ai: 'Inteligencia Artificial',
          design: 'Diseño',
        },
        softSkills: {
          title: 'Habilidades Blandas',
          agile: 'Gestión eficiente de plazos cortos',
          teamwork: 'Trabajo en equipo',
          collaboration: 'Empatía',
          communication: 'Comunicación efectiva',
          leadership: 'Liderazgo',
        },
      },    
      skills:{
        title: 'Mis Habilidades',
      },
      projects: {
        title: 'Mis Proyectos',
        projects: {
          cineapp:{
            title: 'Cine App',
            description:'Aplicación de reserva de asientos de cine en tiempo real con pasarela de pago Stripe y autenticación JWT. Desarrollada con las mejores prácticas.',
            technologies: ['Express', 'JWT', 'MongoDB', 'Vue 3', 'WebSocket', 'Cloudinary', 'Stripe'],
            type: 'Fullstack'
            },
            wof:{
            title: 'WoF',
            description: 'Plataforma que conecta cuidadores con dueños de mascotas. Proyecto en equipo desarrollado con metodología Scrum y plazos ajustados.',
            technologies: ['WebSocket', 'Auth0', 'React', 'PostgreSQL', 'Sequelize', 'SASS', 'Cloudinary'],
            type: 'Fullstack'
          },
          videogamesexplorer:{
            title: 'Videogames Explorer',
            description: 'Aplicación para explorar videojuegos, con funcionalidades de filtrado, favoritos y autenticación de usuarios.',
            technologies: ['Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize'],
            type: 'Fullstack'
          },
          rickandmortyexplorer:{
            title: 'Rick and Morty Explorer',
            description: 'Explora el universo de Rick y Morty con login, favoritos y descripciones detalladas de personajes.',
            technologies: ['React', 'Redux', 'Express', 'PostgreSQL', 'Sequelize'],
            type: 'Fullstack'
          },
          spotifyclone:{
            title: 'Spotify Clon',
            description: 'Clon de Spotify desarrollado enteramente con JavaScript y Web Components para entender el funcionamiento de frameworks modernos.',
            technologies: ['JavaScript', 'Web Components', 'HTML', 'CSS'],
            type: 'Frontend'
          },
          savethesea:{
            title: 'Save the Sea',
            description: 'Videojuego educativo para concientizar sobre el desperdicio de basura en las playas. Proyecto freelance con contacto directo con el cliente.',
            technologies: ['Unity', 'C#', 'Blender'],
            type: 'Game Development'
          },
          foodlover:{
            title: 'FoodLover',
            description: 'Landing page de un restaurante ficticio que demuestra las mejores prácticas de escritura semántica en HTML.',
            technologies: ['HTML', 'CSS'],
            type: 'Frontend'
          }
        }
      },
      certifications: {
        title: 'Mis Certificaciones',
        certifications: {
          fullstackbootcamp: {
            title: 'Desarrollador Full Stack',
            issuer: 'HENRY Bootcamp',
            description: 'Programa intensivo de desarrollo web full stack, cubriendo tecnologías front-end y back-end.',
            date: 'Enero 2024',
            link: 'https://www.fullstackbootcamp.com/certifications/daroops',
          },
          unitycertified: {
            title: 'Unity Certified Developer',
            issuer: 'Unity Technologies',
            description: 'Certificación que valida habilidades en desarrollo de juegos y aplicaciones interactivas con Unity.',
            date: 'Julio 2023',
            link: 'https://unity.com/products/unity-certifications/1234567890',
          },
          englishcertificationb2: {
            title: 'English Certification B2',
            issuer: 'ES-SET',
            description: 'Certificación de nivel intermedio alto en inglés, equivalente al nivel B2 del Marco Común Europeo.',
            date: 'Septiembre 2023',
            link: 'https://www.es-set.org/verify/1234567890',
          },
          git: {
            title: 'Git: De Novato a Experto',
            issuer: 'Mastermind',
            description: 'Curso completo sobre control de versiones con Git, desde conceptos básicos hasta flujos de trabajo avanzados.',
            date: 'Noviembre 2023',
            link: 'https://mastermind.dev/certificates/git/1234567890',
          },
          linux: {
            title: 'Personalización de Entornos Linux',
            issuer: 'Mastermind',
            description: 'Curso avanzado sobre la personalización y optimización de entornos Linux para desarrollo.',
            date: 'Enero 2024',
            link: 'https://mastermind.dev/certificates/linux/1234567890',
          },
        }
      },
      services: {
        title: 'Mis Servicios',
        services: {
          frontend: {
            title: 'Desarrollo Frontend',
            description: 'Creación de interfaces de usuario atractivas y responsivas.',
            icon: 'fas fa-paint-brush',
            features: [
              'Diseño UI/UX',
              'Desarrollo con HTML5, CSS3 y JavaScript',
              'Frameworks: Vue.js, React',
              'Optimización de rendimiento',
              'Accesibilidad web'
            ]
          },
          fullstack: {
            title: 'Desarrollo Full Stack',
            description: 'Desarrollo de aplicaciones web completas, desde el front-end hasta el back-end.',
            icon: 'fas fa-laptop-code',
            features: [
              'Aplicaciones web con Vue.js y React',
              'APIs RESTful con Express.js',
              'Bases de datos SQL y NoSQL',
              'Integración de pasarelas de pago',
              'Autenticación y autorización'
            ]
          },
          gamedev: {
            title: 'Desarrollo de Videojuegos',
            description: 'Creación de juegos interactivos y experiencias inmersivas.',
            icon: 'fas fa-gamepad',
            features: [
              'Desarrollo con Unity y C#',
              'Diseño de mecánicas de juego',
              'Optimización de rendimiento',
              'Integración de gráficos 3D',
              'Publicación en tiendas de aplicaciones'
            ]
          }, 
          cosultoring: {
            title: 'Consultoría Técnica',
            description: 'Asesoramiento en tecnologías y mejores prácticas de desarrollo.',
            icon: 'fas fa-comments',
            features: [
              'Arquitectura de software',
              'Selección de stack tecnológico',
              'Optimización de procesos de desarrollo',
              'Implementación de metodologías ágiles',
              'Revisión de código y mentoring'
            ]
          },
          printing: {
            title: 'Impresión 3D y Prototipado',
            description: 'Servicios de diseño e impresión 3D para prototipos y proyectos personalizados.',
            icon: 'fas fa-cube',
            features: [
              'Diseño 3D para impresión',
              'Prototipado rápido',
              'Impresión de modelos personalizados',
              'Asesoramiento en materiales y técnicas',
              'Postprocesado de modelos impresos'
            ]
          }
        }
      },
      contact: {
        title: 'Contáctame',
        email: 'Correo',
        linkedin: 'LinkedIn',
        github: 'GitHub',

        form: {
          name: 'Nombre',
          email: 'Correo',
          message: 'Mensaje',
          submit: 'Enviar',
          loading: 'Enviando...',
          error: 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.',
        }
      },
      footer: {
        allRights: 'Todos los Derechos Reservados',
        by: 'Por',
        daro: 'DaroOps',
      },
    },
  };

export default messages;