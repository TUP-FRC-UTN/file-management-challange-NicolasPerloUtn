import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FileType } from '../../models/file.item.model';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-archivos',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './archivos.component.html',
  styleUrl: './archivos.component.css'
})
export class ArchivosComponent {
  fileList = FILE_LIST;
  fileTypes = FileType;
  texto: string = "Acciones";
  idPariente?: string;

  @Input() recibido?: string;

  constructor() {
    console.log('recibido: ' + this.recibido)
  }



}
