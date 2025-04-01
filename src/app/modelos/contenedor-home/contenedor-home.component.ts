import { Component } from '@angular/core';

@Component({
  selector: 'app-contenedor-home',
  imports: [],
  templateUrl: './contenedor-home.component.html',
  styleUrl: './contenedor-home.component.css'
})
export class ContenedorHomeComponent {
  containers = [
    {
      titulo: "TypeScript",
      contenido: "Introducción a TypeScript. La idea es ver cómo nos ayuda TypeScript escribiendo codigo."
    },
    {
      titulo: "Componentes",
      contenido: "Creacion de componentes y entender que es un componente Angular"
    },
    {
      titulo: "Directivas",
      contenido: "¿Que-o son las directivas? ¿Cuales se utilizan mas?"
    },
    {
      titulo: "Rutas",
      contenido: "Nos permiten cargar distintos ficheros HTML en una web SPA"
    },
    {
      titulo: "Servicios",
      contenido: "Nos permiten interactuar con los datos e independizan nuestra aplicacion de su acceso"
    },
    {
      titulo: "Formularios",
      contenido: "Utilidaddes qyue nos ayudan para generar formularios para introducir datos"
    },
    {
      titulo: "Inyeccion",
      contenido: "Como podemos utilizar en Angular el patron de inyeccion de dependencias"
    },
    {
      titulo: "Binding",
      contenido: "Nos permite enlazar la informacion de los formularios con nuestros modelos"
    },
  ]
}
