import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Coach } from '../../models/Coach'; 
import { Observable, throwError } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class CoachService {


  private apiUrl='http://localhost:8080/Coach'

  constructor(private http: HttpClient) {}

  loginCoach(coach):Observable<any>{
    
    return this.http.post<any>(this.apiUrl+"/login",coach)
  }

  addCoach(coach:Coach):Observable<any>{
    
    return this.http.post<any>(this.apiUrl+"/add",coach)
  }

  updateCoach(coach:Coach):Observable<any>{
    
    return this.http.put<any>(this.apiUrl+"/update",coach)
  }

  getAllCoachs():Observable<Coach[]>{
    
    return this.http.get<Coach[]>(this.apiUrl)
  }

  deleteCoach(id):Observable<any>{
    
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }

  getCoachByCode(code):Observable<Coach>{
    
    return this.http.get<Coach>(this.apiUrl+"/code/"+code)
  }

  getCoachById(id):Observable<Coach>{
    
    return this.http.get<Coach>(this.apiUrl+"/"+id)
  }


    
}