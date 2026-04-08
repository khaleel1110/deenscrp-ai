import { AfterViewInit, Component, signal } from '@angular/core';
import AOS from 'aos';
import { Layout } from './core/layout/layout';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`,
  styleUrl: './app.scss',
  imports: [Layout],
})
export class App implements AfterViewInit {
  protected readonly title = signal('deenscrp-ai');

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
      offset: 50,
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }
}
