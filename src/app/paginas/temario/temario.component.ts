import { Component} from '@angular/core';
import { TemarioService } from '../../servicios/temario.service';
import { ActivatedRoute } from '@angular/router';
import { Tema } from '../../modelos/tema';

@Component({
  selector: 'app-temario',
  imports: [],
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})
export class TemarioComponent {
  // En este componente voy a mostrar el temario, que es un array de temas
  // En este caso el temario es un array de objetos, que son los temas
  temas: Tema[] = []; // Declaro un array de temas, que es el que voy a rellenar con la informacion del servicio


  constructor(
     private route: ActivatedRoute, // Inyecto la propiedad route de ActivateRoute, que sirve para ...
    private temarioService: TemarioService
  ) { // Injectable es lo que se encarga de inicializar (hacer el new) de cada objeto que se ponga en los parametros

  }

  ngOnInit(): void { // Cuando inicia el componente temario realiza lo siguiente
    this.getTemas();
  }

  getTemas(): void {
    this.temarioService.getTemas().subscribe((data: Tema[]) => {
      this.temas = data; // Relleno el array de temas con la informacion del servicio
    });
    
  }
}
