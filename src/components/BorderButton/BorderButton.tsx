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
    </button>
  );
}
