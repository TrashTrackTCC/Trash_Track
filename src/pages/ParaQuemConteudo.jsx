import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H2_btn, H2_titulo, P } from '../components/Texto'
import { Button_paraquem } from "../components/Button"
import { data } from "../data/paraquem"

export function ParaQuemConteudo() {
    const [selecao, setSelecao] = useState("Reciclagem")
    const conteudo = data[selecao]
    const botoes = Object.keys(data)

    return (
        <div className="dark:bg-darkpreto min-h-screen">
            <Header />

            {/* Espaço para compensar o header fixo */}
            <div className="h-[52px] md:h-[120px]" />

            {/* Título */}
            <section className="text-verdemusgo px-10 sm:px-[15%] mt-10 mb-2">
                <H2_btn>Para quem?</H2_btn>
            </section>

            {/* Botões de seleção */}
            <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center sm:gap-0.5 gap-1 overflow-x-auto sm:overflow-visible px-10 sm:px-[15%] py-2">
                <Link to="/para-quem">
                    <Button_paraquem text="Todos" />
                </Link>
                {botoes.map((item) => (
                    <Button_paraquem
                        key={item}
                        text={item}
                        onClick={() => setSelecao(item)}
                    />
                ))}
            </div>

            {/* Conteúdo principal */}
            <div className="px-10 sm:px-[15%] flex flex-col lg:flex-row gap-10 mt-5">
                {/* Imagens */}
                <div className="flex flex-col gap-3 w-full lg:w-1/2">
                    <img src={conteudo.img1} alt="Imagem 1" />
                    <img src={conteudo.img2} alt="Imagem 2" />
                </div>

                {/* Texto */}
                <div className="w-full flex flex-col dark:text-white">
                    <H2_titulo>{conteudo.titulo}</H2_titulo>
                    <section className='bg-verdemusgo h-1 rounded-full mt-2 mb-4'></section>
                    <P>
                        {conteudo.texto.map((paragrafo, index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                    </P>
                </div>
            </div>
        </div>
    )
}
