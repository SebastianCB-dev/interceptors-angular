import { Injectable } from '@angular/core';
import { HttpClient, 
         HttpParams, 
         HttpHeaders, 
         HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let params = new HttpParams().append('page', '2')
    params = params.append('name', 'sebastian');
    
    return this.http.get(`https://reqres123.in/api/users`, {
      params
    }).pipe(
      map((resp: any) => resp['data']),

    );
  }
 
}
