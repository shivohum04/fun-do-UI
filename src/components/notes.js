import DisplayNoteGrid from './displaynotegrid';
import BasicTextFields from './note-text';
import ExpandingTextArea from './open-note';
import './styles/note-text.css';
import React, { useState, useEffect } from 'react';
// ...import statements...

export default function Notes() {
    const [showBasicTextFields, setShowBasicTextFields] = useState(true);
    const [refreshNotes, setRefreshNotes] = useState(false); // New state to trigger notes refresh

    const handleClick = () => {
        setShowBasicTextFields(!showBasicTextFields);
    };

    // Callback function to be passed to ExpandingTextArea
    const handleNoteAdded = () => {
        setShowBasicTextFields(true); // Show the BasicTextFields component again
        setRefreshNotes(prev => !prev); // Toggle refreshNotes to trigger re-fetching of notes
    };

    return (
        <div className='centre-main'>
            {showBasicTextFields ? (
                <div onClick={handleClick}>
                    <BasicTextFields />
                </div>
            ) : (
                // Pass handleNoteAdded as a prop to ExpandingTextArea
                <ExpandingTextArea onNoteAdded={handleNoteAdded} />
            )}
            {/* Key prop forces re-render */}
            <DisplayNoteGrid key={refreshNotes} />
        </div>
    );
}
