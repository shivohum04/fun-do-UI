import React from 'react';

export default function NoteDisplayCard({ title, content }) {
    return (
        <div className='note-card-main'>
            <div className='note-card-title'>{title}</div>
            <div className='note-card-content'>{content}</div>
        </div>
    );
}
