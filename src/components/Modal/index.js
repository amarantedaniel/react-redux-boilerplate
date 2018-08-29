import React from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'

import './modal.scss'

const toggleOverflowIfNeeded = props =>
  document.body.style.overflow = props.open
    ? 'hidden'
    : 'auto'

class Modal extends React.Component {
  componentDidMount() {
    toggleOverflowIfNeeded(this.props)
  }

  componentDidUpdate(prevProps) {
    if (this.props.open !== prevProps.open) {
      toggleOverflowIfNeeded(this.props)
    }
  }

  render() {
    const { open, onClose, children } = this.props

    return ReactDOM.createPortal(
      <div className={cn('modal', open && 'modal--open')}>
        <div className="modal__backdrop" onClick={onClose} />
        <div className="modal__content">
          {children}
        </div>
      </div>,
      document.getElementById('modal-root'),
    )

  }
}

export default Modal
