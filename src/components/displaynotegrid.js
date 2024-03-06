import React, { useEffect, useState } from 'react';
import './styles/note-text.css';
import NoteDisplayCard from './notedisplaycard'
import { getNotes } from '../services/notesService'; // Adjust the path as necessary

export default function DisplayNoteGrid() {
    const [notes, setNotes] = useState([]); // State to store the notes

    useEffect(() => {
        // Define an async function to fetch the notes
        const fetchNotes = async () => {
            try {
                const fetchedNotes = await getNotes(); // Attempt to fetch the notes
                if (fetchedNotes && Array.isArray(fetchedNotes)) {
                    setNotes(fetchedNotes); // Update the state with the fetched notes
                }
            } catch (error) {
                console.error("Failed to fetch notes", error);
            }
        };

        fetchNotes(); // Call the fetch function
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
        <div className='note-grid-main'>
            {notes.map((note) => (
                // Assuming each note has a unique identifier as `id`
                <NoteDisplayCard key={note.id} title={note.title} content={note.description} />
            ))}
        </div>
    );
}
