import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  habilitarOrdenamiento = false;
  irPagina= TareasArchivadasPage;
  constructor(
    public navCtrl: NavController,
    private alertController: AlertController,
    private servicioTareas: TareaProvider
  ) {
    this.tareas = this.servicioTareas.obtenerTareas();
  }

  agregarTarea(){
    const alerta = this.alertController.create({
      title: 'Agregar tarea',
      inputs: [
        {
          name: 'tareaInput',
          placeholder: 'ingrese la tarea...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Agregar',
          handler: datos => {
            this.servicioTareas.agregarTarea(datos.tareaInput);
            // this.tareas.push(datos.tareaInput);
            console.log(this.tareas);
          }
        }
      ]
    });
    alerta.present();
  }

  toggleOrdenamiento(){
    this.habilitarOrdenamiento = !this.habilitarOrdenamiento;
  }

  ordenarArray(evento){
    reorderArray(this.tareas, evento);
    console.log(evento);
  }

  irPaginaTareasArchivadas(){
    this.navCtrl.push(TareasArchivadasPage);
  }

  archivarTarea(indiceTarea){
    this.servicioTareas.archivarTarea(indiceTarea);
  }

  editarTarea(indiceTarea){
    let alerta = this.alertController.create({
      title: "Editar tarea",
      message: "Por favor ingrese la nueva tarea",
      inputs:[
        {
          name: "editarTareaInput",
          value: this.tareas[indiceTarea]
        }
      ],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Listo",
          handler: data => {
            this.servicioTareas.editarTarea(indiceTarea,data.editarTareaInput);
          }
        }
      ]
    });
    alerta.present();
  }

}
