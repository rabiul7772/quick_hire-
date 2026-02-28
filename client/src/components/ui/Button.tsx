import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-bold font-sans transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2',
          {
            'bg-brand-primary text-white hover:bg-brand-primary/90':
              variant === 'primary',
            'bg-brand-secondary text-brand-primary hover:bg-brand-secondary/80':
              variant === 'secondary',
            'border border-brand-primary text-brand-primary hover:bg-brand-primary/10':
              variant === 'outline',
            'hover:bg-neutral-20 text-neutral-80': variant === 'ghost',
            'text-brand-primary hover:underline': variant === 'link',
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg'
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
