import React, { useState, ReactNode } from 'react';
import '../styles/tooltip.css';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className='tooltip-wrapper'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className='tooltip'>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;