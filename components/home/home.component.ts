import { Component, type OnInit, type AfterViewInit } from "@angular/core"
import type { AnimationService } from "../../services/animation.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const codeElements = [
      'const developer = "passionate";',
      "function createAmazingThings() {",
      "return innovation + creativity;",
      "// Building the future",
      "let dreams = reality;",
      "export default excellence;",
    ]
    this.animationService.initFloatingObjects("homeCodeContainer", codeElements, 15)
  }
}
