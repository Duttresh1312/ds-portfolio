import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Data Science' | 'ML/DL' | 'Dashboard' | 'Research';
  skills: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Credit Default Prediction",
      description: "Machine learning model to predict credit default risk using advanced algorithms and ensemble methods",
      category: "ML/DL",
      skills: ["Python", "Machine Learning", "Scikit-learn", "XGBoost", "Pandas"],
      image: "/credit-default.jpg",
      liveLink: "https://drive.google.com/file/d/12rU2QlmIdTWwl8xl-DXu3KXav0Wxij7v/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard for real-time sales analytics and KPI monitoring",
      category: "Dashboard",
      skills: ["Power BI", "SQL", "DAX", "Data Analysis", "Data Modeling"],
      image: "/sales-dashboard.jpg",
      liveLink: "https://github.com/Duttresh1312/Adventure-Cycle-Dashboard"
    },
    {
      id: 3,
      title: "Image Captioning",
      description: " Image Captioning Web Application built using a CNN-RNN neural network model, integrated into a MERN (MongoDB, Express, React, Node) stack with a Python Flask backend for model inference.",
      category: "ML/DL",
      skills: ["Python", "CNN-RNN", "MERN", "Flask"],
      image: "/image-captioning.png",
      liveLink: "https://github.com/Duttresh1312/Image-Captioning"
    },
    {
      id: 4,
      title: "Data Science Project Collection",
      description: "This is a collection of hands-on projects I built while learning data science and machine learning concepts. Each notebook focuses on one key idea, from regression and clustering to classification and market segmentation, with practical examples and datasets included.",
      category: "Data Science",
      skills: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
      image: "/data-science-project-collection.png",
      githubLink: "https://github.com/Duttresh1312/Data_science"
    },
  ];

  const categories = ['All', 'Data Science', 'ML/DL', 'Dashboard'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of Data Science, Machine Learning, and Analytics projects
          </p>
        </div>



        {/* Category Filter */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-background text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group transition-transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-secondary">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-primary/80 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 4h16v12H4V4zm2 2v8h12V6H6z"/>
                        </svg>
                      </div>
                      <div className="text-xs">Project Image</div>
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay with Live Demo Icon */}
                {project.liveLink && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'Data Science' ? 'bg-primary/10 text-primary' :
                    project.category === 'ML/DL' ? 'bg-secondary/10 text-secondary' :
                    project.category === 'Dashboard' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 4).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-background text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 4 && (
                    <span className="px-2 py-1 bg-background text-gray-500 text-xs rounded">
                      +{project.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/Duttresh1312" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>


      </div>
    </section>
  );
};

export default Projects;
