import {Routes} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';

export const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
