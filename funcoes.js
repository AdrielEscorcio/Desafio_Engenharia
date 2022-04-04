// Nome: Adriel Escorcio Monteiro
// Universidade: Universidade Federal do Pará
// Curso: Bacharel em Sistemas de Informação
// Semestre atual: Sétimo semestre

export function verificarOrigemDestino(codRegiao){

    let regiaoOrigemDestino
    let regiao
    
    if((codRegiao >=  201) & (codRegiao <= 299)){
        
        regiaoOrigemDestino = "Cidade " + codRegiao + ", Região Centro-Oeste"
        console.log(regiaoOrigemDestino)
        return regiao = "Centro-Oeste"

    } else if ((codRegiao >=  300) & (codRegiao <= 399)){
        
        regiaoOrigemDestino = "Cidade " + codRegiao + ", Região Nordeste"
        console.log(regiaoOrigemDestino)
        return regiao = "Nordeste"

    } else if ((codRegiao >=  400) & (codRegiao <= 499)) {
        
        regiaoOrigemDestino = "Cidade " + codRegiao + ", Região Norte"
        console.log(regiaoOrigemDestino)
        return regiao = "Norte"

    } else if ((codRegiao >=  1) & (codRegiao <= 99)) {
        
        regiaoOrigemDestino = "Cidade " + codRegiao + ", Região Suldeste"
        console.log(regiaoOrigemDestino)
        return regiao = "Suldeste"

    } else if ((codRegiao >=  100) & (codRegiao <= 199)) {
        
        regiaoOrigemDestino = "Cidade " + codRegiao + ", Região Sul"
        console.log(regiaoOrigemDestino)
        return regiao = "Sul"

    } else {
        regiaoOrigemDestino = "Região Invalida"
        console.log(regiaoOrigemDestino)
        return true
    }  

}

export function quantidadePacotes(regiaoDestino, quantidadePacotesRegiao, regioes){

    if(regioes.includes(regiaoDestino)){

        let quantidade = quantidadePacotesRegiao[regiaoDestino]
            quantidade++;
            quantidadePacotesRegiao[regiaoDestino] = quantidade
    }
        
}



export function verificarProduto(codProduto){

    let produto;

    if(codProduto == '001'){
        
        produto = "Joias"
        console.log(produto)

    } else if (codProduto == '111'){
        
        produto = "Livros"
        console.log(produto)

    } else if (codProduto == '333'){
        
        produto = "Eletronicos"
        console.log(produto)

    } else if (codProduto == '555'){
        
        produto = "Bebidas"
        console.log(produto)

    } else if (codProduto == "888"){

        produto = "Brinquedos"    
        console.log(produto)

    } else {
        produto = "Produto Invalido"
        console.log(produto)
        return true;
    }

}

export function verificarVendedor(codRegiao){
    let vendedoresInrregulares = [367]

    for (let index = 0; index < vendedoresInrregulares.length; index++) {
        if (codRegiao == vendedoresInrregulares[index]){
            console.log("Vendedor esta inrregular")
            return true
        } else {
            console.log("Vendedor esta regularizado")
        }
}
}

export function verificarOrigemProduto(regiaoOrigem, produto, pacotesOriSulBrinquedos, codigoDeBarras){

    if ((regiaoOrigem >=  201) & (regiaoOrigem <= 299)){
        if (produto == '001'){
            console.log("Pacote Invalido, Joais vindo do Centro-Oeste")
            return true
        } else {
            console.log("Produto Valido")    
        }
    } else  if ((regiaoOrigem >=  100) & (regiaoOrigem <= 199)){
        if (produto == "888"){ 
            console.log("Produto Valido")
            pacotesOriSulBrinquedos.push(codigoDeBarras)
        } else {
            console.log("Produto Valido")
            }
    } else {
        console.log("Produto Valido")
    }
}

export function listarPacotesDestino(pacotesValidos){

    var sul = pacotesValidos.filter(function(obj){ return obj.regiaoDestino == 'Sul' })
    console.log(sul)

    var suldeste = pacotesValidos.filter(function(obj){ return obj.regiaoDestino == 'Suldeste' })
    console.log(suldeste)

    var centroOeste = pacotesValidos.filter(function(obj){ return obj.regiaoDestino == 'Centro-Oeste' })
    console.log(centroOeste)

    var nordeste = pacotesValidos.filter(function(obj){ return obj.regiaoDestino == 'Nordeste' })
    console.log(nordeste)

    var norte = pacotesValidos.filter(function(obj){ return obj.regiaoDestino == 'Norte' })
    console.log(norte)

}

export function listarPacotesDeVendedor(vendedores, pacotesValidos){
    
    for (let index = 0; index < vendedores.length; index++) {
        
        var pacotesVendedor = pacotesValidos.filter( function(obj){ 
            return obj.codVendedor == vendedores[index]})
        console.log(pacotesVendedor)

    }

}

export function listarPacotesDestinoTipo(pacotesValidos, produto, regiao){
    
    for (let index = 0; index < regiao.length; index++) {
        for (let index2 = 0; index2 < produto.length; index2++){
            
            var pacotesDestinoTipo = pacotesValidos.filter( function(obj){ 
                return (obj.codProduto == produto[index2]) & (obj.regiaoDestino == regiao[index])})
            console.log('Região de Destino '+regiao[index] + ', Produto ' + produto[index2])
            console.log(pacotesDestinoTipo)

        }
    }
}

export function verificarPacostesCentroOesteNorte(pacotesValidos){
            
        var pacotesCentroNorte = pacotesValidos.filter( function(obj){ 
            return (obj.regiaoDestino == 'Norte') || (obj.regiaoDestino == 'Centro-Oeste')})
        console.log(pacotesCentroNorte)

        console.log('Ordem de carga no caminhão Passando pelo Centro-Oeste com destino ao Norte')
        var ordemPacotesCentroNorte = []
        ordemPacotesCentroNorte.push(pacotesValidos.filter(function(obj) {
            return (obj.regiaoDestino == 'Norte') & (obj.codProduto != '001') } ))
        ordemPacotesCentroNorte.push(pacotesValidos.filter(function(obj) {
            return (obj.regiaoDestino == 'Norte') & (obj.codProduto == '001') } ))
        ordemPacotesCentroNorte.push(pacotesValidos.filter(function(obj) {
            return (obj.regiaoDestino == 'Centro-Oeste') & (obj.codProduto != '001') } ))
        ordemPacotesCentroNorte.push(pacotesValidos.filter(function(obj) {
            return (obj.regiaoDestino == 'Centro-Oeste') & (obj.codProduto == '001') } ))

        console.log(ordemPacotesCentroNorte)
}

