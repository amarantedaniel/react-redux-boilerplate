import React from 'react'
import cn from 'classnames'

import './card.css'

const Card = ({
  children,
  as: T = 'div',
  className,
}) => (
  <T className={cn('card', className)}>
    {children}
  </T>
)

export default Card
