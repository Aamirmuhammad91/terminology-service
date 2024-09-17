import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tab, Tabs, IconButton, Drawer, List, ListItemText, ListItemButton, Grid } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Logo } from './Logo';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={12} md={8} display="flex" alignItems="center">
              <Logo />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { sm: 'none', md: 'block' } }}>
                Terminology Service
              </Typography>
              <Tabs aria-label="navigation tabs" sx={{ display: { sm: 'none', md: 'flex' } }}>
                <Tab label="Home" component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/'} />
                <Tab label="Collections" component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/collections'} />
                <Tab label="Ontologies" component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/ontologies'} />
                <Tab label="Help" component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/help'} />
                <Tab label="API" component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/api'} />
                <Tab label="About" component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/about'} />
              </Tabs>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen} sx={{ display: { md: 'none' }, ml: 'auto' }}>
                <Menu />
              </IconButton>{' '}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItemButton component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/'} onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/collections'} onClick={handleDrawerClose}>
            <ListItemText primary="Collections" />
          </ListItemButton>
          <ListItemButton component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/ontologies'} onClick={handleDrawerClose}>
            <ListItemText primary="Ontologies" />
          </ListItemButton>
          <ListItemButton component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/help'} onClick={handleDrawerClose}>
            <ListItemText primary="Help" />
          </ListItemButton>
          <ListItemButton component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/api'} onClick={handleDrawerClose}>
            <ListItemText primary="API" />
          </ListItemButton>
          <ListItemButton component={Link} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/about'} onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
