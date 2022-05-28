import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
 
 
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-tribucoe',
  templateUrl: './tribucoe.component.html',
  styleUrls: ['./tribucoe.component.css']
})
export class TribucoeComponent implements OnInit {

  
  AsignacionTribu:any;
  result:any;
   

  constructor(private api:ApiService, private router:Router) { 
    

  }

  ngOnInit(): void {

    this.listartribu();

    
   
  }

  listartribu(): void {
 
 
  this.api.getAllTribucoe().subscribe(datacarga => {
     this.AsignacionTribu =datacarga
     
    });

      

  }

   
  
 

  deletesquad(id:any) {
      if (confirm("¿Estás seguro que desea eliminar")) {
        this.api.deleteTribucoe(id).subscribe(res => {
          this.result=this.result.filter((item:any) => item.idtribucoe!==id)
      
       });
    }  
     
  }

}