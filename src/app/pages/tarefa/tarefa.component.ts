import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';

@Component({
  selector: 'app-tarefa',
  imports: [CabecalhoComponent],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
minhastarefas : tarefa[] = [
{
  id: 1,
  titulo: "Aprender angular",
  descricao: "Ficar bom",
  prazo: "29/09/2026",
  concluido: false
},
{
  id: 2,
  titulo: "Aprender spring",
  descricao: "Ficar muito bom",
  prazo: "20/06/2027",
  concluido: false
},
{
  id: 3,
  titulo: "Bater 85 kg",
  descricao: "Uso de anabolizantes",
  prazo: "25/07/2027",
  concluido: false
}
]
}

  type tarefa = {
    id: number;
    titulo: string;
    descricao: string;
    prazo: string;
    concluido: boolean;
  }


