import React from "react";
import { Code, Globe, Smartphone, Database, Cloud, Cog } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description:
        "Bespoke software solutions tailored to your business processes and requirements.",
      features: [
        "Enterprise Applications",
        "API Development",
        "System Integration",
        "Legacy Modernization",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications that engage your audience.",
      features: [
        "React/Next.js Apps",
        "E-commerce Platforms",
        "CMS Development",
        "Progressive Web Apps",
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description:
        "Scalable database design, optimization, and management services.",
      features: [
        "Database Design",
        "Performance Optimization",
        "Data Migration",
        "Analytics Setup",
      ],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description:
        "Cloud infrastructure setup, migration, and optimization for scalability.",
      features: [
        "AWS/Azure/GCP",
        "DevOps & CI/CD",
        "Infrastructure as Code",
        "Cloud Migration",
      ],
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Technical Consulting",
      description:
        "Strategic technology guidance to help you make informed decisions.",
      features: [
        "Architecture Review",
        "Technology Strategy",
        "Code Audits",
        "Team Training",
      ],
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final deployment, we provide end-to-end
            technology services that drive your business forward.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ delay: index * 0.2 }} // stagger effect
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="text-blue-700 mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
