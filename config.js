var config = {
    style: 'mapbox://styles/magulirb/cmacuqpgv009e01qu9ebyau3p',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWFndWxpcmIiLCJhIjoiY205OHYyY29qMDdmMDJxcTRqOTVnOXRnZSJ9.e61ualZfUvpJ2W_TXTtwUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Southern Literature',
    subtitle: 'Mapping Gender and Economic Power',
    byline: 'Radek Magulick',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Mapping Gender and Economic Power in Southern Literature',
            image: 'https://i.imgur.com/XXSn8Gz.jpeg',
            description: 'In class, we read different major Southern novels, and the three I chose to analyze further were: Their Eyes Were Watching God, The Color Purple, and Salvage the Bones. While analyzing different types of purchase data made in these novels, there was a clear trend: male characters made a lot more purchases than female characters. This difference shows trends of male dominance in the American South in terms of economic dominance, autonomy, and power.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'centered',
            hidden: false,
            title: 'Global Pattern - Males Purchase More',
            image: 'https://i.imgur.com/Lv34xW6.png',
            description: 'The trend that males make more purchases than females was hard to miss. In Their Eyes Were Watching God, it’s 25 to 12. In Salvage the Bones, it’s 14 to 2. The only book where females make more purchases than males is The Color Purple, where women make 14 purchases to the men’s 11. These numbers show that there is a purchase-power imbalance rooted in gender. However, by mapping every purchase, I aimed to show how these exchanges are more than just points on a map, they can show moments of power, survival, or even resistance.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: 'https://afterlivesofslavery.wordpress.com/wp-content/uploads/2017/11/1350e750fde9df9fc2a147fb3d7d89a1-halle-berry-good-movies.jpg?w=625',
            description: 'Male characters like Joe Starks, who uses his money to build Eatonville and rule Janie’s world, make the majority of the purchases in Hurston’s book. For example, Starks purchases the business and puts Janie behind the counter, but just as a figurehead. “She was there in the store for him to look at, not for the customers to talk to.”(Page 55) Buying turns into a tool for display and control. Even though Janie does make a few purchases, they are usually small and rarely on her own. This imbalance is shown on the map. The majority of economic points attribute decision-making to men.',
            location: {
                center: [-81.38643808791495, 28.618579170446417],
                zoom: 6.4,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple - Overview',
            image: 'https://media.npr.org/assets/img/2023/12/15/rev-1-tcp-05246_high_res_jpeg-5a30de845c0d6d7454afbef6c21de4af9c387cc6.jpeg?s=900&c=85&f=webp',
            description: 'This book has a central theme of female empowerment, and that is why this is the only book where women make more purchases than men. Celie’s purchases become a way of showing her increased autonomy as she becomes more independent. Her purchase of her own home and business is an important moment. “I’m pore, I’m black, I may be ugly and can’t cook… But I’m here.”(page 205). This quote comes from when Celie finally starts to stand up for herself.',
            location: {
                center: [-86.8148, 34.0809], 
                zoom: 5.50,
                pitch: 45.0,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple - Why More Female Purchases?',
            image: 'https://i.imgur.com/PFLsrYv.png',
            description: 'This story is all about different women’s journeys from oppression to empowerment. In this book female characters get to grow economically, which doesn’t happen in the others. Shug, Sofia, and Celie all start to become independent and take control over their own life, while the men, on the other hand, lose their control (like Mister) or are pushed aside in the story. The power dynamic changes, and the data reflects that. Purchases made by women here aren’t just acts of economy, they’re acts of gaining power/independence.',
            location: {
                center: [-9.236846, 5.369085], 
                zoom: 7.2,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
         },
{
            id: 'chapter-five',
            alignment: 'left',
            hidden: false,
            title: 'Salvage The Bones - Extreme Male Dominance',
            image: 'https://i.imgur.com/UgpItf9.png',
            description: 'Almost all purchases are made by men in this book: 14 compared to just 2 by women. Esch is too young, poor, and reliant on others for her survival to make economic choices. The few purchases made by Esch are her necessities. An example of one of her purchases (that is a theft) is in Chapter 2, where she steals a pregnancy test after reasonable suspicion that she might be pregnant. Men, on the other hand, purchase anything from building materials to gear for dogfighting. Daddy is the primary decision maker during this rush to protect the house from the hurricane, especially because the family no longer has a mother. He salvages a lot of materials to protect the house. This really shows how heavily male-controlled this family is.',
            location: {
                center: [-89.26806244331303, 30.400637931513852],
                zoom: 8.4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-six',
            alignment: 'right',
            hidden: false,
            title: 'Why Are Female Purchases More Spread Out?',
            image: 'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/bxs1imntbika3lkicde2.jpg',
            description: 'In the books Their Eyes Were Watching God and The Color Purple, the female purchases are more spread throughout the map than male purchases. This is because female characters often need to leave home, or between different places, to gain their independence and escape control. Their purchase locations reflect that movement, they are buying things in new places as part of their journey. “She had an inside and an outside now and suddenly she knew how not to mix them.”(Their Eyes Were Watching God, Chapter 6, Page 72) This quote is from the moment Janie started to understand who she is and what she wants. It marks when she starts separating herself from the people and forces trying to control her.',
            location: {
                center: [-81.38643808791495, 28.618579170446417], 
                zoom: 6.5,
                pitch: 60,
                bearing: 80,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'centered',
            hidden: false,
            title: 'Mapped and Unmapped Agency',
            image: 'https://media.vanityfair.com/photos/657205c7d3946842dc3c4235/1:1/w_1232,h_1232,c_limit/The-Color-Purple-2023.png',
            description: 'Although the fact that males making more purchases means they hold more power, many female characters make powerful decisions without making actual purchases. Therefore, even if maps show a purchase, it doesn’t ALWAYS directly correlate to power. Female empowerment may seem less noticable, but it can be conveyed in different ways (resisting, nurturing, etc). Part of the power ratio can be shown by mapping purchases, but the parts where there are no purchases involved can still be meaningful. Woman’s empowerment isn’t directly defined by her purchases, but overall it is still a sign that they hold less power.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'chapter-eight',
            alignment: 'left',
            hidden: false,
            title: 'Gender and Power - A Last Look',
            image: 'https://i.imgur.com/9YSwQ16.png',
            description: 'Who makes more purchases in these Southern novels is more than just simple points on a map, it shows who overall holds more power. Male characters dominate the purchasing ratio in two out of three books, showing long established gender roles where men make the decisions and control the resources. When women do start to make more purchases, especially in The Color Purple, it often marks a turning point in their journey, showing independence and resistance. Not only does mapping these patterns highlight a gender imbalance, but it also shows how purchasing behaviors can either support or challenge power dynamics between men and women.',
            location: {
                center: [-81.38643808791495, 28.618579170446417], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-nine',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion - What the Data Shows, and What It Misses',
            image: 'https://media.npr.org/assets/img/2023/12/15/rev-1-tcp-15102_high_res_jpeg_custom-8c1d2a21d25ff95635ddfd9c67743774ca14d746.jpeg',
            description: 'This project maps how gender and purchases made correlate, but the data has big limits. We used dropdown categories to input data, so a lot of details are unable to be shown. There are a lot of times that we don’t know who something was bought from, how it was paid for/if it was stolen, or what exactly was purchased. The map helps us visualize power, but gendered agency isn’t always visible in data fields. It’s a starting point, not the full picture.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
