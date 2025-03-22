import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-16 text-gray-900">
        {/* About Section */}
        <section className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-extrabold text-blue-600">Who We Are</h2>
          <p className="mt-4 text-lg">We are a passionate team dedicated to providing top-quality services to our customers worldwide.</p>
        </section>
        
        {/* Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-500">Web Development</h3>
            <p className="mt-2">Building scalable and modern web applications tailored to your needs.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-500">SEO & Marketing</h3>
            <p className="mt-2">Boost your online presence with our expert SEO strategies.</p>
          </div>
        </section>
        
        {/* Company Policy Section */}
        <section className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold text-blue-600">Our Commitment</h2>
          <p className="mt-2">We prioritize customer satisfaction, innovation, and integrity in all our services.</p>
        </section>
        
        {/* Newsletter Section */}
        <section className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-600">Stay Updated</h2>
          <p className="mt-2">Subscribe to our newsletter for the latest updates and offers.</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-2 border rounded-l-lg focus:outline-none" />
            <button className="p-2 bg-blue-600 text-white rounded-r-lg">Subscribe</button>
          </div>
        </section>
        
        {/* Unique Section (Testimonials) */}
        <section className="text-center bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-600">What Our Clients Say</h2>
          <p className="mt-2 italic">"This team transformed our business with an amazing website! Highly recommended."</p>
        </section>
      </div>
    );
};

export default AboutPage;
