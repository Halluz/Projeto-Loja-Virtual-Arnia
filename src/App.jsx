import { Pagina } from "./Componentes/Pagina/estilo"
import { useState } from "react"
import PaginaProdutos from "./Componentes/PaginaProdutos"
import PaginaCarrinho from "./Componentes/PaginaCarrinho"
import PaginaPagamento from "./Componentes/PaginaPagamento"


export const TELAS = {
  paginaProdutos: 0,
  paginaCarrinho: 1,
  paginaPagamento: 2
}

function App() {
  const [trocaPagina, setTrocarPagina] = useState(TELAS.paginaProdutos)
  const [listaDeJogos, setListaDeJogos] = useState([])

  return (
    <Pagina>
      {trocaPagina === TELAS.paginaProdutos && 
          <PaginaProdutos mudarPagina={setTrocarPagina} listaDeJogos={listaDeJogos}  setListaDeJogos={setListaDeJogos} paginaAtual={trocaPagina}/>} 

      {trocaPagina === TELAS.paginaCarrinho && <PaginaCarrinho mudarPagina = {setTrocarPagina} listaDeJogos = {listaDeJogos} setListaDeJogos={setListaDeJogos} paginaAtual={trocaPagina}/>}

      {trocaPagina === TELAS.paginaPagamento && <PaginaPagamento paginaAtual={trocaPagina} mudarPagina={setTrocarPagina} listaDeJogos={listaDeJogos} />}
      {console.log("TrocaPagina: ", trocaPagina)}
    </Pagina>
  )
}

export default App
