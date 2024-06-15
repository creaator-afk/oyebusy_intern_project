import React, {Component} from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";

class Header extends Component {
    render() {
        return (
            <div className="header container-navbar">
                <Logo/>
                <Navbar/>
            </div>
        );
    }
}

export default Header;