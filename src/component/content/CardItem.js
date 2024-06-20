import React, {Fragment, useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const CardItem = () => {

    // link,image,category,tagline
    const res = {
        "pageData": {
            "breadcrumbItems": [
                {
                    "displayName": "Home",
                    "link": "/blog/"
                },
                {
                    "displayName": "Television",
                    "link": "/blog/television/"
                },
                {
                    "displayName": "Buying A TV? Here’s Our Helpful TV Guide"
                }
            ],
            "title": "7 Tips To Consider While Testing Smart TV Applications",
            "content": "<p>From black and white TVs to CRTs to LEDs and LCDs, buying a TV these days involves a lot of research. To save you the trouble of an extensive search, here is our TV buying guide. We have compiled a list of different TVs and their advantages to help you choose the best TV for you and your family.</p><h2>1. LCD Televisions</h2><p>LCD stands for Liquid Crystal Display and these LCD TVs have replaced the CRT (Cathode Ray Tubes) TVs in the 21st century. This technology was used in the eighties in portable computers as Passive matrix LCDs but was too slow for television usage. After much experimentation, by 2008, the LCD TVs managed to conquer the market-beating all the expensive as well as the budget friendly range.</p><p>LCD panels need external light, so a backlight is used to produce visibility. These backlights are Cold Cathode Fluorescent Lamps, commonly known as CCFLs, which have a diffuser to spread white light evenly.</p><p>LCD TVs are not able to capture the black color perfectly and is difficult to see quick movements on the screen.</p><h2>2. LED Televisions</h2><p>LED stands for Light Emitting Diodes and LED TVs are basically LCD panels backlit by LEDs instead of CCFLs. These LCDs are either lit by white LED displays or Red, Green and Blue (RGB) displays.</p><p>There are many advantages of LED displays over LCDs:</p><ul><li>LEDs have a better colour arrangement.</li><li>LED TVs are slim and are much lighter.</li><li>Since these TVs consume less power, they remain cool and there are fewer chances of overheating, thereby, increasing the lifespan of your TV.</li></ul><p>There are quite a few variations as well as developments on the LED television sets, like the OLED and QLED television sets.</p><ul><li>OLED stands for Organic Light Emitting Diodes and in OLED TVs, an organic semiconductor produces light in response to an electric current. Currently, only high-end models of LG and some other manufacturers are using OLED technology. OLED has higher contrast ratios and are available in the 4K format as well. They do not suffer from bad viewing angles in their picture quality. Brightness remains consistent in these TV sets.</li><li>QLEDs use quantum dot technology and nanocrystals are put in front of LEDs and are able to produce much higher resolution.</li></ul><p>Also Read: <a target=\"_blank\" href=\"https://www.urbancompany.com/blog/home/10-essential-tips-to-maintain-your-tv/?utm_source=article&amp;utm_medium=differenttypesoftv&amp;utm_campaign=bloginline\"><span style=\"color:rgb(110, 66, 229);\">10 Essential Tips To Maintain Your TV Set</span></a></p><h2>3. Flat Screen TVs</h2><p>Usually, LED and LCD television sets are flat screen TVs. They provide standard reflections and the sides get darkened when viewed from close. They are not that cumbersome in their size and are easier to handle. Flat screen TVs come in all price ranges.</p><h2>4. Curved Screen TVs</h2><p>While curved screen TVs are bulky, there are certain individual characteristics that make it ideal at times. Many tend to believe that curved screen TVs provide a more realistic experience than flat screens as their viewing angle is wide. They can be viewed from close and there will be less darkening. Curved Screen TVs are expensive. LG makes curved OLED television sets.</p><h2>5. 3D TVs</h2><p>3D television sets offer depth perception and a much immersive experience through stereoscopic displays, multi-view displays, etc. Some display two different images simultaneously and special 3D glasses must be used for getting the perfect vision. Some 3D TV sets are autostereoscopic that do not require 3D glasses. 3D TV sets are rare, except Sony and LG that have a range of 3D TVs while other manufacturers have discontinued them.</p><h2>6. HD TVs</h2><p>HD (High Definition) television sets provide much higher resolution so that the images on your flat panel display suffer less pixelation than the common standard definition (SD) TV. Frame sizes, frame rates and scanning systems are the three main factors for HDTVs. HDTV is the current standard format for all videos.</p><p>At Urban Company, we provide you with professionals who have in-depth knowledge and can guide you in purchasing and <a target=\"_blank\" href=\"https://www.urbancompany.com/hyderabad-tv-repair/?utm_source=article&amp;utm_medium=differenttypesoftv&amp;utm_campaign=bloginline\"><span style=\"color:rgb(110, 66, 229);\">installing your new Television set</span></a>. Our professionals can also help you with TV repair and service. Put aside your worries with Urban Company and enjoy our smooth service at the comfort of your home!</p>",
            "photo": {
                "cover": "https://www.tothenew.com/blog/wp-ttn-blog/uploads/2023/10/Screenshot-2023-10-11-at-11.35.16-AM-768x425.png",
                "thumbnail": "https://www.tothenew.com/blog/wp-ttn-blog/uploads/2023/10/Screenshot-2023-10-11-at-11.35.16-AM-768x425.png"
            },
            "tags": [
                "TV Installation in Noida",
                "Best Television's in Noida",
                "Television Services"
            ]
        }
    }

    const data = res.pageData;

    const ref = (data.breadcrumbItems.at(1)).link;
    const image = data.photo.cover;
    const category = data.breadcrumbItems.at(1).displayName;
    const caption = data.breadcrumbItems.at(2).displayName;

return(    <div className="ultp-block-item post-id-8">
        <div
            className="ultp-block-content-wrap ultp-block-content-overlay">
            <div
                className="ultp-block-image ultp-block-image-zoomIn ultp-block-image-overlay ultp-block-image-custom">
                <a href=""><img
                    srcSet={image}
                    alt="The Hidden Mystery Behind Fashion"/></a>
            </div>
            <div
                className="ultp-block-content ultp-block-content-bottomPosition">
                <div className="ultp-block-content-inner">
                    <div
                        className="ultp-category-grid ultp-category-classic ultp-category-aboveTitle">
                        <div className="ultp-category-in"><a
                            className="ultp-cat-fashion"
                            href={ref}>{category}</a>
                        </div>
                    </div>
                    <h2 className="ultp-block-title "><a
                        href="https://rishidemos.com/magazine/the-hidden-mystery-behind-fashion/">{caption}</a></h2>
                    <div
                        className="ultp-block-meta ultp-block-meta-dot ultp-block-meta-icon">
                                                                <span className="ultp-block-author"><svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 18 20"><path
                                                                    d="M18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L13,12 C15.7614237,12 18,14.2385763 18,17 L18,19 Z M9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 Z M9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 Z"></path></svg><a
                                                                    href="https://rishidemos.com/magazine/author/rishidemos/">Rishi</a></span><span
                        className="ultp-block-date"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 19"><path
                        d="M4.60069444,4.09375 L3.25,4.09375 C2.47334957,4.09375 1.84375,4.72334957 1.84375,5.5 L1.84375,7.26736111 L16.15625,7.26736111 L16.15625,5.5 C16.15625,4.72334957 15.5266504,4.09375 14.75,4.09375 L13.3993056,4.09375 L13.3993056,4.55555556 C13.3993056,5.02154581 13.0215458,5.39930556 12.5555556,5.39930556 C12.0895653,5.39930556 11.7118056,5.02154581 11.7118056,4.55555556 L11.7118056,4.09375 L6.28819444,4.09375 L6.28819444,4.55555556 C6.28819444,5.02154581 5.9104347,5.39930556 5.44444444,5.39930556 C4.97845419,5.39930556 4.60069444,5.02154581 4.60069444,4.55555556 L4.60069444,4.09375 Z M6.28819444,2.40625 L11.7118056,2.40625 L11.7118056,1 C11.7118056,0.534009742 12.0895653,0.15625 12.5555556,0.15625 C13.0215458,0.15625 13.3993056,0.534009742 13.3993056,1 L13.3993056,2.40625 L14.75,2.40625 C16.4586309,2.40625 17.84375,3.79136906 17.84375,5.5 L17.84375,15.875 C17.84375,17.5836309 16.4586309,18.96875 14.75,18.96875 L3.25,18.96875 C1.54136906,18.96875 0.15625,17.5836309 0.15625,15.875 L0.15625,5.5 C0.15625,3.79136906 1.54136906,2.40625 3.25,2.40625 L4.60069444,2.40625 L4.60069444,1 C4.60069444,0.534009742 4.97845419,0.15625 5.44444444,0.15625 C5.9104347,0.15625 6.28819444,0.534009742 6.28819444,1 L6.28819444,2.40625 Z M1.84375,8.95486111 L1.84375,15.875 C1.84375,16.6516504 2.47334957,17.28125 3.25,17.28125 L14.75,17.28125 C15.5266504,17.28125 16.15625,16.6516504 16.15625,15.875 L16.15625,8.95486111 L1.84375,8.95486111 Z"></path></svg>Feb 4, 2022</span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default (CardItem);