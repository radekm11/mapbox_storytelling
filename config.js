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
            image: 'https://imgur.com/a/vJ0VB1z',
            description: 'Across three major Southern novels, male characters make significantly more purchases than female characters. This disparity reflects deeper patterns of power, autonomy, and economic control in the American South.',
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
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Global Pattern - Males Purchase More',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Across all three novels, the data shows a clear trend: male characters make more purchases than female characters. In Their Eyes Were Watching God, it’s 25 to 12. In Salvage the Bones, it’s even more extreme—14 to 2. The only outlier is The Color Purple, where women make 14 purchases to the men’s 11. These numbers alone suggest a power imbalance rooted in gender. But by mapping each purchase and tying it to quotes from the novels, I wanted to show how these transactions represent more than just economics—they mark moments of authority, survival, or resistance..',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
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
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: './assets/color_purple_cover.jpg',
            description: 'In Hurston’s novel, most of the purchases are made by male characters like Joe Starks, who uses his wealth to build Eatonville and control Janie’s world. One example: Joe buys the store and sets Janie behind the counter, but only as a figurehead. “She was there in the store for him to look at, not for the customers to talk to.” The act of purchasing becomes a form of display and control. While Janie does make a few purchases, they are minor and almost never autonomous. The map reflects this imbalance—most economic points trace male movement and decision-making.',
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
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple - Overview',
            image: './assets/firestone_farm.jpg',
            description: 'Another test'
',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
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
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
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
