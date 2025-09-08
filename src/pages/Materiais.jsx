import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H1, H2, H2_btn } from '../components/Texto'
import { Button_materiais } from "../components/Button"

export function Materiais() {
    return(
        <div className=' min-h-screen dark:bg-darkpreto dark:text-white'>
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />

            <div className="flex flex-col justify-center px-4 md:px-77 p-5 md:p-10">    
                <H1 >Materiais Utilizados</H1>
        
                <div className="bg-white dark:bg-darkpreto rounded-[10px] border dark:border-white border-black-30 w-full md:w-[1301px] md:h-[590px] h-full p-5 md:p-10 flex flex-col mt-5 md:mt-10  ">
                    <div className="flex justify-center md:gap-10 gap-5 flex-wrap">

                         <div className="bg-white dark:bg-darkpreto  rounded-[10px] border dark:border-white border-black-30 w-[352px] md:h-[437px] p-6 flex flex-col items-center pt-10">
                            <img src="./src/assets/material.png" alt="Lixeira Plástica" className="w-32 mb-4 mx-auto" />

                            <div className="flex justify-between items-center w-full mb-1 mt-2">
                                <div className="flex flex-col text-left">
                                    <H2_btn>Lixeira Plástica</H2_btn>
                                    <H2>R$ 51,20</H2>
                                </div>
                                <div className="flex items-center gap-1 mb-6">
                                    <img src="./src/assets/iconeestrela.png" alt="Ícone Estrela" className="h-[15px] md:h-[30px]" />
                                    <H2>4,9</H2>
                                </div>
                            </div>

                            <div className="w-full text-left mt-4">
                                <Link to="/ver-mais"><Button_materiais text="Ver mais" /></Link>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-darkpreto rounded-[10px] border dark:border-white border-black-30 w-[352px] md:h-[437px] p-6 flex flex-col items-center pt-10">
                            <img src="./src/assets/material.png" alt="Lixeira Plástica" className="w-32 mb-4 mx-auto" />

                            <div className="flex justify-between items-center w-full mb-1 mt-2">
                                <div className="flex flex-col text-left">
                                    <H2_btn>Lixeira Plástica</H2_btn>
                                    <H2>R$ 51,20</H2>
                                </div>
                                <div className="flex items-center gap-1 mb-6">
                                    <img src="./src/assets/iconeestrela.png" alt="Ícone Estrela" className="h-[15px] md:h-[30px]" />
                                    <H2>4,9</H2>
                                </div>
                            </div>

                            <div className="w-full text-left mt-4">
                                <Button_materiais text="Ver mais" />
                            </div>
                        </div>
                        <div className="bg-white dark:bg-darkpreto rounded-[10px] border dark:border-white border-black-30 w-[352px] md:h-[437px] p-6 flex flex-col items-center pt-10">
                            <img src="./src/assets/material.png" alt="Lixeira Plástica" className="w-32 mb-4 mx-auto" />

                            <div className="flex justify-between items-center w-full mb-1 mt-2">
                                <div className="flex flex-col text-left">
                                    <H2_btn>Lixeira Plástica</H2_btn>
                                    <H2>R$ 51,20</H2>
                                </div>
                                <div className="flex items-center gap-1 mb-6">
                                    <img src="./src/assets/iconeestrela.png" alt="Ícone Estrela" className="h-[15px] md:h-[30px]" />
                                    <H2>4,9</H2>
                                </div>
                            </div>

                            <div className="w-full text-left mt-4">
                                <Button_materiais text="Ver mais" />
                            </div>
                        </div>
                    </div>
                    
                    <div className=" mt-8 pb-10 sm:px-12 flex gap-2 ">
                        <H2_btn>Valor Total:</H2_btn> 
                        <H2>R$1000</H2>
                    </div>
                    <img src="./src/assets/lixeira.png" alt="Imagem da Lixeira Automatizada" className="absolute md:right-75 right-1.5 md:bottom-20 -bottom-157 w-[100px] sm:w-[120px]" />
                </div>
            </div>
        </div> 
    )
}