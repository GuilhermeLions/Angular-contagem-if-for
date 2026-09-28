import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContagemComponent } from './pages/contagem/contagem.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TarefaComponent } from './pages/tarefa/tarefa.component';

export const routes: Routes = [

{path: '', component: HomeComponent},
{path: "Contagem", component: ContagemComponent},
{path: 'Tarefacomponent', component: TarefaComponent},
{path: '**', component: NotFoundComponent}


];
