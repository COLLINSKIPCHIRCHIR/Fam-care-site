import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {

    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-100',
    outline: 'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50',
  };

 const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
