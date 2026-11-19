import { Briefcase, Code2, PenTool, ClipboardList } from "lucide-react";

/*
  TEAM - EDIT ME (used by the home page "People" section and the /team page)
  - name / role / bio: replace the placeholders with your real team
  - image:    path (e.g. "/assets/team/name.jpg") or Unsplash URL of a 4:5 portrait. Optional.
  - linkedin / github: optional URLs; icons only show when set
  - featured: true shows the person in the larger "Leadership" cards on /team
  - icon / tint: used for the illustrated portrait when there is no photo
*/
export const TEAM = [
  {
    name: "Add Name Here",
    role: "Founder & CEO",
    bio: "Sets the vision, leads client partnerships and makes sure every project is tied to real business goals.",
    icon: Briefcase,
    tint: "var(--accent)",
    featured: true,
    image: "",
    linkedin: "",
    github: "",
  },
  {
    name: "Add Name Here",
    role: "Lead Engineer",
    bio: "Owns architecture and code quality, turning complex requirements into software that is fast, secure and maintainable.",
    icon: Code2,
    tint: "#3b82f6",
    featured: true,
    image: "",
    linkedin: "",
    github: "",
  },
  {
    name: "Add Name Here",
    role: "Product Designer",
    bio: "Shapes how products look and feel, from research and prototypes to polished, accessible interfaces.",
    icon: PenTool,
    tint: "#10b981",
    featured: false,
    image: "",
    linkedin: "",
    github: "",
  },
  {
    name: "Add Name Here",
    role: "Project Manager",
    bio: "Keeps delivery on track and communication clear, so you always know what is happening and what comes next.",
    icon: ClipboardList,
    tint: "#f59e0b",
    featured: false,
    image: "",
    linkedin: "",
    github: "",
  },
];
