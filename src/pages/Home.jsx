import React from 'react';
import { Link } from 'react-router-dom';
import consultationImage from '../assets/images/consultation.jpg';
import installationImage from '../assets/images/installation.jpg';
import heroImage from '../assets/images/solar-hero.jpg'; // Update with your hero section image

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${heroImage})`,
        }}
      >
        <div className="text-center space-y-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Empowering Kenyans with Solar Solutions
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl mx-auto">
            Reliable, affordable, and sustainable energy for homes and businesses.
          </p>
          <div className="space-x-4">
            <Link
              to="/consultation"
              className="bg-green-300 hover:bg-green-400 text-green-800 py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8" data-aos="fade-right">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Consultation",
              image: consultationImage,
              description: "Personalized advice tailored to your energy needs.",
              link: "/consultation",
            },
            {
              title: "Installation",
              image: installationImage,
              description: "Expert solar panel and battery installations.",
              link: "/installation",
            },
          ].map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="service-card group relative overflow-hidden rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8" data-aos="fade-left">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Nathan C.",
              feedback: "Reiko Solar transformed our home. Highly recommend!",
            },
            {
              name: "Dennis K.",
              feedback: "Affordable and reliable solar solutions. Excellent service!",
            },
            {
              name: "Festus Y.",
              feedback: "The team was professional and the system works perfectly.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card p-6 bg-white rounded-md shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-green-600 font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-600 py-12 text-center text-lg text-gray-700 mb-8">
        <h3 className="text-3xl font-bold text-center text-green-600 mb-8" data-aos="fade-left">
          Ready to Go Solar?
        </h3>
        <Link
          to="/consultation"
          className="bg-green-300 hover:bg-green-400 text-green-800 py-3 px-6 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="zoom-in"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  );
};

export default Home;
