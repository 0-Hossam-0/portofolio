import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      category: "Web Application",
      status: "Completed",
      duration: "6 months",
      link: "#",
      github: "#",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filters",
        "Shopping Cart & Wishlist",
        "Payment Gateway Integration",
        "Order Management System",
        "Admin Dashboard",
        "Responsive Design",
        "SEO Optimized",
      ],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "/placeholder.svg?height=400&width=600&text=Task+Management+App",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Vuex"],
      category: "Productivity Tool",
      status: "Completed",
      duration: "4 months",
      link: "#",
      github: "#",
      features: [
        "Real-time Collaboration",
        "Project & Task Organization",
        "Team Management",
        "Progress Tracking",
        "File Attachments",
        "Notifications System",
        "Time Tracking",
        "Reporting & Analytics",
      ],
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media management with comprehensive reporting, content scheduling, and performance tracking across multiple platforms.",
      image: "/placeholder.svg?height=400&width=600&text=Social+Media+Dashboard",
      technologies: ["Angular", "Python", "MySQL", "Chart.js", "RxJS"],
      category: "Analytics Tool",
      status: "Completed",
      duration: "5 months",
      link: "#",
      github: "#",
      features: [
        "Multi-platform Integration",
        "Content Scheduling",
        "Performance Analytics",
        "Engagement Tracking",
        "Custom Reports",
        "Team Collaboration",
        "Automated Posting",
        "Competitor Analysis",
      ],
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "A comprehensive LMS platform for online education with course creation, student management, assessments, and progress tracking.",
      image: "/placeholder.svg?height=400&width=600&text=Learning+Management+System",
      technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"],
      category: "Education Platform",
      status: "In Progress",
      duration: "8 months",
      link: "#",
      github: "#",
      features: [
        "Course Creation & Management",
        "Student Enrollment System",
        "Interactive Assessments",
        "Progress Tracking",
        "Discussion Forums",
        "Video Streaming",
        "Certificate Generation",
        "Mobile Responsive",
      ],
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description:
        "A modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
      image: "/placeholder.svg?height=400&width=600&text=Real+Estate+Platform",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Vercel"],
      category: "Real Estate",
      status: "Completed",
      duration: "7 months",
      link: "#",
      github: "#",
      features: [
        "Property Listings & Search",
        "Virtual Tours Integration",
        "Mortgage Calculator",
        "Agent Profiles",
        "Favorites & Saved Searches",
        "Map Integration",
        "Contact Management",
        "SEO Optimized",
      ],
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description:
        "A comprehensive fitness application with workout tracking, nutrition planning, progress monitoring, and social features.",
      image: "/placeholder.svg?height=400&width=600&text=Fitness+Tracking+App",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Expo"],
      category: "Mobile App",
      status: "Completed",
      duration: "6 months",
      link: "#",
      github: "#",
      features: [
        "Workout Tracking",
        "Nutrition Planning",
        "Progress Analytics",
        "Social Features",
        "Custom Workout Plans",
        "Wearable Integration",
        "Goal Setting",
        "Offline Support",
      ],
    },
  ]

  selectedCategory = "All"
  categories = [
    "All",
    "Web Application",
    "Mobile App",
    "Analytics Tool",
    "Productivity Tool",
    "Education Platform",
    "Real Estate",
  ]

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Initialize background animations
    const backgroundContainer = document.getElementById("projectsBackground")
    if (backgroundContainer) {
      this.animationService.createProjectsBackgroundAnimation(backgroundContainer)
    }
  }

  filterProjects(category: string): void {
    this.selectedCategory = category
  }

  get filteredProjects() {
    if (this.selectedCategory === "All") {
      return this.projects
    }
    return this.projects.filter((project) => project.category === this.selectedCategory)
  }
}
