import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/ContactComponent';
import { Products } from './pages/products/ProductsComponent';
import { Stories } from './pages/stories/StoriesComponent';
import { AddStory } from './pages/add-story/add-story';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }, 
  { path: 'products', component: Products },
  { path: 'stories', component: Stories },
  { path: 'AddStory', component: AddStory },
];