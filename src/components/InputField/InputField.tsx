import React, { useId, useState } from 'react'
import clsx from 'clsx'

export interface InputFieldProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  invalid?: boolean
  variant?: 'filled' | 'outlined' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  type?: 'text' | 'password'
  clearable?: boolean
  loading?: boolean
}

const sizeClasses = {
  sm: 'px-2 py-1 text-sm rounded-md',
  md: 'px-3 py-2 text-base rounded-lg',
  lg: 'px-4 py-3 text-lg rounded-xl'
}

const variantClasses = (variant: InputFieldProps['variant'], invalid: boolean) =>
  clsx(
    'border focus:outline-none focus:ring-2 w-full transition',
    variant === 'filled' && 'bg-gray-100 border-gray-300 focus:ring-blue-500',
    variant === 'outlined' && 'bg-white border-gray-300 focus:ring-blue-500',
    variant === 'ghost' && 'bg-transparent border-transparent focus:ring-blue-500',
    invalid && 'border-red-500 focus:ring-red-500'
  )

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable = false,
  loading = false
}) => {
  const uid = useId()
  const [showPw, setShowPw] = useState(false)

  const inputType = type === 'password' && !showPw ? 'password' : 'text'

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={uid} className="font-medium">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          id={uid}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid}
          aria-describedby={helperText ? `${uid}-help` : undefined}
          className={clsx(sizeClasses[size], variantClasses(variant, invalid), {
            'opacity-50 cursor-not-allowed': disabled || loading,
            'pr-16': clearable || type === 'password'
          })}
        />

        {type === 'password' && (
          <button
            type="button"
            className="absolute right-2 text-sm text-gray-500"
            onClick={() => setShowPw((p) => !p)}
            aria-label={showPw ? 'Hide password' : 'Show password'}
          >
            {showPw ? '🙈' : '👁️'}
          </button>
        )}

        {clearable && value && value.length > 0 && (
          <button
            type="button"
            className="absolute right-8 text-sm text-gray-500"
            onClick={() => onChange?.({ target: { value: '' } } as any)}
            aria-label="Clear input"
          >
            ❌
          </button>
        )}

        {loading && (
          <span className="absolute right-12 animate-pulse text-sm" aria-hidden>
            ⏳
          </span>
        )}
      </div>

      {invalid && errorMessage && (
        <span className="text-red-600 text-sm" id={`${uid}-error`} role="alert">
          {errorMessage}
        </span>
      )}
      {!invalid && helperText && (
        <span className="text-gray-500 text-sm" id={`${uid}-help`}>
          {helperText}
        </span>
      )}
    </div>
  )
}

export default InputField
