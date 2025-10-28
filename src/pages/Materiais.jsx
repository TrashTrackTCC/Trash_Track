import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import { H1, H2, H2_btn } from '../components/Texto'
import { Button_materiais } from "../components/Button"
import iconeEstrela from "../assets/iconeestrela.png"
import lixeira from "../assets/lixeira.png"

import material_kitarduino from "../assets/material_kitarduino.png"
import material_esp32 from "../assets/material_esp32.png"
import material_camera from "../assets/material_camera.png"
import material_ftdi from "../assets/material_ftdi.png"

export function Materiais() {
  const scrollRef = useRef(null)

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
  const scrollRight = () => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })

  // Produtos direto no arquivo
  const materiais = [
    {
      id: 1,
      nome: "Kit Iniciante V8 para Arduino",
      preco: "R$ 179,45",
      avaliacao: "5,0",
      imagem: material_kitarduino,
      descricao: `Nós sabemos que para aprender qualquer plataforma não basta somente ter uma caixa cheia de componentes sem nenhuma instrução, e com Arduino isso não poderia ser diferente. É por isso que para alavancar seus estudos com Arduino, o Kit Iniciante V8 é perfeito para quem está iniciando. Você terá toda a base de conhecimento, aprenderá como funciona uma protoboard, como ler sensores de temperatura e luminosidade, irá controlar servo-motores e muito mais!
            Além de aprender a mexer com a placa, você vai entender como funciona a lógica de programação e aprender a programar na linguagem C/C++ com tutoriais bem explicados que ensinam passo a passo!
            E também, um manual online desenvolvido exclusivamente para esse Kit, que irá te guiar desde os primeiros passos com a placa até experimentos divertidos com vários sensores, laser, servo-motor e muito mais!`
    },
    {
      id: 2,
      nome: "ESP32-CAM com Gravador Integrado",
      preco: "R$ 75,90",
      avaliacao: "4,9",
      imagem: material_esp32,
      descricao: `A placa mais querida para fazer projetos com câmera e ESP32 em sua mais nova versão: agora acompanhada de um gravador integrado. Agora não é mais necessário usar uma placa conversora USB x Serial a parte, essa já possui tudo o que você precisa para gravar códigos.
      Esta placa também conta com o móulo ESP32 e uma câmera OV2640 de 2MP, porém, não possui slot para cartão MicroSD. Ideal para projetos de monitoramento, onde será possível tirar fotos e filmar, enviando essas imagens através da internet e criar uma verdadeira câmera IP com os recursos que precisar. Uma placa perfeita para projetos que necessitem de poder de processamento com uma câmera.
      A câmera não vai conectada à placa; portanto, você deve abrir com cuidado o conector da câmera na placa, inserir o cabo flat da câmera e fechar o conector.`
    },
    {
      id: 3,
      nome: "Módulo de câmera OV2640",
      preco: "R$ 48,10",
      avaliacao: "5,0",
      imagem: material_camera,
      descricao: `O sensor de imagem OV2640 tem 2 milhões de pixels (1632x1232 pixels), seu tamanho é pequeno, a tensão de trabalho é baixa, e fornece todas as funções de uma câmera UXGA de chip único e processador de imagem. Através do controle de barramento SCCB, ele pode produzir dados de amostragem de 10 bits de várias resoluções na forma de quadro inteiro, sub-amostragem, janelas, etc. A imagem UXGA máxima deste produto é de 15 quadros por segundo. O usuário pode controlar totalmente a qualidade da imagem, formato dos dados e transmissão. Todas as funções de processamento incluindo curva gama, balanço de branco, saturação, croma, etc. podem ser programadas através da interface SCCB. O sensor de imagem OmmiVision usa tecnologia de sensor exclusiva para melhorar a qualidade da imagem e obter imagens coloridas claras e estáveis, reduzindo ou eliminando defeitos ópticos ou eletrônicos, como ruído de padrão fixo, tailing, flutuante, etc.`
    },
    {
      id: 4,
      nome: "Módulo FTDI",
      preco: "R$ 21,90",
      avaliacao: "4,7",
      imagem: material_ftdi,
      descricao: `O módulo FTDI é usado para comunicação USB-TTL. Perfeito para programar ESP8266, ESP32 e Arduino Pro Mini.`
    }
  ]

  return (
    <div className="min-h-screen dark:bg-darkpreto dark:text-white relative">
      <Header />
      <div className="h-[52px] md:h-[120px]" />

      <div className="flex flex-col justify-center items-center px-4 md:px-20 p-5 md:p-10">
        <H1>Materiais Utilizados</H1>

        <div className="relative bg-white dark:bg-darkpreto rounded-[10px] border dark:border-white border-black-30 w-full md:w-[1301px] h-full p-5 md:p-10 flex flex-col mt-5 md:mt-10 overflow-hidden items-center">

          {/* Botões de rolagem */}
          <button
            onClick={scrollLeft}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow hover:scale-105 transition"
          >
            ❮
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-3 rounded-full shadow hover:scale-105 transition"
          >
            ❯
          </button>

          {/* Carrossel */}
          <div className="w-full flex justify-center">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12"
            >
              {materiais.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 bg-white dark:bg-darkpreto rounded-[10px] border dark:border-white border-black-30 w-[352px] md:h-[437px] p-6 flex flex-col items-center pt-10"
                >
                  <img src={item.imagem} alt={item.nome} className="md:w-50 w-65 mb-4 mx-auto" />

                  <div className="flex justify-between items-center w-full mb-1 mt-2">
                    <div className="flex flex-col text-left">
                      <H2_btn>{item.nome}</H2_btn>
                      <H2>{item.preco}</H2>
                    </div>
                    <div className="flex items-center gap-1 mb-6">
                      <img src={iconeEstrela} alt="Ícone Estrela" className="h-[15px] md:h-[30px]" />
                      <H2>{item.avaliacao}</H2>
                    </div>
                  </div>

                  <div className="w-full text-left mt-2">
                    <Link to="/ver-mais" state={item}>
                      <Button_materiais text="Ver mais" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valor total */}
          <div className="mt-8 pb-10 sm:px-12 flex gap-2 justify-center">
            <H2_btn>Valor Total:</H2_btn>
            <H2>R$ 325,35</H2>
          </div>

          <img
            src={lixeira}
            alt="Imagem da Lixeira Automatizada"
            className="absolute md:right-2 right-1.5 md:bottom-[-14px] bottom-5 w-[100px] sm:w-[120px]"
          />
        </div>
      </div>
    </div>
  )
}
