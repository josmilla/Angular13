import { Injectable, OnDestroy} from '@angular/core';
import { ListaAsignacionI } from '../models/listaAsignacion.interface';
import { ListaRol } from '../models/listaRol.interface';
import { ListaCargaI } from '../models/listaSiga.interface';
import { ListaSquad } from '../models/listaSquad.interface';
import { ListaAplicativo } from '../models/listaAplicativo.interface';
import { ListaTribucoe } from '../models/listaTribucoe.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
 
import { BehaviorSubject, Observable, of, Subscription ,throwError} from 'rxjs'; 
//import { ApplicationUser } from '../models/application-user';

@Injectable({
  providedIn: 'root',
})
 

//export class AuthService implements OnDestroy {
export class ApiService   {
  private readonly apiUrl = `${environment.apiUrl}`;
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }) 

    // const reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
    // .set('Accept', 'application/json');



  };
  constructor(private http:HttpClient) { }

    // loginByEmail(form:LoginI):Observable<ResponseI>{ 
    //   let direccion = this.url + "auth";
    //   return this.http.post<ResponseI>(direccion, form);
    // }


    getAllCargaSiga():Observable<ListaCargaI[]>{
      let direccion = this.apiUrl+"api/cargasiga";
      return this.http.get<ListaCargaI[]>(direccion)
      .pipe(
        catchError(this.errorHandler)
      );
    }

    getAllAsignacion():Observable<ListaAsignacionI[]>{
      let direccion = this.apiUrl+"api/asignacion";
      return this.http.get<ListaAsignacionI[]>(direccion)
      .pipe(
        catchError(this.errorHandler)
      );
    }

    getAllRol():Observable<ListaRol[]>{
      //let direccion = this.apiUrl+"api/rol";
      return this.http.get<ListaRol[]>(this.apiUrl + 'api/rol')
      .pipe(
        catchError(this.errorHandler)
      );      
    }

    getAllSquad():Observable<ListaSquad[]>{
      let direccion = this.apiUrl+"api/squad";
      return this.http.get<ListaSquad[]>(direccion)
      .pipe(
        catchError(this.errorHandler)
      );
    }

    getAllTribucoe():Observable<ListaTribucoe[]>{
      let direccion = this.apiUrl+"api/tribucoe";
      return this.http.get<ListaTribucoe[]>(direccion)
      .pipe(
          catchError(this.errorHandler)
        );
      
    }

    getAllAplicativo():Observable<ListaAplicativo[]>{
      let direccion = this.apiUrl+"api/aplicativo";
      return this.http.get<ListaAplicativo[]>(direccion)
      .pipe(
        catchError(this.errorHandler)
      );
    }
   
    getSingleAsignacion(id:any): Observable<ListaAsignacionI> {
      return this.http.get<ListaAsignacionI>(this.apiUrl + 'api/asignacion/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getidsiga(id:any): Observable<ListaCargaI> {
      return this.http.get<ListaCargaI>(this.apiUrl + 'api/siga/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getmatriculasiga(id:any): Observable<ListaCargaI> {
      return this.http.get<ListaCargaI>(this.apiUrl + 'matriculasiga/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getUsuario(usuario:any): Observable<ListaAsignacionI> {
      return this.http.get<ListaAsignacionI>(this.apiUrl + 'usuario/' + usuario)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getchapter(chapter:any): Observable<ListaAsignacionI> {
      return this.http.get<ListaAsignacionI>(this.apiUrl + 'chapter/' + chapter)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getRolAsignacion(id:any): Observable<ListaRol> {
      return this.http.get<ListaRol>(this.apiUrl + 'api/rol/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getSigaid(id:any): Observable<ListaCargaI> {
      return this.http.get<ListaCargaI>(this.apiUrl + 'api/cargasiga/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getroldid(id:any): Observable<ListaRol> {
      return this.http.get<ListaRol>(this.apiUrl + 'api/rol/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getsquadid(id:any): Observable<ListaSquad> {
      return this.http.get<ListaSquad>(this.apiUrl + 'api/squad/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    gettribucoedid(id:any): Observable<ListaTribucoe> {
      return this.http.get<ListaTribucoe>(this.apiUrl + 'api/tribucoe/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    getappid(id:any): Observable<ListaAplicativo> {
      return this.http.get<ListaAplicativo>(this.apiUrl + 'api/Aplicativo/' + id)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    createAsignar(asignar:ListaAsignacionI): Observable<ListaAsignacionI> {
      let direccion = this.apiUrl +"api/asignacion/";
     return this.http.post<ListaAsignacionI>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
      }
     


    createAsignacion(asignar:any): Observable<ListaAsignacionI> {
      let direccion = this.apiUrl +"api/asignacion/";
     
      return this.http.post<ListaAsignacionI>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    createrol(asignar:ListaRol): Observable<ListaRol> {
      let direccion = this.apiUrl +"api/rol/";
      return this.http.post<ListaRol>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    createsquad(asignar:ListaSquad): Observable<ListaSquad> {
      let direccion = this.apiUrl +"api/squad/";
      debugger
      return this.http.post<ListaSquad>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    createTribucoe(asignar:ListaTribucoe): Observable<ListaTribucoe> {
      let direccion = this.apiUrl +"api/rol/";
      return this.http.post<ListaTribucoe>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
    createAplicativo(asignar:ListaAplicativo): Observable<ListaAplicativo> {
      let direccion = this.apiUrl +"api/aplicativo/";
      return this.http.post<ListaAplicativo>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }


    updatesiga(id:number, asignar:ListaCargaI): Observable<ListaCargaI> {
      let direccion = this.apiUrl +"api/cargasiga/"+ id;
      return this.http.put<ListaCargaI>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    updateAsignacion(id:number, asignar:ListaAsignacionI): Observable<ListaAsignacionI> {
      let direccion = this.apiUrl +"api/asignacion/"+ id;
      return this.http.put<ListaAsignacionI>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    updaterol(id:number, asignar:ListaRol): Observable<ListaRol> {
      let direccion = this.apiUrl +"api/rol/"+ id;
     
      return this.http.put<ListaRol>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    updatesquad(id:number, asignar:ListaSquad): Observable<ListaSquad> {
      let direccion = this.apiUrl +"api/squad/"+ id;
     
      return this.http.put<ListaSquad>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }



    updatetribucoe(id:number, asignar:ListaTribucoe): Observable<ListaTribucoe> {
      let direccion = this.apiUrl +"api/tribucoe/"+ id;
      return this.http.put<ListaTribucoe>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    updateaplicativo(id:number, asignar:ListaAplicativo): Observable<ListaAplicativo> {
      let direccion = this.apiUrl +"api/aplicativo/"+ id;
      return this.http.put<ListaAplicativo>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
  

    updateSiga(id:number, asignar:ListaCargaI): Observable<ListaCargaI> {
      let direccion = this.apiUrl +"api/asignacion/"+ id;
      return this.http.put<ListaCargaI>(direccion, JSON.stringify(asignar), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    deleteSiga(id:any) {
      let direccion = this.apiUrl +"api/cargasiga/"+ id;
      return this.http.delete<ListaCargaI>(direccion, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
 
    deleteAsignacion(id:any) {
      let direccion = this.apiUrl +"api/asignacion/"+ id;
      return this.http.delete<ListaAsignacionI>(direccion, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    deleteSquad(id:any) {
      let direccion = this.apiUrl +"api/squad/"+ id;
      return this.http.delete<ListaSquad>(direccion, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   
    deleteRol(id:any) {
      let direccion = this.apiUrl +"api/rol/"+ id;
      return this.http.delete<ListaSquad>(direccion, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
    deleteTribucoe(id:any) {
      let direccion = this.apiUrl +"api/tribucoe/"+ id;
      return this.http.delete<ListaSquad>(direccion, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    deleteAplicativo(id:any) {
      let direccion = this.apiUrl +"api/aplicativo/"+ id;
      return this.http.delete<ListaSquad>(direccion, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
   

    errorHandler(error: any) {
      let errorMessage = '';
   
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
    
     
}


