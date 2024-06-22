import React, {Fragment, useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const CardItem = ({follow,image,category,caption}) => (

    // link,image,category,tagline
    // const res = {
    //     "pageData": {
    //         "breadcrumbItems": [
    //             {
    //                 "displayName": "Home",
    //                 "link": "/blog/"
    //             },
    //             {
    //                 "displayName": "Cleaning",
    //                 "link": "/blog/cleaning/"
    //             },
    //             {
    //                 "displayName": "How To Clean Your Fridge And Organise It"
    //             }
    //         ],
    //         "title": "How To Clean Your Fridge And Organise It",
    //         "content": "<p><span><em>Struggling to clean your fridge? Here is a step-by-step guide to cleaning and organising it.</em></span></p><p><span>A fridge is the heart of the kitchen. It preserves our food for days, weeks, and sometimes months. Which is also what makes the refrigerator an easy place to put things away and forget about them. Until that ultimate moment of reckoning, when you cannot find that one ingredient crucial to your Masterchef-level recipe that you were certain you’d put away in the right corner of the top shelf about a month ago. And that’s when you ask yourself: How to clean this fridge.</span></p><p><span>A disorganised fridge is also an unclean fridge. Such a fridge isn’t just unpleasant to look at but also unhygienic. A messy fridge also doesn’t help with the cooling, so you end up having a fridge that isn’t power efficient.</span></p><p><span>But cleaning a fridge can be daunting, especially if you haven’t given it much attention. So, before we answer how to clean the fridge, here are some questions you’re likely asking.</span></p><h2>What is the best thing to clean the inside of a fridge with?</h2><p><span>A solution of mild dishwashing concentrate and warm water is the best thing to clean the inside of a fridge. This solution is strong enough to cut through the grease and grime that forms inside a fridge but also gentle enough to avoid damaging surfaces.</span></p><p><span>Remember, the refrigerator is unlike any other surface in the house, primarily because it holds fresh food. Harsh chemicals or abrasives won’t just damage the surfaces, the residue they leave behind could also potentially contaminate your food.</span></p><p><span>To make this cleaning solution, add a few drops of your everyday dishwashing concentrate in about half a bucket of warm water. Use this solution to wipe down all shelves, drawers, and interior surfaces. If you’d like, you could also consider adding a tablespoon of baking soda to the mix to kill some of the stronger odours.</span></p><h2>What does baking soda in the fridge do?</h2><p><span>Baking soda is a natural deodoriser. It helps get rid of the odours in your fridge.</span></p><p><span>The refrigerator is the one place where all kinds of food items get stored. Whether it’s fish or chicken, fresh vegetables, or chocolates – all of them compete with each other for the limited space inside your refrigerator.</span></p><p><span>No matter how organised you are and ensure all these items are in airtight containers, odours tend to waft out and can be an assault on your senses when you open the fridge doors quite unsuspectingly.</span></p><h2>Should I empty my fridge before cleaning it?</h2><p><span>Yes, you should empty your fridge before cleaning it. Just as you would declutter a room before taking a broom or mop, you need to empty your fridge entirely before cleaning it. This will ensure you reach every nook and cranny inside the fridge, and you can take out all the removable shelves to wash them properly in the kitchen sink. Emptying the fridge also helps you take stock of expiration dates on products, or whether you really need that Worcestershire sauce you were certain you’d use daily in your meals.</span></p><h2>Can I keep the refrigerator turned on while cleaning?</h2><p><span>It’s generally advisable to turn off your refrigerator while cleaning. This way, you conserve energy. However, do remember to keep your perishable food items in a cool place while the fridge is turned off.</span></p><h2>What is the easiest way to clean under a refrigerator?</h2><p><span>The easiest way to clean under a refrigerator is with a vacuum cleaner. Pop up the narrow nozzle attachment, slide it under the fridge and turn on the vacuum cleaner to remove dust, dirt, and debris. If there are stubborn stains, use a damp cloth or sponge to wipe them away. Don’t forget to unplug the refrigerator before cleaning underneath it to ensure your safety.</span></p><h2>How do you clean refrigerator gaskets?</h2><p><span>The refrigerator gasket is the rubber lining around your fridge door that keeps the cold air in and the warm air out. This airtight seal is crucial to keep your fridge running smoothly and efficiently.</span></p><p><span>However, gaskets by their very design, tend to attract mould and other dirt. So it is important to clean them regularly.</span></p><p><span>To clean refrigerator gaskets, dip a soft toothbrush into the same soapy water solution you have made for cleaning the rest of the fridge and gently scrub along the seals. You will need to pay attention to the folds and creases where dirt and grime can accumulate.&nbsp;</span></p><p><span>Once you’re done, make sure to wipe the folds dry with a clean dry cloth.</span></p><h2>How often should I clean my fridge?</h2><p><span>You should clean your fridge every 3-4 months. You could clean it more frequently if you notice spills or stains.&nbsp;</span></p><p><span>The fridge’s outside – including the top, sides, and handles – should be wiped down with a damp cloth regularly.</span></p><p><span>You can deep clean your refrigerator – this would involve removing shelves and drawers – twice a year.</span></p><h2>How to deep clean my fridge</h2><p><span>When you deep clean your fridge, you take out every last food item inside it, all its removable parts, and the entire appliance. Here is a step-by-step guide to deep cleaning your fridge for a fresher-looking kitchen.</span></p><h3>Empty the fridge</h3><p><span>The first step to cleaning the fridge is to empty it. Take out all the food items, discard everything that is past its expiration date, and give away any food item that you don’t plan on using. Make sure to keep all the perishable food items in a cool space, perhaps in an air-conditioned room, till you clean your entire fridge.</span></p><h3>Remove all shelves and drawers</h3><p><span>All refrigerators have adjustable shelves and removable drawers. Remove all of them and wash them down as you would dishes and utensils – with warm water and dishwashing soap. Use a baking soda paste for any stubborn stains or odours.</span></p><h3>Clean the insides of your fridge</h3><p><span>Now that your fridge is empty dip a soft sponge or cloth into a solution of warm water and dishwashing liquid and start cleaning the interiors of the refrigerator. Pay special attention to spills, stains, and areas with visible grime. If there are some older, more persistent stains, use the baking soda paste to scrub them away gently. Make sure to clean the corners and crevices where spills often hide.</span></p><h3>Clean the gaskets</h3><p><span>Refrigerator gaskets tend to attract grime and mould. Use a soft toothbrush and the soapy water solution to clean the gasket. Scrub along the folds and the creases, which is where most of the dirt and dust tend to hide, and once done, wipe it down first with a clean wet cloth and then a dry one.</span></p><h3>Clean the outside of your fridge</h3><p><span>Chances are you’re cleaning your fridge’s doors, handles, and sides regularly since they are easily accessible. However, make sure to clean the top of your fridge too. This part gets missed every so often, especially so when the refrigerator is a tall one.</span></p><h3>Vacuum underneath the fridge</h3><p><span>Unplug the refrigerator and use a vacuum cleaner with a narrow nozzle attachment to clean the space underneath. This is essential because the dust and debris accumulating here impact your refrigerator’s efficiency.</span></p><h3>Wipe it down with a dry cloth</h3><p><span>Once you’re done with this, wipe down the fridge with a clean, dry towel. To avoid mould, ensure that the gasket, shelves, and drawers are dry before you restock the fridge.</span></p><p><span>Admittedly, cleaning the fridge can be a daunting task. So if you’re feeling lazy or overwhelmed to clean the fridge, simply book an appointment with </span><a target=\"_blank\" href=\"https://www.urbancompany.com/cart?city=city_mumbai_v2&amp;category=professional_home_cleaning\"><span>Urban Company</span></a><span> and we’ll get the job done.</span></p>",
    //         "photo": {
    //             "cover": "https://blog.urbancompany.com/wp-content/uploads/2024/02/shutterstock_1130161730.jpg",
    //             "thumbnail": "https://blog.urbancompany.com/wp-content/uploads/2024/02/shutterstock_1130161730.jpg"
    //         },
    //         "tags": [
    //             "Fridge Cleaning Service in Delhi",
    //             "Refrigerator Cleaning Delhi",
    //             "Refrigerator Services"
    //         ]
    //     }
    // }
    //
    // const card = res.pageData;

    // const ref = (card.breadcrumbItems.at(1)).link;
    // const image = card.photo.cover;
    // const category = card.breadcrumbItems.at(1).displayName;
    // const caption = card.breadcrumbItems.at(2).displayName;

    <div className="ultp-block-item post-id-8">
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
                            href={follow}>{category}</a>
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
    </div>
);
export default (CardItem);