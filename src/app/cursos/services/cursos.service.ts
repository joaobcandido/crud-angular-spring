import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  list (){
    return[
      {_id: '1', name: 'angular', categoria: 'front-end'}
    ]
  }
  constructor(private httpcliente: HttpClient) {}
}
