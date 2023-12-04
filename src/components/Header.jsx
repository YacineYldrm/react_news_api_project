import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {

    const [searchInput, setSearchInput] = useState('');
    const [languageInput, setLanguageInput] = useState('');

    return ( 
        <header className="header_wrapper">
            <NavLink to='/'><h1>DailyUpdateNow</h1></NavLink>
            <form>
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" name=""  id="search_input" placeholder="Type to search..." />
                <select onChange={(e) => setLanguageInput(e.target.value)} defaultValue={1}  name="" id="language_input">
                    <option value={1} disabled>Select your language</option>
                    <option value="ar">Arabian</option>
                    <option value="de">German</option>
                    <option value="en">Englisch</option>
                    <option value="es">Spanisch</option>
                    <option value="fr">French</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portugese</option>
                    <option value="ru">Russian</option>
                    <option value="sv">Swedish</option>
                    <option value="ud">Udmurt</option>
                    <option value="zh">Chinese</option>
                </select>
                {/* pass input values to NewsList componant via react-rout (NavLink) */}
                    <NavLink to="/news" state={{searchInput, languageInput}}>Search</NavLink>
            </form>
        </header>
    );
}

export default Header;