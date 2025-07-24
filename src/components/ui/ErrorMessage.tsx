import { cn } from '../../lib/utils'

export interface ErrorMessageProps {
  children: string
  className?: string
}

export default function ErrorMessage({ children, className = '' }: ErrorMessageProps) {
  return <p className={cn('text-xs text-error', className)}>{children}</p>
}
