import { ListaTribucoe } from './listaTribucoe.interface';
export interface ListaSquad{
    

    idSquad: number,
    codSquad: string,
    nombreSquad: string,
    idtribucoe: number,
    fechaRegistro: Date,
    usuarioRegistro: string,
    fechaModificacion: Date,
    usuarioModificacion: string,
    estado: boolean
    listaTribucoe:ListaTribucoe;
     
}