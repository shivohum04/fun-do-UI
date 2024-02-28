import * as React from 'react';
import BrushIcon from '@mui/icons-material/Brush';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';

import './styles/note-text.css'
export default function BasicTextFields(){
  return(
    <div className='nt-mainbox'>
      <div className='nt-text'>
        take a note...
      </div>
      <div className='nt-mainbox-iconbar'>
        <div className='nt-text-icon'>
          <IconButton>
            <CheckBoxIcon/>
          </IconButton>
          
        </div>
        <div className='nt-text-icon'>
          <IconButton><BrushIcon/></IconButton>
        </div>
        <div className='nt-text-icon'>
          <IconButton>
            <InsertPhotoIcon></InsertPhotoIcon>
          </IconButton>
        </div>
      </div>

    </div>
  )
}