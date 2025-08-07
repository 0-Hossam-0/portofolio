"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Menu, ArrowUp, Code, Smartphone, Palette, Server, BarChart3, Users } from "lucide-react"

export default function Portfolio() {
  const [theme, setTheme] = useState("light")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.className = savedTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.className = newTheme
  }

  const smoothScrollToSection = (targetId: string) => {
    if (isNavigating) return
    setIsNavigating(true)
    setMobileMenuOpen(false)

    const targetElement = document.querySelector(targetId)
    if (!targetElement) {
      setIsNavigating(false)
      return
    }

    const headerHeight = 80
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })

    setTimeout(() => setIsNavigating(false), 800)
  }

  // Create background animations with better objects
  useEffect(() => {
    createCodeRain()
    createAboutAnimation()
    createServicesAnimation()
    createPortfolioAnimation()
    createExperienceAnimation()
    createBlogAnimation()
    createContactAnimation()
    startTypingAnimation()
    initScrollAnimations()
  }, [])

  return (
    <div className="gradient-bg text-text-primary dark:text-dark-text-primary overflow-x-hidden transition-colors duration-300">
      {/* Navigation Progress Bar */}
      <div className="nav-progress">
        <div className="nav-progress-bar" id="navProgressBar"></div>
      </div>

      {/* Header Navigation */}
      <header className="header-fixed header-bg transition-all duration-300">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Human</span>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="desktop-nav">
              <ul className="flex space-x-2">
                {["home", "about", "services", "portfolio", "experience", "blog", "contact"].map((section) => (
                  <li key={section}>
                    <button onClick={() => smoothScrollToSection(`#${section}`)} className="nav-item capitalize">
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Profile, Theme Toggle & Social Links */}
            <div className="desktop-profile flex items-center space-x-6">
              {/* Modern Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                <div className="relative w-6 h-6">
                  <Sun
                    className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${
                      theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <Moon
                    className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
                      theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <div className="flex items-center space-x-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Human"
                  className="w-10 h-10 rounded-full border-2 border-accent-blue/30 dark:border-dark-accent-blue/30 object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-text-primary dark:text-dark-text-primary">Human</p>
                  <p className="text-accent-blue dark:text-dark-accent-blue text-xs">Designer & Developer</p>
                </div>
              </div>

              <div className="flex space-x-3">
                {["Facebook", "Twitter", "LinkedIn"].map((social, index) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 bg-accent-blue/20 dark:bg-dark-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue dark:hover:bg-dark-accent-blue hover:scale-110 transition-all duration-200"
                  >
                    <span className="text-xs text-accent-blue dark:text-dark-accent-blue hover:text-white">
                      {social[0].toLowerCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex items-center space-x-3 md:hidden">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <div className="relative w-5 h-5">
                  <Sun
                    className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300 ${
                      theme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <Moon
                    className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${
                      theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue text-white p-2 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-b border-accent-blue/20 dark:border-dark-accent-blue/20 transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <nav>
              <ul className="space-y-3">
                {["home", "about", "services", "portfolio", "experience", "blog", "contact"].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => smoothScrollToSection(`#${section}`)}
                      className="block w-full text-left py-2 px-4 hover:bg-accent-blue/20 dark:hover:bg-dark-accent-blue/20 rounded transition-all duration-200 text-text-primary dark:text-dark-text-primary capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section with Code Rain */}
        <section
          id="home"
          className="min-h-screen flex items-center px-8 lg:px-16 relative overflow-hidden section-transition"
        >
          <div className="home-code-container" id="codeRain"></div>
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="animate-on-scroll">
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight relative z-10">
                <div className="typing-container">
                  <span className="typing-text">
                    Hello, I'm <span className="text-gradient">Human</span>
                  </span>
                </div>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-text-secondary dark:text-dark-text-secondary mb-8 animate-on-scroll delay-1">
                Creative Designer & Full-Stack Developer
              </h2>
              <p className="text-lg text-text-muted dark:text-dark-text-muted mb-12 max-w-2xl leading-relaxed animate-on-scroll delay-2">
                I create digital experiences that combine beautiful design with powerful functionality. With 8+ years of
                experience, I help businesses transform their ideas into reality.
              </p>
              <div className="flex flex-wrap gap-6 animate-on-scroll delay-3">
                <button className="bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 blue-glow">
                  View My Work
                </button>
                <button className="border-2 border-accent-blue dark:border-dark-accent-blue text-accent-blue dark:text-dark-accent-blue px-8 py-4 rounded-lg hover:bg-accent-blue dark:hover:bg-dark-accent-blue hover:text-white hover:scale-105 transition-all duration-200">
                  Download CV
                </button>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-accent-blue/10 dark:bg-dark-accent-blue/10 rounded-full blur-xl animate-float z-5"></div>
          <div
            className="absolute bottom-40 right-40 w-24 h-24 bg-light-blue/10 dark:bg-dark-light-blue/10 rounded-full blur-xl animate-float z-5"
            style={{ animationDelay: "3s" }}
          ></div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding px-8 lg:px-16 section-transition relative">
          <div className="about-bg-animation" id="aboutBg"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-left">
                <h2 className="text-5xl font-bold mb-8 text-gradient">About Me</h2>
                <p className="text-text-secondary dark:text-dark-text-secondary text-lg mb-6 leading-relaxed animate-on-scroll delay-1">
                  I'm a passionate designer and developer based in New York. I specialize in creating digital products
                  that not only look great but also provide exceptional user experiences.
                </p>
                <p className="text-text-muted dark:text-dark-text-muted mb-8 leading-relaxed animate-on-scroll delay-2">
                  My journey in tech started 8 years ago, and since then I've worked with startups, agencies, and
                  Fortune 500 companies to bring their visions to life.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="animate-on-scroll delay-3">
                    <h4 className="text-accent-blue dark:text-dark-accent-blue font-semibold mb-2">Email</h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">human@portfolio.com</p>
                  </div>
                  <div className="animate-on-scroll delay-4">
                    <h4 className="text-accent-blue dark:text-dark-accent-blue font-semibold mb-2">Phone</h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">+1 234 567 8900</p>
                  </div>
                  <div className="animate-on-scroll delay-5">
                    <h4 className="text-accent-blue dark:text-dark-accent-blue font-semibold mb-2">Location</h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">New York, USA</p>
                  </div>
                  <div className="animate-on-scroll delay-6">
                    <h4 className="text-accent-blue dark:text-dark-accent-blue font-semibold mb-2">Experience</h4>
                    <p className="text-text-secondary dark:text-dark-text-secondary">8+ Years</p>
                  </div>
                </div>
              </div>
              <div className="animate-right">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="About Me"
                    className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue rounded-2xl blur opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="section-padding px-8 lg:px-16 bg-light-gray/50 dark:bg-dark-surface/50 section-transition relative"
        >
          <div className="services-bg-animation" id="servicesBg"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl font-bold mb-6 text-gradient">What I Do</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
                I offer a comprehensive range of services to help bring your digital vision to life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  desc: "Creating responsive, fast, and scalable web applications using modern technologies.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Development",
                  desc: "Building native and cross-platform mobile apps that deliver exceptional user experiences.",
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  desc: "Designing intuitive interfaces that users love and that drive business results.",
                },
                {
                  icon: Server,
                  title: "Brand Identity",
                  desc: "Creating memorable brand identities that help businesses stand out in the market.",
                },
                {
                  icon: BarChart3,
                  title: "SEO Optimization",
                  desc: "Optimizing websites for search engines to improve visibility and drive organic traffic.",
                },
                {
                  icon: Users,
                  title: "Consulting",
                  desc: "Providing strategic guidance on digital transformation and technology solutions.",
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className={`glass-effect p-8 rounded-2xl card-hover animate-on-scroll delay-${index + 1}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section-padding px-8 lg:px-16 section-transition relative">
          <div className="portfolio-bg-animation" id="portfolioBg"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl font-bold mb-6 text-gradient">Featured Work</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and creativity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  desc: "Modern shopping experience with React & Node.js",
                  image: "ecommerce platform dashboard",
                },
                {
                  title: "Mobile Banking App",
                  desc: "Secure banking solution with biometric authentication",
                  image: "mobile banking app interface",
                },
                {
                  title: "Corporate Website",
                  desc: "Professional business website with CMS integration",
                  image: "corporate website design",
                },
                {
                  title: "Social Media Platform",
                  desc: "Real-time social networking with advanced features",
                  image: "social media platform interface",
                },
              ].map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative overflow-hidden rounded-2xl card-hover animate-scale delay-${index + 1}`}
                >
                  <img
                    src={`/placeholder.svg?height=320&width=600&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.desc}</p>
                      <button className="bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue text-white px-6 py-3 rounded-lg hover:shadow-xl transition-all duration-200">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="section-padding px-8 lg:px-16 bg-light-gray/50 dark:bg-dark-surface/50 section-transition relative"
        >
          <div className="experience-bg-animation" id="experienceBg"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl font-bold mb-6 text-gradient">Experience</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
                My professional journey and the skills I've developed along the way.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-left">
                <h3 className="text-2xl font-bold mb-8 text-accent-blue dark:text-dark-accent-blue">
                  Professional Skills
                </h3>
                <div className="space-y-6">
                  {[
                    { skill: "Web Development", percentage: 95 },
                    { skill: "UI/UX Design", percentage: 90 },
                    { skill: "Mobile Development", percentage: 85 },
                  ].map((item, index) => (
                    <div key={item.skill} className={`skill-bar animate-on-scroll delay-${index + 1}`}>
                      <div className="flex justify-between mb-3">
                        <span className="font-semibold text-text-primary dark:text-dark-text-primary">
                          {item.skill}
                        </span>
                        <span className="text-accent-blue dark:text-dark-accent-blue">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-300 dark:bg-dark-surface-light rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue h-3 rounded-full skill-fill transition-all duration-1500 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-right">
                <h3 className="text-2xl font-bold mb-8 text-accent-blue dark:text-dark-accent-blue">Work Experience</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Senior Full-Stack Developer",
                      company: "TechCorp Inc.",
                      period: "2020 - Present",
                      desc: "Leading development of enterprise web applications and mentoring junior developers.",
                    },
                    {
                      title: "UI/UX Designer",
                      company: "Creative Agency",
                      period: "2018 - 2020",
                      desc: "Designed user interfaces for various clients including startups and Fortune 500 companies.",
                    },
                    {
                      title: "Frontend Developer",
                      company: "StartupXYZ",
                      period: "2016 - 2018",
                      desc: "Built responsive web applications using modern JavaScript frameworks.",
                    },
                  ].map((job, index) => (
                    <div
                      key={job.title}
                      className={`border-l-4 border-accent-blue dark:border-dark-accent-blue pl-6 animate-on-scroll delay-${index + 1}`}
                      style={{ borderColor: `rgba(37, 99, 235, ${1 - index * 0.25})` }}
                    >
                      <h4 className="text-xl font-bold mb-2 text-text-primary dark:text-dark-text-primary">
                        {job.title}
                      </h4>
                      <p className="text-accent-blue dark:text-dark-accent-blue mb-2">
                        {job.company} • {job.period}
                      </p>
                      <p className="text-text-secondary dark:text-dark-text-secondary">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section-padding px-8 lg:px-16 section-transition relative">
          <div className="blog-bg-animation" id="blogBg"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl font-bold mb-6 text-gradient">Latest Articles</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
                Insights, tips, and thoughts on design, development, and technology.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Web Development Best Practices",
                  desc: "Discover the latest trends and techniques that will help you build better web applications.",
                  date: "March 15, 2024",
                  image: "web development code editor",
                },
                {
                  title: "UI/UX Design Trends 2024",
                  desc: "Explore the design trends that will shape the digital landscape this year.",
                  date: "March 10, 2024",
                  image: "ui ux design mockups",
                },
                {
                  title: "The Future of Mobile Development",
                  desc: "Learn about emerging technologies revolutionizing mobile app development.",
                  date: "March 5, 2024",
                  image: "mobile app development",
                },
              ].map((article, index) => (
                <article
                  key={article.title}
                  className={`glass-effect rounded-2xl overflow-hidden card-hover animate-rotate delay-${index + 1}`}
                >
                  <img
                    src={`/placeholder.svg?height=192&width=400&query=${article.image}`}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary dark:text-dark-text-secondary mb-4 text-sm">{article.desc}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-muted dark:text-dark-text-muted">{article.date}</span>
                      <button className="text-accent-blue dark:text-dark-accent-blue hover:underline">Read More</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="section-padding px-8 lg:px-16 bg-light-gray/50 dark:bg-dark-surface/50 section-transition relative"
        >
          <div className="contact-bg-animation" id="contactBg"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-5xl font-bold mb-6 text-gradient">Let's Work Together</h2>
              <p className="text-text-secondary dark:text-dark-text-secondary text-lg max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can bring your ideas to life.
              </p>
            </div>
            <div className="contact-form-bg p-8 rounded-2xl shadow-2xl animate-scale">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="animate-on-scroll delay-1">
                  <label className="block text-sm font-medium mb-3 text-accent-blue dark:text-dark-accent-blue">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 glass-effect rounded-lg focus:border-accent-blue dark:focus:border-dark-accent-blue focus:outline-none transition-all duration-200 text-text-primary dark:text-dark-text-primary"
                  />
                </div>
                <div className="animate-on-scroll delay-2">
                  <label className="block text-sm font-medium mb-3 text-accent-blue dark:text-dark-accent-blue">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 glass-effect rounded-lg focus:border-accent-blue dark:focus:border-dark-accent-blue focus:outline-none transition-all duration-200 text-text-primary dark:text-dark-text-primary"
                  />
                </div>
                <div className="md:col-span-2 animate-on-scroll delay-3">
                  <label className="block text-sm font-medium mb-3 text-accent-blue dark:text-dark-accent-blue">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 glass-effect rounded-lg focus:border-accent-blue dark:focus:border-dark-accent-blue focus:outline-none transition-all duration-200 text-text-primary dark:text-dark-text-primary"
                  />
                </div>
                <div className="md:col-span-2 animate-on-scroll delay-4">
                  <label className="block text-sm font-medium mb-3 text-accent-blue dark:text-dark-accent-blue">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-4 glass-effect rounded-lg focus:border-accent-blue dark:focus:border-dark-accent-blue focus:outline-none transition-all duration-200 text-text-primary dark:text-dark-text-primary"
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center animate-on-scroll delay-5">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue text-white px-12 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 blue-glow"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 lg:px-16 border-t border-gray-300 dark:border-dark-surface-light">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-text-muted dark:text-dark-text-muted animate-on-scroll">
              &copy; 2024 Human. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-accent-blue to-light-blue dark:from-dark-accent-blue dark:to-dark-light-blue text-white w-14 h-14 rounded-full flex items-center justify-center z-50 shadow-lg blue-glow transition-all duration-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}

// Animation functions
function createCodeRain() {
  const codeContainer = document.getElementById("codeRain")
  if (!codeContainer) return

  const codeSnippets = [
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

  codeContainer.innerHTML = ""

  for (let i = 0; i < 20; i++) {
    const codeElement = document.createElement("div")
    const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
    codeElement.className = `code-element code-${randomSnippet.type}`
    codeElement.textContent = randomSnippet.text
    codeElement.style.left = Math.random() * 95 + "%"
    codeElement.style.animationDuration = Math.random() * 8 + 10 + "s"
    codeElement.style.animationDelay = Math.random() * 30 + "s"
    codeElement.style.fontSize = Math.random() * 4 + 13 + "px"
    codeContainer.appendChild(codeElement)
  }
}

function createAboutAnimation() {
  const aboutBg = document.getElementById("aboutBg")
  if (!aboutBg) return

  const skills = [
    "React.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Design Systems",
    "API Development",
    "Cloud Computing",
    "DevOps",
  ]

  for (let i = 0; i < 8; i++) {
    const skill = document.createElement("div")
    skill.className = "floating-skill"
    skill.textContent = skills[Math.floor(Math.random() * skills.length)]
    skill.style.left = Math.random() * 100 + "%"
    skill.style.animationDuration = Math.random() * 15 + 20 + "s"
    skill.style.animationDelay = Math.random() * 20 + "s"
    aboutBg.appendChild(skill)
  }

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

function createServicesAnimation() {
  const servicesBg = document.getElementById("servicesBg")
  if (!servicesBg) return

  const techTerms = [
    "Frontend",
    "Backend",
    "Database",
    "API",
    "Cloud",
    "Security",
    "Performance",
    "Testing",
    "Deployment",
    "Monitoring",
  ]

  for (let i = 0; i < 6; i++) {
    const tech = document.createElement("div")
    tech.className = "floating-tech"
    tech.textContent = techTerms[Math.floor(Math.random() * techTerms.length)]
    tech.style.animationDuration = Math.random() * 20 + 25 + "s"
    tech.style.animationDelay = Math.random() * 15 + "s"
    servicesBg.appendChild(tech)
  }

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

function createPortfolioAnimation() {
  const portfolioBg = document.getElementById("portfolioBg")
  if (!portfolioBg) return

  const creativeTerms = [
    "Wireframes",
    "Prototypes",
    "User Research",
    "A/B Testing",
    "Responsive Design",
    "Accessibility",
    "Brand Identity",
  ]
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#98d8c8", "#f7dc6f"]

  for (let i = 0; i < 7; i++) {
    const creative = document.createElement("div")
    creative.className = "floating-creative"
    creative.textContent = creativeTerms[Math.floor(Math.random() * creativeTerms.length)]
    creative.style.left = Math.random() * 100 + "%"
    creative.style.animationDuration = Math.random() * 18 + 22 + "s"
    creative.style.animationDelay = Math.random() * 12 + "s"
    portfolioBg.appendChild(creative)
  }

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

function createExperienceAnimation() {
  const experienceBg = document.getElementById("experienceBg")
  if (!experienceBg) return

  const careerTerms = [
    "Leadership",
    "Mentoring",
    "Project Management",
    "Team Building",
    "Innovation",
    "Problem Solving",
    "Growth",
    "Excellence",
  ]

  for (let i = 0; i < 6; i++) {
    const career = document.createElement("div")
    career.className = "floating-career"
    career.textContent = careerTerms[Math.floor(Math.random() * careerTerms.length)]
    career.style.left = Math.random() * 100 + "%"
    career.style.animationDuration = Math.random() * 16 + 20 + "s"
    career.style.animationDelay = Math.random() * 10 + "s"
    experienceBg.appendChild(career)
  }

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

function createBlogAnimation() {
  const blogBg = document.getElementById("blogBg")
  if (!blogBg) return

  const knowledgeTerms = [
    "Tutorials",
    "Best Practices",
    "Case Studies",
    "Industry Insights",
    "Tech Reviews",
    "Learning Resources",
  ]

  for (let i = 0; i < 6; i++) {
    const knowledge = document.createElement("div")
    knowledge.className = "floating-knowledge"
    knowledge.textContent = knowledgeTerms[Math.floor(Math.random() * knowledgeTerms.length)]
    knowledge.style.animationDuration = Math.random() * 18 + 22 + "s"
    knowledge.style.animationDelay = Math.random() * 15 + "s"
    blogBg.appendChild(knowledge)
  }

  for (let i = 0; i < 8; i++) {
    const idea = document.createElement("div")
    idea.className = "floating-idea"
    idea.style.left = Math.random() * 100 + "%"
    idea.style.top = Math.random() * 100 + "%"
    idea.style.animationDuration = Math.random() * 4 + 3 + "s"
    idea.style.animationDelay = Math.random() * 6 + "s"
    blogBg.appendChild(idea)
  }
}

function createContactAnimation() {
  const contactBg = document.getElementById("contactBg")
  if (!contactBg) return

  const messageTerms = [
    "Collaboration",
    "Communication",
    "Partnership",
    "Consultation",
    "Support",
    "Feedback",
    "Discussion",
    "Connection",
  ]

  for (let i = 0; i < 5; i++) {
    const message = document.createElement("div")
    message.className = "floating-message"
    message.textContent = messageTerms[Math.floor(Math.random() * messageTerms.length)]
    message.style.left = Math.random() * 100 + "%"
    message.style.animationDuration = Math.random() * 16 + 20 + "s"
    message.style.animationDelay = Math.random() * 12 + "s"
    contactBg.appendChild(message)
  }

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

function startTypingAnimation() {
  const typingText = document.querySelector(".typing-text")
  if (!typingText) return

  const text = "Hello, I'm Human"
  const nameStart = text.indexOf("Human")
  let currentIndex = 0

  typingText.innerHTML = ""
  typingText.style.width = "auto"
  typingText.style.borderRight = "3px solid #2563eb"

  function typeCharacter() {
    if (currentIndex < text.length) {
      const char = text[currentIndex]
      if (currentIndex === nameStart) {
        typingText.innerHTML += '<span class="text-gradient">'
      }
      typingText.innerHTML += char
      if (currentIndex === nameStart + 4) {
        typingText.innerHTML += "</span>"
      }
      currentIndex++
      setTimeout(typeCharacter, 150)
    } else {
      setTimeout(() => {
        typingText.style.borderRight = "none"
        const cursor = document.createElement("span")
        cursor.className = "typing-cursor"
        cursor.style.animation = "blink 1s infinite"
        typingText.parentNode.appendChild(cursor)
      }, 500)
    }
  }

  setTimeout(typeCharacter, 1000)
}

function initScrollAnimations() {
  const animationObserver = new IntersectionObserver(
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

  const animationElements = document.querySelectorAll(
    ".animate-on-scroll, .animate-left, .animate-right, .animate-scale, .animate-rotate",
  )
  animationElements.forEach((el) => {
    animationObserver.observe(el)
  })
}
