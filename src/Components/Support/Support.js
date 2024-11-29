import React, { useState } from 'react';
import { FaRegComments, FaHandsHelping, FaDonate, FaUsers } from 'react-icons/fa';

function Support() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission, like sending it to a server
    console.log(feedback);
    setFeedback('');
  };

  return (
    <div className="w-full px-6 py-12 bg-gray-50 font-poppins mt-14">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 md:text-5xl">
          How You Can Help
        </h2>
        <p className="text-lg text-center text-gray-600">
          Join us in creating an inclusive future for all learners.
        </p>

        {/* Call for Feedback Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center text-2xl font-semibold text-pink-600">
            <FaRegComments className="mr-3 text-xl" /> Share Your Feedback
          </h3>
          <p className="mt-2 text-gray-600">
            Your thoughts and ideas can help us improve and make this vision a reality. Let us know how we can make this platform better!
          </p>
          <form onSubmit={handleFeedbackSubmit} className="mt-6 space-y-4">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts here..."
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Collaborator Opportunities Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center text-2xl font-semibold text-pink-600">
            <FaHandsHelping className="mr-3 text-xl" /> Collaborator Opportunities
          </h3>
          <p className="mt-2 text-gray-600">
            Are you an educator, parent, or developer? Let's work together to build a platform that meets the needs of all students.
          </p>
          <p className="mt-4 text-gray-600">
            We’re looking for individuals and organizations passionate about inclusive education to help shape this platform.
          </p>
          <button
            className="px-6 py-2 mt-4 text-white bg-pink-600 rounded-md hover:bg-pink-700"
            onClick={() => alert('We’ll be in touch soon!')}
          >
            Get Involved
          </button>
        </div>

        {/* Donation Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="flex items-center text-2xl font-semibold text-pink-600">
            <FaDonate className="mr-3 text-xl" /> Make a Difference
          </h3>
          <p className="mt-2 text-gray-600">
            Help us make this platform a reality. Every contribution counts, and together, we can provide accessible learning for everyone.
          </p>
          <button
            className="px-6 py-3 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700"
            onClick={() => alert('Thank you for your generosity!')}
          >
            Donate Now
          </button>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="flex items-center justify-center text-3xl font-semibold text-gray-800">
            <FaUsers className="mr-3 text-xl" /> Partner with Us for an Inclusive Future
          </h2>
          <p className="mt-4 text-gray-600">
            We believe that inclusive education is key to building a more accessible future. Partner with us to make a lasting impact.
          </p>
          <button
            className="px-6 py-3 mt-4 text-white bg-pink-600 rounded-md shadow-lg hover:bg-pink-700"
            onClick={() => alert('We are excited to collaborate with you!')}
          >
            Partner with Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Support;
