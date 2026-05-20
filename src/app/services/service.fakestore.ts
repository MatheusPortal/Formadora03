import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ServiceFakestore {
  private fakeUrlApi: string = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {}

  getFakeStore(): Observable<any> {
    return this.http.get<any>(this.fakeUrlApi);
  }
  
}
