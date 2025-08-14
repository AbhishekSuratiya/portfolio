import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let hasRevealed = false;

    const target = projectsRef.current;
    if (!target) return;

    const reveal = () => {
      if (!hasRevealed) {
        hasRevealed = true;
        setIsVisible(true);
        if (observer) observer.disconnect();
        window.removeEventListener('scroll', onScrollOrResize);
        window.removeEventListener('resize', onScrollOrResize);
      }
    };

    const onScrollOrResize = () => {
      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight * 0.9 && rect.bottom > 0) {
        reveal();
      }
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
      );
      observer.observe(target);
    }

    // Fallback in case IntersectionObserver doesn't fire
    onScrollOrResize();
    window.addEventListener('scroll', onScrollOrResize, { passive: true } as EventListenerOptions);
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', onScrollOrResize as EventListener);
      window.removeEventListener('resize', onScrollOrResize as EventListener);
    };
  }, []);

  const projects = [
    {
      title: "Planify App",
      description: "A fintech platform connecting investors with startups. Features OTP-less & Social Logins, Deep Linking with Branch.io, and Over-the-Air (OTA) Updates.",
      image: "https://i.ibb.co/cS9vDN2p/Screenshot-2025-07-21-at-2-46-58-AM.png",
      technologies: ["React Native", "TypeScript", "Zustand", "Sentry", "Branch.io", "Supabase"],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.planify&hl=en_IN",
      category: "Mobile"
    },
    {
      title: "Planify Website",
      description: "The web counterpart to the Planify platform with Rich Text Editing, Dynamic Homepage Content, and Reusable UI Theme components.",
      image: "https://i.ibb.co/cS9vDN2p/Screenshot-2025-07-21-at-2-46-58-AM.png",
      technologies: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Styled Components"],
      github: "",
      live: "https://www.planify.in/",
      category: "Web"
    },
    {
      title: "Yara Connect",
      description: "A comprehensive mobile application for agricultural solutions with Crop Management, Weather Integration, and Farm Analytics.",
      image: "https://i.ibb.co/SDYk00Wv/Screenshot-2025-07-21-at-2-51-29-AM.png",
      technologies: ["React Native", "Redux", "Firebase", "Maps Integration", "Push Notifications"],
      github: "",
      live: "https://play.google.com/store/apps/details?id=com.yara.connect.prod&hl=en_IN",
      category: "Mobile"
    },
    {
      title: "AWS IoT Bingsu",
      description: "An IoT application created for an AWS event with Real-time sensor monitoring, Live video streaming (KVS), and QR Code Scanner.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "AWS SDK", "IoT Sitewise", "Kinesis Video Streams", "TypeScript"],
      github: "https://github.com/AbhishekSuratiya/bingsu.git",
      live: "",
      category: "Mobile"
    },
    {
      title: "Corruption Watchdog",
      description: "A public awareness platform for monitoring and reporting corruption with Interactive Corruption Map, Country-specific Statistics, and Data Filtering.",
      image: "https://i.ibb.co/846p5mcV/Screenshot-2025-07-21-at-2-53-16-AM.png",
      technologies: ["React", "Next.js", "Leaflet.js", "Chart.js", "DataTables"],
      github: "https://github.com/AbhishekSuratiya/corruptionWatchDog.git",
      live: "https://corruptionwatchdog.netlify.app/",
      category: "Web"
    },
    {
      title: "Fintron Invest",
      description: "A modern investment platform built for a client with Secure Authentication, Modern UI Designs, and User Portfolio Management.",
      image: "https://i.ibb.co/r2Stw6rG/Screenshot-2025-07-21-at-2-55-02-AM.png",
      technologies: ["React Native", "Native Base", "Redux", "Modern UI/UX"],
      github: "",
      live: "https://www.fintroninvest.com/home",
      category: "Mobile"
    }
  ];

  const categories = ["All", "Mobile", "Web"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-50 scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-purple-600 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.github ? 'flex-1' : 'w-full'} bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <Eye size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
