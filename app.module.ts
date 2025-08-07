import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./components/header/header.component"
import { HomeComponent } from "./components/home/home.component"
import { AboutComponent } from "./components/about/about.component"
import { ServicesComponent } from "./components/services/services.component"
import { PortfolioComponent } from "./components/portfolio/portfolio.component"
import { ExperienceComponent } from "./components/experience/experience.component"
import { BlogComponent } from "./components/blog/blog.component"
import { ContactComponent } from "./components/contact/contact.component"
import { FooterComponent } from "./components/footer/footer.component"

import { ThemeService } from "./services/theme.service"
import { NavigationService } from "./services/navigation.service"
import { AnimationService } from "./services/animation.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ExperienceComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ThemeService, NavigationService, AnimationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
