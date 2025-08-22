import React from "react";
import { CheckCircle, Award, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified developers with 2+ years of experience",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Tailored Solutions",
      description: "Custom software built specifically for your business needs",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description: "Consistent track record of meeting project deadlines",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing ensures bug-free, reliable software",
    },
  ];

  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="space-y-4" variants={fadeUp}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                About CodeAxis
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Building Digital Excellence Since 2024
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a premier software development and web consulting firm
                dedicated to transforming businesses through innovative
                technology solutions. Our team of experienced developers,
                designers, and consultants work collaboratively to deliver
                exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprise-level organizations, we've helped
                companies streamline operations, enhance user experiences, and
                achieve sustainable growth through strategic technology
                implementations.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex space-x-4"
                  variants={fadeUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.img
              variants={fadeUp}
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To empower businesses with cutting-edge technology solutions
                that drive innovation, efficiency, and sustainable growth in the
                digital age.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
