import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Zap } from 'lucide-react';

const stats = [
  { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Clients Served' },
  { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Awards Won' },
  { icon: <Zap className="w-6 h-6" />, value: '1000+', label: 'Projects Completed' },
  { icon: <Target className="w-6 h-6" />, value: '99%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About ALMA TECH
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Since 2015, we've been at the forefront of digital innovation, helping businesses transform 
              their digital presence and achieve unprecedented growth. Our team of experts combines creativity 
              with technical excellence to deliver solutions that exceed expectations.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance efficiency, and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To be the leading technology partner for businesses worldwide, known for innovation, 
                reliability, and exceptional service delivery.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <img
                className="rounded-lg "
                src="/img/staff.jpg"
                alt="Team collaboration"
              />
              <div className="absolute inset-0 bg-gradient-to-r mix-blend-multiply rounded-lg"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center text-blue-500 mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}