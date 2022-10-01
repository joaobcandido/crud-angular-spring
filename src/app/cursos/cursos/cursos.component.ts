import { CursosService } from './../services/cursos.service';
import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];


  displayedColumns = ['name', 'categoria'];
  // cursosService: CursosService;
  constructor(private cursosService: CursosService) {
      this.cursos = [];
      // this.cursosService = new CursosService ();
      this.cursos = this.cursosService.list();
  }

  ngOnInit(): void {
  }

}
