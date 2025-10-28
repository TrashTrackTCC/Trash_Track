import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H2_btn } from '../components/Texto'
import { Button_paraquem, Button_decoration } from "../components/Button"

import reciclagem from "../assets/reciclagem.png"
import escritorio from "../assets/escritorio.png"
import loja from "../assets/loja.png"
import escola from "../assets/escola.png"
import hospital from "../assets/hospital.png"
import varejo from "../assets/varejo.png"
import aeroporto from "../assets/aeroporto.png"
import posto from "../assets/posto.png"

export function ParaQuem() {
    return(
        <div className='dark:bg-darkpreto'>
            <Header />
            <div className="h-[52px] md:h-[120px]" />
            
            <div>
    
                <section className="text-verdemusgo px-10 md:px-[15%] mt-10 mb-2">
                    <H2_btn>Para quem?</H2_btn>
                </section>
                
  
                <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center sm:gap-0.5 gap-1 overflow-x-auto sm:overflow-visible px-10 md:px-[15%] py-0">
                    <Link to="/para-quem" className=''><Button_paraquem text="Todos" /></Link>
                    <Link to="/para-quem-conteudo"><Button_paraquem text="Reciclagem" /></Link>
                    <Button_paraquem text="Escritórios" />
                    <Button_paraquem text="Lojas" />
                    <Button_paraquem text="Hospitais" />  
                    <Button_paraquem text="Varejo" />
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-8 gap-y-5 px-10 md:px-[15%] mt-7 pb-7">
                    <section className="relative">
                        <img src={reciclagem} alt="Imagem Reciclagem" />
                        <Button_decoration text="Reciclagem"/>
                    </section>
                    <section className="relative">
                        <img src={escritorio} alt="Imagem Escritórios" />
                        <Button_decoration text="Escritórios"/>
                    </section>
                    <section className="relative">
                        <img src={loja} alt="Imagem Lojas" />
                        <Button_decoration text="Lojas"/>
                    </section>
                    <section className="relative">
                        <img src={escola} alt="Imagem Escolas" />
                        <Button_decoration text="Escolas"/>
                    </section>
                    <section className="relative">
                        <img src={hospital} alt="Imagem Hospitais" />
                        <Button_decoration text="Hospitais"/>
                    </section>
                    <section className="relative">
                        <img src={varejo} alt="Imagem Varejo" />                    
                        <Button_decoration text="Varejo"/>
                    </section>
                    <section className="relative">
                        <img src={aeroporto} alt="Imagem Aeroporto" />
                        <Button_decoration text="Aeroporto"/>
                    </section>
                    <section className="relative">
                        <img src={posto} alt="Imagem Posto de gasolina" />
                        <Button_decoration text="Posto de gasolina"/>
                    </section>
                </div>
            </div>
        </div> 
    )
}
