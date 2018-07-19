import { Injectable } from '@angular/core';


@Injectable()
export class TareaProvider {
  
  tareas = [];
  tareasArchivadas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  
  obtenerTareas(){
    return this.tareas;
  }
  agregarTarea(tarea:string){
    this.tareas.push(tarea);
  }

  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }
  archivarTarea(indiceTarea){
    const tarea = this.tareas[indiceTarea];
    this.tareasArchivadas.push(tarea);
    this.tareas.splice(indiceTarea,1);
  }

  editarTarea(indiceTarea, nuevaTarea){
    this.tareas[indiceTarea]= nuevaTarea;
  }

}
