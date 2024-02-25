import React from 'react'
import PrimarySearchAppBar from './navbar'
import TemporaryDrawer from './menu';
import { useState } from "react";


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <PrimarySearchAppBar toggleDrawer={toggleDrawer} />
      <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default App;
