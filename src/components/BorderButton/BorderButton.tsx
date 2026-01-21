'use client';

import styles from './BorderButton.module.scss';

interface BorderButtonProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

export default function BorderButton({ children, variant = 'draw meet', className = '' }: BorderButtonProps) {
  const variantClasses = variant.split(' ').map(v => styles[v]).join(' ');
  
  return (
    <button className={`${styles.button} ${variantClasses} ${className}`}>
      {children}
      <svg viewBox="0 0 276 46" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0.5 23 A 22.5 22.5 0 0 1 23 0.5 L 253 0.5 A 22.5 22.5 0 0 1 275.5 23 A 22.5 22.5 0 0 1 253 45.5 L 23 45.5 A 22.5 22.5 0 0 1 0.5 23" />
      </svg>
    </button>
  );
}
