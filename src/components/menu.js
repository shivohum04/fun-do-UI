import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

export default function TemporaryDrawer({ open, toggleDrawer, onComponentChange }) {
  const drawerWidthOpen = 250;
  const drawerWidthClosed = 57; 

  const handleListItemClick = (componentName) => () => {
    onComponentChange(componentName);
    toggleDrawer(!open)();
  };

  const DrawerList = (
    <Box
      sx={{
        width: open ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidthOpen : drawerWidthClosed,
          boxSizing: 'border-box',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
      role="presentation"
      onClick={toggleDrawer(!open)}
    >
      <List>
        {['Notes', 'Reminders', 'Edit Label', 'Archive', 'Trash'].map((text) => (
          <ListItem key={text} disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemButton onClick={handleListItemClick(text)}>
              <ListItemIcon>
                {text === 'Notes' && <LightbulbIcon />}
                {text === 'Reminders' && <NotificationsIcon />}
                {text === 'Edit Label' && <EditIcon />}
                {text === 'Archive' && <ArchiveIcon />}
                {text === 'Trash' && <DeleteIcon />}
              </ListItemIcon>
              <Typography variant="h6" gutterBottom>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      onClose={toggleDrawer(!open)}
      sx={{
        width: open ? drawerWidthOpen : drawerWidthClosed,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidthOpen : drawerWidthClosed,
          boxSizing: 'border-box',
          marginTop: '9vh',
          height: '100vh',
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
