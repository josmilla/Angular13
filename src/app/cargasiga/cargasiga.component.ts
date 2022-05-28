 
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { elementAt, Observable } from 'rxjs';
import { Router ,  ActivatedRoute} from '@angular/router';
 
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService  } from '../core';
 
import { ListaCargaI } from '../core/models/listaSiga.interface';
import { ApiService } from '../core/services/api.service';
 
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-cargasiga',
  templateUrl: './cargasiga.component.html',
  styleUrls: ['./cargasiga.component.css']
})
export class CargasigaComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx';  
  element:any;
  accessToken = '';
  refreshToken = '';
  
  totid:any;
  iditem:any;
  z: string [] =[];
  i=0;
  idtem=0;
  iddata:any;
  retornoidsiga:any;
  Asignacionusuariosiga:any;
   textsiga="";
   totalsiga=0;
   valuesiga:any;
   inputColorStr: string[] = [];
   sumatotal: number[] = [];
   estado:any;
   matriculaid:any;
   datauser:any;
   idsiga: any;
   porcentajesiga=0
   datasigaid: any;
  // sort:any;

  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
  AsignacionCarga = [] as ListaCargaI[];
  dataSourcesiga = new MatTableDataSource<ListaCargaI>();
  
 @ViewChild('scheduledOrdersPaginator') set matPaginator(paginator: MatPaginator) {
   this.dataSourcesiga.paginator = paginator;
  /// @ViewChild('scheduledOrdersPaginator') sort: MatSort;
 }

  constructor(public authService: AuthService,private route: ActivatedRoute,private formbulider: FormBuilder,private api:ApiService, private router:Router) { 
    

  }

  ngOnInit(): void {
   
    
  
    this.getusersiga()  
  
    
   
  }

  listarsiga()  {
   
   

    this.api.getAllCargaSiga().subscribe(datacarga => {
      this.AsignacionCarga = datacarga;
       
       
    });
  
  }

  onTableDataChange(event: any) {
    this.page = event;
 this.listarsiga();
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
   this.listarsiga();
    
  }



getusersiga()  
  {   
    
    this.datauser=[]
    this.idsiga=[]
    this.totid=[]
    this.retornoidsiga="";
    this.i=0 
    this.api.getAllCargaSiga().subscribe(datacarga => {
      this.datauser = datacarga;
    for(let x=0;x<this.datauser.length;x++){  
    this.idsiga= this.datauser[x].idCarga
    this.porcentajesiga = this.datauser[x].asignacion
    this.retornoidsiga=  this.datauser[x].matriculaUsuario
 
      this.api.getUsuario(this.retornoidsiga).subscribe((rsult:any)=>{  
      this.Asignacionusuariosiga=rsult 
      this.iditem =this.datauser.length
      
      this.findsumarasignar(this.Asignacionusuariosiga); 
      
    }) 
     
     }
    
    });  
  } 

  findsumarasignar(data:any){    
    this.listarsiga();
    this.textsiga="";
    this.totalsiga=0;
    this.valuesiga=data 
   
  
        for(let j=0;j<this.valuesiga.length;j++){   
         
         this.matriculaid= this.valuesiga[j].matriculaUsuario
         let rest = this.datauser.find((z:any) => z.matriculaUsuario === this.matriculaid);
          if (this.matriculaid === rest.matriculaUsuario){
              this.totalsiga+=  this.valuesiga[j].porcentaje 
          }
       }  

       

      let f = this.datauser.find((x:any) => x.matriculaUsuario === this.matriculaid);
 
     f.asignacion=this.trunc(this.totalsiga,3)
     
       
       this.api.updatesiga(f.idCarga,  f ).subscribe(res => {
    
          });
     
          f.push()
    
         
           
  }

  trunc (xe:any, posiciones = 0) {
    var s = xe.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }

  deletesiga(id:any) {
      if (confirm("¿Estás seguro que desea eliminar")) {
        this.api.deleteSiga(id).subscribe(res => {
        this.AsignacionCarga = this.AsignacionCarga.filter(item => item.idCarga !== id);
       });
    }
  }

  exportexcel(): void 
{
   /* table id is passed over here */   
   //let element = this.Asignacionusuariosiga;
   var pagetotal= (this.page - 1) * this.tableSize 
  
   for(var i = 1; i <= this.datauser.length; i++) {
    this.element = document.getElementById('excel-table') 
  }
   
    //this.html += getHtmlForPage(i);
   //let element = document.getElementById('excel-table') 

  
  debugger
  // const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.element);
   delete (ws['10'])
   
   /* generate workbook and add the worksheet */
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

   /* save to file */
   XLSX.writeFile(wb, this.fileName);
  
}
  
}