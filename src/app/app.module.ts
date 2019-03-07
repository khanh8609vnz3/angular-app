import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { appRoutes } from "./app.router";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./component/about/about.component";
import { HomeComponent } from "./component/home/home.component";
import { HomeService } from "./component/home/home.service";

@NgModule({
  declarations: [AppComponent, AboutComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
