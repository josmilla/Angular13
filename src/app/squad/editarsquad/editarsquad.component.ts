 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators  } from '@angular/forms';

import { ListaAsignacionI } from '../../core/models/listaAsignacion.interface';
import { ListaRol } from '../../core/models/listaRol.interface';
import { ListaSquad } from '../../core/models/listaSquad.interface';
import { ListaTribucoe } from '../../core/models/listaTribucoe.interface';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core';

 
@Component({
  selector: 'app-editarsquad',
  templateUrl: './editarsquad.component.html',
  styleUrls: ['./editarsquad.component.css']
})
export class EditarsquadComponent implements OnInit {

squad: any = {}
   
link:any; 
sub: any;
 id:any;
 idtribucoes:any;
 //idreturnsquad:any
 datatribucoe:any;
 selectedRol: any;  
 squadid:any;
 codtribu:any;
 tribuname:any;
 //datosAsignacion= []  as ListaAsignacionI[];
 datatribu = []  as ListaTribucoe[];
 datatotalsquad = []  as ListaSquad[];
 editsquadForm;
 mi_fechaeditar:any;

 constructor(public authService: AuthService, private route: ActivatedRoute, private router:Router,  private api:ApiService, private formBuilder: FormBuilder) 
  
 {
   

   this.editsquadForm = this.formBuilder.group({

    idSquad:[''],
    codSquad:[''],
    nombreSquad: [''],
    idTribucoe: [''],
    fechaRegistro: [''],
    usuarioRegistro: [''],
    fechaModificacion: [''],
    usuarioModificacion: [''],
    estado: [''],
    
   
   });
  }

ngOnInit(): void {
 
this.mi_fechaeditar= new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
 this.listarsquad();
 this.listartribucoesquad ();
 


}

listarsquad (): void {
   
   this.id = this.route.snapshot.paramMap.get('id');
   if (this.id){
     this.api.getsquadid(this.id).subscribe((data: any) => {
       this.squad = data;
       this.editsquadForm.patchValue(data);
       
     },()=>alert("Squad no encontrado"))
   }
  }


  listartribucoesquad (): void {
    this.api.getAllTribucoe().subscribe((datafull:any)=>{
     this.datatribucoe = datafull
     this.editsquadForm.patchValue(datafull);
   //  this.editsquadForm.patchValue(datafull);
    
    })
    
    }
  onSubmit(formData:any) {
    debugger
     this.api.updatesquad(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('/squad');
     debugger
     });
   
 } 

regresar () {   
 this.api.getsquadid(this.id).subscribe((data: any) => {

 this.link = data.idSquad;
 })
}




}
