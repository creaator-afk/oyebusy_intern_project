import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BriefCard extends Component {
    render() {
        return (
            <div className="hero-card">
                <div className="content-image">
                    <a className="content-post" href="//">
                        <img alt="" src="./resources/img_4.png" width="378" height="250"/>
                    </a>
                </div>
                <div className="content-details">
                    <a className="content-category" href="//">Environment</a>
                    <h3 className="content-title">Many nation are pursuing nuclear power as a means of
                        reducing
                        emissions. </h3>
                    <span className="content-date">
                            <img src="./resources/person.svg" alt="p"/>
                            Rishi
                            <img src="./resources/calender.svg" alt="cal"/>
                            Feb 4 2022
                            <img src="./resources/zig.svg" alt="Z"/>8 min Read</span>
                </div>
            </div>
        );
    }
}

BriefCard.propTypes = {};

export default BriefCard;