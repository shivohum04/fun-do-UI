import React, { useState } from 'react';
import BasicTextFields from './note-text';
import ExpandingTextArea from './open-note';
import './styles/note-text.css';
import axios from 'axios';
import Displaynotegrid from './displaynotegrid';
export default function Notes() {
  const [showBasicTextFields, setShowBasicTextFields] = useState(true);
  const getNotesURL="https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList"
  axios.post(getNotesURL)
          .then(function (response) {
              console.log(response);   
          })
          .catch(function (error) {
              console.log(error);
              //alert('get notes failed')
          });
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
