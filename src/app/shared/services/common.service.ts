import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from '../urls';

@Injectable()
export class CommonService {
  constructor(private httpClient: HttpClient) {}

  getAutoCompleteSuggestion(q: string = null): Observable<any> {
    const required_params = new HttpParams().set('q', q);
    const required_headers = new HttpHeaders()
      .append(
        'X-RapidAPI-Key',
        '61871d33b3msh60541e4026ab9b8p121b5ajsn7e748fa3e5d0'
      )
      .append('X-RapidAPI-Host', 'imdb8.p.rapidapi.com');
    return this.httpClient.get<any>(Urls.search_url, {
      headers: required_headers,
      params: required_params,
    });
  }
}
