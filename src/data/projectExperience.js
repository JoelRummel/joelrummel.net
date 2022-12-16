const PROJECT_EXPERIENCE = [
    {
        company: "Ludum Dare 46 Game Jam",
        jobTitle: `"The Empty Cone"`,
        startDate: "March 2020",
        image: require('../resources/experiences/emptycone.png'),
        shortDescription: "I programmed a video game in 72 hours for the worldwide Ludum Dare game jam, placing in the top 8% of over 3,500 competing entries",
        longDescription: `In March 2020, my brother and I participated in the 46th Ludum Dare game jam, creating "The Empty Cone".\
            My brother took charge of the graphics, interfaces, and audio, while I wrote most of the code. The theme was "Keep It\
            Alive", so in "The Empty Cone" you must keep your ice cream business alive. That is, both finanically alive from bankruptcy,
            and literally alive from random monster attacks! The game placed in the top 8% out of about 3,500 entries overall.
            
            The Empty Cone was made with Godot and written in Godot's scripting language GDScript. It was built for Windows and
	        for the web, which means you can play it in your browser <a href="https://acr515.itch.io/ld46">here</a>.

            `,
        skills: [
            {
                label: "Tools/skills",
                items: [
                    "Godot",
                    "GDScript",
                    "Video Game Development"
                ]
            }
        ]
    },
    {
        company: "College Football Simulator",
        jobTitle: "CFB-Simulator",
        startDate: "April 2018",
        endDate: "Present",
        image: require('../resources/experiences/cfbsim.png'),
        shortDescription: "I built a command-line program in C++ to rapidly simulate every facet of the college football season.",
        longDescription: `It's the fall of 2020. College football games are getting cancelled left and right, and entire\
            conferences are calling it quits for the year. Michigan still plays a few games, but it's just not the same\
            (plus, they suck). In a desperate attempt to fill the void, I created a college football simulator that is immune\
            to pandemics!

            My college football simulator is an active work-in-progress that aims to simulate every conceivable component of\
            NCAA football. Everything is written into code, from the 22 men on the field in each play to the 11-person coaching\
            staffs of all 130 FBS teams. Each recruit has their own unique combination of motivations for choosing a school,\
            such as proximity to their hometown or how early they'll be able to start. Each player has their own unique skillset\
            and development rate which is affected by the quality of their coaching staff. Programs can hire, fire, and poach\
            coaches from other schools depending on their unique expectations for each season. Teams adjust their personnel\
            selections for each play depending on the current game's context. Every tackle, catch, drop, deflection, etc. is\
            recorded, and every point scored for or against a team affects both their poll rankings and the public's perception\
            of their coaching staff. Every. Detail. Programmed.

            Despite its complexity, the program is efficiently written to be able to simulate entire seasons in the span of a\
            few seconds (hardware dependent). It also features a Google Test suite, although this is very much under active\
            development and has a long ways to go before reaching a high level of code coverage.

        `,
        skills: [
            {
                label: "Tools/skills",
                items: [
                    "C++",
                    "CMake",
                    "Automated Testing",
                    "Google Test",
                    "Git",
                    "GitHub"
                ]
            }
        ]
    },
    {
        company: "GMC Game Jam",
        jobTitle: `"Liquid Bacon"`,
        startDate: "Nov 2019",
        image: require('../resources/experiences/liquidbacon.png'),
        shortDescription: "I programmed a video game in one week for a game jam, placing 1st out of 26 competing entries.",
        longDescription: `In November 2018, my brother and I created "Liquid Bacon" in one week for the "GameMaker Community\
        Jam". Built to satisfy the theme "Chemical Reactions", this game follows a stingy protagonist who would rather try and\
        find the recipe for a mass-produced product than simply buy it. The player does so by talking to strange characters,\
        wandering remote areas, pillaging trash cans, fighting off bears, and exploring sketchy warehouses. The game was voted\
        as the winner out of all 26 entries!
    
        Liquid Bacon was made in GameMaker: Studio and written in GameMaker's proprietary scripting language GML.\
        It was built for Windows. (Link to game coming soon)

        `,
        skills: [
            {
                label: "Tools/skills",
                items: [
                    "GameMaker: Studio",
                    "Video Game Development"
                ]
            }
        ]
    },
    {
        company: "Trump Tweet Generator",
        jobTitle: "@DonaldTweetBot",
        startDate: "Feb 2020",
        image: require('../resources/experiences/trumptweetgenerator.png'),
        shortDescription: "I wrote a C++ program to randomly generate tweets in Donald Trump's style, alongside a Python program to post them to Twitter on a regular schedule.",
        longDescription: `As a fun side project, I wrote a C++ program to randomly generate tweets that sounded like real Donald\
            Trump tweets. The program took in data on Trump's own tweets, and took a crude/simple machine learning approach to\
            outputting tweets that were different while also sounding similar.

            To post these tweets, I wrote a Python program that ran the tweet generator and posted the output using the Twitter API.\
            I designed the program in such a way that it ran on a regular schedule, which was freshly determined each day depending on Trump's\
            actual tweeting frequencies. I installed and ran this pair of programs on a remote Ubuntu server in order to ensure\
            that tweets could be posted at any time.

            `,
        skills: [
            {
                label: "Languages",
                items: [
                    "C++",
                    "Python"
                ]
            }
        ]
    },
    {
        company: "Battle Bay Stats Scraper",
        jobTitle: "bb-stats.com (now defunct)",
        startDate: "???",
        image: require('../resources/experiences/bbstats.jpg'),
        shortDescription: "I wrote a program in Java to manipulate a video game client and visually scrape data, then I hosted the findings on a website.",
        longDescription: `I used to play a mobile video game called "Battle Bay", where players would equip boats with\
            weapons and then duel each other on the high seas. A big part of the game was deciding which boat and which weapons to use,\
            as some were almost certainly better than others. Unfortunately, there were no public APIs available for data such\
            as boat/weapon use rates or win rates, so I got creative and built something myself.

            I used Java to create a program that would:
            <ul><li>Manipulate a locally-running game client by simulating screen taps and gestures,</li>\
            <li>visually scan player profiles to see what boats and weapons they were using, and</li>\
            <li>automatically upload these findings as JSON data to a custom-built website.</li></ul>\
            Every few days, I would re-run this Java program on my own machine, and it would take 10-15 minutes to gather a large\
            enough dataset to post to the website that I had built. Hundreds of Battle Bay players regularly referenced\
            this site to help them decide which boats or weapons to use for their next duels.
            
            `,
        skills: [
            {
                label: "Languages",
                items: [
                    "Java",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "PHP"
                ]
            },
            {
                label: "HIDDEN",
                items: [
                    "Full Stack Development"
                ]
            }
        ]
    },
    {
        company: "This Website",
        jobTitle: "joelrummel.net",
        startDate: "September 2021",
        image: require('../resources/experiences/thiswebsite.png'),
        shortDescription: "I wrote this website as a React app and deployed it via AWS Amplify.",
        longDescription: `I built this website very carefully to be:
            <ul><li>Modular, so that I can easily add work experience or projects in the future</li>\
            <li>Configurable, so that I can do things like add/remove navbar buttons from a single array</li>\
            <li>Responsive, so that all pages look and feel good at any screen size</li>\
            <li>Linkable, so that modals like this one have their own URLs, and so users can press their browser\
            back button to close the modal</li>\
            <li>Continuously deployed, so that committing to the master branch automatically re-deploys the website</li></ul>\
            Some of the tools I used to accomplish these goals:
            <ul><li>Material-UI, to allow easy styling and responsive grid-based setups</li>\
            <li>React Router, to keep the address bar URL in-sync with the state of the DOM</li>\
            <li>GitHub and AWS Amplify, to continuously deploy the website without any extra steps</li></ul>
        `,
        skills: [
            {
                label: "Front-end",
                items: [
                    "React.js",
                    "Material-UI"
                ]
            },
            {
                label: "Tools/Skills",
                items: [
                    "Amazon Web Services",
                    "Git",
                    "GitHub",
                    "Continuous Deployment"
                ]
            },
            {
                label: "HIDDEN",
                items: [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ]
            }
        ]
    }
];

export default PROJECT_EXPERIENCE;