import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="space-y-6">
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                Master's student in Business Analytics & AI with experience in data science, machine learning, and business intelligence. 
                Skilled in predictive modeling, dashboard development, and end-to-end data analysis, 
                with industry experience at Indian Space Research Organization. 
              </p>

              <p>
                Actively seeking Data Scientist/Data Analyst 
                opportunities to apply advanced analytics and AI in solving real-world challenges.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-background p-4 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-1">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">3.8</div>
                <div className="text-sm text-gray-600">GPA (Master's)</div>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-1">2</div>
                <div className="text-sm text-gray-600">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
