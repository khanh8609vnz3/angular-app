import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Subscriber } from "rxjs/Subscriber";
import { tap, map, filter, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  listData: any[] = [];
  apiUrl: string = "https://jsonplaceholder.typicode.com/todos/";

  getDataFromApi(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((response: any) => {
        return response;
      })
    );
  }

  getData() {
    return this.http
      .get(this.apiUrl)
      .toPromise()
      .then(response => {
        console.log("aaaaaa");
        return response;
      })
      .then(response => {
        console.log("bbbbb");
      });
  }
}
