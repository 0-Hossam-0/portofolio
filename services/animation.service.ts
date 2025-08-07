"use client"

import { Injectable } from "@angular/core"

export interface CodeSnippet {
  text: string
  type: "keyword" | "function" | "string" | "comment" | "operator" | "number"
}

@Injectable({
  providedIn: "root",
})
export class AnimationService {
  private observer: IntersectionObserver | null = null
  private skillObserver!: IntersectionObserver

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

  constructor() {}

  initializeAnimations(): void {
    this.setupScrollAnimations()
  }

  private setupScrollAnimations(): void {
    this.observer = new IntersectionObserver(
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

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-rotate",
    )

    animatedElements.forEach((element) => {
      if (this.observer) {
        this.observer.observe(element)
      }
    })
  }

  initSkillBarAnimation(): void {
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

  animateSkillBars(): void {
    const skillBars = document.querySelectorAll(".skill-progress")
    skillBars.forEach((bar: Element) => {
      const htmlBar = bar as HTMLElement
      const percentage = htmlBar.getAttribute("data-percentage") || "0"
      htmlBar.style.width = percentage + "%"
    })
  }

  createProjectsBackgroundAnimation(container: HTMLElement): void {
    if (!container) return

    // Clear existing elements
    container.innerHTML = ""

    // Create floating geometric shapes
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement("div")
      shape.className = "floating-geometric-shape"

      const shapes = ["circle", "square", "triangle", "hexagon", "diamond"]
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)]

      const size = Math.random() * 30 + 20
      shape.style.width = size + "px"
      shape.style.height = size + "px"
      shape.style.left = Math.random() * 100 + "%"
      shape.style.top = Math.random() * 100 + "%"
      shape.style.animationDuration = Math.random() * 20 + 15 + "s"
      shape.style.animationDelay = Math.random() * 10 + "s"

      // Set shape-specific styles
      if (shapeType === "circle") {
        shape.style.borderRadius = "50%"
        shape.style.background = `linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3))`
      } else if (shapeType === "square") {
        shape.style.borderRadius = "8px"
        shape.style.background = `linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))`
      } else if (shapeType === "triangle") {
        shape.style.width = "0"
        shape.style.height = "0"
        shape.style.borderLeft = size / 2 + "px solid transparent"
        shape.style.borderRight = size / 2 + "px solid transparent"
        shape.style.borderBottom = size + "px solid rgba(16, 185, 129, 0.3)"
        shape.style.background = "transparent"
      } else if (shapeType === "hexagon") {
        shape.style.borderRadius = "20%"
        shape.style.background = `linear-gradient(60deg, rgba(245, 101, 101, 0.3), rgba(251, 191, 36, 0.3))`
        shape.style.transform = "rotate(45deg)"
      } else if (shapeType === "diamond") {
        shape.style.borderRadius = "0"
        shape.style.background = `linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))`
        shape.style.transform = "rotate(45deg)"
      }

