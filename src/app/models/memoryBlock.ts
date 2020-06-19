

export class memoryBlock{
    blocoID: number;
    tamanhoUsado: number;
    tamanhoTotal: number;
    
    constructor() {
        
    }
    
    public getTamanho(){
        return this.tamanhoTotal;
    }

    public setTamanho(tamanho: number) {
        this.tamanhoTotal = tamanho;
    }

    public getPercentOcupado(){
        return (this.tamanhoUsado/this.tamanhoTotal) * 100
    }

    public getPercentNaoOcupado(){
        return 100 - ((this.tamanhoUsado/this.tamanhoTotal) * 100)
    }

    // public newBlock(): memoryBlock {
    //     let bloco = new memoryBlock(this.tamanhoTotal);
    //     bloco.blocoID = this.blocoID;
    //     bloco.tamanhoUsado = this.tamanhoUsado;
    //     return bloco;
    // }
}