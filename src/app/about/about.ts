import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  title = 'my-app';
  fullname='Duc Luong'
  age='20'
  sayhello(){
    alert('xin chao')
  }
}
