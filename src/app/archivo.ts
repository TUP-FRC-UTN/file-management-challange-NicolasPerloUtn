import { FileItem, FileOwner, FileType } from "../models/file.item.model";

export interface Archivo {
    nombre: string;
    fecha: Date;
    tipoArchivo: FileType;
    carpeta?: FileItem;
    duenio: FileOwner;
}