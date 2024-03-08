import React, { useState, useEffect, useRef } from 'react';
import './styles/note-text.css';
import LowerIcons from './lower-icons';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { addNotes } from '../services/notesService';

const ExpandingTextArea = () => {
    const textareaRef = useRef(null);

    const [noteObj, setNoteObj] = useState({
        title: "",
        description: "",
        isPined: false,
        isArchived: false,
        isDeleted: false,
        color: "#ffffff"
    });

    // Update note title
    const handleTitleChange = (e) => {
        setNoteObj({ ...noteObj, title: e.target.value });
    };

    // Update note description/content
    const handleContentChange = (e) => {
        setNoteObj({ ...noteObj, description: e.target.value });
    };

    const newNoteSubmit = async () => {
        console.log(noteObj);
        try {
            const response = await addNotes(noteObj);
            console.log(response); 
            alert('new note added successfully')
            onNoteAdded();
        } catch (error) {
            console.error("Failed to add the note", error);
            // Handle UI error feedback here
        }
    };

    useEffect(() => {
        const adjustHeight = () => {
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto'; 
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        };
        adjustHeight();
    }, [noteObj.description]); // Updated to reflect dependency on noteObj.description

    return (
        <div className='text-open-main'>
            <div className='text-open-upper'>
                <textarea
                    placeholder='Title'
                    value={noteObj.title}
                    onChange={handleTitleChange}
                ></textarea>
                <IconButton><PushPinOutlinedIcon /></IconButton>
            </div>
            <div className='text-open-textarea'>
                <textarea
                    ref={textareaRef}
                    value={noteObj.description}
                    onChange={handleContentChange}
                    placeholder="Take a Note..."
                    className="expanding-textarea"
                />
            </div>
            <div className='text-open-lower'>
                <LowerIcons />
                <IconButton><UndoOutlinedIcon /></IconButton>
                <IconButton><RedoOutlinedIcon /></IconButton>
                <Button onClick={newNoteSubmit} sx={{ height: 20 }} variant="contained">Close</Button>
            </div>
        </div>
    );
};

export default ExpandingTextArea;
