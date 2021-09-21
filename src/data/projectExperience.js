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
        jobTitle: "Software Engineer Contractor",
        startDate: "April 2018",
        endDate: "Present",
        image: require('../resources/experiences/cfbsim.png'),
        shortDescription: "I worked as a contractor to build a mobile app for the annual National Blueberry Festival.",
        longDescription: "Long description here.",
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
        longDescription: "Long description here.",
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
        longDescription: "Long description here.",
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
        longDescription: "Long description here",
        skills: [
            {
                label: "Front-end",
                items: [
                    "React.js",
                    "Material-UI"
                ]
            },
            {
                label: "Tools",
                items: [
                    "AWS",
                    "Amplify",
                    "Git",
                    "GitHub",
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