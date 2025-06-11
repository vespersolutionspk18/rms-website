import React from 'react';

  interface ButtonProps {
    icon?: React.ReactNode;
    text: string;
    onClick?: () => void;
    className?: string;
  }

  const Button: React.FC<ButtonProps> = ({ icon, text, onClick, className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`relative rounded-full group ${className}`}
      >
        {/* Animated glow effect */}
        <div className="absolute -inset-[2px] bg-gradient-to-r from-violet-600 to-violet-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Rotating border */}
        <div className="absolute -inset-[1.5px] rounded-full overflow-hidden">
          <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0%,#a78bfa_50%,#7c3aed_100%)]" />
        </div>
        
        {/* Button content */}
        <div className="relative bg-gradient-to-b from-violet-600 via-violet-700 to-violet-600 text-white px-4 py-2 rounded-full flex flex-row justify-center items-center gap-2">
          {icon}
          <span>{text}</span>
        </div>
      </button>
    );
  };

  export default Button;