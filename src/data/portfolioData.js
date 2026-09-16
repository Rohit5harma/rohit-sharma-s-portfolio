
export const portfolioData = {
  name: "Rohit Sharma",
  title: "Full Stack Developer",
  location: "Agra, Uttar Pradesh, India",
  email: "kaushikrohit6396@gmail.com",
  phone: "9058029848",
  profileImage: "/assets/rohit-sharma.png",
  resumeUrl: "/resume/Rohit_Sharma_Resume.pdf",
  tagline:
    "I build practical, user-focused applications with modern web technologies and enjoy turning ideas into working products.",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/Rohit5harma", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/rohit-sharma-7ab028312",
      icon: "linkedin",
    },
    { label: "LeetCode", url: "https://leetcode.com/problemset/", icon: "code" },
    { label: "Email", url: "mailto:kaushikrohit6396@gmail.com", icon: "mail" },
  ],
  focusAreas: [
    "Full Stack Development",
    "React.js",
    "Backend Development",
    "Python",
    "Problem Solving",
    "Building Practical Applications",
  ],
  skills: [
    { category: "Programming Languages", items: ["C++", "Python"] },
    { category: "Frontend", items: ["HTML", "JavaScript", "Tailwind CSS", "React.js"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Django", "REST APIs"] },
    { category: "Database", items: ["SQL"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "509 Army Base Workshop",
      location: "Agra Cantt",
      period: "June 2026 – Present",
      points: [
        "Worked on a Voice Control Rover project, contributing to voice-command-based control functionality.",
        "Assisted in day-to-day technical and operational activities within a defense-sector engineering environment.",
        "Gained exposure to professional work environments and industry-standard practices.",
        "Improved communication, teamwork and problem-solving skills through cross-functional collaboration.",
        "Learned organizational workflow and technical documentation processes.",
      ],
    },
  ],
  projects: [
    {
      name: "Voice Control Rover",
      description:
        "A voice-controlled rover that interprets spoken commands in real time and translates them into precise hardware movements, combining speech recognition with low-level device control.",
      tech: ["Python", "Voice Recognition", "Hardware Control"],
      github: "#",
      demo: "#",
      featured: true,
      images: [
        { src: "/assets/rover-front.jpeg", alt: "Voice Control Rover — front view with camera" },
        {
          src: "/assets/rover-side.jpeg",
          alt: "Voice Control Rover — side view with circuitry and heatsinks",
        },
        { src: "/assets/rover-top.jpeg", alt: "Voice Control Rover — top-down wiring layout" },
      ],
    },
    {
      name: "AI Job Finder",
      description:
        "An AI-assisted job discovery tool that matches candidate profiles and skills with relevant job listings, presenting ranked results through a clean, responsive interface.",
      tech: ["Python", "JavaScript", "HTML", "CSS", "AI-based Matching"],
      github: "#",
      demo: "#",
      featured: true,
    },
  ],
  education: [
    {
      institution: "Raja Balwant Singh Engineering Technical Campus, Agra",
      affiliation: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      status: "4th Year",
    },
  ],
  certifications: [
    {
      name: "Software Engineer Intern — Certificate of Accomplishment",
      issuer: "HackerRank",
      date: "June 2026",
    },
  ],
  achievements: [
    {
      title: "5-Star Rating in C",
      description: "Earned a 5-star rating in C on HackerRank through consistent problem solving.",
    },
    {
      title: "Active Competitive Programmer",
      description:
        "Regularly practising coding and problem solving on competitive programming platforms. The link below opens the LeetCode practice platform.",
      link: { label: "View LeetCode", url: "https://leetcode.com/problemset/" },
    },
  ],
};

export default portfolioData;
