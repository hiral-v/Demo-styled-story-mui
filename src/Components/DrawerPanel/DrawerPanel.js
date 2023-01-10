import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


const DrawerPanel = ({variant, keepMounted, anchor, ...rest }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
  return (
    <>
        <Button onClick={handleDrawerOpen}>Drawer Open</Button>
        <Drawer
            anchor={anchor}
            open={open}
            variant={variant}
            ModalProps={{
                keepMounted: {keepMounted}, // Better open performance on mobile.
            }}
            onClose={handleDrawerClose}
          >
            <Box role="presentation" sx = {{p: 4}}>
                Drawer Content here...
            </Box>
        </Drawer>
    </>
  )
}

export default DrawerPanel

