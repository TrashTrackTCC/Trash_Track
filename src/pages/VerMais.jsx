import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Contato from "../components/Contato"
import { H1, H2, H2_titulo } from '../components/Texto'

export function VerMais() {
  const location = useLocation()
  const produto = location.state

  if (!produto) {
    return (
      <div className="dark:bg-darkpreto min-h-screen flex flex-col items-center justify-center dark:text-white">
        <Header />
        <H1>Nenhum produto encontrado 😢</H1>
      </div>
    )
  }

  return (
    <div className="dark:bg-darkpreto min-h-screen dark:text-white">
      <Header />
      <div className="h-[52px] md:h-[120px]" />

      <div className="flex flex-col md:flex-row md:gap-50 md:items-start md:px-6 px-3 max-w-[1227px] justify-center mx-auto md:mt-25 mt-5 mb-6 md:mb-10">
        <img src={produto.imagem} alt={produto.nome} className="h-[471px]" />
        <section className="flex flex-col justify-center gap-3 mt-10 dark:bg-darkcinza bg-cinza rounded-[10px] p-10">
          <H1>{produto.nome}</H1>
          <H2_titulo>{produto.preco}</H2_titulo>
        </section>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-start w-full px-7 md:px-15">
            <button onClick={() => { document.getElementById("descricao")?.scrollIntoView({ behavior: "smooth" }) }} className="bg-verdenormal md:w-[182px] w-[112px] md:h-[81px] h-[53px] rounded-[10px] text-white flex justify-center items-center cursor-pointer ">
            <H2>Descrição</H2>
            </button>
        </div>

        <section id="descricao" className="bg-cinza dark:bg-darkcinza w-full px-7 md:px-15 p-10">
            <H2>{produto.descricao}</H2>
        </section>
     </div>


      <Contato />
    </div>
  )
}
