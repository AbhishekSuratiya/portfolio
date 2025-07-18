import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye, X } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-800 mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent animate-gradient-x">
              Abhishek Suratiya
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8">
            <span className="typewriter">Lead Software Developer | React Native & Next.js Specialist</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A passionate software developer with 5+ years of experience creating innovative mobile and web applications. 
            I thrive on turning complex problems into elegant, user-friendly solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleResumeClick}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <Eye size={20} />
              Preview Resume
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <a 
              href="#projects"
              className="group border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              View My Work
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
      </section>

      {/* Resume PDF Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800">Resume Preview</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://raw.githubusercontent.com/AbhishekSuratiya/data/main/Resume%202025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src="https://raw.githubusercontent.com/AbhishekSuratiya/data/main/Resume%202025.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-full border-0 rounded-lg"
                title="Resume Preview"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;