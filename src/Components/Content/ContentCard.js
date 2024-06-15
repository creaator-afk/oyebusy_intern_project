import React, {Component} from 'react';

class ContentCard extends Component {
    render() {
        return (
            <div className="hero-card">
                <div className="content-image">
                    <a className="content-post" href="//">
                        <img alt="" src="./resources/img_4.png" width="378" height="250"/>
                    </a>
                </div>
                <div className="content-details">
                    <h3 className="content-title">Why should you be eating Organic ?</h3>
                    <span className="content-date">
                            <img src="./resources/person.svg" alt="p"/>
                            Rishi
                            <img src="./resources/calender.svg" alt="cal"/>
                            Feb 4 2022
                            <img src="./resources/zig.svg" alt="Z"/>8 min Read</span>
                    <div>Most of us have, at some point, considered what we would do if we could…</div>
                </div>
            </div>
        );
    }
}

export default ContentCard;