import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    {_id: '1', name: 'angular', categoria: 'front-end'}
  ];
  displayedColumns = ['name', 'categoria'];

  constructor() {
    //  this.cursos = [];
  }

  ngOnInit(): void {
  }

}
