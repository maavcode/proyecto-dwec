import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router'; // Habilita las rutas, si no no funcionan
import { routes } from './app.routes'; // Importa las rutas
import { provideHttpClient } from '@angular/common/http'; // Habilita las peticiones
import { InMemoryDataService } from './servicios/in-memory-data.service'; // A veces hay que importarlo a mano
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // A veces hay que importarlo a mano, habilita el servicio web

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      [
        HttpClientInMemoryWebApiModule.forRoot
        (
          InMemoryDataService, 
          { 
            dataEncapsulation: false,  
          },
        )
      ]),
  ]
};
