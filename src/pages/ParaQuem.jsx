import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H2_btn } from '../components/Texto'
import { Button_paraquem, Button_decoration } from "../components/Button"

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
                        <img src="./src/assets/reciclagem.png" alt="Imagem Reciclagem" />
                        <Button_decoration text="Reciclagem"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/escritorio.png" alt="Imagem Escritórios" />
                        <Button_decoration text="Escritórios"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/loja.png" alt="Imagem Lojas" />
                        <Button_decoration text="Lojas"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/escola.png" alt="Imagem Escolas" />
                        <Button_decoration text="Escolas"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/hospital.png" alt="Imagem Hospitais" />
                        <Button_decoration text="Hospitais"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/varejo.png" alt="Imagem Varejo" />                    
                        <Button_decoration text="Varejo"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/aeroporto.png" alt="Imagem Aeroporto" />
                        <Button_decoration text="Aeroporto"/>
                    </section>
                    <section className="relative">
                        <img src="./src/assets/posto.png" alt="Imagem Posto de gasolina" />
                        <Button_decoration text="Posto de gasolina"/>
                    </section>
                    
                </div>
                
            </div>
        </div> 
    )
}