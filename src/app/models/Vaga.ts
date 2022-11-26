import { Morador } from "./Morador";

export interface Vagas {
    vagasId?: number,
    moradorId: number,
    morador?: Morador
}