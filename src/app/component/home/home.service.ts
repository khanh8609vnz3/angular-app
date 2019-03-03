import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Subscriber } from "rxjs/Subscriber";
import { tap, map, filter, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomeService {
  listData: any[];
  apiUrl: "https://jsonplaceholder.typicode.com/todos/";

  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<any[]> {
    return this.http
      .get<any[]>("https://jsonplaceholder.typicode.com/todos/")
      .pipe(
        tap(responseData => {
          of(responseData);
        }),
        catchError(error => of([]))
      );
  }
}
