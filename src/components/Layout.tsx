import React from 'react';
import { Navigation } from './Navigation';
import { CustomCursor } from './CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const Layout = ({ children, hideNav = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white font-space">
      <CustomCursor />
      {!hideNav && <Navigation />}
      {children}
    </div>
  );
};