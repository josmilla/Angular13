import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
 
 
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-aplicativo',
  templateUrl: './aplicativo.component.html',
  styleUrls: ['./aplicativo.component.css']
})
export class AplicativoComponent implements OnInit {
 
  Asignacionapp:any;
  result:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private api:ApiService, private router:Router) { 
    

  }

  ngOnInit(): void {

    this.listarapp();

    
   
  }

  listarapp(): void {
 
 
  this.api.getAllAplicativo().subscribe(datacarga => {
     
     this.Asignacionapp =datacarga
      
    });

      

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.listarapp();
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.listarapp();
    
  }
  
 

  deletesquad(id:any) {
      if (confirm("¿Estás seguro que desea eliminar")) {
        this.api.deleteAplicativo(id).subscribe(res => {
          this.result=this.result.filter((item:any) => item.idAplicativo!==id)
      
       });
    }  
     
  }

}