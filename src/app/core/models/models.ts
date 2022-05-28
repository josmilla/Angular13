export interface NavMenuItem {
    Label: string;
    Target: string;
}

export interface MedicionGlucosa {
    Id: string;
    Timestamp: Date;
    Nivel: number;
    Comida: string;
    AntesDespues: string;
    Fecha: Date;
}