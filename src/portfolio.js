/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Satyam Kumar Aditya",
  title: "Hi all, I'm Satyam",
  subTitle: emoji(
    "Dynamic Software Developer with expertise in Core PHP, Laravel, CodeIgniter, Python, Django, Vue.js, and React. Skilled in database design, version control (GitHub, GitLab), and Agile methodologies. Proficient in tools like Zuul, Watcher, and Lenses. Proven track record in performance optimization, API integration, and delivering scalable solutions. Strong analytical and client communication skills, committed to driving innovation."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ksRDm3X1_oJ22CKAOXDqwtFM9UJkM3lr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "http://github.com/satyam1198",
  linkedin: "https://www.linkedin.com/in/satyam-kumar-aditya-883240176/",
  gmail: "shrivastvaaditya@gmail.com",
  facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@Satyampasta",
  stackoverflow: "https://stackoverflow.com/users/16166312/satyam-kumar-aditya",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Dynamic Software Developer with a proven track record at RISHABH SOFTWARE PVT. LTD.,"
    ),
    emoji("⚡ Specializing in enhancing software usability through object-oriented design."),
    emoji("⚡ Expertise in Core PHP, Laravel, CodeIgniter, Python, Django, Vue.js, and React,"),
    emoji("⚡ Combined with a strong understanding of database design, version control systems (GitHub, GitLab),"),
    emoji("⚡ And Agile methodologies. Proficient in tools like Zuul, Watcher, and Lenses."),
    emoji("⚡ Demonstrated success in achieving performance optimizations, seamless API integrations, and delivering scalable solutions. "),
    emoji("⚡ Skilled in advanced analytical problem-solving, efficient time management, and client communication."),
    emoji("⚡ Committed to driving innovative solutions and delivering high-quality software in future projects.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "codeigniter",
      fontAwesomeClassname: "fa fa-fire"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-leaf"
    },
    {
      skillName: "PostgresSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "restapi",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "UnitTesting",
      fontAwesomeClassname: "fas fa-vial"
      // fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Parul University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master in Computer Applications",
      duration: "May 2020 - April 2022",
      desc: "Participated in many events.",
      descBullets: [
        "Best Event Coordinator Award",
        "Placements Coordinator",
        "Pick And Write Competition Winner",
      ]
    },
    {
      schoolName: "Ignou",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Arts in English Honours",
      duration: "May 2016 - April 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design (VueJs, React)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (PHP, Laravel, Codeigniter3, Python, Django)",
      progressPercentage: "80%"
    },
    {
      Stack: "Database Design (MySQL, MongoDB, PosgresSQL)",
      progressPercentage: "60%"
    },
    {
      Stack: "Framework Architecture (MVC, MVT, Clean-Architecture)",
      progressPercentage: "60%"
    },
    {
      Stack: "Api Building & Integration (RestAPI)",
      progressPercentage: "70%"
    },
    {
      Stack: "Performance Optimization",
      progressPercentage: "70%"
    },
    {
      Stack: "Unit Testing",
      progressPercentage: "70%"
    },
    {
      Stack: "Agile Methodologies",
      progressPercentage: "70%"
    },
    
    {
      Stack: "Tools & Technologies (Zuul, Watcher, Lenses, Docker, AWS, Postman, GitLab, GitHub, JIRA, Miro, Slack etc.)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Rishabh Software Pvt. Ltd.",
      companylogo: require("./assets/images/rishabh_logo.png"),
      date: "May - 2023 – Present",
      desc: "Assisted with planning, designing, coding, debugging, testing, documenting, and maintaining software applications.Integrated object-oriented design and development techniques into projects to support usability goals.Worked with cross-functional teams to achieve goals.",
    },
    {
      role: "Software Developer",
      company: "SIIIMTEQ TECHNOLOGYora",
      companylogo: require("./assets/images/siimteqlogo.jpg"),
      date: "October 2021 – May 2023",
      desc: "Managed website deployment and maintenance, including troubleshooting and performance optimization."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/jcdecaux.png"),
      projectName: "ADVERTISEMENT MANAGEMENT SYSTEM",
      projectDesc: "JCDecaux Group is a multinational corporation focused on outdoor advertising. As of 2016, it is the largest company in its sector worldwide with adverts on 140.000 bus stops and 145 airports.",
      
    },
    {
      image: require("./assets/images/diamond-1.jpg"),
      projectName: "DIAMOND PROCESS WORKFORCE",
      projectDesc: "This project has been developed for the Diamond Process Workforce. It is a workforce management system that helps to manage the workforce of the company.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dsmpacific.com.au/"
        }
      ]
    },
    {
      image: require("./assets/images/ring.jpg"),
      projectName: "ECOMMERCE WEBSITE",
      projectDesc: "This project has been developed for the Jewellery based ecommerce website. It is a system that helps to manage the numberous Jewewlleries type.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://luxsso.com/?srsltid=AfmBOoqYJt46CFCRtTyuKy2UwJ6JIb5tnPSwfC6LHoD6nS3w5h5uOgln"
        }
      ]
    },
    {
      image: require("./assets/images/erp.png"),
      projectName: "ENTERPRISE RESOURCE PLANNING (ERP) SYSTEM",
      projectDesc: "Built and maintained an ERP system to streamline business operations. Enhanced reporting, inventory tracking, and invoice generation. Integrated subsystems for seamless data flow and improved efficiency.",
    },
    {
      image: require("./assets/images/project-management-img.jpg"),
      projectName: "PROJECT ESTIMATION PLANNER",
      projectDesc: "Estimation Planner to streamline project planning and development processes. Created accurate cost estimates, generated review reports for admin, and ensured seamless collaboration using Laravel, MySQL, and frontend tools.",
    },
    {
      image: require("./assets/images/workforce.png"),
      projectName: "WORKFORCE MANAGEMENT SYSTEM",
      projectDesc: "Workforce Management System encompassing functionalities for User Administration, Leave Tracking, Task Management, and Quality Assurance Portal.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Maxmullar Vue.js Training Program (Udemy)",
      image: require("./assets/images/vue-js.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "GitHub Copilot Certified",
      image: require("./assets/images/github-copilot.png"),
      footerLink: [
        {
          name: "certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Amazon Web Services (AWS) Cloud Practitioner Certification",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "Certification", 
          url: ""
        },
      ]
    },
    {
      title: "Docker Fundamentals (Udemy)",
      image: require("./assets/images/docker.webp"),
      footerLink: [
        {
          name: "Certification", 
          url: ""
        },
      ]
    },
    {
      title: "Advance RDBM training certification",
      image: require("./assets/images/rdbms.webp"),
      footerLink: [
        {
          name: "Certification", 
          url: ""
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@Satyampasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/Satyampasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Satyam-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8084329644",
  email_address: "shrivastvaaditya@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
