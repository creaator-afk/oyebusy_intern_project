import React, {Component} from 'react';
import Navbar from "./Navbar";
import Drawer from "./Drawer";

class Header extends Component {
    render() {
        return (<div>
            <header id="header" className="site-header" itemType="https://schema.org/WPHeader" itemScope="">
                <Navbar/>
            </header>
            <Drawer/>
        </div>);
    }
}

export default Header;