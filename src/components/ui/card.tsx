import React from 'react';
import { cn } from '@/lib/utils';


const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-zinc-900 rounded-xl border border-border shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};


const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent };
