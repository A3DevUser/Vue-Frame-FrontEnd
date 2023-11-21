import React from 'react'
import { Button } from 'react-bootstrap'

const ModalButton = ({title,funcName}) => {
  return (
    <div>
      <Button variant='primary ' size='sm' onClick={funcName}>{title}</Button>
    </div>
  )
}

export default ModalButton
