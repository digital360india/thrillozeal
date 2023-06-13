import React, { useState } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const MenuForMobile = ({setMobileOpen,mobileOpen}) => {

    const drawerWidth = 240;
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const history = useHistory();

    const goToPage = (location) => {
        history.push(`/${location}`)
        setMobileOpen(false);
    }


    const navItems = [
        { key: "Home", url: "", icon: MenuRoundedIcon },
        { key: "About Us", url: "about", icon: MenuRoundedIcon },
        { key: "Cities", url: "All_Location/All_Activities/All_Styles", icon: MenuRoundedIcon },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2, color: "#002d62 !important" }}>
                Thrillozeal
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.key}
                        disablePadding
                        onClick={()=>goToPage(item?.url)}
                        sx={{ color: "#002d62 !important" }}
                    >
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item.key} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
            <Drawer
              // container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
    )
}

export default MenuForMobile