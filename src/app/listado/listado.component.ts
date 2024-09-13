import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FileItem, FileType } from '../../models/file.item.model';
import { FormComponent } from "../form/form.component";
import { ArchivosComponent } from "../archivos/archivos.component";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, FormComponent, ArchivosComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit{
  fileList = FILE_LIST;
  fileTypes = FileType;
  texto: string = "Acciones";
  archivosEnCarpeta = false;
  idMandado?: string;
  carpetaNueva?: FileItem;

  ngOnInit() {
    console.log(this.datos);
    if (this.datos) {
      this.carpetaNueva = this.datos;
      this.cargarCarpeta();
      console.log('carpeta' + this.carpetaNueva.name)
    } else {
      console.error('datos es undefined');
    }
  }

  @Output() mandarId = new EventEmitter<string>();

  @Output() selected = new EventEmitter<Output>();

  @Input() datos?: FileItem;
  
  formulario() {
    this.selected.emit();
  }

  verArchivos(event: MouseEvent, item: any) {
    event.preventDefault();
    this.archivosEnCarpeta = true;
    this.idMandado = item.id;
    this.mandarId.emit(this.idMandado)
  }

  cargarCarpeta() {
    if (this.carpetaNueva) {
      this.fileList.push(this.carpetaNueva);
    } else {
      console.error('carpetaNueva es undefined');
    }
  }
}
