import React from 'react';
import { TrendingUp, Users, MapPin, DollarSign } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    {
      icon: DollarSign,
      number: "$4.5B",
      label: "Annual Land Fraud Losses Prevented",
      description: "Protecting African families from fraudulent land deals"
    },
    {
      icon: Users,
      number: "50M+",
      label: "People Protected",
      description: "Secure property rights for millions across Africa"
    },
    {
      icon: MapPin,
      number: "15",
      label: "Countries Ready",
      description: "Government partnerships in progress"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Fraud Reduction",
      description: "Proven effectiveness in pilot programs"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming <span className="text-green-600">Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our impact goes beyond technology - we're building a foundation for economic 
            growth, social justice, and property security across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The Land Fraud Crisis in Africa
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-gray-900">60% of land disputes</strong> in Africa stem from fraudulent ownership claims, 
                  affecting millions of families and small businesses.
                </p>
                <p>
                  Traditional paper-based systems are easily forged, corrupted, or lost, 
                  leaving property owners vulnerable to theft and legal battles.
                </p>
                <p>
                  <strong className="text-gray-900">LandTrust™ changes everything</strong> by providing immutable, 
                  transparent records that protect genuine owners and prevent fraud.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Success Story: Ghana Pilot</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Land disputes reduced:</span>
                  <strong>89%</strong>
                </div>
                <div className="flex justify-between">
                  <span>Registration time:</span>
                  <strong>24 hours</strong>
                </div>
                <div className="flex justify-between">
                  <span>Cost savings:</span>
                  <strong>70%</strong>
                </div>
                <div className="flex justify-between">
                  <span>User satisfaction:</span>
                  <strong>96%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;