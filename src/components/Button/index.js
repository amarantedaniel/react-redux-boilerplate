import React from 'react'
import cn from 'classnames'

import Icon from '../Icon'
import './button.css'

const Button = ({
  children,
  ghost,
  disabled,
  onClick,
  icon,
}) => (
  <button
    className={cn(
      'button',
      ghost && 'button--ghost',
      icon && 'button--with-icon',
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {icon && <span className="button__icon"><Icon name={icon} /></span>}
    {children}
  </button>
)

export default Button