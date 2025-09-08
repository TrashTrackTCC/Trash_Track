import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { Button_nav, Button_como } from "../components/Button"
import { H1, H2, H2_btn, H2_titulo, P } from '../components/Texto'

export function ComoFunciona() {
    return(
        <div className='dark:bg-darkpreto dark:text-white'>
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />
            <div className="flex flex-col md:flex-row justify-center mt-30 md:mt-10 px-4">
                <section className="bg-verdeclaro dark:bg-darkverdeclaro rounded-[30px] w-full max-w-[1227px] h-[370px] md:h-[430px] flex flex-col-reverse md:flex-row p-6 sm:p-25 gap-13 items-center">
                    <div className="flex flex-col gap-4 max-w-[600px]">
                        <section className="text-verdemusgo">
                           <H2_btn>Como funciona o TrashTrack</H2_btn> 
                        </section>
                        <H2_titulo>TrashTrack: Onde a Tecnologia Encontra a Sustentabilidade</H2_titulo>
                        <P>Nosso projeto utiliza tecnologia inovadora para tornar a reciclagem mais inteligente e eficiente. O TrashTrack combina sensores de alta precisão e automação para identificar automaticamente o tipo de resíduo descartado – seja plástico, metal, papel ou vidro.</P>
                        <section className="mt-3">
                            <Button_nav text="Veja o Vídeo"/>
                        </section>
                    </div>
                    <div>
                        <img src="./src/assets/lixeira.png" alt="Imagem da Lixeira Automatizada" className="w-[126px] md:w-[330px] -mb-15 md:mt-13" />
                    </div>
                </section>
            </div>

            <div className="flex justify-center mt-14 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-[1227px] text-center">
                    <section className="flex flex-col items-center">
                        <img src="./src/assets/identificacao.png" alt="Identificação Inteligente" className="h-16 mb-4 dark:hidden" />
                        <img src="./src/assets/identificacaodark.png" alt="Identificação Inteligente" className="h-16 mb-4 hidden dark:block" />
                        <H2_btn>Identificação Inteligente de Resíduos</H2_btn>
                        <P>O TrashTrack utiliza sensores e tecnologia avançada para reconhecer automaticamente o tipo de material descartado, garantindo uma separação precisa e eficiente dos resíduos.</P>
                    </section>
                    <section className="flex flex-col items-center">
                        <img src="./src/assets/classificacao.png" alt="Classificação Automática" className="h-16 mb-4 dark:hidden" />
                        <img src="./src/assets/classificacaodark.png" alt="Classificação Automática" className="h-16 mb-4 hidden dark:block" />
                        <H2_btn>Classificação Automática</H2_btn>
                        <P>Após a identificação, o lixo é direcionado para o compartimento correto de maneira totalmente automatizada, tornando o processo de reciclagem mais ágil.</P>
                    </section>
                    
                    <section className="flex flex-col items-center">
                        <img src="./src/assets/monitoramento.png" alt="Monitoramento Inteligente" className="h-16 mb-4 dark:hidden" />
                        <img src="./src/assets/monitoramentodark.png" alt="Monitoramento Inteligente" className="h-16 mb-4 hidden dark:block" />
                        <H2_btn>Monitoramento Inteligente</H2_btn>
                        <P>Sensores de nível detectam quando a lixeira está cheia e notificam automaticamente via LED e aplicativo.</P>
                    </section>
                </div>
            </div>


            <div className="bg-verdeescuro dark:bg-darkverdeescuro w-full p-3 md:p-13">
                <section className="text-white flex flex-col items-center mt-7 mb-9 ">
                    <H1>Manual de Instruções</H1>
                </section>
                
                <div className="flex justify-center flex-wrap gap-3 md:gap-7">
                    <section className="bg-cinza dark:bg-darkcinza rounded-[15px] w-[630px] md:h-[319px] p-10">
                        <H2_btn>1. Como ligar e desligar o sistema</H2_btn>
                        <H2>Ligar: <br />
    - Conecte o TrashTrack à energia.<br />
    - Aguarde o LED verde piscar. <br />
    Desligar:<br />
    - Pressione o botão "Power".<br />
    - Espere o LED apagar e desconecte da energia.</H2>
                    </section>
                    <section className="bg-cinza dark:bg-darkcinza rounded-[15px] w-[630px] md:h-[319px] p-10">
                        <H2_btn >2. Descartando os Resíduos</H2_btn>
                        <H2>1. Coloque o material reciclável na entrada do TrashTrack.<br />
    2. O sistema identificará automaticamente o tipo de resíduo.<br />
    3. O material será direcionado ao compartimento correto.<br />
    ⚠️ Importante: não introduza lixo orgânico ou rejeitos não recicláveis.</H2>
                    </section>
                    <section className="bg-cinza dark:bg-darkcinza rounded-[15px] w-[630px] md:h-[319px] p-10">
                        <H2_btn>3. Monitoramento de Capacidade</H2_btn>
                        <H2>
    O TrashTrack possui sensores de nível:<br />
    - Quando o compartimento estiver próximo da capacidade máxima, o LED amarelo acenderá.<br />
    - Quando o compartimento estiver cheio, o LED vermelho acenderá.<br />
    - Simultaneamente, o sistema registrará automaticamente a data e hora de enchimento.</H2>
                    </section>
                    <section className="bg-cinza dark:bg-darkcinza rounded-[15px] w-[630px] nd:h-[319px] p-10">
                        <H2_btn>4. Recomendações de Segurança</H2_btn>
                        <H2>
    - Não introduza objetos cortantes ou inflamáveis.<br />
    - Mantenha o sistema fora do alcance de crianças pequenas.<br />
    - Em caso de falha, desligue o sistema e contate a equipe responsável.</H2>
                    </section>
                </div>
            </div>

            <div className="flex justify-center p-5 md:p-10">
                <section className="bg-verdeescuro dark:bg-darkverdeescuro text-white rounded-[30px] max-w-[1220px] md:h-[388px] flex flex-col items-center justify-center gap-5 p-5 md:p-10 text-center ">
                    <H1>Tem alguma dúvida?</H1>
                    <H2>Estamos prontos para te ajudar! Envie sua mensagem e retornaremos o contato com todas as informações o mais rápido possível.</H2>
                    
                    
                    <Link to="/#contato" className="cursor-pointer">
                        <Button_como text="Entre em contato" />
                    </Link>

                    
                </section>
            </div>
        </div> 
    )
}