export interface AutoInterface {
    id?: number;
    nombre: string;
    tipo: 'deportivo' | 'camiontea' | 'taxi' | 'camion' | 'bus' ;
    anio: number;
    fecha: Date;
    precio: number;
}  