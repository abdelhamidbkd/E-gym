import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sport } from '../../models/Sport';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SportService {
  private apiUrl='http://localhost:8080/Sport'

  constructor(private http: HttpClient) {}

  
  addSport(sport:Sport):Observable<any>{
    
    return this.http.post<any>(this.apiUrl+"/add",sport)
  }

  updateSport(sport:Sport):Observable<any>{
    return this.http.put<any>(this.apiUrl+"/update",sport)
  }

  getAllsports():Observable<Sport[]>{
    
    return this.http.get<Sport[]>(this.apiUrl)
  }

  deleteSport(id):Observable<any>{
    
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }

  getSportByName(name):Observable<Sport>{
    
    return this.http.get<Sport>(this.apiUrl+"/SportName/"+name)
  }

  getSportById(id):Observable<Sport>{
    
    return this.http.get<Sport>(this.apiUrl+"/"+id)
  }
}
