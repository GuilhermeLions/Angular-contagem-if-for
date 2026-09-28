import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { ContadoComponent } from '../../components/contado/contado.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contagem',
  imports: [CabecalhoComponent, ContadoComponent, RouterLink],
  templateUrl: './contagem.component.html',
  styleUrl: './contagem.component.css'
})
export class ContagemComponent {

  numero : number = 0;

  somar () : void{
    this.numero = this.numero++;
  }
  diminuir () : void{
    this.numero = this.numero--;
  }

}
