import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'creditcardadmin';
  sidebarOpen = true;

  toggleSidebar(){
    this.sidebarOpen = this.sidebarOpen? false : true;
  }
}
