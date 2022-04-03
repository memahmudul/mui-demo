import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';

function MyDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const PAGES  = ['home','experience','about','contact']
  return (
    <>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} >
        <List>
            {PAGES.map((item,index)=>{
                return (<ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                   <InboxIcon/>
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
            </ListItemButton>);
            })}
        </List>
    </Drawer>
    <IconButton sx={{color: "white"}} onClick={()=>setOpenDrawer(!openDrawer)}>
    <MenuIcon/>
      
    </IconButton>

    </>
  )
}

export default MyDrawer