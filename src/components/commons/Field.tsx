import React from 'react';

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showError?: boolean;
  errorText?: string;
  errorStyle?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  showError = false,
  errorText = 'Something went wrong',
  errorStyle,
  ...rest
}) => {
  const {id} = rest ?? {};

  return (
    <span>
      <label htmlFor={id}>{label}</label>
      <input {...rest} />
      <p className={errorStyle}>{showError && errorText}</p>
    </span>
  );
};

export default Field;
