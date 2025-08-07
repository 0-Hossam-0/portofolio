import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit, AfterViewInit {
  blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable and scalable React applications.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Advanced CSS techniques and modern approaches to styling web applications.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const knowledgeElements = ["📚", "✍️", "💭", "🧠", "📝", "💡", "🔍", "📖"]
    this.animationService.initFloatingObjects("blogShapes", knowledgeElements, 8)
  }
}
