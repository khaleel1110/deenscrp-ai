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

  workCategories: WorkCategory[] = [
    { title: 'Large Enterprises', aos: 'fade-right', delay: 100 },
    { title: 'Technology Platforms', aos: 'fade-right', delay: 50 },
    { title: 'Public Organisations', aos: '', delay: 200 },
    { title: 'Universities', aos: 'fade-left', delay: 50 },
    { title: 'Innovation Hubs', aos: 'fade-left', delay: 100 },
  ];

  ngOnInit(): void {
    this.checkScreenSize();
    this.updateWorkCategoriesForScreen();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
    this.updateWorkCategoriesForScreen();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768; // Mobile devices under 768px
  }

  updateWorkCategoriesForScreen(): void {
    this.workCategories = [
      {
        title: 'Large Enterprises',
        aos: this.isMobile ? undefined : 'fade-right',
        delay: this.isMobile ? undefined : 100,
      },
      {
        title: 'Technology Platforms',
        aos: this.isMobile ? undefined : 'fade-right',
        delay: this.isMobile ? undefined : 50,
      },
      {
        title: 'Public Organisations',
        aos: this.isMobile ? undefined : '',
        delay: this.isMobile ? undefined : 200,
      },
      {
        title: 'Universities',
        aos: this.isMobile ? undefined : 'fade-left',
        delay: this.isMobile ? undefined : 50,
      },
      {
        title: 'Innovation Hubs',
        aos: this.isMobile ? undefined : 'fade-left',
        delay: this.isMobile ? undefined : 100,
      },
    ];
  }

  // Helper method to conditionally add AOS attributes
  shouldAnimate(): boolean {
    return !this.isMobile;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
