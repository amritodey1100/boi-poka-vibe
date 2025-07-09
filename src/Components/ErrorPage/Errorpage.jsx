import React, { useState, useEffect } from "react";
import { Home, RefreshCw, ArrowLeft, Zap } from "lucide-react";

const ErrorPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate random sparkles for background animation
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 3,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: `twinkle ${sparkle.duration}s ease-in-out infinite`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rotate-45 opacity-10 animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-10 animate-ping"></div>

      {/* Main content */}
      <div
        className={`max-w-2xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Error icon with glow effect */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/25 animate-pulse">
            <Zap className="w-16 h-16 text-white" />
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        </div>

        {/* Error code */}
        <div className="mb-6">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 animate-pulse">
            404
          </h1>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-purple-200 leading-relaxed max-w-lg mx-auto">
            The page you're looking for seems to have vanished into the digital
            void. Don't worry, even the best explorers get lost sometimes.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-48"
          >
            <Home className="w-5 h-5 group-hover:animate-bounce" />
            Go Home
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handleGoBack}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-48"
          >
            <ArrowLeft className="w-5 h-5 group-hover:animate-bounce" />
            Go Back
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={handleRefresh}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-48"
          >
            <RefreshCw className="w-5 h-5 group-hover:animate-spin" />
            Refresh
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 text-purple-300 text-sm">
          <p>Error Code: 404 • Something went wrong</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
