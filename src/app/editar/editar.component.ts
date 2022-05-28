import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators  } from '@angular/forms';
import { ListaAsignacionI } from '../core/models/listaAsignacion.interface';
import { ListaRol } from '../core/models/listaRol.interface'
//import { ListaAplicativo } from '../core/models/listaAplicativo.interface'
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core';
 
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 // posts: Post[] = [];
 idsquad:any;
 idapp:any;
 rolid:any;
 codrolid:any;
 rolname:any;
 link:any; 
 sub: any;
  id:any;
  idroles:any;
  newasignacion:any;
  selectedRol: any;  
  tagNamesrol: string[] = [];
  datosAsignacion= []  as ListaAsignacionI[];
  datatotalrol = []  as ListaRol[];
  editForm;
  

  constructor(private route: ActivatedRoute, private router:Router, private api:ApiService, public authService: AuthService ,private formBuilder: FormBuilder) 
   
  {
    

    this.editForm = this.formBuilder.group({

    idPorcentajeAsignacion:[''],
    matriculaUsuario:[''],
    apellidopaternoUsuario: [''],
    apellidomaternoUsuario: [''],
    nombreUsuario: [''],
    nombreChapter: [''],
    matriculaChapter: [''],
    idRol: [''],
    especialidad: [''],
    idSquad: [''],
    idAplicativo: [''],
    porcentaje: [''],
    comentarios: [''],
    fechaPeriodoAprobado: [''],
    fechaRegistro: [''],
    usuarioRegistro: [''],
    fechaModificacion: [''],
    usuarioModificacion: [''],
    estado: [''],
    estadoRegistro: [''],
    
    
    });
   }

ngOnInit(): void {

  this.listarsignacion();
  this.listarrol();
  this.listarapp();
  this.listarsquad();
  this.regresar();

 
}

listarsignacion (): void {
//  this.api.getAllAsignacion().subscribe((data:any)=>{this.datosAsignacion=data})
  this.id = this.route.snapshot.paramMap.get('id');
  if (this.id){
    this.api.getSingleAsignacion(this.id).subscribe((data: any) => {
      this.datosAsignacion = data;
      debugger
      this.editForm.patchValue(data);
     // this.idreturnrol(this.datosAsignacion)
    },()=>alert("Rol no encontrado"))
  }
}
 
listarrol (): void {
  this.api.getAllRol().subscribe((datarol:any)=>{
   this.idroles = datarol;
   this.editForm.patchValue(datarol);
  })
   
  }

  listarsquad (): void {
    this.api.getAllSquad().subscribe((dataapp:any)=>{
     this.idsquad = dataapp;
     this.editForm.patchValue(dataapp);
    })
     
    }
  
    listarapp (): void {
      this.api.getAllAplicativo().subscribe((dataapp:any)=>{
       this.idapp = dataapp;
       this.editForm.patchValue(dataapp);
      })
       
      }




  idreturnrol(idroles:any)
  {
 
     this.rolid=idroles
  
     for(let j=0;j<this.rolid.length;j++){   
       this.codrolid=  this.rolid[j].idRol
    
        this.api.getroldid(this.codrolid).subscribe((roldata:any)=>{
         this.rolname=roldata
         this.tagNamesrol[j] =roldata.idRol
               
        }); 
     
     }  
     
      
  }

 view(v:any) {    
    this.router.navigate(["/dashboard/" + v]);  }

   onSubmit(formData:any) {
    
      this.api.updateAsignacion(this.id, formData.value).subscribe(res => {
     this.view(res.matriculaUsuario)
     
      
      });
    
  } 


  




 regresar () {   
  this.api.getSingleAsignacion(this.id).subscribe((data: any) => {
 
  this.link = data.matriculaUsuario;
  })
  }
  // addAsignar(newasignacion:any){
    
  //     this.api.createAsignacion(newasignacion).subscribe(res => {
  //       this.view(res.matriculaUsuario)
  //     // this.service.insertPelicula(newMovie).subscribe(()=>{
  //       this.router.navigate(['/'])
  //     },()=>alert("No se pudo crear una nueva asignación"))
    



  // }

}
