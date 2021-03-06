import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { NgForm } from '@angular/forms';
import { TallerService } from '../../services/taller.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cliente: Cliente;  
 

  constructor(private tallerService_:TallerService) { }

  ngOnInit(): void {
  }

  monto:number;
  aa:number;
  


  pago(forma:NgForm){
      console.log('soy el pago');
      
      this.tallerService_.actualizarVisitas(this.cliente.dui);

     
     console.log(forma.value);
     console.log(this.cliente.dui);
     
     

     this.aa=this.tallerService_.calculoPago(forma.value.valor,this.cliente.dui);

     //console.log(this.monto);
     

  }


}
