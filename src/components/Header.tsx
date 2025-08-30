import React from 'react';

const Header: React.FC = () => {
  return (
    <header id="home" className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white rounded-full"></div>
        
        {/* Tech Pattern */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full opacity-30"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <div className="grid grid-cols-4 gap-1">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full opacity-20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center section-padding py-6">
        <div className="text-white font-bold text-xl">
          Duttresh Sapra
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium text-lg"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          
          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                {/* Photo Placeholder - Replace with your photo */}
                <img src="/professional-photo.jpg" alt="Duttresh Sapra" className="w-full h-full object-cover"/>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/30 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-secondary/60 rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left text-white order-1 lg:order-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Duttresh Sapra
            </h1>
                    
            <div className="text-lg md:text-xl mb-12 opacity-80 animate-slide-up">
              Data Scientist | Data Analyst | Transforming Data into Decisions
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <a href="#projects" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
