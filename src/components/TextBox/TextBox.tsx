import React from 'react';

import './TextBox.css';

function TextBox({ children }: { children: React.ReactNode }) {
  return <div className='text-box'>{children}</div>;
}

export default TextBox;
