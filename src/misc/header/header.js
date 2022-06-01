import { ReactComponent as WebLogo } from '../../assets/hodots-logo/logo.svg';
import './header.css'
import './search.css'
import { useState } from 'react';

function Header(props) {
    const headerSecondBar = new HeaderSecondBar();
    return (
        <div style={{ zIndex: 500 }}>
            <div className="header">
                <WebLogo className="logo" onClick={headerSecondBar.Toggle} />
                <span>{Search()}</span>
                {headerSecondBar.HeaderTwo()}
            </div>
        </div>
    )
}

function HeaderSecondBar(props) {
    const [isOpen, setOpen] = useState(false);
    function Toggle() {
        if (isOpen) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    function HeaderButton(text, index, onClick, addedindex) {
        return (
            <div id="headerMenuButton" style={{marginLeft: (65 * index + addedindex) + "px"}} onClick={onClick}>
                <span>{text}</span>
            </div>
        )
    }

    function HeaderTwo() {
        return (
            <div className="header2" style={{ zIndex: 501, overflow: "hidden", position: "absolute", top: isOpen ? "0px" : "-60px" }}>
                {HeaderButton("Home", 0, null, 0)}
                {HeaderButton("Settings", 1, null, 0)}
                {HeaderButton("About", 2, null, 17)}
            </div>
        )
    }

    return {
        HeaderTwo: HeaderTwo,
        Toggle: Toggle
    }
}

function Search(props) {
    return (<div id="search_bar_container">
        <input id="search_bar_main" type={"text"} autoCapitalize={false} autoCorrect={false} autoComplete={false} placeholder={"Search..."} />
        <input id="search_button_main" type={"button"} value={"Search"} />
    </div>)
}

export default Header;