import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [`
    h3 {
      color: darkblue;
    }
  `]
})
export class AppComponent {
  servers = [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoverServer(id: number) {
    const postition = id + 1;
    this.servers.splice(postition, 1);
  } 
}
