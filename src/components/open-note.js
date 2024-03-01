import React, { useState, useEffect, useRef } from 'react';
import './styles/note-text.css';
import LowerIcons from './lower-icons';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const ExpandingTextArea = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const[noteTitle,setNoteTitle] = useState('');
  const[noteContent,setNoteContent] = useState('');

  function newNoteSubmit(){
    const notedata = {noteTitle,noteContent}
    console.log(notedata);
  }



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
            <textarea 
            placeholder='Title' value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}>
            </textarea>
            <IconButton><PushPinOutlinedIcon/></IconButton>
        </div>
        <div className='text-open-textarea'>
        <textarea
            ref={textareaRef}
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Take a Note..."
            className="expanding-textarea"
        />
        </div>
        <div className='text-open-lower'>
            <LowerIcons/>
            <IconButton><UndoOutlinedIcon/></IconButton>
            <IconButton><RedoOutlinedIcon/></IconButton>
            <Button onClick={newNoteSubmit} sx={{height:20}} variant="contained">Close</Button>
        </div>
    </div>
   
  );
};

export default ExpandingTextArea;
