import emoji from "react-easy-emoji";

export const greetings = {
  name: "Harry Qu",
  title: "Hello! I'm Harry Qu",
  description:
    "I am a Software Engineering Student at University of Auckland. Well-versed in technology to create reliable and user-friendly systems. Skilled leader who has the proven ability to motivate, educate, and manage teams to build software programs and effectively track changes. I am passionate about learning and developing prodcts/services that can bring value for people.",
  resumeLink:
    "https://drive.google.com/file/d/1wouUrXf36HiVoyoh46TkJrOhmxVLVKWx/view?usp=sharing",
};

export const openSource = {
  githubUserName: "HarryQu1229",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100014305210297",
  mail: "mailto:Harryqu666@gmail.com",
  github: "https://github.com/HarryQu1229",
  linkedin: "https://www.linkedin.com/in/harry-qu-a0a38220a/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE LEARNER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Front-End Development",
      lottieAnimationFile: "/lottie/skills/frontend.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "☀️ Developed web applications with multiple 3rd-party software integrations"
        ),
        emoji("☀️ Built responsive static websites using HTML/CSS/JS"),
        emoji("☀️ Built responsive Single-Page-Apps in Vue.js and React.js"),
        emoji(
          "☀️ Reinforced Graphical User Interface interactivity using JavaFX"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "TailWind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "Axios",
          fontAwesomeClassname: "logos:axios",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "logos:jquery",
        },
      ],
    },
    {
      title: "Back-End Development",
      lottieAnimationFile: "/lottie/skills/backend.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "🌙 Built RESTful APIs in Spring Boot (Cloud), ASP.Net and Express.js"
        ),
        emoji(
          "🌙 Implemented file sync tool and personalised shell programs using C, Java"
        ),
        emoji(
          "🌙 Designed database schemas in relational databases and used SQL for database manipulation"
        ),
        emoji(
          "🌙 Added cache system to application with Redis for fast server reponse"
        ),
        emoji(
          "🌙 Created a distributed messaging service using RabbitMQ for backend microservices decoupling and load balancing"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "vscode-icons:file-type-node2",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "logos:rabbitmq-icon",
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "logos:redis",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloud.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("☁️ Set up development environment on Linux using Docker"),
        emoji("☁️ Experience of using simple services on AWS"),
        emoji(
          "☁️ Hosted and maintained websites on EC2 instance, GitHub Pages and Vercels"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
      ],
    },
    {
      title: "Competitve Programmming",
      lottieAnimationFile: "/lottie/skills/competition.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "🏆 Participated multiple hackathons and programming competitions ranging from online trading to data strcuture & algorithm"
        ),
        emoji(
          "🏆 Ranked first in 2021 New Zealand Regional Programming Contest (Tertiary Intermediate)"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
        },
        {
          skillName: "Recursion",
          fontAwesomeClassname: "carbon:connect-recursive",
        },
      ],
    },
    {
      title: "Game Development",
      lottieAnimationFile: "/lottie/skills/game.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("🎮 Implemented a 2048 web game using React.js ,Redux and C#"),
        emoji("🎮 Designed 2D games using C# and Unity"),
      ],
      softwareSkills: [
        {
          skillName: "C sharp",
          fontAwesomeClassname: "logos:c-sharp",
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "logos:unity",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "UI/UX",
    progressPercentage: "70",
  },
  {
    Stack: "Front-End",
    progressPercentage: "80",
  },
  {
    Stack: "Back-End",
    progressPercentage: "85",
  },
  {
    Stack: "DevOPS",
    progressPercentage: "60",
  },
  {
    Stack: "Game Development",
    progressPercentage: "50",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Auckland",
    subHeader: "Bachelor of (Software) Engineering (Hons)",
    duration: "Mar 2020 - (Graduating) Oct 2023",
    desc: "Year 3 of 4",
    descBullets: [
      "GPA 8.4/9.0 for all courses, GPA 8.6/9.0 for software courses (A/A+ average)",
      "Faculty of Engineering Dean's Honours List - Top 5% in the cohort (2020, 2021)",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer and Marketer Intern",
    company: "The Intern Group",
    companylogo: "/img/icons/common/theInternGroup.png",
    date: "Dec 2020 - Mar 2021",
    descBullets: [
      "Participated in multiple products’ development life cycle including planning, developing, testing, and debugging",
      "Troubleshot known issues, solving approximately 50 problems every week",
      "Drew up detailed Technical Reports and user stories based on clients’ product requirements",
      "Focused on user experience design to meet users’ needs head-on",
      "Conducted market research and competitor analysis from various sources to explore desirable product features for clients’ web applications",
    ],
  },
];

export const projects = [
  {
    name: "Harry Blog",
    desc: "My personal blog website using Hexo and JavaScript hosted on GitHub pages and making use of GitHub Actions to deploy the website on every push. I also posted all my study notes and technical writings on the blog.",
    github: "https://github.com/HarryQu1229/HarryQu1229.github.io",
    link: "https://harryqu1229.github.io/",
  },
  {
    name: "Harry Portfolio",
    desc: "My personal portfolio website! Developed with Reactjs, implemented server side renderig with Nextjs ,hosted by Vercels and Github Actions.",
    github: "https://github.com/HarryQu1229/harry-profile",
    link: "https://harry-profile-fawn.vercel.app/",
  },
  {
    name: "Easy Shopping",
    desc: "A java microservices full stack web application built with Vue.js (Frontend), SpringBoot and SpringCloud (Backend), and RabbitMQ.",
    github: "https://github.com/HarryQu1229/Easy-Shopping",
  },
  {
    name: "Māori Vocab Learner",
    desc: "A Text to Speech graphical user interface that helps children learn Māori vocabulary built with Bash, Java, JavaFX, SceneBuilder and CSS.",
    github: "https://github.com/HarryQu1229/Maori-Vocab-Learner",
  },
  {
    name: "2048",
    desc: "Worked with the Microsoft Student Accelerator’s developer team to create a 2048 game web application (Currently kept private from members).",
    github: "https://github.com/NZMSA",
  },
];

export const feedbacks = [
  {
    name: "NZPC",
    achievement:
      "First Place in 2021 New Zealand Regional Programming Contest (Tertiary Intermediate).",
  },
  {
    name: "Azure AI",
    achievement: "Acquired Microsoft Azure AI-900 Certificate.",
    link: "https://drive.google.com/file/d/1foYnRpHF0n2gkCBU1d5MtHX0MhuttmxT/view?usp=sharing",
  },
  {
    name: "Technical Writing",
    achievement:
      "Wrote over 100 technical articles for over 200 readers from 7 different countries.",
  },
];
