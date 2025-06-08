import React from 'react';
import { FileText, Shield, CheckCircle, Smartphone } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Documents",
      description: "Upload property documents, survey reports, and ownership certificates through our secure platform."
    },
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Our system validates documents against government records and creates an immutable blockchain entry."
    },
    {
      icon: CheckCircle,
      title: "Digital Certificate",
      description: "Receive a tamper-proof digital ownership certificate with unique blockchain signature."
    },
    {
      icon: Smartphone,
      title: "Instant Access",
      description: "Anyone can verify ownership instantly using our mobile app or web platform worldwide."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-green-600">LandTrust™</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process transforms traditional land registration into a secure, 
            transparent blockchain-based system in just four simple steps.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-blue-200">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
            Start Verification Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;