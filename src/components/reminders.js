import React from 'react'
import './styles/main.css';
import BasicTextFields from './note-text';

export default function reminders() {
  return (
    <div className='centre-main'> 
      <h1>notes with upcoming reminders appear here</h1>
      <BasicTextFields/>
    </div>
  )
}
