import { Component, type OnInit } from "@angular/core"
import type { ThemeService } from "./services/theme.service"
import type { NavigationService } from "./services/navigation.service"
import type { AnimationService } from "./services/animation.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "modern-portfolio"

  constructor(
    private themeService: ThemeService,
    private navigationService: NavigationService,
    private animationService: AnimationService,
  ) {}

  ngOnInit(): void {
    this.themeService.initializeTheme()
    this.navigationService.initializeNavigation()
    this.animationService.initializeAnimations()
  }
}
