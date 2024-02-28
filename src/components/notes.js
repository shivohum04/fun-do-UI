import React, { useState } from 'react';
import BasicTextFields from './note-text';
import ExpandingTextArea from './open-note';
import './styles/note-text.css';
import axios from 'axios';

export default function Notes() {
  const [showBasicTextFields, setShowBasicTextFields] = useState(true);



  const handleClick = () => {
    setShowBasicTextFields(!showBasicTextFields);
  };
 

  return (
    <div className='centre-main' >
      {showBasicTextFields ? (
        <div onClick={handleClick}>
          <BasicTextFields />
        </div>
      ) : (
        <ExpandingTextArea />
      )}
      <h1>notes you add appear here</h1>
    </div>
  );
}
