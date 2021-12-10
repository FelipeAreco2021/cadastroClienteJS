 let produtos =  []
export default {
    salvar: (produto) => {
        produtos.push(produto)
    },
    remover: (index) =>{
         produtos.splice(index, 1)   
    },
    listar: () => {
        return produtos
        
    }
}