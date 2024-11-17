import { Marca } from "./Marca";

export interface Bus {
    id: number;
    numeroBus: string;
    placa: string;
    fechaCreacion: string;
    caracteristicas?: string;
    activo: boolean;
    marca: Marca;
}