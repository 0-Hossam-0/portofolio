import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false)
  public darkMode$ = this.darkModeSubject.asObservable()

  constructor() {
    this.initializeTheme()
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      this.enableDarkMode()
    } else {
      this.enableLightMode()
    }
  }

  get isDarkMode(): boolean {
    return this.darkModeSubject.value
  }

  toggleTheme(): void {
    if (this.isDarkMode) {
      this.enableLightMode()
    } else {
      this.enableDarkMode()
    }
  }

  enableDarkMode(): void {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    this.darkModeSubject.next(true)
  }

  enableLightMode(): void {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    this.darkModeSubject.next(false)
  }
}
