"use client";
import { useForm } from 'react-hook-form';

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FormSubmitButton({
  children,
  className,
}: FormSubmitButtonProps) {
  const { formState } = useForm();

  return (
    <button
      className={`btn-primary btn ${className}`}
      type="submit"
      disabled={formState.isSubmitting}
    >
      {formState.isSubmitting && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}
