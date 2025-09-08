import { Link } from "react-router-dom"
import Header from "../components/Header"
import { H1, H2 } from '../components/Texto'


export function Referencias() {
    return(
        <div  className="dark:bg-darkpreto min-h-screen  dark:text-white">
            <div>
                <Header/>
            </div>
            <div className="h-[52px] md:h-[120px]" />
            
            <div className="flex flex-col justify-center px-6 md:px-50">
                <section className=" mt-13 md:mt-30 mb-10">
                    <H1>Referências</H1>
                </section>
                
            <H2>LIMA, Raphael Silva; CAVALCANTE, Wilson Aparecido. Panorama da reciclagem no Brasil: perspectivas socioeconômicas e ambientais. Revista Científica Multidisciplinar Núcleo do Conhecimento, v. 6, n. 9, p. 113-135, 2021. Disponível em: <Link to="https://www.nucleodoconhecimento.com.br/engenharias/panorama-da-reciclagem" className=" hover:underline cursor-pointer">https://www.nucleodoconhecimento.com.br/engenharias/panorama-da-reciclagem</ Link><br/><br/>
            
SANTOS, Aline dos; CAMPOS, Larissa. Gestão dos resíduos sólidos orgânicos urbanos no Brasil: do ordenamento jurídico à realidade. Revista Brasileira de Gestão Ambiental, v. 16, n. 1, p. 130-144, 2022. Disponível em: <Link to="https://www.rbga.uft.edu.br/index.php/rbga/article/view/4219" className=" hover:underline cursor-pointer"> https://www.rbga.uft.edu.br/index.php/rbga/article/view/4219</Link><br/><br/>

MENDES, Patrick dos Santos et al. Panorama dos principais materiais reciclados no Brasil. Revista Brasileira de Engenharia Ambiental, v. 17, n. 3, p. 51-66, 2023. Disponível em: <Link to="https://revista.revistaambiental.eng.br/index.php/revista/article/view/502" className=" hover:underline cursor-pointer">https://revista.revistaambiental.eng.br/index.php/revista/article/view/502</Link><br/><br/>

FONSECA, Lúcia Helena Araújo. Reciclagem: o primeiro passo para a preservação ambiental. Centro Universitário Barra Mansa, 2013. Disponível em: <Link to="https://semanaacademica.org.br/system/files/artigos/reciclagem.pdf" className=" hover:underline cursor-pointer"> https://semanaacademica.org.br/system/files/artigos/reciclagem.pdf</Link></H2>
            </div>
        </div> 
    )
}