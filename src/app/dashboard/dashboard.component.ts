 
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaRol } from '../core/models/listaRol.interface';
 
 
import { ListaAsignacionI } from '../core/models/listaAsignacion.interface';
import { ApiService } from '../core/services/api.service';
import { ListaCargaI } from '../core/models/listaSiga.interface';

import { ThisReceiver } from '@angular/compiler';
import 'chart.js'; 
 
import * as XLSX from 'xlsx'; 
 
 

 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 

  
  fileName= 'ExcelSheet.xlsx';  
  exportList: any[] = [];
 appid:any;
 codrolid:any;
 codsquad:any;
 codappid:any;
 squadid:any;
  rolid:any;
  rolesid:any;
  dataall:any;
  // rol:any;
   roltotal:any;
   squadname:any;
   appname:any;
   rolname:any;
  inputColorStr:any;
 total=0; 
 text:any;
 mensaje:any; 
private value:any;   
sumaTotal:any;
itemTotal:any;
retornoid:any;
valor:any;
//total:any;
id:any;
idasigna:any;
Asignacion:any;
Asignacionusuario = [] as ListaAsignacionI[];
tagNamesrol: string[] = [];
tagNamesapp: string[] = [];
tagNamessquad: string[] = [];

 
result:any;
//roles: ListaRol[] = [];


  constructor(private route: ActivatedRoute,private formbulider: FormBuilder,private api:ApiService, private router:Router) { 
    

  }

   

  ngOnInit(): void {
    this.getuser();  
       
 }   
  
 getuser()  
 {   
  this.id = this.route.snapshot.paramMap.get('id');
 this.retornoid=this.id;
 this.result=  this.api.getUsuario(this.retornoid);
   this.api.getUsuario(this.retornoid).subscribe((rsult:any)=>{  
     this.Asignacionusuario=rsult 
  
     this.findsum(this.Asignacionusuario); 
   
   })
    
 }  


 
 
   
 returnall(idtodos:any)
 {

    this.dataall=idtodos
 
    for(let j=0;j<this.dataall.length;j++){   
      this.codrolid=  this.dataall[j].idRol
      this.codappid=  this.dataall[j].idAplicativo
      this.codsquad=  this.dataall[j].idSquad

      
      this.api.getappid(this.codappid).subscribe((appdata:any)=>{
       this.appname=appdata
       this.tagNamesapp[j]=appdata.codAplicativo
             
      }); 

       this.api.getroldid(this.codrolid).subscribe((roldata:any)=>{
        this.rolname=roldata
        this.tagNamesrol[j] =roldata.sqRol
              
       }); 
      
      
       this.api.getsquadid(this.codsquad).subscribe((squaddata:any)=>{
        this.squadname=squaddata
        this.tagNamessquad[j] =squaddata.nombreSquad
              
       }); 
       
    }  
    
     
 }


  
 idreturnrol(idroles:any)
 {

    this.rolid=idroles
 
    for(let j=0;j<this.rolid.length;j++){   
      this.codrolid=  this.rolid[j].idRol
   
       this.api.getroldid(this.codrolid).subscribe((roldata:any)=>{
        this.rolname=roldata
        this.tagNamesrol[j] =roldata.sqRol
              
       }); 
    
    }  
    
     
 }

 idreturnapp(idapp:any)
 {

    this.appid=idapp
 
    for(let j=0;j<this.appid.length;j++){   
      this.codappid=  this.appid[j].idAplicativo
   
       this.api.getappid(this.codappid).subscribe((app:any)=>{
        this.appname=app
        this.tagNamesapp[j] =app.codaplicativo
              
       }); 
    
    }  
    
     
 }

 idreturnsquad(datasquad:any)
 {

    this.squadid=datasquad
 
    for(let j=0;j<this.squadid.length;j++){   
      this.codsquad=  this.squadid[j].idSquad
   
       this.api.getsquadid(this.codsquad).subscribe((squaddata:any)=>{
        this.squadname=squaddata
        this.tagNamessquad[j] =squaddata.nombreSquad
              
       }); 
    
    }  
    
     
 }




 idreturn(matricula:any)
 {
   this.value=matricula;
   console.log(this.value); 
    
    this.retornoid=  this.value[0].matriculaUsuario 
    this.rolid=  this.value[0].idRol 

  // console.log(this.retornoid)
 }

  

 findsum(data:any ){    
 
  this.text="";
  this.total=0;
  this.value=data    
 // console.log(this.value);  
 // console.log(this.total);  
  for(let j=0;j<data.length;j++){   
       this.total+=  this.value[j].porcentaje 
    
  }  
  this.total = this.trunc(this.total,3)
  if ((this.total) == 100 ){
    this.text = "Asignación Completada";
    this.inputColorStr = "blue";
    console.log(this.text);  
   }else { this.text ="Por favor revisar el % Asignación";
   
  this.inputColorStr = "red";
  console.log(this.text);  
  }
  return this.text;
  
}

trunc (xe:any, posiciones = 0) {
  var s = xe.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1
  var numStr = s.substr(0, decimalLength + posiciones)
  return Number(numStr)
}

   deleteasignar(id:any) {
  //  if (confirm(`¿Realmente quieres eliminar a ${this.idasigna}?`)) {
   if (confirm(`¿Realmente quieres eliminar la asignación seleccionada?`)) {
      
        this.api.deleteAsignacion(id).subscribe(res => {
    this.Asignacionusuario = this.Asignacionusuario.filter(item => item.idPorcentajeAsignacion !== id);
    this.findsum(this.Asignacionusuario);
                
   });
    }
  }
 
   
exportexcel(): void 
{
   /* table id is passed over here */   
   let element = document.getElementById('excel-table'); 
   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

   /* generate workbook and add the worksheet */
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

   /* save to file */
   XLSX.writeFile(wb, this.fileName);
  
}

   

}