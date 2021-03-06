import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  

  constructor(private http: HttpClient) { }


  getNominados(){
    
    return this.http.get<Game[]>(`${ environment.url }/api/goty`);    

  }

  votarJuego(id: string){

    return this.http.post(`${ environment.url }/api/goty/${id}`, {})
      .pipe(
        catchError( err =>{               
          return of(err.error);
        }));

  }

}
