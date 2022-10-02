import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Curso } from '../model/curso';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly API = '/assets/cursos.json';

  list (){
    return this.httpcliente.get<Curso[]>(this.API).pipe(
      first(),
       delay(5000)
    )


  }
  constructor(private httpcliente: HttpClient) {}
}
