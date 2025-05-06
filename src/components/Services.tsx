import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Cloud, Share2, Palette } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: 'Web Hosting',
    description: 'High-performance hosting solutions tailored to your needs',
    features: ['Shared Hosting', 'VPS Solutions', 'Dedicated Servers', '24/7 Support']
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: 'Website Development',
    description: 'Custom web solutions that drive business growth',
    features: ['E-commerce', 'Corporate Sites', 'Web Applications', 'API Integration']
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    title: 'IT Solutions',
    description: 'Comprehensive IT services for modern businesses',
    features: ['Cloud Computing', 'Cybersecurity', 'System Integration', 'IT Maintenance']
  },
  {
    icon: <Share2 className="w-8 h-8 text-blue-500" />,
    title: 'Social Media Management',
    description: 'Strategic social media solutions for brand growth',
    features: ['Content Creation', 'Campaign Management', 'Analytics', 'Community Building']
  },
  {
    icon: <Palette className="w-8 h-8 text-blue-500" />,
    title: 'Graphic Design',
    description: 'Creative design solutions that capture attention',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Logo Design']
  }
  ,
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    title: 'Mobile App Development',
    description: 'Modern mobile solutions for iOS and Android platforms',
    features: ['Native Apps', 'Cross-platform Development', 'App Maintenance', 'Performance Optimization']
  }
];

export default function Services() {
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
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}