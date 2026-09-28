import { Component,input } from '@angular/core';

@Component({
  selector: 'app-contado',
  imports: [],
  templateUrl: './contado.component.html',
  styleUrl: './contado.component.css'
})
export class ContadoComponent {
titulo = input("oi");
  numero : number = 0;

  somar () : void{
    this.numero = this.numero+1;
  }
  diminuir () : void{
    this.numero = this.numero-1;
  }

}
