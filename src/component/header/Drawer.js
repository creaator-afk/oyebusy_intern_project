import React, {Component} from 'react';

class Drawer extends Component {
    render() {
        return (<div
                id="rishi-offcanvas"
                className="rishi-offcanvas-drawer loc-right"
                role="dialog"
                aria-labelledby="offcanvasLabel"
                aria-hidden="true"
            >
                <div className="rishi-drawer-wrapper">
                    <div className="rishi-drawer-header">
                        <span id="offcanvasLabel" className="screen-reader-text">off canvas menu
                        </span>
                        <button className="close-button" aria-label="close" aria-controls="rishi-offcanvas">
                            <span className="rishi_menu_trigger closed">
                                <span>
                                </span>
                                </span>
                        </button>
                    </div>
                    <div className="rishi-header-col-1 header-row offcanvas-mobile">
                        <div className="rishi-drawer-inner">
                            <nav id="rishi-mobile-menu" className="rishi-mobile-menu menu-default">
                                <ul id="menu-menu-2" className="">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-120 current_page_item menu-item-124">
                                        <a href="https://rishidemos.com/magazine/" aria-current="page">Home</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-87">
                                        <a
                                            href="https://rishidemos.com/magazine/category/fashion/">Fashion</a>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-88">
                                        <a
                                            href="https://rishidemos.com/magazine/category/technology/">Technology</a>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-287">
                                        <a
                                            href="https://rishidemos.com/magazine/category/life-style/">Life
                                            Style</a></li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-90">
                                        <a
                                            href="https://rishidemos.com/magazine/category/environment/">Environment</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Drawer;