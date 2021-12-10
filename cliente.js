let clientes = []

export default {
    salvar: (cliente) => {
        clientes.push(cliente)
    },
    remover: (index) => {
        clientes.splice(index, 1)
    },
    listar: () => {
        return clientes
    },
    buscarPorNome: (textoBusca) => {
     return   clientes.filter((elemento) => {
            return elemento.nome.toUpperCase().includes(textoBusca.toUpperCase())
        })
    }

}