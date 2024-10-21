import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ServicioCursosService } from './service/servicio-cursos.service';
import { UbicacionServicioService } from './service/ubicacion-servicio.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes,),
    ServicioCursosService,
    UbicacionServicioService,
    importProvidersFrom(HttpClientModule)]
};
