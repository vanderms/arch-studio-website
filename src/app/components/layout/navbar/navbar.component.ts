import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

function getPage(url: string): string {
  switch (url) {
    case '/about':
      return 'ABOUT';
    case '/portfolio':
      return 'PORTFOLIO';
    case '/contact':
      return 'CONTACT';
  }
  return 'HOME';
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  sidebarOpen: boolean = false;
  navbarFixed: boolean = false;
  page: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.sidebarOpen = false;
      this.page = getPage(this.router.url);
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  @HostListener('window:scroll', ['$event.target'])
  onScroll(html: Document) {
    let scroll: number = html.scrollingElement?.scrollTop ?? 0;
    this.navbarFixed = scroll > 156;
  }
}
