import React from 'react';

interface RefLinkProps {
  children: React.ReactNode;
  className?: string;
}

const RefLink: React.FC<RefLinkProps> = ({ children, className }) => {
  const handleClick = () => {
    // Скрытая ссылка, не индексируется поисковиками
    const url = atob('aHR0cHM6Ly9wYXJ0cmVkaXZhZGEuY29tLz9wcm9tbz1lNzBmMWE2My0zNDZhLTRhODQtYjM2My02NDMyYzZkM2Q2N2YmdGFyZ2V0PXJlZ2lzdGVy');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick} 
      className={className}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      {children}
    </div>
  );
};

export default RefLink;