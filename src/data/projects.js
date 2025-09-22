export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión de Préstamos",
    description: "Plataforma integral para la gestión de préstamos, con panel de administración web y aplicación móvil para usuarios. Permite controlar solicitudes, pagos y reportes en tiempo real.",
    tech: ["Node.js", "React Native", "Express", "PostgreSQL"],
    image: "/images/portafolio sistema de prestamos.png",
    repo: "#",
    url: null,
    tags: ["Full Stack", "React", "Node.js", "Flutter"],
    featured: true
  },
  {
    id: 2,
    title: "Portafolio Personal con Astro",
    description: "Sitio web de portafolio desarrollado con Astro, Node.js y Tailwind CSS. Optimizado para SEO y rendimiento, incluye blog y sección de proyectos destacados.",
    tech: ["Astro", "Node.js", "Tailwind CSS"],
    image: "/images/Astro portafolio.png",
    repo: "https://github.com/JoakoLozano85/portafolio",
    url: null,
    tags: ["Frontend", "Static Site", "Astro","Tailwind CSS"],
    featured: true
  },
  {
    id: 3,
    title: "Árbol de Expansión Mínima en Java",
    description: "Aplicación para calcular el árbol de expansión mínima de un grafo, implementada en Java. Ideal para problemas de optimización y análisis de redes.",
    tech: ["Java", "Algoritmos"],
    image: "/images/trabajoP1.png",
    repo: "https://github.com/JoakoLozano85/ArbolExpMin.git",
    url: null,
    tags: ["Algoritmos", "Java"],
    featured: true
  },
  {
    id: 4,
    title: "Portafolio Web Clásico",
    description: "Portafolio realizado con JavaScript, CSS y HTML5, mostrando proyectos y experiencia profesional.",
    tech: ["JavaScript", "CSS", "HTML5"],
    image: "/images/cv.png",
    repo: "https://github.com/JoakoLozano85/WebPortafolio.git",
    url: null,
    tags: ["Frontend", "Web"],
    featured: false
  },
  {
    id: 5,
    title: "Red Social en PHP",
    description: "Plataforma de red social desarrollada en PHP, permitiendo interacción entre usuarios y publicación de contenido.",
    tech: ["PHP", "MySQL"],
    image: "/images/trabajo.png",
    repo: "https://github.com/JoakoLozano85/RedSocial.git",
    url: null,
    tags: ["Backend", "PHP"],
    featured: false
  },
  {
    id: 6,
    title: "Videojuego Greenfoot",
    description: "Videojuego educativo creado con Greenfoot, enfocado en el aprendizaje de programación orientada a objetos.",
    tech: ["Java", "Greenfoot"],
    image: "/images/trabajoV.png",
    repo: "https://github.com/JoakoLozano85/WhiteKnight.git",
    url: null,
    tags: ["Videojuego", "Educativo"],
    featured: false
  },
  {
    id: 7,
    title: "Generador de Tablas de Verdad",
    description: "Página web interactiva que genera tablas de verdad para expresiones lógicas. Desarrollada con JavaScript, HTML5 y TailwindCSS, permite a los usuarios visualizar y analizar proposiciones lógicas de manera sencilla y rápida.",
    tech: ["JavaScript", "HTML5", "TailwindCSS"],
    image: "/images/tablasdeverdad.png",
    url: "https://simuladortablasdeverdad.web.app/",
    tags: ["Frontend", "Educativo", "Lógica"],
    featured: false
  }
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: "⚡", level: 90 },
      { name: "React", icon: "⚛️", level: 85 },
      { name: "Astro", icon: "🚀", level: 85 },
      { name: "Tailwind CSS", icon: "🎨", level: 90 },
      { name: "TypeScript", icon: "📘", level: 75 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express.js", icon: "⚡", level: 80 },
      { name: "PostgreSQL", icon: "🐘", level: 75 },
      { name: "API REST", icon: "🔌", level: 85 },
      { name: "MySQL", icon: "🔌", level: 85 }
    ]
  }

];