import React from 'react'
import './styles/note-text.css';
import Notedisplaycard from './notedisplaycard';
import axios from 'axios';
export default function Displaynotegrid() {

  const requestGetNotesURL = "https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList"

      axios.get(requestGetNotesURL)
          .then(function (response) {
              console.log(response);
              
          })
          .catch(function (error) {
              console.log(error);
              alert('wrong email or password')
              
          });
  return (
    <div className='note-grid-main'>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        <Notedisplaycard/>
        

    </div>
  )
}
