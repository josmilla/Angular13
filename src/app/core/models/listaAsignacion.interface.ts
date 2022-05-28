import { ListaRol } from './listaRol.interface';
import { ListaSquad } from './listaSquad.interface';
import { ListaAplicativo } from './listaAplicativo.interface';

export interface ListaAsignacionI{
    

    idPorcentajeAsignacion: number,
    matriculaUsuario: string,
    apellidopaternoUsuario: string,
    apellidomaternoUsuario: string,
    nombreUsuario: string,
    nombreChapter: string,
    matriculaChapter: string,
    idRol: number,
    especialidad: string,
    idSquad: number,
    idAplicativo: number,
    porcentaje: number,
    comentarios: string,
    fechaPeriodoAprobado: Date,
    fechaRegistro: Date,
    usuarioRegistro: string,
    fechaModificacion: Date,
    usuarioModificacion: string,
    estado: boolean,
    estadoRegistro: boolean;
    listarol: ListaRol ;
    listasquad:ListaSquad;
    listaplicativo:ListaAplicativo

}