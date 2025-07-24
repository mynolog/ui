import type { LabelHTMLAttributes } from 'react'

import { cn } from '../../lib/utils'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  label: string
  className?: string
}

export default function Label({ htmlFor, label, className = '', ...rest }: LabelProps) {
  return (
    <label
      {...rest}
      htmlFor={htmlFor}
      className={cn('text-sm text-secondary', className)}
    >
      {label}
    </label>
  )
}
