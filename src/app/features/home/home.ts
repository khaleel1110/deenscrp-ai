import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface FeatureCard {
  title: string;
  description: string;
  delay: number;
  svgPath: string;
}

export interface WorkCategory {
  title: string;
  aos?: string;
  delay?: number;
}
export interface ServiceCard {
  title: string;
  description: string;
  animation: string;
  delay: number;
  offset?: number;
  duration?: number;
  easing?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  animation: string;
}

@Component({
  selector: 'app-home',
  imports: [],
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

  FEATURE_CARDS: FeatureCard[] = [
    {
      title: 'Structured Engagements',
      description:
        'Clear discovery, defined scope, coordinated team assembly, delivery oversight, and reporting ensure predictable outcomes.',
      delay: 0,
      svgPath:
        'M11.6667 26.9091L5 20.1818L7.35 17.8105L11.6667 22.1495L22.65 11.0664L25 13.4545M15 0L0 6.72727V16.8182C0 26.1523 6.4 34.8809 15 37C23.6 34.8809 30 26.1523 30 16.8182V6.72727L15 0Z',
    },
    {
      title: 'Secure & Compliant Delivery',
      description:
        'All engagements follow GDPR-aligned processes, secure delivery practices, and contract-led frameworks.',
      delay: 150,
      svgPath:
        'M11.6667 26.9091L5 20.1818L7.35 17.8105L11.6667 22.1495L22.65 11.0664L25 13.4545M15 0L0 6.72727V16.8182C0 26.1523 6.4 34.8809 15 37C23.6 34.8809 30 26.1523 30 16.8182V6.72727L15 0Z',
    },
    {
      title: 'Partner-Based Model',
      description:
        'We work with vetted global experts, academic partners, and innovation ecosystems under a structured delivery model.',
      delay: 300,
      svgPath:
        'M11.6667 26.9091L5 20.1818L7.35 17.8105L11.6667 22.1495L22.65 11.0664L25 13.4545M15 0L0 6.72727V16.8182C0 26.1523 6.4 34.8809 15 37C23.6 34.8809 30 26.1523 30 16.8182V6.72727L15 0Z',
    },
    {
      title: 'Scalable Global Reach',
      description:
        'Multi-region delivery capability supported by managed teams and local partners.',
      delay: 450,
      svgPath:
        'M11.6667 26.9091L5 20.1818L7.35 17.8105L11.6667 22.1495L22.65 11.0664L25 13.4545M15 0L0 6.72727V16.8182C0 26.1523 6.4 34.8809 15 37C23.6 34.8809 30 26.1523 30 16.8182V6.72727L15 0Z',
    },
  ];

  SERVICE_CARDS: ServiceCard[] = [
    {
      title: 'AI & Data Solutions',
      description:
        'We design and deploy AI, machine learning, and data solutions that automate processes, improve decision-making, and deliver measurable business value through secure, scalable, enterprise-ready architectures.',
      animation: 'fade-right',
      delay: 0,
      offset: 300,
      easing: 'ease-in-sine',
    },
    {
      title: 'Digital Transformation',
      description:
        'We help organisations modernise systems and processes through technology-led transformation, improving efficiency, agility, and service delivery aligned with strategic business objectives.',
      animation: 'fade-down',
      delay: 150,
      duration: 500,
      easing: 'linear',
    },
    {
      title: 'Quality Assurance & Testing',
      description:
        'We deliver comprehensive testing services covering functionality, performance, security, and compliance, ensuring digital products meet enterprise standards before deployment.',
      animation: 'fade-left',
      delay: 300,
      offset: 500,
      duration: 500,
    },
    {
      title: 'Managed Global Teams',
      description:
        'We build secure, scalable software across web, mobile, and cloud platforms, delivering robust systems designed for performance, integration, and long-term operational reliability.',
      animation: 'fade-right',
      delay: 450,
      offset: 300,
      easing: 'ease-in-sine',
    },
    {
      title: 'Software Engineering',
      description:
        'We build secure, scalable software across web, mobile, and cloud platforms, delivering robust systems designed for performance, integration, and long-term operational reliability.',
      animation: 'fade-up',
      delay: 600,
      duration: 500,
    },
    {
      title: 'Consulting & Delivery Oversight',
      description:
        'We provide strategic consulting and delivery governance, supporting project planning, execution, risk management, and performance monitoring to ensure successful, outcome-focused delivery.',
      animation: 'fade-left',
      delay: 300,
      offset: 300,
      duration: 500,
    },
  ];

  PROCESS_STEPS: ProcessStep[] = [
    {
      step: 1,
      title: 'Discovery & Alignment',
      description:
        'Clarify project objectives, align stakeholders, and define success criteria before delivery begins.',
      animation: 'zoom-in-right',
    },
    {
      step: 2,
      title: 'Scope Definition & Planning',
      description:
        'Define project scope, deliverables, timelines, governance, and milestones to ensure controlled execution.',
      animation: 'zoom-in-down',
    },
    {
      step: 3,
      title: 'Team Assembly',
      description:
        'Assemble vetted experts and partners aligned to project requirements, delivery objectives, and timelines.',
      animation: 'zoom-in-left',
    },
    {
      step: 4,
      title: 'Execution & Delivery',
      description:
        'Deliver work against agreed milestones with structured coordination, quality control, and active oversight.',
      animation: 'zoom-in-right',
    },
    {
      step: 5,
      title: 'Review & Optimisation',
      description:
        'Review deliverables, refine outputs, and ensure quality, performance, and stakeholder alignment.',
      animation: 'zoom-in-up',
    },
    {
      step: 6,
      title: 'Reporting & Close-Out',
      description:
        'Provide structured reporting, knowledge transfer, and formal close-out aligned with contractual obligations.',
      animation: 'zoom-in-left',
    },
  ];



  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768; // sm and below
    this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // md
    this.isDesktop = window.innerWidth >= 1024; // lg and above
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
