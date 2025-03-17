import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Hey there! I'm Shakti Priya, an aspiring software engineer with a keen interest in crafting exceptional web experiences. With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I thrive on bringing ideas to life through clean, efficient, and scalable code. My journey in software development began with a curiosity to understand how technology shapes our world. Since then, I've immersed myself in the world of web development, honing my skills in both front-end and back-end technologies. Let's connect and create something amazing together!`;

// export const ABOUT_TEXT = `
//   I am a 3rd-year B.Tech student pursuing Computer Science and Engineering at IIIT Ranchi, with a deep passion for web development. 
//   With a CGPA of <span style="color: #FF5733;">7.75</span> in my 3rd year, I am dedicated to excelling in my studies while simultaneously honing my skills in web development.
//   <br/><br/>
//   My academic journey reflects my commitment to excellence, highlighted by a remarkable 10th-grade percentage of 
//   <span style="color: #FFD700;">97.8%</span> from Bridgeford School, Ranchi, and a 12th-grade percentage of 
//   <span style="color: #007BFF;">88.6%</span> from Greenland Public School, Ranchi.
//   <br/><br/>
//   I am committed to continuous learning and growth in this dynamic field, aspiring to contribute innovative solutions and 
//   create impactful projects that leverage the latest technologies. My enthusiasm for web development drives me to explore 
//   new frameworks, languages, and techniques, empowering me to create robust and user-friendly web applications.
// `;

export const ABOUT_TEXT = `
  I am a 3rd-year B.Tech student pursuing Computer Science and Engineering at IIIT Ranchi, with a deep passion for web development. 
  With a SGPA(LATEST) of <span style="color: #FF0000;">9.5</span> and an CGPA of <span style="color: #FF0000;">7.75</span> in my 3rd year, I am dedicated to excelling in my studies while simultaneously honing my skills in web development.
  <br/><br/>
  My academic journey reflects my commitment to excellence, highlighted by a remarkable 10th-grade percentage of 
  <span style="color: #FFD700;">97.8%</span> from Bridgeford School, Ranchi, and a 12th-grade percentage of 
  <span style="color: #007BFF;">88.6%</span> from Greenland Public School, Ranchi.
  <br/><br/>
  I am committed to continuous learning and growth in this dynamic field, aspiring to contribute innovative solutions and 
  create impactful projects that leverage the latest technologies. My enthusiasm for web development drives me to explore 
  new frameworks, languages, and techniques, empowering me to create robust and user-friendly web applications.
`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [


  {
    title: "Employee Management System",
    image: project1,
    description:
      "Developed a scalable and secure MERN stack application to streamline HR operations, enabling efficient employee data management, attendance tracking, and performance monitoring. Implemented role-based access control (RBAC) and JWT authentication to enhance security.",
    technologies: ["MERN"],
    live: "https://ems-frontend-navy.vercel.app/login",
    github: "https://github.com/shaktipriya13/EMS",
  },
  {
    title: "Food-Ordering Website",
    image: project1,
    description:
      "\"My Meal\"🍔🥂 is a dynamic and engaging front-end web application designed to offer a interactive experience for users seeking meal inspiration and recipes.",
    technologies: ["HTML", "CSS", "React"],
    live: "https://snap-eats.netlify.app/",
    github: "https://github.com/shaktipriya13/Food-Delivery-website",
  },
  {
    title: "Random Quote Generator",
    image: project2,
    description:
      "The Random Quote Generator 🍁 website is a dynamic and engaging web application designed to inspire users with a vast collection of quotes. Each time a new quote is generated, the background image of the website also changes, providing a fresh and visually appealing experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://random-quote-generator-site.netlify.app/",
    github: "https://github.com/shaktipriya13/Project_Random-Quote-Generator",
  },
  {
    title: "Travel Website",
    image: project5,
    description:
      "Responsive Travel Landing Page for Showcasing Destinations and Experiences",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://travelia-tours-shaktip.netlify.app/", // Replace with your actual live site URL
    github: "https://github.com/shaktipriya13/Travelia", // Replace with your actual GitHub repo URL
  },
  {
    title: "Netflix Clone",
    image: project4,
    description:
      "It's is a fully responsive front-end web application designed to replicate the user interface and experience of the popular streaming service, Netflix 📽️. It project showcases the ability to create a visually appealing and highly functional web application using modern web development technologies",
    technologies: ["HTML", "CSS", "Bootstrap"],
    live: "https://netflix-my-clone.netlify.app/",
    github: "https://github.com/shaktipriya13/Netflix-Clone-Project",
  },
];

export const CONTACT = {
  address: "Jharkhand, India ",
  // phoneNo: "+91 92XXXXX ",
  email: "priyashakti68@gmail.com",
};
