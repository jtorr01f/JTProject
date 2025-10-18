import React, { FC, useState, ReactNode } from 'react';
import '../styles/Components/tooltip.css';
import { useClickOutside } from '../hooks/useClickOutside';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

    const tooltipnRef = useClickOutside(() => {
      setIsVisible(false);
    });
  

  return (
    <div
      ref={tooltipnRef}
      className='tooltip-wrapper'
      onClick={() => setIsVisible(!isVisible)}
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