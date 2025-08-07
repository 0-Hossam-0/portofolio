import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Angular", "Python", "MySQL"],
      link: "#",
    },
  ]

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const creativeElements = ["🎨", "✨", "🌟", "💫", "🎭", "🖼️", "🎪", "🎨"]
    this.animationService.initFloatingObjects("portfolioShapes", creativeElements, 10)
  }
}
