import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment';

declare const bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  emailAddress = environment.emailAddress;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      this.closeMobileMenu();
    }
  }

  openEmail(): void {
    window.location.href = `mailto:${this.emailAddress}`;
    this.closeMobileMenu();
  }

  private closeMobileMenu(): void {
    const navbarCollapse = document.getElementById('navbarNav');

    if (navbarCollapse?.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
      bsCollapse.hide();
    }
  }
}
