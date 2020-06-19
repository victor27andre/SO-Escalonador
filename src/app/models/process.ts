import { numeroRandom } from '../services/numeroRandom';

export class Process {
    process_id : number;
    total_time: number;
    state: string;
    remaining_time: number;
    quantum?: number;
    // public BlocosMemoria: memoryBlock[] = [];
    blocoID: number;
    tamanhoTotal: number;

    constructor() {

    }

    public QuantidadeBytes(){
        return numeroRandom(1, 4096);
    }

}


