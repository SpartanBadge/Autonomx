import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.getAttribute('role') === 'button' ||
        (target.tagName.toLowerCase() === 'input' && target.getAttribute('type') === 'submit')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cursor"
      style={{ 
        transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        backgroundImage: `url('${isPointer ? 'images/Pointer.png' : '/images/Cursor.png'}')`
      }}
    />
  );
};