import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioCursosService } from '../../service/servicio-cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  cursos: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string,duracion:number }[] =[]
  eliminarCurso(curso: { nomCurso: string, nomProfesor: String, fechaInicio: Date, fechaFinal: Date, descripcion: string ,duracion:number}) {
    this.servicioCurso.eliminarCurso(curso)
  }
  constructor(private servicioCurso: ServicioCursosService) { }

  ngOnInit(): void {
    this.cursos = this.servicioCurso.cargarCursos();
    this.mostrarDetalles = new Array(this.cursos.length).fill(false);
  }
  mostrarDetalles: boolean[] = [];
  toggleDetalles(index: number): void {
    this.mostrarDetalles[index] = !this.mostrarDetalles[index];
  }
}
