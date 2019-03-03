import {Routes} from '@angular/router';
import {AboutComponent} from './component/about/about.component';
import {HomeComponent} from './component/home/home.component';

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
