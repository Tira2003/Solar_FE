import React from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router';

const ErrorPage = ({ 
  title = "Oops! Something went wrong", 
  message = "We're having trouble connecting to our servers. Please try again later.",
  showHomeButton = true,
  showRetryButton = true,
  onRetry = null 
}) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-6 shadow-lg">
            <AlertCircle className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {message}
        </p>

        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showRetryButton && (
            <button
              onClick={handleRetry}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
          )}

          {showHomeButton && (
            <button
              onClick={handleGoHome}
              className="px-8 py-4 bg-white hover:bg-gray-50 rounded-xl text-gray-700 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </button>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm">
            If this problem persists, please contact our support team
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
