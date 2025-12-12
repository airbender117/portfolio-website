'use client';
import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

interface MasonryLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ children, className }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const msnry = new Masonry(gridRef.current, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
      });

      // Ensure layout is recalculated after images load
      const images = gridRef.current.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('load', () => {
          msnry.layout();
        });
      });
    }
  }, [children]);

  return (
    <div ref={gridRef} className={className}>
      {React.Children.map(children, (child) => (
        <div className="grid-item w-full sm:w-1/2 md:w-1/3 p-2">
          {child}
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
