import React from 'react';
import { Link } from 'react-router';
import anomalydash from './assests/anomali_dash.png';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" fill="rgba(134, 195, 239, 0.41)" stroke="rgba(30, 37, 233, 0.3)" />
    <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" stroke="rgba(0, 85, 255, 1)" />
  </svg>
);

const AnomalyDashboardFeature = () => {
  const features = [
    "Detect full solar panal failers.",
    "Identyfy weather anomalies.",
    "Performance degradation tracking",
    "Predictive maintenance insights"
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden my-12 md:my-20 lg:my-30">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
        
        <div className="flex-shrink-0 w-full lg:w-[45%] px-4 md:px-8 lg:pr-16 xl:pr-24 2xl:pr-32 lg:pl-0 order-1 lg:order-1">
          <div className="max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight mb-6 md:mb-8">
              Our intelligent Anomaly Detection System monitors your solar panels 24/7, 
              identifying issues before they become costly problems and ensuring your 
              system always performs at peak efficiency.
            </h2>
            
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard/anomalies">
              <button 
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-sm"
              >
                View Anomaly Dashboard
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full lg:w-[55%] px-4 lg:px-0 order-2 lg:order-2">
          <div className="relative lg:-ml-32 xl:-ml-48 2xl:-ml-64">
            <div className="rounded-2xl lg:rounded-l-none overflow-hidden border-2 lg:border-r-2 lg:border-t-2 lg:border-l-0 lg:border-b-0 border-gray-300 bg-white">
              <img 
                src={anomalydash} 
                alt="Anomaly Detection Dashboard" 
                className="w-full h-auto object-cover object-right"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AnomalyDashboardFeature;
