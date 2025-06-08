import React from 'react';
import { Building2, Code, Users } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Government Agencies",
      subtitle: "Land Registries & Ministries",
      benefits: [
        "Reduce bureaucratic fraud by 95%",
        "Streamline property registration process",
        "Increase transparency and citizen trust",
        "Generate additional revenue streams"
      ],
      cta: "Schedule Government Demo"
    },
    {
      icon: Users,
      title: "Private Investors",
      subtitle: "Impact & Venture Capital",
      benefits: [
        "Address $4.5B annual land fraud market",
        "Scale across 54 African countries",
        "Strong social impact ROI",
        "Government-backed security"
      ],
      cta: "Investment Opportunity"
    }
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-blue-600">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LandTrust™ creates value for governments, technology partners, and investors 
            while solving Africa's most pressing land ownership challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 font-medium">{audience.subtitle}</p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {audience.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;