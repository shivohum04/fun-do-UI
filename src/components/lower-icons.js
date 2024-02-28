import React from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import IconButton from '@mui/material/IconButton';

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './styles/note-text.css'
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlined from '@mui/icons-material/ColorLensOutlined';


export default function LowerIcons() {
  return (
    <div>
     <div className='lower-icon-main'>
        <IconButton><AddAlertOutlinedIcon/></IconButton>
        <IconButton><PersonAddAltOutlinedIcon/></IconButton>
        <IconButton><ColorLensOutlined/></IconButton>
        <IconButton><InsertPhotoIcon/></IconButton>
        <IconButton><ArchiveOutlined/></IconButton>
        <IconButton><MoreVertIcon/></IconButton>
        
        
        
        
        
        
     </div>
    </div>
  )
}
