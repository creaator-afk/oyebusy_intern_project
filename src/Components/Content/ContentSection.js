import React, {Component} from 'react';

class ContentSection extends Component {
    render() {
        return (
            <div className="content-section-container">
                <div className="hero-card">
                    <div className="content-image">
                        <a className="content-post" href="//">
                            <img alt="" src="./resources/img_6.png" width="363" height="450"/>
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
                <div>
                    <div>
                        <div className="content-title"><h2>Which Camera Is Better: The Pixel 6 Vs S21
                            Ultra?</h2></div>
                        <div className="content-detail"><span><img src="./resources/person.svg"
                                                                   alt="p"/>Rishi</span><span><img
                            src="./resources/calender.svg" alt="cal"/>Feb 7 2022</span></div>
                    </div>
                    <div>
                        <div className="content-title"><h2>Which Camera Is Better: The Pixel 6 Vs S21
                            Ultra?</h2></div>
                        <div className="content-detail"><span><img src="./resources/person.svg"
                                                                   alt="p"/>Rishi</span><span><img
                            src="./resources/calender.svg" alt="cal"/>Feb 7 2022</span></div>
                    </div>
                    <div>
                        <div className="content-title"><h2>Which Camera Is Better: The Pixel 6 Vs S21
                            Ultra?</h2></div>
                        <div className="content-detail"><span><img src="./resources/person.svg"
                                                                   alt="p"/>Rishi</span><span><img
                            src="./resources/calender.svg" alt="cal"/>Feb 7 2022</span></div>
                    </div>
                    <div>
                        <div className="content-title"><h2>Which Camera Is Better: The Pixel 6 Vs S21
                            Ultra?</h2></div>
                        <div className="content-detail"><span><img src="./resources/person.svg"
                                                                   alt="p"/>Rishi</span><span><img
                            src="./resources/calender.svg" alt="cal"/>Feb 7 2022</span></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ContentSection;