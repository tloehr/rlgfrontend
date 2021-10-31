import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageRequested = 'welcome';

  constructor() {
  }

  ngOnInit(): void {
  }

  onPageChange(page: string): void {
    this.pageRequested = page;
  }
}
