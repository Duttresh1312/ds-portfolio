import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  description?: string;
  bulletPoints?: string[];
  skills?: string[];
  type: 'work' | 'internship' | 'project';
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Data Scientist",
      company: "Indian Space Research Organization (ISRO)",
      year: "January 2024 - April 2024",
      bulletPoints: [
        "Reduced satellite data analysis time by 70% by leading a 3-member team to develop a predictive analytics system using Python on Jupyter notebook",
        "Conducted anomaly detection on 100+ GB of telemetry data by applying statistical outlier analysis to improve model accuracy and reliability using Pandas and NumPy",
        "Developed an automated pipeline to export analysis visuals and reports to Excel/PowerPoint, increasing reusability by 50%."
      ],
      skills: ["Statistical Analysis", "Predictive Modelling", "Python", "Data Visualization"],
      type: "internship"
    },
    {
      title: "Data Analyst",
      company: "MedTourEasy Pvt. Ltd.",
      year: "June 2023 - September 2023",
      bulletPoints: [
        "Boosted decision-making efficiency by 75% by analyzing 1M+ patient records to identify trends in treatment costs, care quality, and operational efficiency",
        "Reduced manual reporting time by 50% through developing a Power BI dashboard integrated with SQL-based data pipelines for real-time operational reporting",
        "Enabled data-driven strategies by collaborating with cross-functional teams to translate insights into actionable business decisions"
      ],
      skills: ["Python", "SQL", "Power BI", "Data Analysis"],
      type: "internship"
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-primary';
      case 'internship': return 'bg-secondary';
      case 'project': return 'bg-gradient-primary';
      default: return 'bg-gray-400';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Full-time';
      case 'internship': return 'Internship';
      case 'project': return 'Research';
      default: return '';
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles in data science, analytics
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-16 transform -translate-x-1/2 w-4 h-4 ${getIconColor(exp.type)} rounded-full border-4 border-white shadow-lg z-10`}></div>

                {/* Content Card */}
                <div className="ml-16 md:ml-32">
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-lg card-hover max-w-5xl">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <h4 className="text-xl font-medium text-primary mb-3">{exp.company}</h4>
                        <div className="flex items-center gap-3">
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                            exp.type === 'work' ? 'bg-primary/10 text-primary' :
                            exp.type === 'internship' ? 'bg-secondary/10 text-secondary' :
                            'bg-gradient-primary text-white'
                          }`}>
                            {getTypeLabel(exp.type)}
                          </span>
                          <span className="text-lg font-semibold gradient-text">{exp.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="mb-6">
                      {exp.bulletPoints ? (
                        <ul className="text-gray-600 leading-relaxed space-y-3">
                          {exp.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="text-primary mr-4 mt-1 text-lg">•</span>
                              <span className="text-base">{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 leading-relaxed text-base">{exp.description}</p>
                      )}
                    </div>

                    {/* Skills/Tags */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-4 py-2 bg-background text-primary text-sm font-medium rounded-full border border-primary/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Interested in my full background?</p>
          <a 
            href="/Duttresh_Sapra_Resume.pdf" 
            download="Duttresh_Sapra_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
