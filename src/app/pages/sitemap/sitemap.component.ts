import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  keydownFunction(event: { key: string; }, target: string) {
    if (event.key === 'Enter') {
      this.navigationLinks(target);
    }
  }
  navigationLinks(target: string) {
    switch(target) {

      case target = 'dashboard': {
        this.router.navigate(['/dashboard']);
        break;
      }

      case target = 'pageOne': {
        this.router.navigate(['/page-one']);
        break;
      }

      case target = 'pageTwo': {
        this.router.navigate(['/page-two']);
        break;
      }

      case target = 'settings': {
        this.router.navigate(['/settings']);
        break;
      }

    }
  }

}
