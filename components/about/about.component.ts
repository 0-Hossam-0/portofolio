import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const skillElements = ["💻", "🚀", "⚡", "🎯", "🔥", "💡", "🌟", "🎨"]
    this.animationService.initFloatingObjects("aboutShapes", skillElements, 10)
  }
}
