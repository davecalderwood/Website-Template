import { Component, OnInit } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('out', style({
        overflow: 'hidden',
        height: '100%',
        width: '235px',
        background: 'lightgray'
      })),
      state('in', style({
        overflow: 'hidden',
        height: '100%',
        width: '65px',
        background: 'lightgray'
      })),
    ]
    )
  ]
})
export class LeftNavComponent implements OnInit {
  menuOpen = 'in';
  bodyOpen: boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.menuOpen = this.menuOpen === 'out' ? 'in' : 'out';
    this.toggleBodyOpen();
  }
  toggleBodyOpen() {
    this.bodyOpen = !this.bodyOpen;
  }

  keydownFunction(event: { key: string; }, target: string) {
    if (event.key === 'Enter') {
      this.navigationLinks(target);
    }
  }
  navigationLinks(target: string) {
    switch(target) {

      case target = 'pageOne': {
        this.router.navigate(['/page-one']);
        break;
      }

      case target = 'pageTwo': {
        this.router.navigate(['/page-two']);
        break;
      }

    }
  }

}
