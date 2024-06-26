import React, {Fragment, useEffect} from 'react';
import CardItem from "./CardItem";

const EntryContent = () => {
    const cards = [
        {
            "pageData": {
                "breadcrumbItems": [
                    {
                        "displayName": "Home",
                        "link": "/blog/"
                    },
                    {
                        "displayName": "Carpentry",
                        "link": "/blog/carpentry/"
                    },
                    {
                        "displayName": "This Carpenter’s Story Has A Lesson For Everybody"
                    }
                ],
                "title": "This Carpenter’s Story Has A Lesson For Everybody",
                "content": "<p>In October last year, Umesh Sharma was employed as a helper by a firm in Gurgaon where he drew a monthly salary of Rs. 14,000. This year, he’s already made over Rs. 1 lakh in the months of March and April, working as a carpenter.</p><p>Umesh’s story is not uncommon. He comes from a traditional farming family in Darbhanga, Bihar. Eight years ago, he dropped out of school and came to Delhi, in search of work. He says, “There was only one school in our village and the teachers were not very interested. And of course, I was never a very good student myself. I regret it now, but it’s too late for me. However, I want my brothers to get the opportunity I didn’t have.”</p><p>It was this dream that led him to his first job as a helper, under a contractor, when he first came to Delhi. He would carry back breaking loads in the punishing heat of the summer, and do any number of odd jobs, for a meager daily wage, just so he could save up money to send back home for his brothers’ education.</p><p>“There Were Times When I Thought I Should Just Quit. I Didn’t Know For Sure If I Could Support Myself Like This, Let Alone My Family. But, I Knew I Had To Keep Working If I Wanted My Brothers To Do Better In Life.”</p><p>Umesh soon completed his training as a carpenter and took up a job as a helper with a small firm in Delhi. He was earning better but, apart from sending money home, he now also had a household of his own to support. Then, in November last year, he happened to see an Urban Company ad for carpenters online and called the number given.</p><p>One week later, Umesh was officially an Urban Company partner. “It wasn’t easy at first- the first couple of months, I made 70-80 calls each month. I wouldn’t even know how to speak to customers at first, but, I didn’t want to give up just like that. After that, I kept pushing myself, kept running around, hoping it would pay off. I used to call Deepak sir at Urban Company every day, and he coached me on how I should communicate with customers. I could never have done this on my own.”</p><p>Now, Umesh’s income has steadily increased over the months until, in the past two months, he’s been making over Rs. 50,000 each month. Now, he says, “One of my younger brothers’ has just registered for a B.A. course- the first person in the family to go to college. Now, he won’t have to run around like me. Hopefully, he can even get a government job”</p><p>We all know the importance of a formal, systematic education. But, sheer determination and the will to succeed are the things that truly count, when it matters.</p>",
                "photo": {
                    "cover": "https://blog.urbancompany.com/wp-content/uploads/2022/12/carpenter-1.jpg",
                    "thumbnail": "https://blog.urbancompany.com/wp-content/uploads/2022/12/carpenter-1.jpg"
                },
                "tags": [
                    "Carpenter Service in Delhi",
                    "Best Carpenters Delhi",
                    "Carpentry Services"
                ]
            },
            "category": "Carpentery",
            "meta": {
                "canonical": "/this-carpenters-story-has-a-lesson-for-everybody/",
                "title": "This Carpenter’s Story Has A Lesson For Everybody",
                "description": "In October last year, Umesh Sharma was employed as a helper by a firm in Gurgaon where he drew a monthly salary of Rs. 14,000.",
                "og:title": "This Carpenter’s Story Has A Lesson For Everybody",
                "og:type": "company",
                "og:locale": "en_US",
                "og:description": "In October last year, Umesh Sharma was employed as a helper by a firm in Gurgaon where he drew a monthly salary of Rs. 14,000.",
                "og:url": "/this-carpenters-story-has-a-lesson-for-everybody/",
                "og:site_name": "OyeBusy",
                "og:image": "https://assets.oyebusy.com/oyebusy-black-logo.png",
                "article:publisher": "https://www.facebook.com/oyebusyindia/",
                "article:modified_time": "2025-05-16T12:34:56Z",
                "twitter:card": "summary_large_image",
                "twitter:title": "This Carpenter’s Story Has A Lesson For Everybody",
                "twitter:description": "In October last year, Umesh Sharma was employed as a helper by a firm in Gurgaon where he drew a monthly salary of Rs. 14,000.",
                "twitter:image": "https://assets.oyebusy.com/oyebusy-black-logo.png",
                "twitter:site": "@oyebusyindia",
                "twitter:label1": "Est. reading time",
                "twitter:data1": "6 minutes"
            },
            "permaLink": "/this-carpenters-story-has-a-lesson-for-everybody/",
            "visibilty": "Public",
            "publish": "2025-05-16T12:34:56Z",
            "isActive": true,
            "publishedOn": "2025-05-16T12:34:56Z"
        },
        {
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
                "title": "Buying A TV? Here’s Our Helpful TV Guide",
                "content": "<p>From black and white TVs to CRTs to LEDs and LCDs, buying a TV these days involves a lot of research. To save you the trouble of an extensive search, here is our TV buying guide. We have compiled a list of different TVs and their advantages to help you choose the best TV for you and your family.</p><h2>1. LCD Televisions</h2><p>LCD stands for Liquid Crystal Display and these LCD TVs have replaced the CRT (Cathode Ray Tubes) TVs in the 21st century. This technology was used in the eighties in portable computers as Passive matrix LCDs but was too slow for television usage. After much experimentation, by 2008, the LCD TVs managed to conquer the market-beating all the expensive as well as the budget friendly range.</p><p>LCD panels need external light, so a backlight is used to produce visibility. These backlights are Cold Cathode Fluorescent Lamps, commonly known as CCFLs, which have a diffuser to spread white light evenly.</p><p>LCD TVs are not able to capture the black color perfectly and is difficult to see quick movements on the screen.</p><h2>2. LED Televisions</h2><p>LED stands for Light Emitting Diodes and LED TVs are basically LCD panels backlit by LEDs instead of CCFLs. These LCDs are either lit by white LED displays or Red, Green and Blue (RGB) displays.</p><p>There are many advantages of LED displays over LCDs:</p><ul><li>LEDs have a better colour arrangement.</li><li>LED TVs are slim and are much lighter.</li><li>Since these TVs consume less power, they remain cool and there are fewer chances of overheating, thereby, increasing the lifespan of your TV.</li></ul><p>There are quite a few variations as well as developments on the LED television sets, like the OLED and QLED television sets.</p><ul><li>OLED stands for Organic Light Emitting Diodes and in OLED TVs, an organic semiconductor produces light in response to an electric current. Currently, only high-end models of LG and some other manufacturers are using OLED technology. OLED has higher contrast ratios and are available in the 4K format as well. They do not suffer from bad viewing angles in their picture quality. Brightness remains consistent in these TV sets.</li><li>QLEDs use quantum dot technology and nanocrystals are put in front of LEDs and are able to produce much higher resolution.</li></ul><p>Also Read: <a target=\"_blank\" href=\"https://www.urbancompany.com/blog/home/10-essential-tips-to-maintain-your-tv/?utm_source=article&amp;utm_medium=differenttypesoftv&amp;utm_campaign=bloginline\"><span style=\"color:rgb(110, 66, 229);\">10 Essential Tips To Maintain Your TV Set</span></a></p><h2>3. Flat Screen TVs</h2><p>Usually, LED and LCD television sets are flat screen TVs. They provide standard reflections and the sides get darkened when viewed from close. They are not that cumbersome in their size and are easier to handle. Flat screen TVs come in all price ranges.</p><h2>4. Curved Screen TVs</h2><p>While curved screen TVs are bulky, there are certain individual characteristics that make it ideal at times. Many tend to believe that curved screen TVs provide a more realistic experience than flat screens as their viewing angle is wide. They can be viewed from close and there will be less darkening. Curved Screen TVs are expensive. LG makes curved OLED television sets.</p><h2>5. 3D TVs</h2><p>3D television sets offer depth perception and a much immersive experience through stereoscopic displays, multi-view displays, etc. Some display two different images simultaneously and special 3D glasses must be used for getting the perfect vision. Some 3D TV sets are autostereoscopic that do not require 3D glasses. 3D TV sets are rare, except Sony and LG that have a range of 3D TVs while other manufacturers have discontinued them.</p><h2>6. HD TVs</h2><p>HD (High Definition) television sets provide much higher resolution so that the images on your flat panel display suffer less pixelation than the common standard definition (SD) TV. Frame sizes, frame rates and scanning systems are the three main factors for HDTVs. HDTV is the current standard format for all videos.</p><p>At Urban Company, we provide you with professionals who have in-depth knowledge and can guide you in purchasing and <a target=\"_blank\" href=\"https://www.urbancompany.com/hyderabad-tv-repair/?utm_source=article&amp;utm_medium=differenttypesoftv&amp;utm_campaign=bloginline\"><span style=\"color:rgb(110, 66, 229);\">installing your new Television set</span></a>. Our professionals can also help you with TV repair and service. Put aside your worries with Urban Company and enjoy our smooth service at the comfort of your home!</p>",
                "photo": {
                    "cover": "https://blog.urbancompany.com/wp-content/uploads/2022/12/shutterstock_702291805-1-1-1-1.jpg",
                    "thumbnail": "https://blog.urbancompany.com/wp-content/uploads/2022/12/shutterstock_702291805-1-1-1-1.jpg"
                },
                "tags": [
                    "TV Installation in Noida",
                    "Best Television's in Noida",
                    "Television Services"
                ]
            },
            "category": "Television",
            "meta": {
                "canonical": "/buying-a-tv-heres-our-helpful-tv-guide/",
                "title": "Buying A TV? Here’s Our Helpful TV Guide",
                "description": "From black and white TVs to CRTs to LEDs and LCDs, buying a TV these days involves a lot of research.",
                "og:title": "Buying A TV? Here’s Our Helpful TV Guide",
                "og:type": "company",
                "og:locale": "en_US",
                "og:description": "From black and white TVs to CRTs to LEDs and LCDs, buying a TV these days involves a lot of research.",
                "og:url": "/buying-a-tv-heres-our-helpful-tv-guide/",
                "og:site_name": "OyeBusy",
                "og:image": "https://assets.oyebusy.com/oyebusy-black-logo.png",
                "article:publisher": "https://www.facebook.com/oyebusyindia/",
                "article:modified_time": "2025-05-17T12:34:56Z",
                "twitter:card": "summary_large_image",
                "twitter:title": "Buying A TV? Here’s Our Helpful TV Guide",
                "twitter:description": "From black and white TVs to CRTs to LEDs and LCDs, buying a TV these days involves a lot of research.",
                "twitter:image": "https://assets.oyebusy.com/oyebusy-black-logo.png",
                "twitter:site": "@oyebusyindia",
                "twitter:label1": "Est. reading time",
                "twitter:data1": "6 minutes"
            },
            "permaLink": "/buying-a-tv-heres-our-helpful-tv-guide/",
            "visibilty": "Public",
            "publish": "2025-05-17T12:34:56Z",
            "isActive": true,
            "publishedOn": "2025-05-17T12:34:56Z"
        },
        {
            "pageData": {
                "breadcrumbItems": [
                    {
                        "displayName": "Home",
                        "link": "/blog/"
                    },
                    {
                        "displayName": "Cleaning",
                        "link": "/blog/cleaning/"
                    },
                    {
                        "displayName": "How To Clean Your Fridge And Organise It"
                    }
                ],
                "title": "How To Clean Your Fridge And Organise It",
                "content": "<p><span><em>Struggling to clean your fridge? Here is a step-by-step guide to cleaning and organising it.</em></span></p><p><span>A fridge is the heart of the kitchen. It preserves our food for days, weeks, and sometimes months. Which is also what makes the refrigerator an easy place to put things away and forget about them. Until that ultimate moment of reckoning, when you cannot find that one ingredient crucial to your Masterchef-level recipe that you were certain you’d put away in the right corner of the top shelf about a month ago. And that’s when you ask yourself: How to clean this fridge.</span></p><p><span>A disorganised fridge is also an unclean fridge. Such a fridge isn’t just unpleasant to look at but also unhygienic. A messy fridge also doesn’t help with the cooling, so you end up having a fridge that isn’t power efficient.</span></p><p><span>But cleaning a fridge can be daunting, especially if you haven’t given it much attention. So, before we answer how to clean the fridge, here are some questions you’re likely asking.</span></p><h2>What is the best thing to clean the inside of a fridge with?</h2><p><span>A solution of mild dishwashing concentrate and warm water is the best thing to clean the inside of a fridge. This solution is strong enough to cut through the grease and grime that forms inside a fridge but also gentle enough to avoid damaging surfaces.</span></p><p><span>Remember, the refrigerator is unlike any other surface in the house, primarily because it holds fresh food. Harsh chemicals or abrasives won’t just damage the surfaces, the residue they leave behind could also potentially contaminate your food.</span></p><p><span>To make this cleaning solution, add a few drops of your everyday dishwashing concentrate in about half a bucket of warm water. Use this solution to wipe down all shelves, drawers, and interior surfaces. If you’d like, you could also consider adding a tablespoon of baking soda to the mix to kill some of the stronger odours.</span></p><h2>What does baking soda in the fridge do?</h2><p><span>Baking soda is a natural deodoriser. It helps get rid of the odours in your fridge.</span></p><p><span>The refrigerator is the one place where all kinds of food items get stored. Whether it’s fish or chicken, fresh vegetables, or chocolates – all of them compete with each other for the limited space inside your refrigerator.</span></p><p><span>No matter how organised you are and ensure all these items are in airtight containers, odours tend to waft out and can be an assault on your senses when you open the fridge doors quite unsuspectingly.</span></p><h2>Should I empty my fridge before cleaning it?</h2><p><span>Yes, you should empty your fridge before cleaning it. Just as you would declutter a room before taking a broom or mop, you need to empty your fridge entirely before cleaning it. This will ensure you reach every nook and cranny inside the fridge, and you can take out all the removable shelves to wash them properly in the kitchen sink. Emptying the fridge also helps you take stock of expiration dates on products, or whether you really need that Worcestershire sauce you were certain you’d use daily in your meals.</span></p><h2>Can I keep the refrigerator turned on while cleaning?</h2><p><span>It’s generally advisable to turn off your refrigerator while cleaning. This way, you conserve energy. However, do remember to keep your perishable food items in a cool place while the fridge is turned off.</span></p><h2>What is the easiest way to clean under a refrigerator?</h2><p><span>The easiest way to clean under a refrigerator is with a vacuum cleaner. Pop up the narrow nozzle attachment, slide it under the fridge and turn on the vacuum cleaner to remove dust, dirt, and debris. If there are stubborn stains, use a damp cloth or sponge to wipe them away. Don’t forget to unplug the refrigerator before cleaning underneath it to ensure your safety.</span></p><h2>How do you clean refrigerator gaskets?</h2><p><span>The refrigerator gasket is the rubber lining around your fridge door that keeps the cold air in and the warm air out. This airtight seal is crucial to keep your fridge running smoothly and efficiently.</span></p><p><span>However, gaskets by their very design, tend to attract mould and other dirt. So it is important to clean them regularly.</span></p><p><span>To clean refrigerator gaskets, dip a soft toothbrush into the same soapy water solution you have made for cleaning the rest of the fridge and gently scrub along the seals. You will need to pay attention to the folds and creases where dirt and grime can accumulate.&nbsp;</span></p><p><span>Once you’re done, make sure to wipe the folds dry with a clean dry cloth.</span></p><h2>How often should I clean my fridge?</h2><p><span>You should clean your fridge every 3-4 months. You could clean it more frequently if you notice spills or stains.&nbsp;</span></p><p><span>The fridge’s outside – including the top, sides, and handles – should be wiped down with a damp cloth regularly.</span></p><p><span>You can deep clean your refrigerator – this would involve removing shelves and drawers – twice a year.</span></p><h2>How to deep clean my fridge</h2><p><span>When you deep clean your fridge, you take out every last food item inside it, all its removable parts, and the entire appliance. Here is a step-by-step guide to deep cleaning your fridge for a fresher-looking kitchen.</span></p><h3>Empty the fridge</h3><p><span>The first step to cleaning the fridge is to empty it. Take out all the food items, discard everything that is past its expiration date, and give away any food item that you don’t plan on using. Make sure to keep all the perishable food items in a cool space, perhaps in an air-conditioned room, till you clean your entire fridge.</span></p><h3>Remove all shelves and drawers</h3><p><span>All refrigerators have adjustable shelves and removable drawers. Remove all of them and wash them down as you would dishes and utensils – with warm water and dishwashing soap. Use a baking soda paste for any stubborn stains or odours.</span></p><h3>Clean the insides of your fridge</h3><p><span>Now that your fridge is empty dip a soft sponge or cloth into a solution of warm water and dishwashing liquid and start cleaning the interiors of the refrigerator. Pay special attention to spills, stains, and areas with visible grime. If there are some older, more persistent stains, use the baking soda paste to scrub them away gently. Make sure to clean the corners and crevices where spills often hide.</span></p><h3>Clean the gaskets</h3><p><span>Refrigerator gaskets tend to attract grime and mould. Use a soft toothbrush and the soapy water solution to clean the gasket. Scrub along the folds and the creases, which is where most of the dirt and dust tend to hide, and once done, wipe it down first with a clean wet cloth and then a dry one.</span></p><h3>Clean the outside of your fridge</h3><p><span>Chances are you’re cleaning your fridge’s doors, handles, and sides regularly since they are easily accessible. However, make sure to clean the top of your fridge too. This part gets missed every so often, especially so when the refrigerator is a tall one.</span></p><h3>Vacuum underneath the fridge</h3><p><span>Unplug the refrigerator and use a vacuum cleaner with a narrow nozzle attachment to clean the space underneath. This is essential because the dust and debris accumulating here impact your refrigerator’s efficiency.</span></p><h3>Wipe it down with a dry cloth</h3><p><span>Once you’re done with this, wipe down the fridge with a clean, dry towel. To avoid mould, ensure that the gasket, shelves, and drawers are dry before you restock the fridge.</span></p><p><span>Admittedly, cleaning the fridge can be a daunting task. So if you’re feeling lazy or overwhelmed to clean the fridge, simply book an appointment with </span><a target=\"_blank\" href=\"https://www.urbancompany.com/cart?city=city_mumbai_v2&amp;category=professional_home_cleaning\"><span>Urban Company</span></a><span> and we’ll get the job done.</span></p>",
                "photo": {
                    "cover": "https://blog.urbancompany.com/wp-content/uploads/2024/02/shutterstock_1130161730.jpg",
                    "thumbnail": "https://blog.urbancompany.com/wp-content/uploads/2024/02/shutterstock_1130161730.jpg"
                },
                "tags": [
                    "Fridge Cleaning Service in Delhi",
                    "Refrigerator Cleaning Delhi",
                    "Refrigerator Services"
                ]
            },
            "category": "Cleaning",
            "meta": {
                "canonical": "/how-to-clean-your-fridge-and-organise-it/",
                "title": "How To Clean Your Fridge And Organise It",
                "description": "Struggling to clean your fridge? Here is a step-by-step guide to cleaning and organising it. A fridge is the heart of the kitchen.",
                "og:title": "How To Clean Your Fridge And Organise It",
                "og:type": "company",
                "og:locale": "en_US",
                "og:description": "Struggling to clean your fridge? Here is a step-by-step guide to cleaning and organising it. A fridge is the heart of the kitchen.",
                "og:url": "/how-to-clean-your-fridge-and-organise-it/",
                "og:site_name": "OyeBusy",
                "og:image": "https://assets.oyebusy.com/oyebusy-black-logo.png",
                "article:publisher": "https://www.facebook.com/oyebusyindia/",
                "article:modified_time": "2025-05-18T12:34:56Z",
                "twitter:card": "summary_large_image",
                "twitter:title": "How To Clean Your Fridge And Organise It",
                "twitter:description": "Struggling to clean your fridge? Here is a step-by-step guide to cleaning and organising it. A fridge is the heart of the kitchen.",
                "twitter:image": "https://assets.oyebusy.com/oyebusy-black-logo.png",
                "twitter:site": "@oyebusyindia",
                "twitter:label1": "Est. reading time",
                "twitter:data1": "6 minutes"
            },
            "permaLink": "/how-to-clean-your-fridge-and-organise-it/",
            "visibilty": "Public",
            "publish": "2025-05-18T12:34:56Z",
            "isActive": true,
            "publishedOn": "2025-05-18T12:34:56Z"
        },
    ]
        return (
            <div
                className="ultp-post-grid-block wp-block-ultimate-post-post-grid-4 ultp-block-0fc298">
                <div className="ultp-block-wrapper">
                    <div
                        className="ultp-block-items-wrap ultp-block-row ultp-layout1 ultp-block-content-">
                        <Fragment>
                            {cards.map((card, index) => (
                               <CardItem
                                   key={index}
                                   follow={(card.pageData.breadcrumbItems.at(1)).link}
                                   image={card.pageData.photo.cover}
                                   category={card.pageData.breadcrumbItems.at(1).displayName}
                                   caption={card.pageData.breadcrumbItems.at(2).displayName}
                                   href={card.meta["og:url"]}
                               />
                            ))}
                        </Fragment>

                    </div>
                </div>
                <div className="pagination-block-html" aria-hidden="true"></div>
            </div>
        );
}

export default EntryContent;