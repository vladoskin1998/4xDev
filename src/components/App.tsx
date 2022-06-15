import React, {useState} from "react";
import NavBar from './navbar/navbar'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { Home } from './home/home';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import CircularProgress from '@mui/material/CircularProgress';


const App = () => {

    const [searchApp, setSearchApp ] = useState('')
    const [loader, setLoader] = useState(false)

    return (
        <BrowserRouter>
            <NavBar searchApp={searchApp} setSearchApp={setSearchApp} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contacts" element={<Contacts searchApp={searchApp} setLoader={setLoader}/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
            {loader && <CircularProgress sx={{ margin: '20px' }}/>}
        </BrowserRouter>
    )
}

export default App;