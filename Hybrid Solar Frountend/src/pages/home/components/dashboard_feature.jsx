import React from 'react';
import dashboardImg from './assests/dashboard.webp';
import Button from '@/components/home/button3';

// Check icon component
const CheckIcon = () => (
  <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" fill="rgba(134, 195, 239, 0.41)" stroke="rgba(30, 37, 233, 0.3)" />
    <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" stroke="rgba(0, 85, 255, 1)" />
  </svg>
);

const DashboardFeature = () => {
  const features = [
    "Real-time energy tracking",
    "Anomaly alerts",
    "Historical performance reports",
    "Remote diagnostics & support"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex-shrink-0 w-full lg:w-[45%] px-4 md:px-8 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-0">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-2xl font-semibold text-gray-900 leading-tight mb-8">
              The Solar Home Dashboard empowers you to monitor your solar panels, 
              receive instant alerts for anomalies, and optimize your energy usage 
              for maximum savings and peace of mind.
            </h2>
            
            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-gray-600 text-base">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
 
              <button 
                className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-sm"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Content - Dashboard Image (extends to right edge) */}
        <div className="flex-1 w-full lg:w-[55%] px-4 lg:px-0">
          <div className="relative lg:-mr-32 xl:-mr-48 2xl:-mr-64">
            {/* Image container with border on left and top only */}
            <div className="rounded-2xl lg:rounded-r-none overflow-hidden border-l-2 border-t-2 border-gray-300  bg-white">
              <img 
                src={dashboardImg} 
                alt="Dashboard Preview" 
                className="w-full h-auto object-cover object-left"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DashboardFeature;
