import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from '../models/Subscription';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private apiUrl='http://192.168.112:8080/Subscription'

  constructor(private http: HttpClient) {}

  getAllSubs():Observable<Subscription[]>{
    return this.http.get<Subscription[]>(this.apiUrl);
  }


  getSubByName(name):Observable<Subscription>{
    return this.http.get<Subscription>(this.apiUrl+'/SubName/'+name);
  }

  getSubById(id):Observable<Subscription>{
    return this.http.get<Subscription>(this.apiUrl+'/'+id);
  }

  /*loginDoctorant(doc:doctorant):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/login",doc)
  }

  getDoctrantBycin(cin):Observable<doctorant[]>{
    return this.http.get<doctorant[]>(this.apiUrl+'/cin/'+cin);
  }

  getDoctrantBycin2(cin):Observable<doctorant>{
    return this.http.get<doctorant>(this.apiUrl+'/cin/'+cin);
  }

  getAllDoctrant():Observable<doctorant[]>{
    return this.http.get<doctorant[]>(this.apiUrl);
  }

  updateDoctorant(doc:doctorant):Observable<any>{
    return this.http.put<any>(this.apiUrl+"/update",doc)
  }
  deleteDoctorant(id):Observable<any>{
    return this.http.delete<any>(this.apiUrl+'/delete/'+id);
  }

 addDoctorant(doc:doctorant):Observable<any>{
doc.anneeInscriptiondate=this.utc;

    return this.http.post<any>(this.apiUrl+"/add",doc)
  }*/



}