      container.appendChild(shape)
    }

    // Create floating code elements
    for (let i = 0; i < 12; i++) {
      const codeElement = document.createElement("div")
      codeElement.className = "floating-code-element"

      const codeSymbols = ["{ }", "< />", "( )", "[ ]", "=>", "&&", "||", "===", "!==", "++", "--", "..."]
      codeElement.textContent = codeSymbols[Math.floor(Math.random() * codeSymbols.length)]

      codeElement.style.left = Math.random() * 100 + "%"
      codeElement.style.top = Math.random() * 100 + "%"
      codeElement.style.animationDuration = Math.random() * 25 + 20 + "s"
      codeElement.style.animationDelay = Math.random() * 15 + "s"
      codeElement.style.fontSize = Math.random() * 8 + 14 + "px"
      codeElement.style.color = `rgba(102, 126, 234, ${Math.random() * 0.4 + 0.2})`

      container.appendChild(codeElement)
    }

    // Create floating particles
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement("div")
      particle.className = "floating-particle"

      const size = Math.random() * 6 + 2
      particle.style.width = size + "px"
      particle.style.height = size + "px"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      particle.style.animationDuration = Math.random() * 15 + 10 + "s"
      particle.style.animationDelay = Math.random() * 8 + "s"
      particle.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.4)`
      particle.style.borderRadius = "50%"

      container.appendChild(particle)
    }

    // Create animated grid lines
    for (let i = 0; i < 8; i++) {
      const gridLine = document.createElement("div")
      gridLine.className = "animated-grid-line"

      if (i % 2 === 0) {
        // Vertical lines
        gridLine.style.width = "1px"
        gridLine.style.height = "100%"
        gridLine.style.left = Math.random() * 100 + "%"
        gridLine.style.top = "0"
      } else {
        // Horizontal lines
        gridLine.style.width = "100%"
        gridLine.style.height = "1px"
        gridLine.style.left = "0"
        gridLine.style.top = Math.random() * 100 + "%"
      }

      gridLine.style.background = `linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent)`
      gridLine.style.animationDuration = Math.random() * 8 + 6 + "s"
      gridLine.style.animationDelay = Math.random() * 4 + "s"

      container.appendChild(gridLine)
    }

    // Create pulsing orbs
    for (let i = 0; i < 6; i++) {
      const orb = document.createElement("div")
      orb.className = "pulsing-orb"

      const size = Math.random() * 40 + 30
      orb.style.width = size + "px"
      orb.style.height = size + "px"
      orb.style.left = Math.random() * 100 + "%"
      orb.style.top = Math.random() * 100 + "%"
      orb.style.animationDuration = Math.random() * 4 + 3 + "s"
      orb.style.animationDelay = Math.random() * 2 + "s"

      const colors = [
        "rgba(102, 126, 234, 0.1)",
        "rgba(118, 75, 162, 0.1)",
        "rgba(59, 130, 246, 0.1)",
        "rgba(147, 51, 234, 0.1)",
        "rgba(16, 185, 129, 0.1)",
        "rgba(245, 101, 101, 0.1)",
      ]

      orb.style.background = `radial-gradient(circle, ${colors[i % colors.length]}, transparent)`
      orb.style.borderRadius = "50%"

      container.appendChild(orb)
    }
  }

  createCodeRain(container: HTMLElement): void {
    if (!container) return

    // Clear existing elements
    container.innerHTML = ""

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
      container.appendChild(codeElement)
    }
  }

  createAboutAnimation(container: HTMLElement): void {
    if (!container) return

    // Create floating geometric shapes
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement("div")
      shape.className = "floating-skill"

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

      container.appendChild(shape)
    }

    // Create floating achievement dots
    for (let i = 0; i < 12; i++) {
      const achievement = document.createElement("div")
      achievement.className = "floating-achievement"
      achievement.style.left = Math.random() * 100 + "%"
      achievement.style.top = Math.random() * 100 + "%"
      achievement.style.animationDuration = Math.random() * 3 + 2 + "s"
      achievement.style.animationDelay = Math.random() * 5 + "s"
      container.appendChild(achievement)
    }
  }

  createServicesAnimation(container: HTMLElement): void {
    if (!container) return

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

      container.appendChild(tool)
    }

    // Create floating gears
    for (let i = 0; i < 10; i++) {
      const gear = document.createElement("div")
      gear.className = "floating-gear"
      gear.style.left = Math.random() * 100 + "%"
      gear.style.top = Math.random() * 100 + "%"
      gear.style.animationDuration = Math.random() * 4 + 3 + "s"
      gear.style.animationDelay = Math.random() * 6 + "s"
      container.appendChild(gear)
    }
  }

  createPortfolioAnimation(container: HTMLElement): void {
    if (!container) return

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

      container.appendChild(designElement)
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
      container.appendChild(color)
    }
  }

  createExperienceAnimation(container: HTMLElement): void {
    if (!container) return

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

      container.appendChild(progressBar)
    }

    // Create floating milestone dots
    for (let i = 0; i < 10; i++) {
      const milestone = document.createElement("div")
      milestone.className = "floating-milestone"
      milestone.style.left = Math.random() * 100 + "%"
      milestone.style.top = Math.random() * 100 + "%"
      milestone.style.animationDuration = Math.random() * 3 + 2 + "s"
      milestone.style.animationDelay = Math.random() * 4 + "s"
      container.appendChild(milestone)
    }
  }

  createBlogAnimation(container: HTMLElement): void {
    if (!container) return

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

      container.appendChild(paper)
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

      container.appendChild(idea)
    }
  }

  createContactAnimation(container: HTMLElement): void {
    if (!container) return

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

      container.appendChild(messageBubble)
    }

    // Create floating connection signals
    for (let i = 0; i < 8; i++) {
      const signal = document.createElement("div")
      signal.className = "floating-signal"
      signal.style.left = Math.random() * 100 + "%"
      signal.style.top = Math.random() * 100 + "%"
      signal.style.animationDuration = Math.random() * 3 + 2 + "s"
      signal.style.animationDelay = Math.random() * 4 + "s"
      container.appendChild(signal)
    }
  }

  initCodeRain(containerId: string): void {
    const container = document.getElementById(containerId)
    if (!container) return

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const columns = Math.floor(container.offsetWidth / 20)

    container.innerHTML = ""

    for (let i = 0; i < columns; i++) {
      const column = document.createElement("div")
      column.className = "code-column"
      column.style.left = `${i * 20}px`
      column.style.animationDelay = `${Math.random() * 2}s`

      // Create characters in the column
      for (let j = 0; j < 20; j++) {
        const char = document.createElement("span")
        char.textContent = characters[Math.floor(Math.random() * characters.length)]
        char.style.opacity = Math.random().toString()
        column.appendChild(char)
      }

      container.appendChild(column)
    }
  }

  initFloatingObjects(containerId: string, elements: string[], count: number): void {
    const container = document.getElementById(containerId)
    if (!container) return

    // Clear existing objects
    container.innerHTML = ""

    for (let i = 0; i < count; i++) {
      const obj = document.createElement("div")
      obj.className = "floating-object"
      obj.textContent = elements[i % elements.length]

      // Random positioning
      obj.style.left = Math.random() * 100 + "%"
      obj.style.top = Math.random() * 100 + "%"
      obj.style.animationDelay = Math.random() * 5 + "s"
      obj.style.animationDuration = Math.random() * 3 + 2 + "s"

      container.appendChild(obj)
    }
  }

  initTypingAnimation(elementId: string, texts: string[], speed = 100): void {
    const element = document.getElementById(elementId)
    if (!element) return

    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const currentText = texts[textIndex]

      if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1)
        charIndex--
      } else {
        element.textContent = currentText.substring(0, charIndex + 1)
        charIndex++
      }

      let typeSpeed = speed
      if (isDeleting) {
        typeSpeed /= 2
      }

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000 // Pause at end
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        typeSpeed = 500 // Pause before next text
      }

      setTimeout(type, typeSpeed)
    }

    type()
  }

  observeElements(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect()
    }
    if (this.skillObserver) {
      this.skillObserver.disconnect()
    }
  }

  fadeInUp(element: HTMLElement, delay = 0): void {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "all 0.6s ease-out"

    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }, delay)
  }

  slideInLeft(element: HTMLElement, delay = 0): void {
    element.style.opacity = "0"
    element.style.transform = "translateX(-50px)"
    element.style.transition = "all 0.6s ease-out"

    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateX(0)"
    }, delay)
  }

  slideInRight(element: HTMLElement, delay = 0): void {
    element.style.opacity = "0"
    element.style.transform = "translateX(50px)"
    element.style.transition = "all 0.6s ease-out"

    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateX(0)"
    }, delay)
  }

  scaleIn(element: HTMLElement, delay = 0): void {
    element.style.opacity = "0"
    element.style.transform = "scale(0.8)"
    element.style.transition = "all 0.6s ease-out"

    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "scale(1)"
    }, delay)
  }
}
