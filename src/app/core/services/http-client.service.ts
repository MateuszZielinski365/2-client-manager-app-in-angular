import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private http: HttpClient) { }


  private url = 'https://reqres.in/api/users';

  getUsers(page: number) {
    return this.http.get(this.url + '?page=' + page)
      .pipe(tap(console.log));
  }

  postUser(user: User): Observable<User> {
    return this.http.post(this.url, user)
      .pipe(tap(console.log));
  }

  deleteUser(id: string): Observable<{}> {
    return this.http.delete<{}>(this.url + '/' + id)
      .pipe(tap(console.log));
  }

}





