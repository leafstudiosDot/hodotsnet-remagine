import { ReactComponent as WebLogo } from '../../assets/hodots-logo/logo.svg';
import './header.css'
import './search.css'

function Header(props) {
    return (
        <div style={{ zIndex: 500 }}>
            <div className="header">
                <WebLogo className="logo" />
                <span>{Search()}</span>
            </div>
        </div>
    )
}

function Search(props) {
    return (<div id="search_bar_container">
        <input id="search_bar_main" type={"text"} autoCapitalize={false} autoCorrect={false} autoComplete={false} placeholder={"Search..."} />
        <input id="search_button_main" type={"button"} value={"Search"} />
    </div>)
}

export default Header;