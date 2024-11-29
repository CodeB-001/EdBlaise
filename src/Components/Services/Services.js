import React, { useState } from 'react';
import '@fontsource/poppins';
import { FaExclamationTriangle, FaTools, FaClipboardCheck, FaHandsHelping } from 'react-icons/fa';
import { GiSkills, GiPlatform } from 'react-icons/gi';
import signLanguageVideo from './put.mp4';
import dashboardMockup from './zidi.webp';

function Services() {
  // const [text, setText] = useState('');
  const [speech, setSpeech] = useState('');

  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(speech);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full px-6 py-12 mt-14 bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 md:text-5xl">
          What We’re Building
        </h2>
        <p className="text-lg text-center text-gray-600">
          Our platform focuses on making education accessible and engaging for everyone.
        </p>

        {/* Feature Highlights Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Sign Language Lessons */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600">Sign Language Lessons</h3>
            <video
              src={signLanguageVideo}
              controls
              className="w-full mt-4 rounded-md shadow-sm"
              alt="Sign Language Lesson Demo"
            />
          </div>

          {/* Text-to-Speech Tool */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600">Text-to-Speech Tool</h3>
            <textarea
              value={speech}
              onChange={(e) => setSpeech(e.target.value)}
              placeholder="Type something to hear it read aloud..."
              className="w-full h-24 p-3 mt-4 border rounded-md focus:border-pink-500 focus:outline-none"
            ></textarea>
            <button
              onClick={handleTextToSpeech}
              className="w-full px-4 py-2 mt-2 text-white bg-pink-600 rounded-md hover:bg-pink-700"
            >
              Listen
            </button>
          </div>

          {/* Interactive Learning */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600">Interactive Learning</h3>
            <img
              src={dashboardMockup}
              className="w-full mt-4 rounded-md shadow-sm"
              alt="Interactive Learning Mockup"
            />
            <p className="mt-2 text-gray-600">Explore gamified lessons designed for engagement.</p>
          </div>

          {/* Customizable Dashboard */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600">Customizable Dashboard</h3>
            <img
              src={dashboardMockup}
              className="w-full mt-4 rounded-md shadow-sm"
              alt="Customizable Dashboard"
            />
            <p className="mt-2 text-gray-600">
              Tailored to adapt to individual needs for a personalized experience.
            </p>
          </div>
        </div>

        {/* Interactive Section - Problem & Solution */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Our Solution</h2>
          <div className="grid gap-8 mt-8 lg:grid-cols-2">
            {/* Problems */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-red-500">The Problem</h3>
              <ul className="mt-4 space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <FaExclamationTriangle className="text-red-500" />
                  Accessibility Gap: Lack of tailored educational content.
                </li>
                <li className="flex items-center gap-3">
                  <GiPlatform className="text-red-500" />
                  Inadequate Platforms: Missing diverse disability features.
                </li>
                <li className="flex items-center gap-3">
                  <FaTools className="text-red-500" />
                  Limited Tools: No comprehensive tools for various challenges.
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-500">The Solution</h3>
              <ul className="mt-4 space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <FaHandsHelping className="text-green-500" />
                  Specialized Platform: Designed for different disabilities.
                </li>
                <li className="flex items-center gap-3">
                  <GiSkills className="text-green-500" />
                  Inclusive Features: Sign language, text-to-speech, and gamified lessons.
                </li>
                <li className="flex items-center gap-3">
                  <FaClipboardCheck className="text-green-500" />
                  Personalized Learning: Customizable schedules and lesson plans.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Support the Development of These Tools</h2>
          <p className="mt-2 text-gray-600">
            Join us in making education accessible for all abilities.
          </p>
          <button className="px-6 py-3 mt-4 text-white bg-pink-600 rounded-md shadow-lg hover:bg-pink-700">
            Learn How to Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
