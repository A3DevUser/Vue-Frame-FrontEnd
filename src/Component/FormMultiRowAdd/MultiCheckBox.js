import React from 'react'

export const MultiCheckBox = React.forwardRef(({ indeterminate, ...rest },ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <div className='container'>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </div>
  )
})