import React, { useState } from 'react';
import BasicTextFields from './note-text';
import ExpandingTextArea from './open-note';
import './styles/note-text.css';

import Displaynotegrid from './displaynotegrid';
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
      <Displaynotegrid/>
    </div>
  );
}
