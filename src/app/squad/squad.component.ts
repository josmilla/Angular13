import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

 

import { ListaSquad } from '../core/models/listaSquad.interface';
import { ListaTribucoe } from '../core/models/listaTribucoe.interface';
 
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
 // AsignacionSquad  = [] as ListaSquad[];
  AsignacionTribu = [] as ListaTribucoe[];
  items = { ListaSquad: [], ListaTribucoe: [] };
  AsignacionSquad: ListaSquad[] = [];
  //AsignacionSquad: any;
  idtribucoe:any;
  idsquad:any;
  nametribu:any
  datasquad:any
  tagNames:string [] = []
  //squad:  [] =[]
  result:any
 // roles: ListaRol[] = [];

  constructor(private api:ApiService, private router:Router) { 
    

  }

  ngOnInit(): void {

    this.listarsquad();

    
   
  }

  listarsquad(): void {

    //this.AsignacionSquad=  this.api.getUsuario(this.retornoid);
   // this.result = this.api.getAllSquad();
 
  this.api.getAllSquad().subscribe(datacarga => {
     this.result =datacarga
     // this.AsignacionSquad = datacarga;
   //  this.returntribu(this.AsignacionSquad)
    });

      // this.api.getAllSquad().toPromise().then(data =>{
      //  const { ListaSquad, ListaTribucoe } = data;
      //  this.items.ListaSquad = ListaSquad
      //  this.items.ListaTribucoe = ListaTribucoe
      // });

  }

  returntribu(idtodos:any)
  {
 
     this.datasquad=idtodos
     
     for(let j=0;j<this.datasquad.length;j++){   
    
       this.idtribucoe= this.datasquad[j].idTribucoe
       
       this.api.gettribucoedid(this.idtribucoe).subscribe((appdata:any)=>{
        this.nametribu=appdata
        this.tagNames[j]=appdata.nombreTribucoe
          
       }); 
       
     }  
     
      
  }
 
  

  onTableDataChange(event: any) {
    this.page = event;
    this.listarsquad();
   // this.returntribu(this.AsignacionSquad)
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.listarsquad();
   // this.returntribu(this.AsignacionSquad)
  }

 

  deletesquad(id:any) {
      if (confirm("¿Estás seguro que desea eliminar")) {
        this.api.deleteSquad(id).subscribe(res => {
          this.result=this.result.filter((item:any) => item.idsquad!==id)
         
          
          // this.listarsquad();
          // this.router.navigate(["/squad"]);
          this.onTableDataChange(1)
          this.onTableSizeChange(1)
       //   this.listarsquad();
         // this.listarsquad();
      //  this.AsignacionSquad = this.AsignacionSquad.filter(item => item.idSquad !== id);
       });
    } else {
      alert("No puede Eliminar Tiene una Asignación asociada");
    }
  }

}