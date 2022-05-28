 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators  } from '@angular/forms';


import { ListaRol } from '../../core/models/listaRol.interface';

import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core';

@Component({
  selector: 'app-agregarrol',
  templateUrl: './agregarrol.component.html',
  styleUrls: ['./agregarrol.component.css']
})
export class AgregarrolComponent implements OnInit {

  //squad: any = {}
 // rol:any
  //link:any; 
  //sub: any;
  // id:any;
   datarol:any;
   mi_fecha:any;
   //idtribucoes:any;
   //idreturnsquad:any
   //datatribucoe:any;
   //selectedRol: any;  
   //squadid:any;
   //codtribu:any;
   //tribuname:any;
   //datosAsignacion= []  as ListaAsignacionI[];
  // datarol = []  as ListaRol[];
  // datatotalsquad = []  as ListaSquad[];
  addForm;
   
  
   constructor(public authService: AuthService, private route: ActivatedRoute, private router:Router,  private api:ApiService, private formBuilder: FormBuilder) 
    
   {
     
  
     this.addForm = this.formBuilder.group({
  
      
      sqRol:[''],
      fechaRegistro: [''],
      usuarioRegistro: [''],
      fechaModificacion: [''],
      usuarioModificacion: [''],
      estado: [''],
      
     
     });
    }
    
  ngOnInit(): void {
   
    //this.mi_fecha = new Date().toISOString().split('T')[0];
    this.mi_fecha= new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
   // this.mi_fecha = new Date().toISOString().slice(0, 19).replace('T', ' ')
  // this.addForm.controls.fechaModificacion.valueChanges
    // this.api.getAllTribucoe().subscribe((res)=>{
    //   this.idtribu = res;
    // });  
  }

  submitForm() {

  
    this.datarol = this.addForm.value;
     debugger
     this.api.createrol(this.datarol).subscribe(res => {
     //  debugger
       this.router.navigate(["/rol"]);
       
      },
       (err) => {
      alert("hubo un error al agregar el ROL, inténtalo de nuevo más tarde")
      });
        
  }
}
  