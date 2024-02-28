import React, { useState, useEffect, useRef } from 'react';
import './styles/note-text.css';
import LowerIcons from './lower-icons';
import { Typography } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';


const ExpandingTextArea = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; 
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };
    adjustHeight();
  }, [text]); 

  return (
    <div className='text-open-main'>
        <div className='text-open-upper'>
            <textarea>title</textarea>
            <PushPinOutlinedIcon/>
        </div>
        <div className='text-open-textarea'>
        <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Take a Note..."
            className="expanding-textarea"
        />
        </div>
        <div className='text-open-lower'>
            <LowerIcons/>
            <UndoOutlinedIcon/>
            <RedoOutlinedIcon/>
            <Button sx={{height:20}} variant="contained">Close</Button>
        </div>
    </div>
   
  );
};

export default ExpandingTextArea;
