import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_BASE;
  constructor(private http: HttpClient) {
    this.API_BASE = 'https://reqres.in/api/users';
   }

  getUsers(page: number) {
    return this.http.get(`${this.API_BASE}?page=${page}`).pipe(
      map((response: any) => response.data)
    );
  }

  getUserById(id: number) {
    return this.http.get(`${this.API_BASE}/${id}`).pipe(
      map((response: any) => response.data)
    );
  }
}
