import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FAQSectionComponent } from './faqsection/faqsection.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TechStackSectionComponent } from './tech-stack-section/tech-stack-section.component';
import { NewsLetterSectionComponent } from './news-letter-section/news-letter-section.component';
import { WaitlistSectionComponent } from './waitlist-section/waitlist-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FAQSectionComponent,
    AboutSectionComponent,
    TechStackSectionComponent,
    NewsLetterSectionComponent,
    WaitlistSectionComponent,
    HeroSectionComponent,
    NavbarSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
