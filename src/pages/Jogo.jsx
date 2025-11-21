import Header from "../components/Header"
import { Button_nav, Button_jogar } from "../components/Button"
import { H1, H2 } from '../components/Texto'
import jogo from "../assets/jogo.png"

export function Jogo() {
    return(
        <div className='dark:bg-darkpreto dark:text-white min-h-screen '>
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />
            <div className="flex flex-col md:flex-row  justify-center items-start gap-10 md:gap-30 px-10 py-10 md:py-20 ">
                <div className="max-w-[600px] flex flex-col gap-6">
                    <H1>RecycleX</H1>
                    <H2>Em "RecycleX", o jogador assume o papel de um aventureiro corajoso que chega a uma ilha paradisíaca devastada pela poluição. A praia, antes cheia de vida, está agora tomada por lixo e estranhos monstros formados por resíduos, que ameaçam o equilíbrio natural do local.<br/>
    A missão do personagem é limpar a praia, coletando os lixos espalhados e enfrentando as criaturas monstruosas feitas de detritos. Ao se aventurar pela ilha, ele desvenda passagens escondidas e mistérios — mas tudo isso serve apenas como um pretexto para chegar ao verdadeiro desafio: o chefão final, uma criatura gigantesca e perigosa, formada pelos resíduos mais tóxicos acumulados na ilha.<br/>
    "RecycleX" combina ação, aventura e conscientização ambiental, mostrando a importância de combater a poluição e preservar a natureza.</H2>
                    
                    <a href="https://youtube.com/shorts/WkNf9L0be8o?si=D6kmCqPl1X4qSYsB" target="_blank" rel="noopener noreferrer">
                        <Button_nav text="Veja o vídeo"/>
                    </a>
                </div>

                <div className="relative">
                   <img src={jogo} alt="Jogo RecycleX"  /> 

                    <a href="https://gd.games/games/13ffbb48-f305-4d3a-afda-7cddf9c767cb" target="_blank" rel="noopener noreferrer">
                        <Button_jogar text="Jogar"/>
                    </a>
                   
                </div>
                
            </div>
        </div> 
    )
}