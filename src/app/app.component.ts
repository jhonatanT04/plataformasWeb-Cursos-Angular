import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { NewCursoComponent } from './components/new-curso/new-curso.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { UbicacionServicioService } from './service/ubicacion-servicio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CursosComponent, NewCursoComponent, FormsModule, InicioComponent, ContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  geoLocationData: any;

  constructor(private ubicacionClien: UbicacionServicioService) { }
  ciudad: string = '';
  pais: string = '';
  ngOnInit(): void {

    this.ubicacionClien.getIpInfo('check')
      .subscribe(data => {
        this.geoLocationData = data;
        this.ciudad = this.geoLocationData.city;
        this.pais = this.geoLocationData.country_name;
      },
        error => { console.error('Error al obtener la geolocalización:', error); });
  }
}
