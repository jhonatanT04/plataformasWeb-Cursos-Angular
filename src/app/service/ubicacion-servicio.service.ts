import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionServicioService {

  private apiUrl = 'https://api.ipstack.com/';

  constructor(private http: HttpClient) { }

  getIpInfo(ip: string): Observable<any> {

    const url = `${this.apiUrl}${ip}?access_key=ec925514259e42490d7625dfce56093f`;//
    return this.http.get(url);

  }
}
