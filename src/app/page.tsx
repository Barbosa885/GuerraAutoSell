'use client'
import Image from 'next/image'
import Equipe from '../../public/images/equipe.png'
import BBLogo from '../../public/images/logos/Frame 16.svg'
import GGLogo from '../../public/images/logos/Prancheta 2GUERRAGRUPO.png'

// Componentes
import {Nav, Hero, Input, Btn} from '../components'

export default function Home() {

  return (
    <>
      <Nav />
      <section>
        <Hero />
      </section>
      {/* Quem somos? */}
    <section id="quem-somos" className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black py-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 md:mr-4">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-yellow-400">Quem somos?</h1>
            <p className="text-lg md:text-xl font-light">
              <span className="font-medium">Somos representantes credenciados às mais sólidas administradoras do país </span>
              (Banco do Brasil Consórcios - BB Consórcios, Itaú Consórcios e CNP Consórcio), todas reguladas pelo Banco Central do Brasil.
              <br/><br/>
              Conte com a nossa equipe para entender o funcionamento do consórcio, como utilizar e a melhor forma de contemplar a sua cota.
              <span className="text-yellow-400">Prestamos assessoria exclusiva antes, durante e após a contratação.</span>
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Image src={GGLogo} alt="Logo do grupo guerra" className="text-white w-12" />
              <Image src={BBLogo} alt="Logo do Banco do Brasil" className="text-white w-6" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 md:block hidden">
          <Image src={Equipe} alt="Equipe da Guerra Consórcios" className="w-full h-auto" />
        </div>
      </div>
    </section>
      {/* Contato */}
      <section id="contato" className="flex items-center h-screen justify-center">
        <Image src={GGLogo} alt="Logo do grupo guerra" className="text-white hidden md:block" width={300} />
        <div className="w-1/2 space-y-4 flex flex-col items-center justify-center">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-semibold">Fale conosco</h1>
          <Input type="Nome" label="Nome"/>  
          <Input type="Email" label="Email" placeholder="exemplo@email.com"/>  
          <Input type="Mensagem" label="Mensagem"/>
            <Btn text="Enviar" className="w-1/2 text-white font-bold self-end" color="warning"/>
        </div>
      </section>
    </>
  )
}
