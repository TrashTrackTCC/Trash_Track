import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { H1, H2, H2_btn, H2_titulo, P } from '../components/Texto'
import  Button  from '../components/Button'

export default function Contato() {
    return(
        <div className="flex flex-col sm:flex-row w-full border-t border-black dark:border-white dark:text-white">
            <div className="w-full sm:w-3/10 dark:bg-darkpreto bg-white p-4 sm:p-10 flex flex-col ">
                <Link to="/"><img src={logo} alt="TrashTrack" className='md:h-[47px] h-[21px]'/></Link>

                <div className='flex flex-col px-3 md:px-5 gap-1'>
                    <section className="text-verdemusgo mt-3 mb-3 ">
                        <H2_btn>trashtrack.contact@gmail.com</H2_btn>
                    </section>
                    <H2 className='mb-2'>UNASP SP - Estr. de Itapecerica, 5859 - Capao Redondo, São Paulo - SP, 05890-020</H2>
                    <H2_btn>Menu</H2_btn>

                    <H2><Link to="/para-quem" className=" hover:underline cursor-pointer">Para quem</Link></H2>
                    <H2><Link to="/como-funciona" className=" hover:underline cursor-pointer">Como funciona</Link></H2>
                    <H2><Link to="/materiais" className=" hover:underline cursor-pointer">Materiais</Link></H2>
                    <H2><Link to="/jogo" className=" hover:underline cursor-pointer">Jogo</Link></H2>
                    <H2><Link to="/quem-somos" className=" hover:underline cursor-pointer">Quem Somos?</Link></H2>
                    <H2><Link to="/referencias" className=" hover:underline cursor-pointer">Referências</Link></H2>
                </div>
            </div>

            <div className="w-full sm:w-7/10 bg-verdeclaro dark:bg-darkpretinho p-4 sm:p-10 flex flex-col justify-center items-center">
                <div className="w-full max-w-[1100px] text-left px-6 ">

                
                    <div className='flex gap-5'>
                        <div className="w-full sm:w-1/2">
                            <H2>Nome</H2>
                            <input type="name" className="w-full md:h-[50px] h-[30px] mb-2 border border-verdenormal rounded-[10px] p-4"/>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <H2>Sobrenome</H2>
                            <input type="name" className="w-full  md:h-[50px] h-[30px] mb-2 border border-verdenormal rounded-[10px] p-4"/>
                        </div>
                    </div>
                    
                    <H2>E-mail</H2>
                    <input type="email" className="w-full md:h-[50px] h-[30px] mb-2 border border-verdenormal rounded-[10px] p-4 "/>
                    <H2>Mensagem</H2>
                    <textarea name="mensagem" className="w-full  md:h-[197px] mb-2 border border-verdenormal rounded-[10px] p-4 resize-none"></textarea>

                    
                    <Button text={"Enviar"} />
                    
                </div>    
            </div>
        </div>
    )
}