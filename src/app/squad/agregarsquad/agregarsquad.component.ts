

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

 import { ListaSquad } from '../../core/models/listaSquad.interface'
 import { ListaTribucoe } from '../../core/models/listaTribucoe.interface'
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core';


@Component({
  selector: 'app-agregarsquad',
  templateUrl: './agregarsquad.component.html',
  styleUrls: ['./agregarsquad.component.css']
})
export class AgregarsquadComponent implements OnInit {

  //form: FormGroup;
  // retornoid:any;
  // value:any;
  // cargatribu=[]  as ListaTribucoe[];
  // squad=[]  as ListaSquad[];
  // ruta:any;
   
  // link:any; 
  // sub: any;
  // id:any;
  // idsquad:any;
    idtribu:any;
  // data:any;
  
  // selectedRol: any;  
   
   datosSquad:any
  //datosSquad= []  as ListaTribucoe[];
  // datasquadid = []  as ListaSquad[];
  addForm : FormGroup;
  // btnName:string="";
  // selectedId: any;
  mi_fecha:any;
  estadoregistro:any;
 
  

  constructor(private route: ActivatedRoute, private router:Router, private api:ApiService, public authService: AuthService ,private formBuilder: FormBuilder) 
   
  {
    

    this.addForm = this.formBuilder.group({

       
      codSquad:[''],
      nombreSquad: ['', Validators.required],
      idTribucoe: [''],
      fechaRegistro: [''],
      usuarioRegistro: [''],
      fechaModificacion: [''],
      usuarioModificacion: [''],
      estado: ['', Validators.required]
       
    
    });
   }

ngOnInit(): void {
  
 //this.listarsquad();
 this.estadoregistro=true;
 this.mi_fecha= new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
  this.api.getAllTribucoe().subscribe((res)=>{
    this.idtribu = res;
  });
   
  //this.datosSquad.
 // this.selectedId = this.route.snapshot.paramMap.get('id')!=undefined?this.route.snapshot.paramMap.get('id'):0;

 
 }
 
 
 
 


 listarsquad(): void {
  
    
        this.api.getroldid(this.idtribu).subscribe((data: any) => {
          this.datosSquad= data;
         this.addForm.patchValue(data);
      },()=>alert("ID no encontrado"))
     
   }

 
 submitForm() {

  
 this.datosSquad = this.addForm.value;
  
  this.api.createsquad(this.datosSquad).subscribe(res => {
   // debugger
    this.router.navigate(["/squad"]);
    
   },
    (err) => {
   alert("hubo un error al agregar, inténtalo de nuevo más tarde")
   });
     
 
   
} 
 
get codSquad() { return this.addForm.get('codSquad'); }
get nombreSquad() { return this.addForm.get('nombreSquad'); }
get idTribucoe() { return this.addForm.get('idTribucoe'); }
get fechaRegistro() { return this.addForm.get('fechaRegistro'); }
get usuarioRegistro() { return this.addForm.get('usuarioRegistro'); }
get fechaModificacion() { return this.addForm.get('fechaModificacion'); }
get usuarioModificacion() { return this.addForm.get('usuarioModificacion'); }
get estado() { return this.addForm.get('estado'); }
 
 
}


 