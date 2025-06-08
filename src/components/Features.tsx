import React from 'react';
import { Database, Lock, Search, Users, MapPin, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Blockchain Registry",
      description: "Immutable land records stored on distributed blockchain network with cryptographic security."
    },
    {
      icon: Lock,
      title: "Smart Contracts",
      description: "Automated ownership transfers and verification processes with built-in legal compliance."
    },
    {
      icon: Search,
      title: "Instant Verification",
      description: "Real-time property ownership lookup and validation accessible to anyone, anywhere."
    },
    {
      icon: Users,
      title: "Multi-Party Authentication",
      description: "Government agencies, legal professionals, and citizens all participate in verification."
    },
    {
      icon: MapPin,
      title: "GPS Integration",
      description: "Precise property boundaries linked to blockchain records with satellite mapping."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Access",
      description: "Full functionality available on smartphones for rural and urban users alike."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="text-blue-600">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge blockchain infrastructure to provide the most secure and transparent 
            land ownership system Africa has ever seen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;