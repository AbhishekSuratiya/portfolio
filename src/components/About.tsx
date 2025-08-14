import {useEffect, useRef, useState} from 'react';
import {Code, Heart, Palette, Zap} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "5+ Years Experience",
      description: "Professional experience in mobile and web development"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "React Native Expert",
      description: "Specialized in cross-platform mobile development"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lead Developer",
      description: "Leading teams and managing technical decisions"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Eager to Learn",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-blue-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="https://i.ibb.co/GvTKYXgT/abhi.jpg"
                    alt="Abhishek"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a full-stack developer with over 5 years of experience creating digital experiences
              that are not only functional but also beautiful. I specialize in React, React Native, and
              modern web technologies, with a keen eye for design and user experience.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies or sketching out ideas for my next creative project.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="text-purple-600 mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
