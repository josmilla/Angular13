
 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators  } from '@angular/forms';


import { ListaRol } from '../../core/models/listaRol.interface';

import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core';


@Component({
  selector: 'app-editarrol',
  templateUrl: './editarrol.component.html',
  styleUrls: ['./editarrol.component.css']
})
export class EditarrolComponent implements OnInit {

  //squad: any = {}
   rol:any
  link:any; 
  sub: any;
   id:any;
   idtribucoes:any;
   //idreturnsquad:any
   //datatribucoe:any;
   //selectedRol: any;  
   //squadid:any;
   //codtribu:any;
   //tribuname:any;
   //datosAsignacion= []  as ListaAsignacionI[];
   datarol = []  as ListaRol[];
  // datatotalsquad = []  as ListaSquad[];
   editForm;
   
  
   constructor(public authService: AuthService, private route: ActivatedRoute, private router:Router,  private api:ApiService, private formBuilder: FormBuilder) 
    
   {
     
  
     this.editForm = this.formBuilder.group({
  
      idRol:[''],
      sqRol:[''],
      fechaRegistro: [''],
      usuarioRegistro: [''],
      fechaModificacion: [''],
      usuarioModificacion: [''],
      estado: [''],
      
     
     });
    }
  
  ngOnInit(): void {
   
     
   this.listarrol();
    
   
  
  
  }
  
  listarrol (): void {
     
     this.id = this.route.snapshot.paramMap.get('id');
     if (this.id){
       this.api.getroldid(this.id).subscribe((data: any) => {
         this.rol = data;
         this.editForm.patchValue(data);
         
       },()=>alert("Rol no encontrado"))
     }
    }
  
 
    onSubmit(formData:any) {
     
       this.api.updaterol(this.id, formData.value).subscribe(res => {
        this.router.navigateByUrl('/rol');
     
       });
     
   } 
  
  
  
  
  
  
  }
  