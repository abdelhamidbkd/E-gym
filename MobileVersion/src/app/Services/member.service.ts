import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Member } from '../models/Member'; 
import { Observable, throwError } from 'rxjs';
 import { catchError, map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl='http://192.168.112:8080/Member'


  constructor(private http: HttpClient) {}

  addMember(member:Member):Observable<any>{
    
        return this.http.post<any>(this.apiUrl+"/add",member)
      }

     UpdateMember(member:Member):Observable<any>{
    
        return this.http.put<any>(this.apiUrl+"/update",member)
      }

      loginMember(member):Observable<any>{
    
        return this.http.post<any>(this.apiUrl+"/login",member)
      }


      getMemberByMemberCode(code):Observable<Member>{
    
        return this.http.get<Member>(this.apiUrl+"/code/"+code)
      }
}
