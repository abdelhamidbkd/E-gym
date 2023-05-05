import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../models/Article';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  utc = new Date().toJSON().slice(0,10);

  private apiUrl='http://localhost:8080/Article'

  constructor(private http:HttpClient) { }
  addArticle(article:Article):Observable<any>{
    article.articleDate=this.utc;
    return this.http.post<any>(this.apiUrl+"/add",article)
  }


  getAllArticlesByCoachId(id):Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl+"/coachId/"+id)
  }
  deleteArticle(id):Observable<any>{
    
    return this.http.delete<any>(this.apiUrl+"/delete/"+id)
  }

}
