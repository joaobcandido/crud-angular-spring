import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$:  Observable <Curso[]>;


  displayedColumns = ['_id','name', 'categoria'];
  // cursosService: CursosService;
  constructor(
    private cursosService: CursosService,
     public dialog: MatDialog) {

       this.cursos$ = this.cursosService.list().pipe(
        catchError(error =>{

          this.xerror('erro ao carregar dados');
          return of([])
        })
       );
  }
  xerror(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {
  }

}
