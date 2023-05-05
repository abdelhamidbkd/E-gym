import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../../models/Room';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl='http://localhost:8080/Room'

  constructor(private http: HttpClient) {}

  
  addRoom(room:Room):Observable<any>{
    
    return this.http.post<any>(this.apiUrl+"/add",room)
  }

  updateRoom(room:Room):Observable<any>{
    
    return this.http.put<any>(this.apiUrl+"/update",room)
  }

  getAllRooms():Observable<Room[]>{
    
    return this.http.get<Room[]>(this.apiUrl)
  }

  getRoomById(id):Observable<Room>{
    
    return this.http.get<Room>(this.apiUrl+"/"+id)
  }

  getRoomByName(name):Observable<Room>{
    
    return this.http.get<Room>(this.apiUrl+"/name/"+name)
  }

  deleteRoom(id):Observable<any>{
    
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }

}
