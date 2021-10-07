import { Component } from "react";
import { ReactComponent as WebLogo } from '../../assets/hodots-logo/logo.svg';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ zIndex: 500 }}>
                <div className="header">
                    <WebLogo className="logo" />
                </div>
            </div>
        )
    }
}

export default Header;