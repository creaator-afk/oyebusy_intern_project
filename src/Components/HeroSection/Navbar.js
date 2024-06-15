import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar container-menu-0">
                <div>
                    <div id="social">
                        <img src="./resources/facebook.svg" alt="fb"/>
                        <img src="./resources/instagram.svg" alt="ig"/>
                        <img src="./resources/linkedin.svg" alt="li"/>
                        <img src="./resources/twitter.svg" alt="tw"/>
                    </div>
                    <div>
                        <ul className="nav-items container-menu-items">
                            <li className="link-menu-items">Home</li>
                            <li className="link-menu-items">Fashion</li>
                            <li className="link-menu-items">Technology</li>
                            <li className="link-menu-items">Lifestyle</li>
                            <li className="link-menu-items">Environment</li>
                        </ul>
                    </div>
                    <div className="search">
                        <img src="./resources/search.svg" alt="O"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;