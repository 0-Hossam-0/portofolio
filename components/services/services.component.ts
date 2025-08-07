import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Responsive mobile applications that work seamlessly across all devices.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Speed up your applications and improve overall performance metrics.",
    },
  ]

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const techElements = ["⚙️", "🔧", "🛠️", "💡", "🚀", "⭐", "🎯", "🔥"]
    this.animationService.initFloatingObjects("servicesShapes", techElements, 8)
  }
}
