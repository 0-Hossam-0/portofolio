import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import { type FormBuilder, type FormGroup, Validators } from "@angular/forms"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm: FormGroup
  isSubmitting = false

  constructor(
    private fb: FormBuilder,
    private animationService: AnimationService,
  ) {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", [Validators.required, Validators.minLength(5)]],
      message: ["", [Validators.required, Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const messageElements = ["📧", "💬", "📞", "🌐", "✉️", "📱", "💻", "🤝"]
    this.animationService.initFloatingObjects("contactShapes", messageElements, 10)
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false
        this.contactForm.reset()
        alert("Message sent successfully!")
      }, 2000)
    }
  }
}
