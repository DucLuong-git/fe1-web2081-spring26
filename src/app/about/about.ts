import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Bắt buộc phải import RouterLink
  template: `
    <h1>Angular Routing Demo</h1>
    
    <nav>
      <ul style="display: flex; gap: 15px; list-style: none; padding: 0;">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/products">Products</a></li>
        <li><a routerLink="/stories">stories</a></li>
      </ul>
    </nav>
    <hr>
    
    <router-outlet></router-outlet>
  `
})
export class About {
  title = 'my-app';
  fullname='Duc Luong'
  age='20'
  sayhello(){
    alert('xin chao')
  }
}
