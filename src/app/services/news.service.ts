import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
   all = '',
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'https://newsapi.org/v2/top-headlines?country=fr';
  apiKey = '4e75f12cff6b493d90eaa616c7614eae';


  constructor(private http: HttpClient) { }
  searchData(title: string): Observable<any> {
    return this.http.get(`${this.url}&q=${encodeURI(title)}&apiKey=${this.apiKey}`)
    .pipe(
      map(results => {
        console.log('BRUTE: ', results);
        return results['articles'];
      })
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?sources=$id&apiKey=${this.apiKey}`);
  }

}

