import { Component, type OnInit, type AfterViewInit, type ElementRef, ViewChild } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  logo: string
  gradient: string
  borderOpacity: number
}

interface Skill {
  name: string
  level: number
  category: string
}

interface Education {
  degree: string
  institution: string
  period: string
  highlights: string[]
  gpa?: string
}

interface Certification {
  name: string
  issuer: string
  date: string
  credentialId?: string
  logo: string
}

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChild("experienceBg", { static: false }) experienceBg!: ElementRef

  experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-scale web applications using modern technologies and best practices.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on critical projects",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices handling 1M+ daily requests",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
      logo: "🏢",
      gradient: "from-blue-500 to-purple-600",
      borderOpacity: 1.0,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      description: "Developed responsive web applications and improved user experience across multiple platforms.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 35% through UX enhancements",
        "Reduced page load times by 50% with optimization techniques",
        "Collaborated with design team on 20+ projects",
        "Implemented accessibility standards (WCAG 2.1)",
      ],
      technologies: ["Vue.js", "JavaScript", "SASS", "Webpack", "Jest", "Figma"],
      logo: "💻",
      gradient: "from-green-500 to-blue-500",
      borderOpacity: 0.8,
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Contributed to various web development projects and gained experience in full-stack development.",
      achievements: [
        "Developed 10+ landing pages with high conversion rates",
        "Integrated third-party APIs and payment systems",
        "Participated in agile development processes",
        "Maintained and updated legacy codebases",
        "Learned modern development frameworks and tools",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      logo: "🚀",
      gradient: "from-orange-500 to-red-500",
      borderOpacity: 0.6,
    },
  ]

  skills: Skill[] = [
    // Frontend
    { name: "React", level: 95, category: "Frontend" },
    { name: "Vue.js", level: 90, category: "Frontend" },
    { name: "Angular", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 92, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "PHP", level: 80, category: "Backend" },
    { name: "Express.js", level: 88, category: "Backend" },

    // Database
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "Redis", level: 75, category: "Database" },

    // Cloud & DevOps
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "Docker", level: 85, category: "DevOps" },
    { name: "Kubernetes", level: 70, category: "DevOps" },
    { name: "CI/CD", level: 88, category: "DevOps" },
  ]

  education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      highlights: [
        "Graduated Magna Cum Laude",
        "Dean's List for 6 semesters",
        "Led Computer Science Club",
        "Published research on web optimization",
      ],
      gpa: "3.8/4.0",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "CodeAcademy Pro",
      period: "2019",
      highlights: [
        "Intensive 6-month program",
        "Built 12 full-stack applications",
        "Collaborated on team projects",
        "Learned industry best practices",
      ],
    },
  ]

  certifications: Certification[] = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001",
      logo: "☁️",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-2022-456",
      logo: "🌐",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-789",
      logo: "⚙️",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2021",
      credentialId: "MDB-DEV-2021-123",
      logo: "🍃",
    },
  ]

  stats = [
    { label: "Years Experience", value: "5+", icon: "📅" },
    { label: "Projects Completed", value: "50+", icon: "🎯" },
    { label: "Technologies Mastered", value: "20+", icon: "⚡" },
    { label: "Team Members Led", value: "15+", icon: "👥" },
  ]

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Initialize scroll animations
    this.animationService.initScrollAnimations()

    // Create floating background animation
    if (this.experienceBg?.nativeElement) {
      this.animationService.createExperienceAnimation(this.experienceBg.nativeElement)
    }
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category)
  }

  getSkillCategories(): string[] {
    return [...new Set(this.skills.map((skill) => skill.category))]
  }
}
