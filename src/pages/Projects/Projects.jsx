import React, { useEffect } from 'react';
import Card from '../../components/GlassCard';
import data from '../../data.json';

const Projects = () => {
  // Add scroll animation effect
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Render a section for each category with its filtered projects
  const renderProjectSection = (categoryName, projects) => (
    <div className="mb-16" key={categoryName}>
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 text-center mb-16">
        {categoryName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card opacity-0 transform transition-all duration-700 hover:scale-105"
          >
            <Card 
              title={project.title}
              description={project.description}
              points={project.points}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );

  // Get categories and project data from JSON
  const categories = data.Projects.Categories; // e.g., { "defence_surveillance": "Defence and Surveillance", ... }
  const projects = data.Projects.ProjectData; // All project objects

  // Create a section for each category by filtering projects that include the categoryId
  const categorySections = Object.entries(categories).map(([categoryId, categoryName]) => {
    const projectsInCategory = projects.filter(project => project.categoryIds.includes(categoryId));
    if (projectsInCategory.length === 0) return null;
    return renderProjectSection(categoryName, projectsInCategory);
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black p-4 py-6">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Glowing orb decorations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        {/* Main Title */}
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 text-center mb-16">
          <span className="inline-block animate-text-shimmer">PROJECTS</span>
        </h1>

        {/* Render dynamically grouped project sections */}
        {categorySections}

        {/* Advanced Robots Section */}
        <h2 className="text-6xl font-bold mt-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 text-center mb-16">
          {/* <span className="inline-block animate-text-shimmer">ADVANCED ROBOTS</span> */}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.Projects.AdvancedRobotsData && data.Projects.AdvancedRobotsData.map((robot, index) => (
            <div 
              key={index} 
              className="project-card opacity-0 transform transition-all duration-700 hover:scale-105"
            >
              <Card 
                title={robot.title}
                description={robot.description}
                points={robot.points}
                image={robot.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
