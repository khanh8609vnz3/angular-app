import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {appRoutes} from './app.router';
import {AppComponent} from './app.component';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {HomeService} from './pages/home/home.service';
import {MenuBarComponent} from './components/layout/menu-bar/menu-bar.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent, MenuBarComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
