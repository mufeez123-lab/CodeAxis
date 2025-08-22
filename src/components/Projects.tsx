import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    
      category: "Web Development"
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with appointment scheduling and medical records.",
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=800",

      category: "Enterprise Software"
    },
    {
  title: "Small Business Websites",
  description: "Affordable and responsive websites tailored for small businesses, including blogs, portfolios, and service showcases.",
  image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",

  category: "Web Development"
},
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and CRM integration.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
    
      category: "Web Development"
    },
    {
      title: "Inventory Management",
      description: "Cloud-based inventory tracking system with barcode scanning and automated reordering.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    
      category: "Enterprise Software"
    },
    {
      title: "Learning Management System",
      description: "Online education platform with video streaming, progress tracking, and certification system.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    
      category: "Web Development"
    },
   

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
            Our Portfolio
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Projects & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve 
            their digital transformation goals through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                
               
                
                <div className="flex space-x-4 pt-4 border-t border-gray-100">
                  {/* <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium">
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </button> */}
                  {/* <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium">
                    <Github className="h-4 w-4" />
                    <span>Case Study</span>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;