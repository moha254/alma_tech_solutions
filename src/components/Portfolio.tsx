import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Custom e-commerce solution with advanced features and seamless payment integration.',
    details: {
      client: 'Fashion Retailer',
      duration: '6 months',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Product catalog management',
        'Secure payment processing',
        'Order tracking system',
        'Customer reviews'
      ]
    }
  },
  {
    title: 'Cloud Infrastructure',
    category: 'IT Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Enterprise-level cloud infrastructure setup with robust security measures.',
    details: {
      client: 'Tech Enterprise',
      duration: '4 months',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      features: [
        'Auto-scaling architecture',
        'Disaster recovery',
        'Security compliance',
        'Performance monitoring'
      ]
    }
  },
  {
    title: 'Brand Identity',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Complete brand identity design including logo, guidelines, and marketing materials.',
    details: {
      client: 'Startup Company',
      duration: '2 months',
      technologies: ['Adobe Creative Suite', 'Figma'],
      features: [
        'Logo design',
        'Brand guidelines',
        'Marketing collateral',
        'Social media templates'
      ]
    }
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Successful social media campaign that increased engagement by 300%.',
    details: {
      client: 'Lifestyle Brand',
      duration: '3 months',
      technologies: ['Meta Business Suite', 'Hootsuite', 'Canva'],
      features: [
        'Content strategy',
        'Engagement analytics',
        'Influencer partnerships',
        'Paid advertising'
      ]
    }
  },
  {
    title: 'SaaS Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Modern SaaS platform with advanced analytics and user management.',
    details: {
      client: 'Analytics Company',
      duration: '8 months',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      features: [
        'Real-time analytics',
        'User management',
        'API integration',
        'Custom reporting'
      ]
    }
  },
  {
    title: 'Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Cross-platform mobile app with real-time synchronization.',
    details: {
      client: 'Fitness Startup',
      duration: '5 months',
      technologies: ['React Native', 'Firebase', 'Redux'],
      features: [
        'Cross-platform compatibility',
        'Offline functionality',
        'Push notifications',
        'Social features'
      ]
    }
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Showcasing our best work across different industries and technologies.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mt-4"
                />
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Client</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedProject.details.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Duration</h4>
                    <p className="text-gray-600 dark:text-gray-400">{selectedProject.details.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.details.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {selectedProject.details.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}