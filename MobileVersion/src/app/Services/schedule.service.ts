import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/Schedule';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl='http://192.168.112:8080/Schedule'

  constructor(private http: HttpClient) {}

  addSession(session:Schedule):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/add",session)
  }

  deleteold():Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/deleteold/")
  }

  deleteById(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }

  getAllSchedulesByCoachId(id):Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.apiUrl+'/CoachID/'+id);
  }

  getAllSchedulesByDay(day):Observable<Schedule[]>{
    return this.http.get<Schedule[]>(this.apiUrl+'/day/'+day);
  }

}
