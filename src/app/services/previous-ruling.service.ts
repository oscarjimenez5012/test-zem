import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PreviousRulingService {

  constructor(private http: HttpClient) { }

  public getPreviousRullings() {
    return this.http.get('../../../assets/mock/previous-rulings.json');
  }
}
