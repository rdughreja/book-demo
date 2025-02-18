import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6 pt-20">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src="https://via.placeholder.com/1500x500" 
            alt="Decorative header"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>
        <div className="p-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
            Welcome to <strong>Our Divine Bookstore</strong>, your trusted partner in academic excellence! We specialize in providing high-quality educational books for students from Grade 1 to 12, ensuring they have the right resources to succeed in their learning journey.
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are?</h2>
            <p className="text-gray-600 leading-relaxed">
              At Our Divine Bookstore, we believe that education is the foundation of a bright future. Our carefully curated collection of books covers a wide range of subjects, helping young minds build knowledge, confidence, and a love for learning. Whether it’s textbooks, reference guides, or practice workbooks, we strive to make quality education accessible to every student.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer?</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Textbooks & Curriculum Books</strong> – Aligned with school syllabi to support academic learning.</li>
              <li><strong>Reference & Guide Books</strong> – Additional learning materials for better understanding.</li>
              <li><strong>Workbooks & Practice Papers</strong> – Reinforce concepts with exercises and mock tests.</li>
              <li><strong>Olympiad & Competitive Exam Books</strong> – Specialized materials for students preparing for academic competitions.</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to provide students, parents, and educators with the best academic resources to enhance learning, boost performance, and encourage curiosity. We are committed to making education engaging and effective for all learners.
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-lg">
              Visit our bookstore or explore our collection online to find the perfect books for your academic needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
