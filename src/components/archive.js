import React, { useEffect, useState } from 'react';
import NoteDisplayCard from './notedisplaycard'; // Ensure the path is correct
import { getArchiveNotes } from '../services/notesService'; // Adjust the path as necessary

export default function Archive() {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      try {
        const fetchedArchivedNotes = await getArchiveNotes();
        if (fetchedArchivedNotes && Array.isArray(fetchedArchivedNotes)) {
          setArchivedNotes(fetchedArchivedNotes);
        }
      } catch (error) {
        console.error("Failed to fetch archived notes", error);
      }
    };

    fetchArchivedNotes();
  }, []);

  return (
    <div className='note-grid-main'> {/* Use a similar or appropriate className */}
      {archivedNotes.map((note) => (
        <NoteDisplayCard key={note.id} title={note.title} content={note.description} />
      ))}
    </div>
  );
}
