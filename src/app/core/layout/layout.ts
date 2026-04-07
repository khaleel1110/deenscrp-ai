import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, Footer],
  template: `
    <main class="main" id="top">
      <div class="content">
        <app-header></app-header>
        <div style="min-height: 100vh" class="bg-dark2">
          <router-outlet></router-outlet>
        </div>
     <!--   <app-footer></app-footer>-->
      </div>
    </main>
  `,
  styles: ``,
})
export class Layout implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

