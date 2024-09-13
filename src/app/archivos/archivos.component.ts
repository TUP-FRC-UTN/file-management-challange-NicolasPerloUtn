import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FileItem, FileType } from '../../models/file.item.model';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-archivos',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './archivos.component.html',
  styleUrl: './archivos.component.css'
})
export class ArchivosComponent implements OnInit{
  fileList = FILE_LIST;
  fileTypes = FileType;
  texto: string = "Acciones";
  idPariente?: string;
  listaNueva: FileItem[] = [];

  @Input() recibido?: string;
  idNuevo?: string;

  ngOnInit() {
    this.idNuevo = this.recibido;
    console.log(this.idNuevo);
    this.archivosDeCarpeta();
  }

  archivosDeCarpeta() {
    this.listaNueva = [];
    for (let i = 0; i < this.fileList.length; i++) {
      if (this.fileList[i].parentId == this.idNuevo) {
        this.listaNueva.push(this.fileList[i])
      }
    }
    console.log(this.listaNueva)
  }


}
