import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React Native", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "React.js", level: 92, color: "from-blue-600 to-blue-800" },
        { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800" },
        { name: "Redux", level: 88, color: "from-purple-500 to-purple-700" }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Firebase", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Supabase", level: 80, color: "from-green-500 to-green-700" },
        { name: "AWS SDK", level: 75, color: "from-yellow-500 to-orange-600" },
        { name: "REST APIs", level: 88, color: "from-blue-500 to-indigo-500" },
        { name: "GraphQL", level: 70, color: "from-pink-500 to-purple-500" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Sentry", level: 85, color: "from-purple-600 to-indigo-600" },
        { name: "CodePush", level: 80, color: "from-green-600 to-teal-600" },
        { name: "WebStorm", level: 88, color: "from-blue-700 to-purple-700" },
        { name: "Xcode", level: 75, color: "from-gray-600 to-gray-800" }
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-float"></div>
          <div className="absolute top-10 right-1/4 w-6 h-6 bg-blue-400 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;