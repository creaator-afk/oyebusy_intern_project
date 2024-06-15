import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterImage from "./FooterImage";

class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <FooterImage/>
                <div>
                    <div>
                        <ul>Home</ul>
                        <ul>Fashion</ul>
                        <ul>Technology</ul>
                        <ul>Lifestyle</ul>
                        <ul>Environment</ul>
                    </div>
                    <div>
                        <img src="./resources/facebook.svg" alt="fb"/>
                        <img src="./resources/instagram.svg" alt="ig"/>
                        <img src="./resources/linkedin.svg" alt="li"/>
                        <img src="./resources/twitter.svg" alt="tw"/>
                    </div>
                    <div>Copyright © 2023 Magazine - Powered by Rishi Theme</div>
                </div>
                <div>

                </div>

            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;