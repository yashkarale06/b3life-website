import React from 'react';

/**
 * AnimatedGrid - A grid component that applies staggered animations to children
 */
const AnimatedGrid = ({ 
  children, 
  columns = { 
    default: 1, 
    sm: 2, 
    md: 2, 
    lg: 3 
  }, 
  gap = 8,
  className = ''
}) => {
  // Apply delay to each child based on its index
  const childrenWithStaggeredDelay = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        delay: index * 0.1
      });
    }
    return child;
  });

  // Build responsive grid classes
  const columnsClass = `grid grid-cols-${columns.default} ${
    columns.sm ? `sm:grid-cols-${columns.sm}` : ''
  } ${
    columns.md ? `md:grid-cols-${columns.md}` : ''
  } ${
    columns.lg ? `lg:grid-cols-${columns.lg}` : ''
  }`;

  return (
    <div className={`${columnsClass} gap-${gap} ${className}`}>
      {childrenWithStaggeredDelay}
    </div>
  );
};

export default AnimatedGrid;