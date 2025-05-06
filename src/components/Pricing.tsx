import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, CreditCard, Phone } from 'lucide-react';

interface Plan {
  name: PlanName;
  price: number;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
}

type PlanName = 'Starter' | 'Professional' | 'Enterprise';

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for small businesses just getting started',
    features: [
      'Basic Website Development',
      'Shared Hosting', 
      'Email Support',
      '5 Pages',
      'Basic SEO',
      'Monthly Reports',
    ],
    notIncluded: [
      'Custom Design',
      'E-commerce Features', 
      'Priority Support',
      'Advanced Analytics',
    ]
  },
  {
    name: 'Professional',
    price: 199,
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      'Advanced Website Development',
      'VPS Hosting',
      'Priority Email Support',
      '10 Pages',
      'Advanced SEO',
      'Weekly Reports',
      'Custom Design',
      'Basic E-commerce',
    ],
    notIncluded: [
      '24/7 Support',
      'Advanced Analytics',
    ]
  },
  {
    name: 'Enterprise',
    price: 399,
    description: 'For large organizations with complex needs',
    features: [
      'Custom Website Development',
      'Dedicated Hosting',
      '24/7 Support',
      'Unlimited Pages',
      'Premium SEO',
      'Daily Reports',
      'Custom Design',
      'Advanced E-commerce',
      'Advanced Analytics',
      'Custom Integrations',
    ],
    notIncluded: []
  }
];

export default function Pricing() {
  const handleGetStarted = (plan: Plan) => {
    // Format the message with plan details
    const message = `Hi! I'm interested in the ${plan.name} Plan.\n\n` +
      `Plan Details:\n` +
      `- Price: $${plan.price}/month\n` +
      `- Description: ${plan.description}\n\n` +
      `Included Features:\n${plan.features.map(f => `- ${f}`).join('\n')}\n\n` +
      `Please contact me to get started!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp business number - replace with your actual number
    const phoneNumber = '254792837410';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400 dark:text-gray-500">
                      <X className="h-5 w-5 text-red-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleGetStarted(plan)}
                  className={`mt-8 w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                  }`}
                >
                  Get Started on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}