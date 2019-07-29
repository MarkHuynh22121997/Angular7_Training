import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import {catchError, retry} from 'rxjs/operators'; 
import { Card } from './models/card.model';
import { subList } from './trello-board/trello-board.component';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  key: string = "a8bd923a304c79d70a1d762078000ef3"
  token: string = "4d8f1fd8ef82322970af2da3c0436b7a7f72400e107f640181f53a2574001987"
  isListNeedUpdate: Observable<boolean> 
  private boolSubject: Subject<boolean>;
  params: HttpParams
  constructor(private http: HttpClient) { 
     this.params = new HttpParams();
     this.params = this.params.append('key', this.key)
     this.params = this.params.append('token', this.token)
    this.boolSubject = new Subject<boolean>();
    this.isListNeedUpdate = this.boolSubject.asObservable();
  }
  ngOnInit(){
    
  }
  public getSubList(){
    return (this.http.get("https://api.trello.com/1/boards/quT8b7JU?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&" , {params:this.params} ))
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
 
  }
 
     httpOption = {
      params: this.params
    }
  public getCard(id:string){
    return (this.http.get("https://api.trello.com/1/lists/" + id + "/cards",{params: this.params}))
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  public addCard(card: Card){
      return this.http.post<Card>("https://api.trello.com/1/cards", card, {params:this.params}).pipe(
        catchError(this.handleError)
      );;
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured: ', error.error.message);
    }else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`); 
    }
    return throwError('Error:' + error.error.message);
  }
}

