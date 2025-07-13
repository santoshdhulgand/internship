import React, { useState } from "react";
import InternshipForm from "./components/InternshipForm";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Internship Program at Skills IT Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Launch your career with hands-on experience in a dynamic
            environment. Work with cutting-edge technologies and learn from
            industry experts.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-lg px-8 py-3"
          >
            Apply for Internship
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card
            icon="💡"
            title="Learn & Grow"
            description="Gain practical experience and develop your skills with real-world projects"
          />
          <Card
            icon="🤝"
            title="Mentorship"
            description="Work alongside experienced professionals who will guide your development"
          />
          <Card
            icon="🚀"
            title="Career Launch"
            description="Build your portfolio and kickstart your professional journey"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Internship Application"
      >
        <InternshipForm />
      </Modal>
    </div>
  );
}

export default App;
