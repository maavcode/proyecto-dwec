import { Routes } from '@angular/router';
import { BindingComponent } from './paginas/binding/binding.component';
import { DependenciasComponent } from './paginas/dependencias/dependencias.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { HomeComponent } from './paginas/home/home.component';
import { TemarioComponent } from './paginas/temario/temario.component';
import { TuberiasComponent } from './paginas/tuberias/tuberias.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: 'tuberias', component: TuberiasComponent },
    { path: 'dependencias', component: DependenciasComponent },
    { path: 'formularios', component: FormulariosComponent },
    { path: 'binding', component: BindingComponent }
];
