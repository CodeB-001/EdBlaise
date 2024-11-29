import React from 'react';
import video from './zidi.webp';
import Footer from '../Footer/Footer';
import '@fontsource/poppins';
import '@fontsource/poppins/600.css';
import About from '../About/About';
import Support from '../Support/Support';
import Services from '../Services/Services';
import Contact from '../Contacts/Contact';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative w-full h-screen font-poppins">
      {/* Background Video/Image */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={video}
          className="object-cover w-full h-full brightness-50"
          alt="hero background"
        />
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center w-full h-full px-6 lg:px-20">
        <motion.div 
          className="space-y-6 text-center md:space-y-8 lg:space-y-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Headline */}
          <motion.h1
            className="text-3xl font-semibold text-white md:text-5xl xl:text-6xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            Inclusive Education for <br />
            <span className="block text-4xl md:text-6xl xl:text-7xl text-[#ee947a]">
              All Abilities
            </span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            className="max-w-3xl mx-auto text-sm text-gray-200 md:text-base lg:text-lg xl:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Our vision for an accessible learning platform tailored for students with disabilities
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            className="px-8 py-3 mt-4 text-sm text-white transition duration-300 bg-pink-500 rounded-md shadow-lg md:text-base lg:text-lg hover:bg-pink-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn About the Project
          </motion.button>
        </motion.div>
      </div>

      {/* Sections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        
      </motion.div>

      {/* Footer Section */}
       <About />
        <Services />
        <Support />
        <Contact />
      <Footer />
    </div>
  );
}

export default Home;
