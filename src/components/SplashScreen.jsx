// src/components/SplashScreen.jsx
import { useEffect } from "react";

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // remove splash screen after 2.5s
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden bg-gradient-to-br from-teal-400 via-purple-500 to-pink-500">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/70 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></span>
        ))}
      </div>

      {/* App Name */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 tracking-wide animate-gradient-x text-center leading-tight">
        TS Shop
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-white/90 text-lg sm:text-xl md:text-2xl text-center animate-fadeIn">
        Innovative Web & Mobile Shopping Experiences
      </p>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease forwards 0.5s;
          }

          @keyframes float {
            0% { transform: translateY(0) scale(0.8); opacity: 0.7; }
            50% { transform: translateY(-20px) scale(1); opacity: 1; }
            100% { transform: translateY(0) scale(0.8); opacity: 0.7; }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default SplashScreen;
