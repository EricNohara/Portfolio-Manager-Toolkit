import { IUserData } from "../src/interfaces/IUserData";
import { ITheme } from "../src/interfaces/ITheme";

export const mockUserData: IUserData = {
  id: "u12345",
  name: "Jane Doe",
  phone_number: "555-123-4567",
  email: "jane.doe@example.com",
  location: "New York, NY",
  github_url: "https://github.com/janedoe",
  linkedin_url: "https://linkedin.com/in/janedoe",
  portrait_url: "https://example.com/portrait.jpg",
  resume_url: "https://example.com/resume.pdf",
  transcript_url: "https://example.com/transcript.pdf",
  instagram_url: "https://instagram.com/janedoe",
  facebook_url: "https://facebook.com/janedoe",
  bio: "Full-stack developer with a passion for building portfolio websites.",
  skills: [
    {
      name: "JavaScript",
      proficiency: 9,
      years_of_experience: 5,
    },
    {
      name: "React",
      proficiency: 8,
      years_of_experience: 4,
    },
    {
      name: "TypeScript",
      proficiency: 7,
      years_of_experience: 3,
    },
    {
      name: "CSS",
      proficiency: 8,
      years_of_experience: 5,
    },
    {
      name: "Node.js",
      proficiency: 6,
      years_of_experience: 2,
    },
    {
      name: "Python",
      proficiency: 7,
      years_of_experience: 4,
    },
  ],
  experiences: [
    {
      company: "Tech Corp",
      job_title: "Frontend Developer",
      date_start: "2022-01-01",
      date_end: "2024-01-01",
      job_description:
        "Developed modern web applications using React and TypeScript.",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Portfolio Website",
      date_start: "2023-01-01",
      date_end: "2023-06-01",
      languages_used: ["TypeScript", "JavaScript"],
      frameworks_used: ["React", "Next.js"],
      technologies_used: ["Vite", "Styled-Components"],
      description:
        "A personal portfolio website to showcase projects and skills.",
      github_url: "https://github.com/janedoe/portfolio",
      demo_url: "https://janedoe.com",
      thumbnail_url: "https://example.com/portfolio-thumb.jpg",
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      majors: ["Computer Science"],
      minors: ["Mathematics"],
      gpa: 3.8,
      institution: "State University",
      awards: ["Dean's List", "Scholarship Award"],
      year_start: 2018,
      year_end: 2022,
      courses: [
        {
          name: "Algorithms",
          grade: "A",
          description: "Study of algorithms and data structures.",
        },
        {
          name: "Web Development",
          grade: "A",
          description: "Building modern web applications.",
        },
      ],
    },
  ],
};

export const mockCustomTheme: ITheme = {
  colors: {
    primary: "#123456",
    primaryAlternate: "#abcdef",
    secondary: "#654321",
    secondaryAlternate: "#fedcba",
    tertiary: "#111111",
    tertiaryAlternate: "#eeeeee",
    background: "#f0f0f0",
    darkText: "#222222",
    lightText: "#fafafa",
  },
  fontSizes: {
    sm: "0.8rem",
    md: "1.15rem",
    lg: "2.5rem",
  },
};
