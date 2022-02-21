import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map, Observable } from 'rxjs';
import { UserInterface } from 'src/app/users-list/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  loginSearchKey = new BehaviorSubject<string>('');

  getUsers(searchKey:string):Observable<UserInterface[]> {
      return this.http.get<UserInterface[]>(`https://api.github.com/search/users?q=${searchKey} in:login`).pipe(
        map((results: any) => {
          return results.items;
        })
      );
  }




}
