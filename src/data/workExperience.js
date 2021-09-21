const WORK_EXPERIENCE = [
    {
        company: "Invoice Maker LLC",
        jobTitle: "Software Developer Intern",
        startDate: "Jan 2021",
        endDate: "Aug 2021",
        image: require('../resources/experiences/imlogo.png'),
        shortDescription: "I worked directly with a full-stack Agile development team on major features for the company's flagship app.",
        longDescription: `At Invoice Maker, I worked with a full-stack Agile development team to build the company's flagship web app.\
            I worked directly within the workflow of the team, meaning that I took part in two-week sprints, daily stand-up meetings,\
            and code reviews.

            As part of the Agile workflow, I elected to pick up tasks ranging from writing automated unit tests\
            to developing major features. One such feature I worked on was the integration of additional payment providers Venmo\
            and Cash App to go alongside our Stripe integration. These two providers didn't have any formal APIs for direct\
            integration, so I got to take part in discussions where we found a creative flow for users to upload Venmo/Cash App\
            QR codes to be automatically attached to invoices. Afterwards, I developed all the front-end interfaces\
            and logic for the decided flow, alongside a comprehensive automated testing suite. The project made its way through\
            the code review and testing process as normal, and appeared in the app to customers soon after.
            
            Another major undertaking of mine was the addition of an end-to-end Cypress test suite for the entire app. Writing\
            tests was easy; doing so in a systematic and structured way to test as much of the app's functionality as\
            possible was more challenging. Another significant hurdle was making sure that the test suite was actively maintained\
            and updated by the entire team as app development progressed. To this end, I worked on external documentation\
            describing the chosen structure and practices of the test suite, alongside guidelines for updating the suite in\
            each pull request. I also led a workshop for the team about writing Cypress tests to help get everyone up to\
            speed. As a result, the additional testing measures have caught dozens of bugs (some that had been in production\
            undetected), and are now a permanent part of the team's Agile workflow and review process.

            As I was able to work side-by-side with talented teammates as a full-fledged developer on a high-stakes project,\
            this experience has become critical to my development as an engineer. Although it was technically an internship,\
            the role was set in very real workplace conditions, and has given me an invaluable sense of what it's truly like\
            to work in the software industry.
            `,
        skills: [
            {
                label: "Tech",
                items: [
                    "React.js",
                    "Redux",
                    "Material-UI",
                    "AWS",
                    "Node.js",
                    "Lambda",
                    "DynamoDB",
                    "Amazon Cognito",
                    "Jest",
                    "Cypress"
                ]
            },
            {
                label: "Tools",
                items: [
                    "Git",
                    "Bitbucket",
                    "Jira",
                    "Figma"
                ]
            },
            {
                label: "Skills",
                items: [
                    "Agile Development",
                    "Full Stack Development",
                    "Automated Testing",
                    "Test-Driven Development"
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
    },
    {
        company: "National Blueberry Festival",
        jobTitle: "Software Engineer Contractor",
        startDate: "May 2021",
        endDate: "Aug 2021",
        image: require('../resources/experiences/nbfapp.png'),
        shortDescription: "I worked as a contractor to build a scalable mobile application for the annual National Blueberry Festival.",
        longDescription: `When I heard that the National Blueberry Festival committee was looking for freelance app developers,\
            I teamed up with my brother to discuss with them their app needs. We then presented to them a detailed proposal\
            that included app mockups, a technical specification, and a timeline until the Festival and beyond. The proposal was\
            accepted by the festival committee, and we began our work in May 2021.

            The goal of the app was to keep festival goers up-to-date with all the latest events and information about the four-day\
            festival. The app included a schedule that automatically identified upcoming events and sorted past events to the bottom,\
            an interactive map with locations of each events, an alerts screen to notify users of sudden schedule changes, and\
            much more. As part of a two-person team, my task was to develop the back-end, and to develop most of the front-end\
            according to the designs created by my brother.

            The back-end needed endpoints to get and refresh the app's schedule, which was simple enough. But it also needed to be\
            scalable - with thousands of users during the festival and nearly zero users for the rest of the year, it wouldn't\
            have been cost-efficient to host the back-end services on a traditional server. To solve this problem, we turned to\
            AWS Lambda, API Gateway, and DynamoDB to create an entirely "serverless", and therefore scalable, back-end service.

            But that wasn't the only major hurdle to clear. In order to keep the underlying schedule data up to date, Festival\
            officials needed a way to add, remove, and edit events at-will without going through us or having technical knowledge.\
            To that end, I developed a simple web interface for schedule manipulation. Festival officials could easily change the\
            schedule, upload images for events, send alerts, and modify the sponsor list through this private interface. All of\
            these changes would be reflected in the app almost instantly.

            In July 2021, we publicly released the app on the iOS and Android app stores to widespread acclaim from both the Festival\
            committee and festival goers. Users praised the smooth and intuitive interface, and found the app to be much more useful\
            in their trip planning than the old paper brochures. Hosting costs stayed within $1 during the festival thanks to\
            clever back-end design, and dropped to $0 per month afterwards. It was ultimately a great investment for the Festival\
            committee, as they made significant cost savings through avoiding paper brochures while also enhancing the festival\
            experience. As for my brother and I, we had the privilege of overseeing the entire software development life cycle\
            for a major real-world project - an experience that we will not soon forget.
            `,
        skills: [
            {
                label: "Front-end",
                items: [
                    "React.js",
                    "React Native",
                    "Expo"
                ]
            },
            {
                label: "Back-end",
                items: [
                    "AWS",
                    "Node.js",
                    "Lambda",
                    "S3",
                    "API Gateway",
                    "DynamoDB"
                ]
            },
            {
                label: "Tools",
                items: [
                    "Git",
                    "GitHub",
                    "Figma"
                ]
            },
            {
                label: "HIDDEN",
                items: [
                    "Full Stack Development",
                    "HTML",
                    "CSS",
                    "JavaScript"
                ]
            }
        ]
    },
    {
        company: "Spencer Manufacturing, Inc.",
        jobTitle: "Software Engineer Intern",
        startDate: "June 2020",
        endDate: "August 2020",
        image: require('../resources/experiences/spencerapp.png'),
        shortDescription: "I developed an internal app for web and mobile to replace the company's old timekeeping and project management solutions.",
        longDescription: `Over the summer of 2020, I worked at Spencer Manufacturing Inc, a custom firetruck manufacturer. As you can\
            probably imagine, a company in such a niche industry had a lot of niche needs, especially in software - a great opportunity\
            for me to use my skillset and do some problem-solving. They challenged me to create a piece of software that would:

              -Replace their existing timekeeping solution, which was expensive and didn't provide detailed insight
              -Replace their existing group chat solution, which was poorly suited for per-project communication
              -Create a coherent and integrated system for issue tracking on each project
              -Provide custom analyses to answer questions such as "which parts of what projects take us longer than expected?"

            The result of this challenge was an app called "Truck Manager" that tackled all of this and more. Built with a\
            React Native front-end and a PHP/MySQL back-end, the app was deployed to iOS, Android, and web browsers.

            In Truck Manager, each project (or "truck") is listed on the home page. And each truck has its own task list, chat room,\
            and issue tracker. Each task in the task list can be clocked into, or have an issue reported on it. Supervisors can also\
            mark tasks as completed, which removes them from the list.

            Every element of a truck is integrated with one another, which means that reporting an issue on a task:

              -adds that task to the issue tracker, and
	          -sends an alert in the chat room, which
	          -sends a push notification to anyone subscribed to that truck.

            A more complete set of features includes:

	          -User login via email and password, or via four-digit PIN if the device is a registered company tablet
	          -Accounts that can be one of three different roles (Employee, Supervisor, and Administrator), the latter roles\
            providing more permissions
	          -Image upload functionality for chat rooms and for issue tracking
	          -Tracking of unread chat messages for each individual truck
	          -"Add Truck" menu that allows a truck to be created simply by uploading a .csv file containing truck details
	          -Restricted "People" menu that allows administrators to add/remove employees, view and edit employee timesheets\
            by week, and export employee timesheets that can be imported by QuickBooks
	          -"Announcement" system that notifies all employees, and forces them to acknowledge the announcement before using the app
	          -Shared Calendar system that allows tracking of events such as project deadlines and truck delivery dates
	          -Restricted "analysis" window that describes which tasks took longer or shorter times than expected to complete,\
            and breaks down who worked for how long on them

            In terms of complexity, this project remains one of my biggest undertakings to date. From authentication and\
            timekeeping on the back-end to calendar and chat interfaces on the front-end, this internship gave me a ton of\
            experience in full stack, big-picture software development that I have already been able to make great use of.
            `,
        skills: [
            {
                label: "Tech",
                items: [
                    "React Native",
                    "Expo",
                    "PHP",
                    "MySQL"
                ]
            },
            {
                label: "Tools/skills",
                items: [
                    "Git",
                    "GitHub",
                    "Full Stack Development"
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
    },
    {
        company: "Whirlpool Corporation",
        jobTitle: "Data & Analytics Software Intern",
        startDate: "June 2018",
        endDate: "August 2019",
        image: require('../resources/experiences/whirlpoollogo.jpg'),
        shortDescription: "I worked with a subteam in the Quality department to build data analysis apps and tools for internal use by engineers and data analysts.",
        longDescription: `I worked for the Whirlpool Quality department for two straight summers from 2018 - 2019. While I was\
        there, I worked on a number of data analysis tools for internal use by company quality analysts and engineers. These tools\
        largely consisted of web apps with a backend written in Google Apps Script, and a frontend written in either vanilla\
        JavaScript or React.js.
        
        In my first year, I independently proposed, and subsequently developed, a web app called the "Claims Coding Tool",\
	    which was intended to help improve the efficiency of data entry by Whirlpool's claim coding team based in India.\
	    I worked directly with this team to develop the app, which I later presented to multiple company vice presidents.

        My second year consisted of development on existing data analysis tools, as well as the creation of a new tool\
	    called "Go-And-See". This app allows employees to subscribe to various quality data streams, and to apply custom\
	    filters on them. They would then receive emails containing the most recent dataset on a user-defined interval.

        This experience ended as an incredibly rewarding one as I was able to see these tools deployed to hundreds of company\
        analysts and engineers. As this was my first software-related job, it also provided a large, established, and\
        supportive environment for me to begin building important skill sets for my future. 
        `,
        skills: [
            {
                label: "Tech",
                items: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React.js",
                    "Google Apps Script"
                ]
            }
        ]
    }
];

export default WORK_EXPERIENCE;