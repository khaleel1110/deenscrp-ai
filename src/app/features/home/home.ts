import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface WorkCategory {
  title: string;
  aos?: string;
  delay?: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  env = environment;
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  workCategories: WorkCategory[] = [
    { title: 'Large Enterprises', aos: 'fade-down', delay: 100 },
    { title: 'Technology Platforms', aos: 'fade-down', delay: 50 },
    { title: 'Public Organisations', aos: '', delay: 200 },
    { title: 'Universities', aos: 'fade-up', delay: 50 },
    { title: 'Innovation Hubs', aos: 'fade-up', delay: 100 },
  ];

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;      // sm and below
    this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // md
    this.isDesktop = window.innerWidth >= 1024;    // lg and above
  }

  // Enable AOS only on desktop (lg and above)
  shouldEnableAOS(): boolean {
    return this.isDesktop;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
