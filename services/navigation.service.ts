import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

export interface NavItem {
  id: string
  label: string
  active: boolean
}

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  private isNavigatingSubject = new BehaviorSubject<boolean>(false)
  public isNavigating$ = this.isNavigatingSubject.asObservable()

  private navItemsSubject = new BehaviorSubject<NavItem[]>([
    { id: "home", label: "Home", active: true },
    { id: "about", label: "About", active: false },
    { id: "services", label: "Services", active: false },
    { id: "projects", label: "Projects", active: false },
    { id: "experience", label: "Experience", active: false },
    { id: "blog", label: "Blog", active: false },
    { id: "contact", label: "Contact", active: false },
  ])
  public navItems$ = this.navItemsSubject.asObservable()

  private scrollTicking = false
  private navTicking = false
  showScrollTop = false

  private scrollProgressSubject = new BehaviorSubject<number>(0)
  public scrollProgress$ = this.scrollProgressSubject.asObservable()

  private activeSectionSubject = new BehaviorSubject<string>("home")
  public activeSection$ = this.activeSectionSubject.asObservable()

  private currentSection = ""

  constructor() {
    this.initializeScrollListener()
  }

  private initializeScrollListener(): void {
    window.addEventListener("scroll", () => {
      this.showScrollTop = window.pageYOffset > 300
      this.updateScrollProgress()
      this.updateActiveSection()
    })
  }

  private updateActiveSection(): void {
    const sections = ["home", "about", "services", "projects", "experience", "blog", "contact"]
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSectionSubject.next(section)
          break
        }
      }
    }
  }

  private updateScrollProgress(): void {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    this.scrollProgressSubject.next(Math.min(scrollPercent, 100))
  }

  updateActiveNavItem(activeId: string): void {
    const currentItems = this.navItemsSubject.value
    const updatedItems = currentItems.map((item) => ({
      ...item,
      active: item.id === activeId,
    }))
    this.navItemsSubject.next(updatedItems)
  }

  smoothScrollToSection(targetId: string): void {
    if (this.isNavigatingSubject.value) return
    this.isNavigatingSubject.next(true)

    const targetElement = document.querySelector(`#${targetId}`)
    if (!targetElement) {
      this.isNavigatingSubject.next(false)
      return
    }

    // Update active nav item
    this.updateActiveNavItem(targetId)

    // Calculate scroll position
    const headerHeight = 80
    const targetPosition = (targetElement as HTMLElement).offsetTop - headerHeight - 20

    // Smooth scroll with easing
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 800
    let start: number | null = null

    const smoothScroll = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - percentage, 3)
      window.scrollTo(0, startPosition + distance * easeOut)

      // Update progress bar
      const navProgressBar = document.getElementById("navProgressBar")
      if (navProgressBar) {
        navProgressBar.style.width = percentage * 100 + "%"
      }

      if (progress < duration) {
        requestAnimationFrame(smoothScroll)
      } else {
        // Animation complete
        const navProgressBar = document.getElementById("navProgressBar")
        if (navProgressBar) {
          navProgressBar.style.width = "0%"
        }
        targetElement.classList.add("section-entering")
        setTimeout(() => {
          targetElement.classList.remove("section-entering")
          this.isNavigatingSubject.next(false)
        }, 600)
      }
    }

    requestAnimationFrame(smoothScroll)
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      this.activeSectionSubject.next(sectionId)
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  get activeSection(): string {
    return this.activeSectionSubject.value
  }
}
