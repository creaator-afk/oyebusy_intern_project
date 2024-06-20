import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="rishi-footer" id="rishi-footer" itemType="https://schema.org/WPFooter" itemScope="">
                <div className="footer-top-row">
                    <div className="row-wrapper vertical-center">
                        <div className="col-wrapper col-vertical">
                            <div className="rishi-footer-widgets-one" id="rishi-footer-widgets-one">
                                <section id="block-16" className="widget widget_block widget_text">
                                    <p></p>
                                </section>
                                <section id="block-15" className="widget widget_block widget_media_image">
                                    <div className="wp-block-image">
                                        <figure className="aligncenter size-full"><img
                                            data-rishi-lazy="https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/logo.png"
                                            loading="lazy"
                                            srcSet="https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/logo.png"
                                            data-rishi-lazy-set="https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/logo.png"
                                            data-object-fit="~" decoding="async" width="219" height="84" alt=""
                                            className="wp-image-205"/></figure>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle-row">
                    <div className="row-wrapper vertical-center">
                        <div className="col-wrapper col-vertical">
                            <nav id="footer-site-navigation"
                                 className="rishi-footer-navigation vertical-flex-start horizontal-center">
                                <ul id="menu-menu-3" className="rishi-menu">
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
                <div className="footer-bottom-row">
                    <div className="row-wrapper vertical-flex-start">
                        <div className="col-wrapper col-vertical">
                            <div id="rishi-copyrights" className=" horizontal-center vertical-flex-start">
                                <div className="rishi-footer-copyrights">
                                    Copyright © 2024 <a href="https://rishidemos.com/magazine/">Magazine</a> -
                                    Powered by <a
                                    href="https://rishitheme.com/" target="_blank"
                                    rel="noopener noreferrer nofollow">Rishi
                                    Theme</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;