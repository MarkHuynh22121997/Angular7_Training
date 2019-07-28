import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  key: string = "key=a8bd923a304c79d70a1d762078000ef3&token=4d8f1fd8ef82322970af2da3c0436b7a7f72400e107f640181f53a2574001987"
  constructor(private http: HttpClient) { }
  public getSubList(){
    return (this.http.get("https://api.trello.com/1/boards/quT8b7JU?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&" + this.key ));
  }

  public getListItemDetail(id:string){
    return (this.http.get("https://api.trello.com/1/lists/" + id + "/cards?" + this.key));
  }
}
