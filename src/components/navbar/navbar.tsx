import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { SearchInput } from './searchInput';
import { MenuBurger } from './menuBurger';
import { useNavigate, useLocation } from "react-router-dom";

const navLink = [
    { label: 'Home', link: '/home' },
    { label: 'Contacts', link: '/contacts' },
    { label: 'About', link: '/about' }
]

let showSearch = ['/contacts']

export default function NavBar({
    searchApp,
    setSearchApp,
}:{
    searchApp: string,
    setSearchApp: (s:string) => void,
}) {

    const navigation = useNavigate()
    const location = useLocation()
    
    return (
        <Box sx={{ flexGrow: 1, paddingBottom: '15px' }} >
            <AppBar position="static">
                <Toolbar>
                    <MenuBurger navLink={navLink} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        4xDev
                    </Typography>
                    {
                        showSearch.includes(location?.pathname ) 
                        ? <SearchInput searchApp={searchApp} setSearchApp={setSearchApp}/> 
                        : <></>
                    }
                    <Box sx={{ '& button': { padding: '14px' }, display: { xs: 'none', sm: 'block' } }}>
                        {
                            navLink.map((nl) =>
                                <Link component="button" underline="hover" color='white' variant="body1"
                                    onClick={() => navigation(nl.link)}
                                    key={nl.link}
                                >
                                    {nl.label}
                                </Link>
                            )
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
