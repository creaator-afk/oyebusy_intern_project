import React, {Fragment} from 'react';
import CardItem from "./CardItem";

const EntryContent = ({getCards, cards}) => {
        return (
            <div
                className="ultp-post-grid-block wp-block-ultimate-post-post-grid-4 ultp-block-0fc298">
                <div className="ultp-block-wrapper">
                    <div
                        className="ultp-block-items-wrap ultp-block-row ultp-layout1 ultp-block-content-">
                        <Fragment>
                            <CardItem category="carpenter"/>
                            <CardItem/>
                            <CardItem/>
                        </Fragment>

                    </div>
                </div>
                <div className="pagination-block-html" aria-hidden="true"></div>
            </div>
        );
}

export default EntryContent;