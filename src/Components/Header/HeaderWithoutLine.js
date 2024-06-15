import React, {Component} from 'react';

class HeaderWithoutLine extends Component {
    render() {
        return (
            <div className="container-topics"><h2><span>Popular Categories</span></h2>
                <div className="line"></div>
            </div>
        );
    }
}

export default HeaderWithoutLine;