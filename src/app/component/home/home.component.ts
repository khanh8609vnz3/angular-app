import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  listData: any;
  email: "aaaa";

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.homeService.getDataFromApi().subscribe(newData => {
      this.listData = newData;
    });

    // this.listData = this.homeService.getData();
  }

  onSubmit(form) {
    console.log(form);
  }
}
