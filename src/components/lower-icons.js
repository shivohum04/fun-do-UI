import React from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import IconButton from '@mui/material/IconButton';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined';
import ColorLensOutlined from '@mui/icons-material/ColorLensOutlined';
import './styles/note-text.css';

export default function LowerIcons({ onArchive }) { // Accepting a prop for handling the archive action
  return (
    <div className='lower-icon-main'>
      <IconButton><AddAlertOutlinedIcon/></IconButton>
      <IconButton><PersonAddAltOutlinedIcon/></IconButton>
      <IconButton><ColorLensOutlined/></IconButton>
      <IconButton><InsertPhotoIcon/></IconButton>
      <IconButton onClick={onArchive}><ArchiveOutlined/></IconButton> {/* Add onClick event handler */}
      <IconButton onClick={onTrash}><MoreVertIcon /></IconButton>
    </div>
  );
}
