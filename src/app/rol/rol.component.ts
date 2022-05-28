import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaRol } from '../core/models/listaRol.interface';
 import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  AsignacionRol= [] as ListaRol[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  
    this.listarrol();

    
   
  }

  listarrol(): void {
    
    this.api.getAllRol().subscribe(datacarga => { 
      
      this.AsignacionRol = datacarga;
    });
  }

  

  deleterol(id:any) {
      if (confirm("¿Estás seguro que desea eliminar")) {
        this.api.deleteRol(id).subscribe(res => {
        this.AsignacionRol = this.AsignacionRol.filter(item => item.idRol !== id);
        this.router.navigate(["/rol"]);
       });
    }
  }

}