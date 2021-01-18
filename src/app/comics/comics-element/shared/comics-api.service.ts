import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService  {
  PUBLIC_KEY = 'acbf4dbbcf80e7d68391ee5b05379771';
  HASH = '6692EC9A8461802C7E79B11A66D5CF81';
  URL_API = `https://gateway.marvel.com:443/v1/public/comics?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
