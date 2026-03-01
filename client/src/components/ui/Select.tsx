import { forwardRef } from 'react';
import type { SelectHTMLAttributes, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, icon, options, className = '', ...props }, ref) => {
    return (
      <div className="input-group">
        {label && <label className="input-label">{label}</label>}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-60 pointer-events-none">
              {icon}
            </div>
          )}
          <select
            ref={ref}
            className={`input-field appearance-none cursor-pointer ${
              icon ? 'pl-10' : ''
            } ${error ? 'input-error' : ''} ${className}`}
            {...props}
          >
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-60 pointer-events-none">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && <p className="error-text">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
