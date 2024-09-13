import { Component, EventEmitter, Output } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FileType } from '../../models/file.item.model';
import { FormComponent } from "../form/form.component";
import { ArchivosComponent } from "../archivos/archivos.component";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, FormComponent, ArchivosComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  fileList = FILE_LIST;
  fileTypes = FileType;
  texto: string = "Acciones";
  archivosEnCarpeta = false;
  idMandado?: string;
  @Output() mandarId = new EventEmitter<string>();

  @Output() selected = new EventEmitter<Output>();
  
  formulario() {
    this.selected.emit();
  }

  verArchivos(event: MouseEvent, item: any) {
    event.preventDefault();
    this.archivosEnCarpeta = true;
    this.idMandado = item.id;
    this.mandarId.emit(this.idMandado)
  }
}
