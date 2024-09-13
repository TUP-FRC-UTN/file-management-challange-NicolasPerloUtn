import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileType } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  carpetas = FILE_LIST;
  fileTypes = FileType;
  owners = OWNERS;

  @Output() onSave = new EventEmitter<FileItem>();

  archivo: FileItem = {
    id: "",
    name: "",
    creation: new Date(),
    owners: [],
    type: 0,
    parentId: ""
  }

  save(form : NgForm) {
    this.onSave.emit(form.value)
    console.log(form.value)
  }
}
