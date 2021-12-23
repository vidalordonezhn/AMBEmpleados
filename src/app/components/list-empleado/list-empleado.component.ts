import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})

export class ListEmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleados: Empleado[] = [];
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _empleadoService: EmpleadoService, public dialog: MatDialog,
    public snackBar: MatSnackBar) {
  }

  

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

  }

  cargarEmpleados(){
    this.listEmpleados = this._empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Esta seguro que desea eliminar al empleado'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'aceptar'){
        this._empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this.snackBar.open('El empleado fue eliminado con exito', '',{duration:3000})
      }
    });
  }
}