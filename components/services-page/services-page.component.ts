import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-services-page",
  templateUrl: "./services-page.component.html",
  styleUrls: ["./services-page.component.css"],
})
export class ServicesPageComponent implements OnInit, AfterViewInit {
  services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "🌐",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "Performance Optimization",
        "SEO Implementation",
        "Cross-browser Compatibility",
        "Progressive Web Apps",
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", "TypeScript"],
      pricing: "Starting at $2,500",
      timeline: "2-8 weeks",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      features: [
        "Native iOS & Android",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Third-party Integrations",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      pricing: "Starting at $5,000",
      timeline: "4-12 weeks",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Accessibility Compliance",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
      pricing: "Starting at $1,500",
      timeline: "1-4 weeks",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment integration and inventory management.",
      icon: "🛒",
      features: [
        "Custom Shopping Cart",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Customer Management",
        "Analytics & Reporting",
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
      pricing: "Starting at $3,500",
      timeline: "3-10 weeks",
    },
    {
      id: 5,
      title: "API Development",
      description: "Robust and scalable APIs for seamless data integration and communication.",
      icon: "🔗",
      features: [
        "RESTful APIs",
        "GraphQL Implementation",
        "Database Integration",
        "Authentication & Security",
        "Documentation",
        "Performance Optimization",
      ],
      technologies: ["Node.js", "Express", "GraphQL", "MongoDB", "PostgreSQL"],
      pricing: "Starting at $2,000",
      timeline: "2-6 weeks",
    },
    {
      id: 6,
      title: "Consulting & Strategy",
      description: "Technical consulting and strategic planning for your digital transformation.",
      icon: "💡",
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Code Review",
        "Performance Audit",
        "Team Training",
        "Project Management",
      ],
      technologies: ["Various", "Best Practices", "Industry Standards"],
      pricing: "Starting at $150/hour",
      timeline: "Flexible",
    },
  ]

  processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap.",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes for your approval.",
      icon: "✏️",
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Building your solution with regular updates and thorough testing.",
      icon: "⚙️",
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing maintenance and support.",
      icon: "🚀",
    },
  ]

  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Exceptional work quality and attention to detail. The team delivered beyond our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      role: "CTO",
      content: "Professional, reliable, and innovative. Our project was completed on time and within budget.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Outstanding design skills and technical expertise. Highly recommend for any web project.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
    },
  ]

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const serviceElements = ["⚡", "🎯", "💎", "🔧", "🌟", "🚀", "💡", "⭐"]
    this.animationService.initFloatingObjects("servicesShapes", serviceElements, 15)
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0)
  }
}
