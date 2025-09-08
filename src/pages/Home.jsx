import Header from "../components/Header"
import { Button_home } from "../components/Button"
import { H1, H2_btn, P } from '../components/Texto'
import Contato from "../components/Contato"
import { Link } from "react-router-dom"

export function Home() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            
            <div className="h-[52px] md:h-[120px]" />
            <div className="bg-white dark:text-white text-black">
                <img src="./src/assets/home.png" alt="Imagem principal" className="w-full h-[250px] md:h-[464px] object-cover "/>

                <div className="md:h-90 bg-verdeclaro dark:bg-darkcinza p-10 space-y-4">
                    <section className="text-verdemusgo"><H2_btn >LIXEIRA INTELIGENTE</H2_btn></section>
                    <H1>Transformando a forma de gerenciar os resíduos com tecnologia inteligente</H1>
                    <P>O TrashTrack é uma lixeira inteligente com tecnologia avançada, projetada para otimizar a reciclagem em diversos ambientes. Ele identifica automaticamente o tipo de resíduo, realiza a separação correta, compacta materiais como plástico e papel, monitora o nível de enchimento e envia alertas para um gerenciamento eficiente e sustentável de resíduos.</P>

                    <Link onClick={() => document.getElementById("contato").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer">
                        <Button_home text="Contate - nos" />
                    </Link>
                </div>
            </div>

            <div id="contato">
                <Contato/>
            </div> 
        </div>

        
    )
}