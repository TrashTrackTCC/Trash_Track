import Header from "../components/Header"
import Contato from "../components/Contato"
import { H1, H2, H2_titulo } from '../components/Texto'

export function VerMais() {
    return(
        <div className="dark:bg-darkpreto min-h-screen  dark:text-white">
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />

            <div className="flex flex-col md:flex-row md:gap-50 md:items-start px-6 max-w-[1227px] justify-center mx-auto md:mt-25 mt-10 mb-6 md:mb-10">
                <img src="./src/assets/material.png" alt="Material Ultilizado" className="h-[471px]"/>
                <section className="flex flex-col justify-center gap-3 mt-10 dark:bg-darkcinza bg-cinza rounded-[10px] p-10">
                    <H1>Placa Uno R3 sem Cabo USB</H1>
                    <H2_titulo>R$ 53,90</H2_titulo>
                </section>
            </div>
            <div className="">
                <section className="bg-verdenormal md:w-[182px] w-[112px] md:h-[81px] h-[53px] rounded-[10px] text-white justify-center items-center flex ">
                    <H2>Descrição</H2>
                </section>
                <section className="bg-cinza dark:bg-darkcinza w-full px-7 md:px-15 p-10">
                    <H2>Precisando testar o conceito de uma placa UNO R3 baseada nas placas Arduino em seu projeto? Para um primeiro protótipo este produto cai como uma luva. Por ser um produto compatível, é ótimo para os primeiros protótipos. Posteriormente, para um produto final, é aconselhável utilizar uma BlackBoard UNO R3, que é fabricada no Brasil, possui a qualidade dos produtos da RoboCore e 12 meses de garantia (a placa desta página possui 3 meses de garantia).<br/>
                    <br/>
                    Nesta placa, você encontrará as principais funcionalidades das placas Arduino, incluindo 14 pinos digitais de entrada ou saída e 6 entradas analógicas.<br/>
                    <br/>
                    Observações: Esta placa não acompanha cabo USB.</H2>
                </section>
            </div>
            <div>
                <Contato/>
            </div>
        </div>
    )
}