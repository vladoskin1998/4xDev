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

const App = () => {

    const [searchApp, setSearchApp ] = useState('')

    return (
        <BrowserRouter>
            <NavBar searchApp={searchApp} setSearchApp={setSearchApp} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contacts" element={<Contacts  searchApp={searchApp}/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;