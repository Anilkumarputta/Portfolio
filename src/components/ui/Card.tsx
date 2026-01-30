import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const baseStyles = 'bg-white dark:bg-zinc-900 rounded-xl shadow-md p-6 border border-zinc-200 dark:border-zinc-800';
  const hoverStyles = hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-200 cursor-pointer' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`.trim();
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
