import React from 'react';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span
      {...props}
      role="button"
      tabIndex="0"
      type="button"
      className="btn-close"
      aria-label="Close"
    ></span>
  );
}

export default DeleteBtn;

//  <span {...props} role="button" tabIndex="0">
//    ✗
//  </span>;

// <button type="button" class="btn-close" aria-label="Close"></button>;
