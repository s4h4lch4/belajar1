import { Instagram, Linkedin } from "lucide-react";
import emailjs from "emailjs-com"; // We'll use EmailJS for email sending
import React, { useState } from "react";

const PortfolioWebsite = () => {
  // Set up state for the form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // For feedback messages
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle button state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    // Call EmailJS service to send the form data to your email
    emailjs
      .send(
        "service_1czvm6r", // Your EmailJS service ID
        "template_wrlgqr4", // Your EmailJS template ID
        {
          name: formData.name, // Pass template variable for name
          email: formData.email, // Pass template variable for email
          message: formData.message, // Pass template variable for message
        },
        "hZVtKIrT5Q2N3JWq_" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Message Sent: ", result.text);
          setStatusMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form after success
        },
        (error) => {
          console.log("Error: ", error.text);
          setStatusMessage("Oops! Something went wrong.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Hi, I'm Sayed Hafidh</h1>
          <p className="text-xl mt-4">SME's consultant | Learner | Problem Solver</p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://Instagram.com/hfdhsyd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-md"
            >
              <Instagram className="mr-3" size={20} /> Instagram
            </a>
            <a
              href="https://linkedin.com/in/sayedhafidh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-md"
            >
              <Linkedin className="mr-3" size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            I'm a passionate consultant with expertise in Marketing and Business Planning. I
            love creating intuitive and efficient business solutions that solve
            problems. My journey in business is driven by curiosity and
            a constant desire to learn and grow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Business Planning</li>
                <li>Business Development</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p className="text-gray-400">
                Sarjana Ekonomi (International Management Program)
                <br />
                Universitas Syiah Kuala
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">My Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 text-center">
            {Array.from({ length: 1 }, (_, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow "
              >
                <h3 className="text-xl font-bold mb-4" >Project Based Associate Consultant - SKHA Consulting </h3>
                <p className="text-gray-400 mb-4">
                  Collaborated with the team to analyze internal and external factors, including 
                  market trends, competitive landscape, and organizational capabilities, to develop 
                  the company’s Rencana Jangka Panjang Perusahaan (RJPP) (Corporate Long-Term Plan). 
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-white rounded-lg shadow-md focus:outline-none transition ${isSubmitting ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-500"}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {statusMessage && (
            <p className="mt-4 text-gray-400">{statusMessage}</p>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2024 Sayed Hafidh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
