import React, { useState } from 'react';
import PrimarySearchAppBar from './navbar';
import TemporaryDrawer from './menu';
import Reminders from './reminders';
import Notes from './notes';
import Labels from './labels';
import Archive from './archive';
import Trash from './trash';


function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Notes':
        return <Notes />;
      case 'Reminders':
        return <Reminders />;
      case 'Labels':
        return <Labels />;
      case 'Archive':
        return <Archive />;
      case 'Trash':
        return <Trash />;
      default:
        return <Notes/>
    }
  };

  return (
    <>
      <PrimarySearchAppBar toggleDrawer={toggleDrawer} />
      <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} onComponentChange={handleComponentChange} />
      
      
      <div>{renderComponent()}</div>
    </>
  );
}

export default Dashboard;
