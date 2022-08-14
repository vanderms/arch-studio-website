import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { HeroSectionComponent } from './components/sections/hero-section/hero-section.component';
import { WelcomeSectionComponent } from './components/sections/welcome-section/welcome-section.component';
import { TeamSectionComponent } from './components/sections/team-section/team-section.component';
import { FeaturedSectionComponent } from './components/sections/featured-section/featured-section.component';
import { PortfolioSectionComponent } from './components/sections/portfolio-section/portfolio-section.component';
import { AboutCoverSectionComponent } from './components/sections/about-cover-section/about-cover-section.component';
import { CoverSectionComponent } from './components/sections/cover-section/cover-section.component';
import { HeritageSectionComponent } from './components/sections/heritage-section/heritage-section.component';
import { LeadersSectionComponent } from './components/sections/leaders-section/leaders-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PortfolioPageComponent,
    HeroSectionComponent,
    WelcomeSectionComponent,
    TeamSectionComponent,
    FeaturedSectionComponent,
    PortfolioSectionComponent,
    AboutCoverSectionComponent,
    CoverSectionComponent,
    HeritageSectionComponent,
    LeadersSectionComponent,   
  ],
  imports: [BrowserModule, AppRoutingModule, HammerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
