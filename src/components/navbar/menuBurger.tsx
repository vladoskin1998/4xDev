import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { MenuLinksInterface } from '../../types/types';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';

export const MenuBurger = ({
    navLink
}: {
    navLink: MenuLinksInterface[]
}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigation = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (link: string) => {
        return () => {
            navigation(link)
            setAnchorEl(null);
        }
    };

    return (
        <Box>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    navLink.map((nl) => <MenuItem key={nl.link} onClick={handleClose(nl.link)}>{nl.label}</MenuItem>)
                }
            </Menu>
        </Box>
    );
}
