import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
  type: 'degree' | 'certification' | 'course';
  logo?: string;
}

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string;
  link?: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "Master of Science, Business Analytics & Artificial Intelligence",
      institution: "The University of Texas at Dallas",
      year: "2024 - 2026",
      description: "Currently pursuing advanced studies in business analytics and AI with focus on machine learning, data science applications, and business intelligence. Expected graduation May 2026 with GPA 3.8.",
      type: "degree"
    },
    {
      degree: "Bachelor of Technology, Information Technology",
      institution: "Birla Vishvakarma Mahavidyalaya",
      year: "2020 - 2024",
      description: "Completed comprehensive program in Information Technology with focus on software development, data structures, algorithms, and database management. Graduated May 2024 with GPA 3.1.",
      type: "degree"
    }
  ];

  // Publications will be added as research progresses

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree': return 'bg-primary text-white';
      case 'certification': return 'bg-secondary text-white';
      case 'course': return 'bg-gradient-primary text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'degree': return '🎓';
      case 'certification': return '📜';
      case 'course': return '📚';
      default: return '📋';
    }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous professional development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-lg z-10 flex items-center justify-center">
                    <span className="text-xs">{getTypeIcon(item.type)}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-background rounded-xl p-8 shadow-lg card-hover">
                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                        <span className="text-sm font-medium text-gray-500">{item.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.degree}</h3>
                      <h4 className="text-lg font-medium text-primary mb-4">{item.institution}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Year indicator for larger screens */}
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className={`text-right ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="text-2xl font-bold gradient-text">{item.year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Goals Section */}
        <div className="bg-background rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Academic <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-lg text-gray-600">
              Pursuing excellence in business analytics and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Current Focus</h4>
              </div>
              <p className="text-gray-600">
                Specializing in advanced machine learning techniques, business intelligence, and AI applications for solving real-world business problems.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800">Future Goals</h4>
              </div>
              <p className="text-gray-600">
                Planning to contribute to research in AI and business analytics, with focus on practical applications in industry and potential publications.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-gradient-primary rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">3.8</div>
            <div className="text-sm opacity-90">Master's GPA</div>
            <div className="text-xs opacity-75 mt-1">UT Dallas</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-secondary rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">3.1</div>
            <div className="text-sm opacity-90">Bachelor's GPA</div>
            <div className="text-xs opacity-75 mt-1">BVM</div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Education;
