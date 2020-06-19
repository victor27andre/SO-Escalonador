// import { Component, OnInit } from '@angular/core';
// import { memoryBlock } from 'src/app/models/memoryBlock';



// @Component({
//   selector: 'app-best-fit',
//   templateUrl: './best-fit.component.html',
//   styleUrls: ['./best-fit.component.scss'],
// })
// export class BestFitComponent implements OnInit {

//   TodosOsBlocos: memoryBlock;// lista encadeada de blocos
//   UltimoBloco: memoryBlock; // não ficar buscando o último bloco da lista

//   BlocosLivres: memoryBlock; // lista encadeada de nó de bloco(a referência da lista "TodosOsBlocos" não deve ser alterada)
  
//   constructor() { }

//   ngOnInit() {}

//   HandleRequisicao(): void {

//     if (this.hasMemory(requisicao.getRequisicao())) {
//       if (this.BlocosLivres) {
//         // let blocoPerfeito: BlockNode = this.ReceberMelhorEncaixe(requisicao.getRequisicao());

//         if (blocoPerfeito) {
//           let bloco = blocoPerfeito.value;
//           bloco.tamanhoUsado = requisicao.getRequisicao();
//           this.MemoryVM.MemoriaOcupada += bloco.tamanhoUsado;

//           requisicao.ProcessoViewModel.Processo.BlocosMemoria.push(bloco);
//           requisicao.Alocado = true;
//         } else {
//           if (this.hasSpaceForNewBlock(requisicao.getRequisicao())) {
//             this.CriarBloco(requisicao);
//           }
//         }
//       } else {
//         if (this.hasSpaceForNewBlock(requisicao.getRequisicao())) {
//           this.CriarBloco(requisicao);
//         }
//       }
//     }
//   }

//   CriarBloco(requisicao) {
//     let novoBloco = new memoryBlock(requisicao);
//     novoBloco.blocoID = this.MemoryVM.NextBlocoId++;
//     novoBloco.NextBloco = null;
//     novoBloco.tamanhoUsado = novoBloco.getTamanho();

//     this.MemoryVM.MemoriaOcupada += novoBloco.getTamanho();
//     this.MemoryVM.MemoriaOcupadaPorBlocos += novoBloco.getTamanho();

//     if (this.UltimoBloco) {
//       this.UltimoBloco.NextBloco = novoBloco;
//     } else {
//       this.TodosOsBlocos = novoBloco;
//     }
//     this.UltimoBloco = novoBloco;

//     requisicao.ProcessoViewModel.Processo.BlocosMemoria.push(novoBloco);

//     requisicao.Alocado = true;
//   }


// }
