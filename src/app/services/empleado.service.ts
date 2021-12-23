import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {nombreCompleto: 'Luis Martines', telefono: '88882233', correo: 'luis@correo.com', fechaIngreso: new Date(), sexo: 'Masculino', estadoCivil: 'Soltero'},

    {nombreCompleto: 'Maria Gimenes', telefono: '88882255', correo: 'maria@correo.com', fechaIngreso: new Date(), sexo: 'Femenino', estadoCivil: 'Soltero'},

    {nombreCompleto: 'Karla Flores', telefono: '88887733', correo: 'karla@correo.com', fechaIngreso: new Date(), sexo: 'Femenino', estadoCivil: 'Soltero'},

    {nombreCompleto: 'Juan Ortiz', telefono: '99882233', correo: 'juan@correo.com', fechaIngreso: new Date(), sexo: 'Masculino', estadoCivil: 'Soltero'}
  ];
  

  constructor() { }



  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number){
    this.listEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number){
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto,
    this.listEmpleado[idEmpleado].correo = empleado.correo,
    this.listEmpleado[idEmpleado].telefono = empleado.telefono,
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso,
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil,
    this.listEmpleado[idEmpleado].sexo = empleado.sexo
  }
}
