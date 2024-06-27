// src/components/ui/avatar.jsx

import React from 'react';

// Avatar component
const Avatar = ({ className, children }) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// AvatarImage component
const AvatarImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

// AvatarFallback component (fallback for when AvatarImage is not available)
const AvatarFallback = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600 text-xl font-bold">
      {children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback };
