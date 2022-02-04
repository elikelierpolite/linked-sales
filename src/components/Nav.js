import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../assets/images/linked_nav_logo_light.svg';
import { Typography } from '@mui/material';

export default function Nav() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: "#23134F" }}>
        <AppBar className="nav" sx={{ flexGrow: 1, backgroundColor: "#23134F" }} position="static">
          <Toolbar>
            <img src={logo} />
          </Toolbar>
        </AppBar>
      </Box>
      <Typography component="h3" variant="p" align="center" className='alert'><span className='warning'>⚠️Attention:</span> This video 🎥 is <span className='warning'>not</span> about funnels!</Typography>
    </div>
  );
}
