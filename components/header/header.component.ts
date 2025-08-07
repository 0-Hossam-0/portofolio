import { Component, type OnInit } from "@angular/core"
import type { ThemeService } from "../../services/theme.service"
import type { NavigationService } from "../../services/navigation.service"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false

  constructor(
    public themeService: ThemeService,
    private navigationService: NavigationService,
  ) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

  toggleTheme(): void {
    this.themeService.toggleTheme()
  }

  navigateToSection(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId)
    this.isMenuOpen = false
  }

  get activeSection(): string {
    return this.navigationService.activeSection
  }
}
