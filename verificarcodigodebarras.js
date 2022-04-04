// Nome: Adriel Escorcio Monteiro
// Universidade: Universidade Federal do Pará
// Curso: Bacharel em Sistemas de Informação
// Semestre atual: Sétimo semestre

import  {verificarOrigemDestino, verificarProduto, 
        verificarVendedor, verificarOrigemProduto,
        quantidadePacotes,
        listarPacotesDestino,
        listarPacotesDeVendedor,
        listarPacotesDestinoTipo,
        verificarPacostesCentroOesteNorte} from './funcoes.js'

const codigoDeBarras = {
    pacote1: '288355555123888', 
    pacote2: "335333555584333", 
    pacote3: '223343555124001',
    pacote4: '002111555874555', 
    pacote5: '111188555654777', 
    pacote6: '111333555123333', 
    pacote7: '432055555123888', 
    pacote8: '079333555584333', 
    pacote9: '155333555124001', 
    pacote10: '333188555584333', 
    pacote11: '555288555123001', 
    pacote12: '111388555123555', 
    pacote13: '288000555367333', 
    pacote14: '066311555874001', 
    pacote15: '110333555123555', 
    pacote16: '333488555584333', 
    pacote17: '455448555123001', 
    pacote18: '022388555123555', 
    pacote19: '432044555845333', 
    pacote20: '034311555874001'
    }

var quantidadePacotesRegiao = { "Centro-Oeste": 0, Norte: 0, Nordeste: 0, Suldeste: 0, Sul: 0 };
var pacotesOriSulBrinquedos = []
var pacotesValidos = []
var pacotesInvalidos = []
var produtosValidos = ['001','111','333','555','888']
var regioes = ['Norte', 'Nordeste', 'Centro-Oeste', 'Suldeste', 'Sul']
var vendedores = []

var i = 1
while ( i <= Object.keys(codigoDeBarras).length) {

    let inicial = 0
    let final = 3
    let verificacoes = 0
    var checagemOrigemProduto = true
    var checagemProduto = true
    var checagemVendedor = true
    var checagemRegiao = true

   
    console.log('=========================================================')
    

    for (let index = 0; index < codigoDeBarras['pacote'+ i].length; index += 3) {
        
        if(index == 0)
            var codPacote = codigoDeBarras['pacote'+i]
            

        var valorExtraido = codigoDeBarras['pacote'+i].substring(inicial,final)
       
        switch (verificacoes) {
             case 0:
                var codRegiaoOrigem = valorExtraido
                var regiaoOrigem = verificarOrigemDestino(valorExtraido)

                if (regiaoOrigem === true) {
                    checagemRegiao = !regiaoOrigem
                 }
                  break;
             case 1:
                 var codRegiaoDestino = valorExtraido
                 var regiaoDestino = verificarOrigemDestino(valorExtraido)

                 if (regiaoDestino === true) {
                    checagemRegiao = !regiaoDestino
                 } else {
                    quantidadePacotes(regiaoDestino, quantidadePacotesRegiao, regioes)
                 }

                 break;
             case 2:
                
                 break;
             case 3:
                 var codVendedor = valorExtraido
                 
                 if(verificarVendedor(valorExtraido))
                     checagemVendedor = false
                 
                 break;
             case 4:
                 var codProduto = valorExtraido
                 
                 if(verificarProduto(valorExtraido, regiaoOrigem, pacotesOriSulBrinquedos))
                     checagemProduto = false
                 
                if(produtosValidos.includes(codProduto))
                    if(verificarOrigemProduto(codRegiaoOrigem, valorExtraido, pacotesOriSulBrinquedos, codigoDeBarras['pacote'+i]))
                        checagemOrigemProduto = false

                 break;
             default:
                 break;
        }
        
        inicial += 3
        final += 3
        verificacoes++
    }

    

    if ((checagemProduto === false ) || (checagemOrigemProduto === false) || (checagemVendedor === false) || (checagemRegiao === false) ){
        
         pacotesInvalidos.push({codProduto, codVendedor, regiaoDestino, regiaoOrigem, codPacote})
        
    } else {
        
         pacotesValidos.push({codProduto, codVendedor, regiaoDestino, regiaoOrigem, codPacote})

         if(!vendedores.includes(codVendedor)){
            vendedores.push(codVendedor)
         }
        
     }

    i++

    console.log('=========================================================')
}


    console.log('Pacotes Invalidos')
    console.log(pacotesInvalidos)

    console.log('=========================================================')

    console.log('Pacotes Validos')
    console.log(pacotesValidos)

    console.log('=========================================================')

    console.log('Pacotes Por Destino')
    listarPacotesDestino(pacotesValidos)

    console.log('=========================================================')

    console.log('Pacotes Por Vendedor')
    listarPacotesDeVendedor(vendedores, pacotesValidos)

    console.log('=========================================================')
    console.log('=========================================================')
    console.log('Pacotes Por Destino e Tipo')
    listarPacotesDestinoTipo(pacotesValidos, produtosValidos, regioes)
    console.log('=========================================================')
    console.log('=========================================================')

    console.log('Pacotes com Destino ao Norte que passam pelo Centro-Oeste')
    verificarPacostesCentroOesteNorte(pacotesValidos)

    console.log('=========================================================')
    
    console.log('Pacote vindo do sul e o conteudo é um Brinquedo')
    console.log(pacotesOriSulBrinquedos)

    console.log('=========================================================')

    console.log('Quantidade de Pacotes por Região de Destino')
    console.log(quantidadePacotesRegiao)

