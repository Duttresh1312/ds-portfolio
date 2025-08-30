import React, { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const skillCategories: SkillCategory[] = [
    {
      id: 'technical',
      title: 'Technical Skills',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'R', icon: '📊' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Matplotlib', icon: '📈' },
        { name: 'Seaborn', icon: '🌊' },
        { name: 'TensorFlow', icon: '🤖' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'Scikit learn', icon: '🧠' },
        { name: 'Hadoop', icon: '🐘' },
        { name: 'Apache Spark', icon: '⚡' },
        { name: 'Hive', icon: '🍯' }
      ]
    },
    {
      id: 'core',
      title: 'Core Skills',
      skills: [
        { name: 'Data Science', icon: '🔬' },
        { name: 'Data Analysis', icon: '📊' },
        { name: 'Feature Engineering', icon: '⚙️' },
        { name: 'Regression', icon: '📈' },
        { name: 'Classification', icon: '🎯' },
        { name: 'Clustering', icon: '🔵' },
        { name: 'Time Series Forecasting', icon: '⏰' },
        { name: 'Statistical Modelling', icon: '📐' },
        { name: 'Hypothesis Testing', icon: '🧪' },
        { name: 'Data Storytelling', icon: '📚' },
        { name: 'Model Building', icon: '🏗️' },
        { name: 'Model Evaluation', icon: '✅' },
        { name: 'Problem Solving', icon: '🧩' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platform',
      skills: [
        { name: 'Power BI', icon: '📊' },
        { name: 'Tableau', icon: '📈' },
        { name: 'RStudio', icon: '📱' },
        { name: 'MySQL', icon: '🗃️' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Jupyter Notebook', icon: '📓' },
        { name: 'Microsoft Excel', icon: '📋' },
        { name: 'Microsoft Office', icon: '🏢' },
        { name: 'Git', icon: '🔀' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Notion', icon: '📝' },
        { name: 'Cursor AI', icon: '🤖' }
      ]
    }
  ];

  const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern data science and machine learning
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                <span className="text-base">
                  {category.id === 'technical' ? '💻' : 
                   category.id === 'core' ? '⚙️' : '🔧'}
                </span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {activeCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-xs font-medium text-gray-800 text-center leading-tight">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
