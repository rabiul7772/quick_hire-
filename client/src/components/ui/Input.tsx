import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="input-group">
        {label && <label className="input-label">{label}</label>}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-60">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`input-field ${icon ? 'pl-10' : ''} ${
              error ? 'input-error' : ''
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="error-text">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
