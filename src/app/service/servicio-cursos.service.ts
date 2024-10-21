import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursosService {


  constructor() { }
  cursos: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string, duracion: number }[] = [];
  cargarCursos(): { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string, duracion: number }[] {
    this.cursos = JSON.parse(localStorage.getItem('listaCursos') || '[]');
    return this.cursos;
  }
  nuevoCurso(nomCurso: string, nomProfesor: string, fechaInicio: Date, fechaFinal: Date, descripcion: string, duracion: number) {
    let cur = { nomCurso: nomCurso, nomProfesor: nomProfesor, fechaInicio: fechaInicio, fechaFinal: fechaFinal, descripcion: descripcion, duracion: duracion }
    this.cursos.push(cur);
    localStorage.setItem('listaCursos', JSON.stringify(this.cursos))
  }
  eliminarCurso(curso: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string, duracion: number }) {
    const index = this.cursos.indexOf(curso);
    if (index !== -1) {
      this.cursos.splice(index, 1);
      console.log(this.cursos)
      localStorage.setItem('listaCursos', JSON.stringify(this.cursos));
    }
  }
}
