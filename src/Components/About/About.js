import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaVolumeUp, FaGamepad, FaChalkboardTeacher, FaUserCircle } from 'react-icons/fa';
import { IoAccessibilitySharp } from 'react-icons/io5';
import { MdBuild, MdAccessibility } from 'react-icons/md';

import stress1 from './stre2.jpeg';
import stress2 from './stress.webp';
import limit from './lack.jpeg';
import sign1 from './sign.jpeg';
import game from './gam2.webp';
import speaker from './speak.jpeg';
import personal from './person.jpeg';

const About = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100">
      <div className="p-8 mx-auto bg-white rounded-lg shadow-lg max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 text-5xl font-bold text-center text-gray-800">
            Why This Matters
          </h1>
          <h2 className="text-xl font-semibold text-center text-gray-600 mb-28">
            Transforming education with innovative solutions tailored for everyone.<br />
            Our platform bridges the gap and sets a new{' '}
            <span className="text-pink-500">standard of inclusivity and engagement.</span>
          </h2>
        </motion.div>

        {/* Problem Statement Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-700"
          >
            <IoAccessibilitySharp className="mr-2 text-pink-500" />
            The Problem
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Individual Cards */}
            {[
              {
                icon: <IoAccessibilitySharp className="mb-4 text-4xl text-pink-500" />,
                title: 'Accessibility Gap',
                img: stress1,
                desc: 'Many individuals face barriers to accessing quality educational tools.',
              },
              {
                icon: <MdAccessibility className="mb-4 text-4xl text-pink-500" />,
                title: 'Inadequate Platforms',
                img: stress2,
                desc: 'Current solutions lack inclusivity and adaptability for diverse needs.',
              },
              {
                icon: <MdBuild className="mb-4 text-4xl text-pink-500" />,
                title: 'Limited Tools',
                img: limit,
                desc: 'Existing tools fail to offer specialized features for personalized learning.',
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                className="p-6 text-left rounded-md shadow-md bg-gray-50 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {problem.icon}
                <h3 className="mb-4 text-lg font-semibold text-gray-700">{problem.title}</h3>
                <img src={problem.img} alt={problem.title} className="mb-4 rounded-md shadow" />
                <p className="text-gray-600">{problem.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-700"
          >
            <FaHandsHelping className="mr-2 text-pink-500" />
            Our Solution
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaChalkboardTeacher className="mb-4 text-3xl text-pink-500" />,
                title: 'Sign Language Lessons',
                img: sign1,
                desc: 'Learn and communicate effectively using interactive lessons designed to teach sign language step by step.',
              },
              {
                icon: <FaVolumeUp className="mb-4 text-3xl text-pink-500" />,
                title: 'Text-to-Speech Tools',
                img: speaker,
                desc: 'Transform written content into natural-sounding speech to enhance accessibility for everyone.',
              },
              {
                icon: <FaGamepad className="mb-4 text-3xl text-pink-500" />,
                title: 'Gamified Content',
                img: game,
                desc: 'Engage with interactive games that make learning fun and effective, tailored to diverse needs.',
              },
              {
                icon: <FaUserCircle className="mb-4 text-3xl text-pink-500" />,
                title: 'Personalized Learning',
                img: personal,
                desc: 'Access learning tools and content customized to your unique requirements and preferences.',
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="p-6 text-left rounded-md shadow-md bg-gray-50 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {solution.icon}
                <h3 className="mb-2 text-lg font-semibold text-gray-700">{solution.title}</h3>
                <img src={solution.img} alt={solution.title} className="mb-4 rounded-md shadow" />
                <p className="mb-4 text-gray-600">{solution.desc}</p>
                <button className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded hover:bg-pink-600">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-left"
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Join Us</h2>
          <p className="mb-6 text-gray-600">
            Help us make education accessible for everyone. Together, we can bridge the gap and create a better future.
          </p>
          <button className="px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-full shadow-md hover:bg-pink-600">
            Get Involved
          </button>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
