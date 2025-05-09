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
            description: 'Across three major Southern novels- Their Eyes Were Watching God, The Color Purple, and Salvage the Bones- male characters make significantly more purchases than female characters. This disparity reflects deeper patterns of males having more power, autonomy, and economic control in the American South.',
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
            description: 'Across all three novels, the data shows a clear trend: male characters make more purchases than female characters. In Their Eyes Were Watching God, it’s 25 to 12. In Salvage the Bones, it’s even more extreme—14 to 2. The only outlier is The Color Purple, where women make 14 purchases to the men’s 11. These numbers alone suggest a power imbalance rooted in gender. But by mapping each purchase, I wanted to show how these transactions represent more than just economics—they mark moments of authority, survival, or resistance..',
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
            description: 'In Hurston’s novel, most of the purchases are made by male characters like Joe Starks, who uses his wealth to build Eatonville and control Janie’s world. One example: Joe buys the store and sets Janie behind the counter, but only as a figurehead. “She was there in the store for him to look at, not for the customers to talk to.”(Page 55) The act of purchasing becomes a form of display and control. While Janie does make a few purchases, they are minor and almost never autonomous. The map reflects this imbalance—most economic points trace male decision-making.',
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
            description: 'This is the only novel where women make more purchases than men—a reflection of its focus on female empowerment. As Celie gains independence, her buying becomes a symbol of self-worth. One key moment is when she buys her own house and business: “I’m pore, I’m black, I may be ugly and can’t cook… But I’m here.” These purchases mark the point when she starts choosing for herself.',
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
            description: 'So why do women make more purchases in this novel compared to the others? One reason is that the story centers women’s journeys from powerlessness to agency. Unlike in the other novels, female characters here are allowed to grow economically. Shug, Sofia, Celie—they each carve out their own space. The men, on the other hand, often lose their grip on control (like Mister) or are pushed aside in the narrative. The power dynamic flips, and the data reflects that. Purchases made by women here aren’t just acts of economy—they’re acts of reclamation.',
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
            description: 'In Jesmyn Ward’s novel, nearly all the purchases are made by men—14 compared to just 2 by women. Most of the female characters, like Esch, are too young, too poor, or too trapped in cycles of dependence to make economic choices. The few purchases made by women are often tied to survival, like buying pregnancy tests or food. Meanwhile, men purchase everything from dogfighting supplies to building materials. When Daddy uses FEMA money to buy plywood, it’s a reminder that even aid is filtered through male authority. Mapping this imbalance shows how deep it runs in the structure of the family.',
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
            description: 'In the books Their Eyes Were Watching God and The Color Purple, the female purchases are more spread throughout the map than male purchases. This is due to the fact that female characters often have to leave home or move between places to gain independence or escape control. Their purchases might reflect that movement—buying things in new places as part of their personal journey.',
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
            description: 'Many female characters make emotional or symbolic choices that don’t involve buying anything. So while maps track purchases, they can’t always capture power expressed in other forms—like resisting, nurturing, or storytelling. That might make female agency seem less visible, when in fact it’s just expressed differently. Mapping purchases reveals part of the picture, but the gaps are just as telling—especially when women’s power isn’t directly tied to purchases.',
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
            description: 'Across these Southern novels, who gets to make purchases reveals much more than who holds the money—it shows who holds power. Male characters dominate the buying in two out of three books, reflecting long-standing gender roles where men make decisions and control resources. But when women do purchase, especially in The Color Purple, it often marks a turning point—asserting identity, independence, and resistance. Mapping these patterns doesn’t just show gender imbalance; it shows how acts of buying can either reinforce or disrupt the power dynamic between men and women.',
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
            description: 'This project maps how gender affects who buys what—but the data has big limits. We used dropdown categories, so a lot of nuance is lost. We often don’t know who something was bought from, how it was paid for/if it was stolen, or even what exactly was purchased. The map helps us visualize power, but gendered agency isn’t always visible in clean data fields. It’s a starting point, not the full picture.',
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
