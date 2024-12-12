import React from 'react'

// the parent is going to pass props, and rather than call out the props object
// we are going to destructure
// children isn't explicitly passed in, it is implicit if the 
// component has anything between the opening and closing tags
// when I destructure, I need to make sure that what I am naming the variables
// is what they were called by the parent when they were passed in
function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className='button'>{children}</button>
  )
}

export default Button