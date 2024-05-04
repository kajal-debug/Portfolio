import StarRating from '../component/StarRating';
import React from 'react';
export  const Bio = {
    name: "Kajal Baisakh",
    roles: [
      "Full Stack Developer",
      "React/MERN Stack Developer",
      
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/kajal-debug",
    resume:
      "https://drive.google.com/file/d/1ytrmJWZDlT1iKi7z31HsLAHp3oAtBPz8/view?usp=sharing",
    linkedin: "linkedin.com/in/kajal-baisakh-717592184",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
             StarRating: <StarRating value={4.5}/>,
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            StarRating: <StarRating value={4}/>,
          },
        
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
          StarRating: <StarRating value={4.5}/>,
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
            StarRating: <StarRating value={3.5}/>,
          },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            StarRating: <StarRating value={4.5}/>,
          },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            StarRating: <StarRating value={3.5}/>,
          },
        
       
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
          StarRating: <StarRating value={4}/>,
        },
        {
          name: "Express Js",
          image:
            "data:image/png;base64,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",
            StarRating: <StarRating value={4}/>,
          },
      
                         {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            StarRating: <StarRating value={3.5}/>,
          },
       
      ],
    },
    
    {
      title: "Others",
      skills: [
       
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            StarRating: <StarRating value={3.5}/>,
          },
               {
          name: "Netlify",
          image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
            StarRating: <StarRating value={4}/>,
          },
        {
          name: "VS Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
            StarRating: <StarRating value={4.5}/>,
          },
            
             ],
    },
  ];
  
  export const experiences = [
    {
      id: 0,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
      role: "Jr. Software Engineer",
      company: "Digital Shark Pvt. Ltd.",
      date: "Aug 2021 - July 2021",
      desc: "Working on Digital Shark as a jr.Software engineer.",
      skills: [
        "React",
         "Express",
        "JavaScript",
        "Node Js",
         "Mongo DB",
        "Material UI",
        
      ],
      text:"project1",
      text1:"project2",
      doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
      doc1: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
    },
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
      role: "Web Developer",
      company: "WowExp. Pvt. Ltd",
      date: "July 2022 - Dec 2023",
      desc: "Working on WowExp. as a Web Developer.",
      skills: [
        "ReactJS",
        "Redux",
        "NodeJs",
        "Material UI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      text:"project3",
      doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
    },
        
  ];
  
  export const education = [
    {
      id: 0,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd",
      school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
      date: "Oct 2021 - Sep 2025",
      grade: "8.71 CGPA",
      desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
      degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
      school: "Methodist School, Dankuni",
      date: "Apr 2019 - Apr 2025",
      grade: "88.2%",
      desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
      degree: "ISC(XII), Science with Computer",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
      school: "Methodist School, Dankuni",
      date: "Apr 2017 - Apr 2019",
      grade: "92.3%",
      desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
      degree: "ICSC(X), Science with Computer",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      category:'project1',
      title: " Monitoring Patients Therapy Web Application",
      date: "july 2021 - Dec 2021",
      description:
        "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
      tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
      about: 
 `The "Monitoring Patients Therapy" web application, developed with the MERN stack, streamlines therapy management and enhances patient-provider
 communication. Here's a summarized version of the project:
 <h2 class="Header">User Authentication & Roles:</h2>
 <p class="para">
 Users (admin, therapists, patients) sign up and log in with specific permissions.
 Admin manages user roles and access levels.</p>
 <h2 class="Header">Healthcare Provider Dashboard:</h2>
 <p class="para">
 Patient Management: Admins add and manage patient profiles with detailed information.
 Therapy Tracking: Therapists monitor patient therapy progress, including session dates and types.
 Appointment Scheduling: Providers schedule therapy sessions and send automated reminders.
 Data Visualization: Visual representation aids in analyzing therapy progress.</p>
 <h2 class="Header">Patient Dashboard:</h2>
 <p class="para">
 Therapy Overview: Patients view upcoming sessions and appointment details.
 Progress Tracking: Patients monitor their therapy progress and goals.
 Communication: Patients interact with therapists and ask questions.</p>
 <h2 class="Header">Documentation & Resources:</h2>
 <p class="para">
 Educational Materials: Patients access therapy-related resources.
 Document Storage: Upload and share therapy-related documents.</p>
 <h2 class="Header">Notifications & Alerts:</h2>
 <p class="para">
 Reminders: Automated reminders for sessions and appointments.
 Alerts: Providers receive alerts for critical changes.</p>
 <h2 class="Header">Security & Privacy:</h2>
 <p class="para">
 HIPAA Compliance: Ensures patient data privacy and confidentiality.
 Secure Communication: Encrypted channels for communication.</p>
 <h2 class="Header">Mobile Accessibility:</h2>
 <p class="para">
 Mobile-friendly interface for convenience and accessibility.</p>`
         },
         {
          id: 1,
          category:'project2',
          title: "Monitoring Ajax Web Application:",
          date: "Dec 2021 - july 2022",
          description:
            "Developed a full-stack web application .",
          tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
          about: 
     `
    <h2 class="Header"> Real-time Monitoring:</h2>  <p class="para"> Provides real-time monitoring of Ajax requests made by the web application, including request URLs, methods, headers, and response
     data.</p>
    <h2 class="Header"> Performance Analysis:</h2>  <p class="para">Analyzes the performance of Ajax requests, including response times, error rates, and throughput, to identify bottlenecks and optimize
     performance.</p>
    <h2 class="Header"> Error Logging:</h2>  <p class="para"> Logs errors and exceptions encountered during Ajax requests, allowing developers to quickly identify and debug issues in the application.</p>
    <h2 class="Header"> Visualization:</h2>  <p class="para">Visualizes Ajax request data using charts, graphs, or tables to provide insights into request patterns and trends.</p>
     <h2 class="Header">Alerting:</h2>  <p class="para">Sends notifications or alerts when certain thresholds or conditions are met, such as high error rates or slow response times, enabling proactive
     monitoring and troubleshooting.</p>
    <h2 class="Header"> Security Monitoring:</h2>  <p class="para"> Monitors Ajax requests for security vulnerabilities, such as cross-site scripting (XSS) or cross-site request forgery (CSRF), to ensure the
     integrity and security of the web application.</p>`
             },
             {
              id: 1,
              category:'project3',
              title: "Monitoring WoW Meet Web Application:",
              date: "July 2022 - Dec 2023 ",
              description:
                "Developed a full-stack web application .",
              tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux","Three.js"],
              about: 
         ` The "Monitoring WoW Meet" web application is a 3D project using Three.js for an immersive virtual environment, primarily for webAR meetings. Here's a
         condensed version of its features:
         <h2 class="Header">  3D Environment: </h2>  <p class="para">Rendered with Three.js for interactive user meetings.
         Authentication: Users can sign up, log in, and have different roles (admin, regular user).</p>
         <h2 class="Header">  Dashboard: </h2>  <p class="para">Admins manage users, schedule meetings, and edit details. Users view upcoming meetings, join, or access details.</p>
         <h2 class="Header">   Profile Page:</h2>  <p class="para">Users can view and update profiles, including avatars.</p>
         Meeting Features:</h2>  <p class="para">Scheduled meetings display time, agenda, and participants. Users join meetings with text, voice, or video, share documents, and interact
         with 3D elements.</p>
         <h2 class="Header">  Logout:</h2>  <p class="para"> Allows secure log out.</p>
         <h2 class="Header">   Meeting Details Page:</h2> <p class="para">Displays agenda, participants, and instructions.</p>
         <h2 class="Header">  Similarity to Google Meet:</h2>   <p class="para">Provides a platform for virtual meetings and collaboration like Google Meet but in a 3D environment.</p>
        `
                 },
      ];
  
  export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
  ];