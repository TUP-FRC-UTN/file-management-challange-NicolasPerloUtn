import { Component } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  fileList = FILE_LIST;
  fileTypes = FileType;
  texto: string = "Acciones";
}
