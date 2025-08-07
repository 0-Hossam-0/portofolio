"use client"

import { Component, type OnInit, type OnDestroy, type ElementRef, ViewChild, type AfterViewInit } from "@angular/core"

interface CodeSnippet {
  text: string
  type: "keyword" | "function" | "string" | "comment" | "operator" | "number"
}

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("codeRain", { static: false }) codeRainRef!: ElementRef
  @ViewChild("aboutBg", { static: false }) aboutBgRef!: ElementRef
  @ViewChild("servicesBg", { static: false }) servicesBgRef!: ElementRef
  @ViewChild("portfolioBg", { static: false }) portfolioBgRef!: ElementRef
  @ViewChild("experienceBg", { static: false }) experienceBgRef!: ElementRef
  @ViewChild("blogBg", { static: false }) blogBgRef!: ElementRef
  @ViewChild("contactBg", { static: false }) contactBgRef!: ElementRef
  @ViewChild("navProgressBar", { static: false }) navProgressBarRef!: ElementRef
  @ViewChild("scrollTop", { static: false }) scrollTopRef!: ElementRef
  @ViewChild("mobileMenu", { static: false }) mobileMenuRef!: ElementRef

  theme: "light" | "dark" = "light"
  mobileMenuOpen = false
  isNavigating = false

  private animationObserver!: IntersectionObserver
  private skillObserver!: IntersectionObserver
  private scrollTicking = false
  private navTicking = false

  // Services data
  services = [
    {
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      title: "Web Development",
      description: "Creating responsive, fast, and scalable web applications using modern technologies.",
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Mobile Development",
      description: "Building native and cross-platform mobile apps that deliver exceptional user experiences.",
    },
    {
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that users love and that drive business results.",
    },
    {
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2-2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      title: "Brand Identity",
      description: "Creating memorable brand identities that help businesses stand out in the market.",
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      title: "SEO Optimization",
      description: "Optimizing websites for search engines to improve visibility and drive organic traffic.",
    },
    {
      icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Consulting",
      description: "Providing strategic guidance on digital transformation and technology solutions.",
    },
  ]

  // Portfolio projects
  projects = [
    {
      title: "E-commerce Platform",
      description: "Modern shopping experience with React & Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      title: "Mobile Banking App",
      description: "Secure banking solution with biometric authentication",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: "Social Media Platform",
      description: "Real-time social networking with advanced features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    },
  ]

  // Skills data
  skills = [
    { name: "Web Development", percentage: 95 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "Mobile Development", percentage: 85 },
  ]

  // Experience data
  experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Leading development of enterprise web applications and mentoring junior developers.",
      borderOpacity: 1,
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Designed user interfaces for various clients including startups and Fortune 500 companies.",
      borderOpacity: 0.5,
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2016 - 2018",
      description: "Built responsive web applications using modern JavaScript frameworks.",
      borderOpacity: 0.3,
    },
  ]

  // Blog articles
  articles = [
    {
      title: "Modern Web Development Best Practices",
      description: "Discover the latest trends and techniques that will help you build better web applications.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    },
    {
      title: "UI/UX Design Trends 2024",
      description: "Explore the design trends that will shape the digital landscape this year.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop",
    },
    {
      title: "The Future of Mobile Development",
      description: "Learn about emerging technologies revolutionizing mobile app development.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
    },
  ]

  // Navigation items
  navItems = [
    { id: "home", label: "Home", active: true },
    { id: "about", label: "About", active: false },
    { id: "services", label: "Services", active: false },
    { id: "portfolio", label: "Portfolio", active: false },
    { id: "experience", label: "Experience", active: false },
    { id: "blog", label: "Blog", active: false },
    { id: "contact", label: "Contact", active: false },
  ]

  private codeSnippets: CodeSnippet[] = [
    { text: "const [state, setState] = useState()", type: "keyword" },
    { text: "function App() {", type: "function" },
    { text: "return <div>Hello World</div>", type: "keyword" },
    { text: "useEffect(() => {", type: "function" },
    { text: "npm install react", type: "comment" },
    { text: 'import React from "react"', type: "keyword" },
    { text: "export default Component", type: "keyword" },
    { text: "async/await", type: "keyword" },
    { text: 'fetch("/api/data")', type: "function" },
    { text: ".then(response => response.json())", type: "function" },
    { text: "display: flex;", type: "string" },
    { text: "justify-content: center;", type: "string" },
    { text: "background: linear-gradient()", type: "string" },
    { text: "transform: translateY(-50%)", type: "string" },
    { text: "@media (max-width: 768px)", type: "operator" },
    { text: '<div className="container">', type: "operator" },
    { text: "<button onClick={handleClick}>", type: "operator" },
    { text: "</div>", type: "operator" },
    { text: 'app.get("/api", (req, res) => {', type: "function" },
    { text: "res.json({ success: true })", type: "function" },
    { text: 'const express = require("express")', type: "keyword" },
    { text: "mongoose.connect()", type: "function" },
    { text: "JWT.sign(payload, secret)", type: "function" },
    { text: "SELECT * FROM users", type: "keyword" },
    { text: "WHERE id = ?", type: "keyword" },
    { text: "INSERT INTO posts", type: "keyword" },
    { text: "UPDATE users SET", type: "keyword" },
    { text: 'git commit -m "feat: add feature"', type: "comment" },
    { text: "docker build -t app:latest", type: "comment" },
    { text: "npm run build", type: "comment" },
    { text: "yarn start", type: "comment" },
    { text: "if (condition) {", type: "keyword" },
    { text: "for (let i = 0; i < length; i++)", type: "keyword" },
    { text: "try { ... } catch (error) {", type: "keyword" },
    { text: "Promise.resolve()", type: "function" },
    { text: "Array.map(item => item.id)", type: "function" },
    { text: "200", type: "number" },
    { text: "404", type: "number" },
    { text: "500", type: "number" },
    { text: "===", type: "operator" },
    { text: "!==", type: "operator" },
    { text: "&&", type: "operator" },
    { text: "||", type: "operator" },
    { text: "=>", type: "operator" },
    { text: "interface User {", type: "keyword" },
    { text: "type Props = {", type: "keyword" },
    { text: "enum Status {", type: "keyword" },
    { text: "const user: User = {}", type: "keyword" },
    { text: "...spread", type: "operator" },
    { text: "destructuring", type: "keyword" },
  ]

  ngOnInit(): void {
    this.initTheme()
    this.setupEventListeners()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createCodeRain()
      this.createAboutAnimation()
      this.createServicesAnimation()
      this.createPortfolioAnimation()
      this.createExperienceAnimation()
      this.createBlogAnimation()
      this.createContactAnimation()
      this.startTypingAnimation()
      this.initScrollAnimations()
      this.updateScrollButton()
    }, 100)
  }

  ngOnDestroy(): void {
    if (this.animationObserver) {
      this.animationObserver.disconnect()
    }
    if (this.skillObserver) {
      this.skillObserver.disconnect()
    }
    window.removeEventListener("scroll", this.onScroll.bind(this))
    window.removeEventListener("scroll", this.onNavScroll.bind(this))
  }

  private initTheme(): void {
    this.theme = (localStorage.getItem("theme") as "light" | "dark") || "light"
    this.applyTheme()
  }

  private applyTheme(): void {
    document.documentElement.className = this.theme
  }

  toggleTheme(): void {
    this.theme = this.theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", this.theme)
    this.applyTheme()

    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease"
    setTimeout(() => {
      document.body.style.transition = ""
    }, 300)
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false
  }

  private setupEventListeners(): void {
    window.addEventListener("scroll", this.onScroll.bind(this))
    window.addEventListener("scroll", this.onNavScroll.bind(this))

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      const mobileMenuBtn = document.getElementById("mobileMenuBtn")
      const mobileMenu = this.mobileMenuRef?.nativeElement

      if (mobileMenuBtn && mobileMenu && !mobileMenuBtn.contains(target) && !mobileMenu.contains(target)) {
        this.closeMobileMenu()
      }
    })
  }

  private onScroll(): void {
    if (!this.scrollTicking) {
      requestAnimationFrame(() => this.updateScrollButton())
      this.scrollTicking = true
    }
  }

  private onNavScroll(): void {
    if (this.isNavigating || this.navTicking) return
    this.navTicking = true

    requestAnimationFrame(() => {
      const sections = document.querySelectorAll("section[id]")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 150
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id") || ""
        }
      })

      this.navItems.forEach((item) => {
        item.active = item.id === current
      })

      this.navTicking = false
    })
  }

  private updateScrollButton(): void {
    const scrollTopBtn = this.scrollTopRef?.nativeElement
    if (!scrollTopBtn) return

    if (window.pageYOffset > 300) {
      scrollTopBtn.style.opacity = "1"
      scrollTopBtn.style.transform = "translateY(0)"
    } else {
      scrollTopBtn.style.opacity = "0"
      scrollTopBtn.style.transform = "translateY(40px)"
    }
    this.scrollTicking = false
  }

  smoothScrollToSection(targetId: string): void {
    if (this.isNavigating) return
    this.isNavigating = true

    const targetElement = document.querySelector(`#${targetId}`)
    if (!targetElement) {
      this.isNavigating = false
      return
    }

    // Close mobile menu
    this.closeMobileMenu()

    // Update active nav item
    this.navItems.forEach((item) => {
      item.active = item.id === targetId
    })

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
      if (this.navProgressBarRef?.nativeElement) {
        this.navProgressBarRef.nativeElement.style.width = percentage * 100 + "%"
      }

      if (progress < duration) {
        requestAnimationFrame(smoothScroll)
      } else {
        // Animation complete
        if (this.navProgressBarRef?.nativeElement) {
          this.navProgressBarRef.nativeElement.style.width = "0%"
        }
        targetElement.classList.add("section-entering")
        setTimeout(() => {
          targetElement.classList.remove("section-entering")
          this.isNavigating = false
        }, 600)
      }
    }

    requestAnimationFrame(smoothScroll)
  }

  scrollToTop(): void {
    this.smoothScrollToSection("home")
  }

  private createCodeRain(): void {
    const codeContainer = this.codeRainRef?.nativeElement
    if (!codeContainer) return

    // Clear existing elements
    codeContainer.innerHTML = ""

    // Create 20 code elements
    for (let i = 0; i < 20; i++) {
      const codeElement = document.createElement("div")
      const randomSnippet = this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)]
      codeElement.className = `code-element code-${randomSnippet.type}`
      codeElement.textContent = randomSnippet.text

      // Random positioning and timing
      codeElement.style.left = Math.random() * 95 + "%"
      codeElement.style.animationDuration = Math.random() * 8 + 10 + "s"
      codeElement.style.animationDelay = Math.random() * 30 + "s"
      codeElement.style.fontSize = Math.random() * 4 + 13 + "px"
      codeContainer.appendChild(codeElement)
    }
  }

  private createAboutAnimation(): void {
    const aboutBg = this.aboutBgRef?.nativeElement
    if (!aboutBg) return

    // Create floating geometric shapes
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement("div")
      shape.className = "floating-skill"

      // Create different geometric shapes
      const shapeTypes = ["circle", "square", "triangle", "hexagon"]
      const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]

      const size = Math.random() * 20 + 15
      shape.style.width = size + "px"
      shape.style.height = size + "px"
      shape.style.left = Math.random() * 100 + "%"
      shape.style.animationDuration = Math.random() * 15 + 20 + "s"
      shape.style.animationDelay = Math.random() * 20 + "s"
      shape.style.background = `rgba(37, 99, 235, ${Math.random() * 0.3 + 0.2})`
      shape.style.borderRadius = shapeType === "circle" ? "50%" : shapeType === "square" ? "0%" : "20%"
      shape.style.transform = `rotate(${Math.random() * 360}deg)`

      aboutBg.appendChild(shape)
    }

    // Create floating achievement dots
    for (let i = 0; i < 12; i++) {
      const achievement = document.createElement("div")
      achievement.className = "floating-achievement"
      achievement.style.left = Math.random() * 100 + "%"
      achievement.style.top = Math.random() * 100 + "%"
      achievement.style.animationDuration = Math.random() * 3 + 2 + "s"
      achievement.style.animationDelay = Math.random() * 5 + "s"
      aboutBg.appendChild(achievement)
    }
  }

  private createServicesAnimation(): void {
    const servicesBg = this.servicesBgRef?.nativeElement
    if (!servicesBg) return

    // Create floating tool shapes
    for (let i = 0; i < 6; i++) {
      const tool = document.createElement("div")
      tool.className = "floating-tech"

      const size = Math.random() * 15 + 10
      tool.style.width = size + "px"
      tool.style.height = size + "px"
      tool.style.background = `rgba(37, 99, 235, ${Math.random() * 0.4 + 0.2})`
      tool.style.borderRadius = Math.random() > 0.5 ? "50%" : "20%"
      tool.style.animationDuration = Math.random() * 20 + 25 + "s"
      tool.style.animationDelay = Math.random() * 15 + "s"

      servicesBg.appendChild(tool)
    }

    // Create floating gears
    for (let i = 0; i < 10; i++) {
      const gear = document.createElement("div")
      gear.className = "floating-gear"
      gear.style.left = Math.random() * 100 + "%"
      gear.style.top = Math.random() * 100 + "%"
      gear.style.animationDuration = Math.random() * 4 + 3 + "s"
      gear.style.animationDelay = Math.random() * 6 + "s"
      servicesBg.appendChild(gear)
    }
  }

  private createPortfolioAnimation(): void {
    const portfolioBg = this.portfolioBgRef?.nativeElement
    if (!portfolioBg) return

    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#98d8c8", "#f7dc6f"]

    // Create floating design elements
    for (let i = 0; i < 7; i++) {
      const designElement = document.createElement("div")
      designElement.className = "floating-creative"

      const width = Math.random() * 25 + 15
      const height = Math.random() * 15 + 10

      designElement.style.width = width + "px"
      designElement.style.height = height + "px"
      designElement.style.background = colors[Math.floor(Math.random() * colors.length)]
      designElement.style.opacity = (Math.random() * 0.4 + 0.2).toString()
      designElement.style.borderRadius = Math.random() * 10 + "px"
      designElement.style.left = Math.random() * 100 + "%"
      designElement.style.animationDuration = Math.random() * 18 + 22 + "s"
      designElement.style.animationDelay = Math.random() * 12 + "s"

      portfolioBg.appendChild(designElement)
    }

    // Create floating color swatches
    for (let i = 0; i < 8; i++) {
      const color = document.createElement("div")
      color.className = "floating-color"
      color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      color.style.left = Math.random() * 100 + "%"
      color.style.top = Math.random() * 100 + "%"
      color.style.animationDuration = Math.random() * 6 + 8 + "s"
      color.style.animationDelay = Math.random() * 10 + "s"
      portfolioBg.appendChild(color)
    }
  }

  private createExperienceAnimation(): void {
    const experienceBg = this.experienceBgRef?.nativeElement
    if (!experienceBg) return

    // Create floating progress bar elements
    for (let i = 0; i < 6; i++) {
      const progressBar = document.createElement("div")
      progressBar.className = "floating-career"

      const width = Math.random() * 40 + 20
      const height = 4

      progressBar.style.width = width + "px"
      progressBar.style.height = height + "px"
      progressBar.style.background = `linear-gradient(90deg, rgba(37, 99, 235, 0.6), rgba(59, 130, 246, 0.3))`
      progressBar.style.borderRadius = "2px"
      progressBar.style.left = Math.random() * 100 + "%"
      progressBar.style.animationDuration = Math.random() * 16 + 20 + "s"
      progressBar.style.animationDelay = Math.random() * 10 + "s"

      experienceBg.appendChild(progressBar)
    }

    // Create floating milestone dots
    for (let i = 0; i < 10; i++) {
      const milestone = document.createElement("div")
      milestone.className = "floating-milestone"
      milestone.style.left = Math.random() * 100 + "%"
      milestone.style.top = Math.random() * 100 + "%"
      milestone.style.animationDuration = Math.random() * 3 + 2 + "s"
      milestone.style.animationDelay = Math.random() * 4 + "s"
      experienceBg.appendChild(milestone)
    }
  }

  private createBlogAnimation(): void {
    const blogBg = this.blogBgRef?.nativeElement
    if (!blogBg) return

    // Create floating paper/document elements
    for (let i = 0; i < 6; i++) {
      const paper = document.createElement("div")
      paper.className = "floating-knowledge"

      const width = Math.random() * 20 + 15
      const height = Math.random() * 25 + 20

      paper.style.width = width + "px"
      paper.style.height = height + "px"
      paper.style.background = `rgba(37, 99, 235, ${Math.random() * 0.3 + 0.1})`
      paper.style.borderRadius = "2px"
      paper.style.border = `1px solid rgba(37, 99, 235, 0.2)`
      paper.style.animationDuration = Math.random() * 18 + 22 + "s"
      paper.style.animationDelay = Math.random() * 15 + "s"
      paper.style.position = "relative"
      paper.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.1)"

      blogBg.appendChild(paper)
    }

    // Create floating idea bulbs
    for (let i = 0; i < 8; i++) {
      const idea = document.createElement("div")
      idea.className = "floating-idea"
      idea.style.left = Math.random() * 100 + "%"
      idea.style.top = Math.random() * 100 + "%"
      idea.style.animationDuration = Math.random() * 4 + 3 + "s"
      idea.style.animationDelay = Math.random() * 6 + "s"
      idea.style.borderRadius = "50% 50% 50% 50% / 60% 60% 40% 40%"

      blogBg.appendChild(idea)
    }
  }

  private createContactAnimation(): void {
    const contactBg = this.contactBgRef?.nativeElement
    if (!contactBg) return

    // Create floating message bubble shapes
    for (let i = 0; i < 5; i++) {
      const messageBubble = document.createElement("div")
      messageBubble.className = "floating-message"

      const width = Math.random() * 30 + 20
      const height = Math.random() * 20 + 15

      messageBubble.style.width = width + "px"
      messageBubble.style.height = height + "px"
      messageBubble.style.background = `rgba(37, 99, 235, ${Math.random() * 0.3 + 0.2})`
      messageBubble.style.borderRadius = "15px 15px 15px 5px"
      messageBubble.style.left = Math.random() * 100 + "%"
      messageBubble.style.animationDuration = Math.random() * 16 + 20 + "s"
      messageBubble.style.animationDelay = Math.random() * 12 + "s"

      contactBg.appendChild(messageBubble)
    }

    // Create floating connection signals
    for (let i = 0; i < 8; i++) {
      const signal = document.createElement("div")
      signal.className = "floating-signal"
      signal.style.left = Math.random() * 100 + "%"
      signal.style.top = Math.random() * 100 + "%"
      signal.style.animationDuration = Math.random() * 3 + 2 + "s"
      signal.style.animationDelay = Math.random() * 4 + "s"
      contactBg.appendChild(signal)
    }
  }

  private startTypingAnimation(): void {
    const typingText = document.querySelector(".typing-text") as HTMLElement
    if (!typingText) return

    const text = "Hello, I'm Human"
    const nameStart = text.indexOf("Human")
    let currentIndex = 0

    // Clear the text first
    typingText.innerHTML = ""
    typingText.style.width = "auto"
    typingText.style.borderRight = "3px solid #2563eb"

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        const char = text[currentIndex]
        // Check if we're starting the name "Human"
        if (currentIndex === nameStart) {
          typingText.innerHTML += '<span class="text-gradient">'
        }
        typingText.innerHTML += char
        // Check if we've finished the name "Human"
        if (currentIndex === nameStart + 4) {
          typingText.innerHTML += "</span>"
        }
        currentIndex++
        setTimeout(typeCharacter, 150)
      } else {
        // Animation complete, start blinking cursor
        setTimeout(() => {
          typingText.style.borderRight = "none"
          const cursor = document.createElement("span")
          cursor.className = "typing-cursor"
          cursor.style.animation = "blink 1s infinite"
          typingText.parentNode?.appendChild(cursor)
        }, 500)
      }
    }

    // Start typing after a delay
    setTimeout(typeCharacter, 1000)
  }

  private initScrollAnimations(): void {
    this.animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all animation elements
    const animationElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-rotate",
    )
    animationElements.forEach((el) => {
      this.animationObserver.observe(el)
    })

    // Setup skill bar animation
    this.skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateSkillBars()
            this.skillObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const skillSection = document.querySelector(".skill-bar")
    if (skillSection) {
      const section = skillSection.closest("section")
      if (section) {
        this.skillObserver.observe(section)
      }
    }
  }

  private animateSkillBars(): void {
    document.querySelectorAll(".skill-fill").forEach((bar, index) => {
      const barElement = bar as HTMLElement
      const width = barElement.getAttribute("data-width")
      barElement.style.width = "0%"
      setTimeout(() => {
        barElement.style.transition = "width 1.5s ease"
        barElement.style.width = width + "%"
      }, 100 * index)
    })
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }
}
