import React, { useState } from 'react';
import LowerIcons from './lower-icons';
import '../components/styles/notestyling.css';
import { addArchive } from '../services/notesService'; // Adjust the path as necessary

export default function NoteDisplayCard({ id, title, content }) {
    const [isHovered, setIsHovered] = useState(false);

    // Function to handle archive action
    const handleArchive = async () => {
        alert('handlearchive called')
        const noteObj = {
            id, // Assuming your backend needs the ID to find the note
            // Add other note properties here if needed for the archive function
            isArchived: true // Assuming you set isArchived to true to archive the note
        };

        try {
            const response = await addArchive(noteObj);
            console.log(response); // Handle response appropriately
            // Optionally refresh the list of notes to reflect changes
            alert('Note archived successfully');
        } catch (error) {
            console.error("Failed to archive note", error);
            // Handle UI error feedback here
        }
    };

    return (
        <div 
            className='note-card-main'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='note-card-title'>{title}</div>
            <div className='note-card-content'>{content}</div>
            {isHovered && (
                <div className='note-card-lower-icons'>
                    {/* Pass handleArchive as a prop to LowerIcons */}
                    <LowerIcons onArchive={() => handleArchive()} />
                </div>
            )}
        </div>
    );
}
