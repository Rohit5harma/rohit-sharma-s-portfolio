import profileAsset from "@/assets/rohit-sharma.png.asset.json";

export const portfolioData = {
  name: "Rohit Sharma",
  title: "Full Stack Developer",
  location: "Agra, Uttar Pradesh, India",
  email: "kaushikrohit6396@gmail.com",
  phone: "9058029848",
  profileImage: profileAsset.url,
  resumeUrl: "#",
  tagline:
    "I build fast, reliable web products end to end — from clean React interfaces to well-structured APIs and databases.",
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
    "Full Stack Web Development",
    "React.js",
    "Node.js & Express.js",
    "REST APIs",
    "MongoDB & SQL",
    "Data Structures & Algorithms",
  ],
  skills: [
    { category: "Programming Languages", items: ["C++", "Python"] },
    { category: "Frontend", items: ["HTML", "JavaScript", "Tailwind CSS", "React.js"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "SQL"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "509 Army Base Workshop",
      location: "Agra Cantt",
      period: "June 2026 – Present",
      points: [
        "Working on real-world software development tasks in a professional defence workshop environment.",
        "Building and improving internal web modules using modern full stack technologies.",
        "Collaborating with senior engineers to gather requirements and translate them into working features.",
        "Writing clean, maintainable code and testing functionality before deployment.",
        "Gaining hands-on exposure to structured software development workflows and documentation.",
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
        "Regularly practising data structures and algorithms challenges to sharpen problem-solving speed and accuracy.",
      link: { label: "View LeetCode", url: "https://leetcode.com/problemset/" },
    },
  ],
};

export default portfolioData;
