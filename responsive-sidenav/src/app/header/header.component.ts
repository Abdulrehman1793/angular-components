import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchOverlay = false;
  selectedLanguage: any;

  languages = languages;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchOverlay = true;
    } else {
      this.canShowSearchOverlay = false;
    }
  }
}
