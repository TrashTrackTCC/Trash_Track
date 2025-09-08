import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H2_btn } from '../components/Texto'
import { Button_paraquem, Button_decoration } from "../components/Button"

import reciclagem from "./src/assets/reciclagem.png"
import escritorio from "./src/assets/escritorio.png"
import loja from "./src/assets/loja.png"
import escola from "./src/assets/escola.png"
import hospital from "./src/assets/hospital.png"
import varejo from "./src/assets/varejo.png"
import aeroporto from "./src/assets/aeroporto.png"
import posto from "./src/assets/posto.png"

export function ParaQuem() {
    return(
        <div className='dark:bg-darkpreto'>
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />
            
            <div >
                <section className="text-verdemusgo px-4 md:px-[15%] mt-10 mb-2">
                    <H2_btn>Para quem?</H2_btn>
                </section>
                
                <div className="flex justify-center gap-3 overflow-x-auto p-2">
                    <Link to="/para-quem" className='pl-52 md:pl-0'><Button_paraquem text="Todos" /></Link>
                    <Link to="/para-quem-conteudo"><Button_paraquem text="Reciclagem" /></Link>
                    
                    <Button_paraquem text="Escritórios" />
                    <Button_paraquem text="Lojas" />
                    <Button_paraquem text="Hospitais" />  
                    <Button_paraquem text="Varejo" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-15 gap-y-5 w-fit mx-auto mt-7 pb-7 ">
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