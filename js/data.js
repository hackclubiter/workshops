const workshopData = [
    // {
    //     workshopName: "Name of the workshop",
    //     about: "About the cool workshop.", //About the workshop in about 50 words
    //     link: "https://iter.hackclub.com/workshops", //enter the link of the workshop
    //     image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
    // },
    
    

];

//Past

const pastWorkshopData = [
       {
        workshopName: "AMA on Web-Dev and Open-Source",
        about: "AMA session with Souvik Kar", //About the workshop in about 50 words
        link: "#", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
        date: "24 Oct 2021", //give the event's date
        time: "7 PM Onwards", //give the event's time
    },
    {
        workshopName: "AMA on GitHub Externship",
        about: "AMA session with Saswat Mishra", //About the workshop in about 50 words
        link: "https://youtu.be/Jue9XlKa7VM", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
        date: "18 Oct 2021", //give the event's date
        time: "7 PM Onwards", //give the event's time
    },
    {
        workshopName: "AMA on Flutter and Open-Source",
        about: "AMA session with Himanshu Sharma", //About the workshop in about 50 words
        link: "https://youtu.be/YH3bLcB0Hls", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
        date: "17 Oct 2021", //give the event's date
        time: "7 PM Onwards", //give the event's time
    },
    {
        workshopName: "Getting Started with GitHub",
        about: "Workshop on basics of GitHub", //About the workshop in about 50 words
        link: "#", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "AMA on Open-Source and Communities",
        about: "AMA session with Kartikey Rawat", //About the workshop in about 50 words
        link: "https://youtu.be/rSoRhwamoYg", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "AMA on Hackathons, Communities and Open source",
        about: "AMA session with Siddharth Dayalwal", //About the workshop in about 50 words
        link: "https://youtu.be/Zwe-Q9PRToA", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Hack the October Kick Off",
        about: "Opening Ceremony of Hack the October", //About the workshop in about 50 words
        link: "https://www.youtube.com/watch?v=QPssaIng13U", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "2021-22 Session Induction",
        about: "Induction program for the 2022 session of HCI.", //About the workshop in about 50 words
        link: "https://youtu.be/gfQpugUrtkc", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1577113398331-d843d3341a63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Getting Started with Arduino",
        about: "Build your first project with Arduino Uno and we will help in Hardware.", //About the workshop in about 50 words
        link: "#", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1559819614-81fea9efd090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80", //give the image (make sure to host it before adding)
    },
    // {
    //     workshopName: "Build your Wikipedia Summarizer",
    //     about: "Make your Wikipedia Summarizer GUI using Python.", //About the workshop in about 50 words
    //     link: "#", //enter the link of the workshop
    //     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80", //give the image (make sure to host it before adding)
    //     date: "25 Sep 2021", //give the event's date
    //     time: "7 PM Onwards", //give the event's time
    // },
    {
        workshopName: "Python Development",
        about: "Learn the basics of Python in 7 Days", //About the workshop in about 50 words
        link: "https://github.com/hackclubiter/Codathon-PyDev", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Web Development",
        about: "Learn the basics of web in 7 Days", //About the workshop in about 50 words
        link: "https://github.com/hackclubiter/Codathon-WebDev", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Decode the Programming with Shubham Sonal",
        about: "How to get started with programming!", //About the workshop in about 50 words
        link: "https://youtu.be/nHzmwoStZKU", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Hack the Web w/ Harsh Bajpai",
        about: "Harsh gave us an overall idea about Web-Dev!", //About the workshop in about 50 words
        link: "https://youtu.be/7K0OLLjq0DY", //enter the link of the workshop
        image: "https://i.ytimg.com/vi/7K0OLLjq0DY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPSXqrTYqHY4zQNYBgiXNh2k6Kag", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Codathon",
        about: "An amalgamation of Python development along with Web development.", //About the workshop in about 50 words
        link: "https://youtu.be/ERhCWZQ6GXY", //enter the link of the workshop
        image: "https://i.ytimg.com/vi/ERhCWZQ6GXY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU5e3kkBihfRDSaG2XG00SXrEGuQ", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "Ask Samarjeet",
        about: "Regarding Internships and preparation.", //About the workshop in about 50 words
        link: "https://youtu.be/x_LF5XpcUAQ", //enter the link of the workshop
        image: "https://i.ytimg.com/vi/x_LF5XpcUAQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8I7yPcdCJkqRrHaPFAOunuLKvZA", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "What is IFTTT?",
        about: "Learn about automation & IOT at one place.", //About the workshop in about 50 words
        link: "https://youtu.be/8JqAPCWBh2E", //enter the link of the workshop
        image: "https://i.ytimg.com/vi/8JqAPCWBh2E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCboA22hRDTXsILUO9ubUmdeNuJ9w", //give the image (make sure to host it before adding)
    },
    {
        workshopName: "What is IoT?",
        about: "Get started with IoT", //About the workshop in about 50 words
        link: "https://youtu.be/mNMFa6tL5PE", //enter the link of the workshop
        image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80", //give the image (make sure to host it before adding)
    },
];
