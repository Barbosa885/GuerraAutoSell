'use client'
import {api} from '../services/api'
import Image from 'next/image'
import Equipe from '../../public/images/equipe.png'
import BBLogo from '../../public/images/logos/Frame 16.svg'
import GGLogo from '../../public/images/logos/Prancheta 2GUERRAGRUPO.png'

// Componentes
import {Btn, Nav, Hero} from '../components'

export default function Home() {

  const fetchApi = async () => {
    api
    .get("")
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err)
    })
  }

  return (
    <>
    <Nav />
    <section>
      <Hero />
    </section>
    <section className="flex items-center h-screen justify-center bg-gradient-to-b from-blue-900 to-black">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="w-[80%] mr-4">
          <div className="space-y-8">
            <h1 className="text-5xl font-semibold text-yellow-400">Quem somos?</h1>
            <p className="text-xl font-light">
              <span className="font-medium">Somos representantes credenciados às mais sólidas administradoras do país </span> (Banco do Brasil Consórcios - BB Consórcios, Itaú Consórcios e CNP Consórcio), todas reguladas pelo Banco Central do Brasil.  Conte com a nossa equipe para entender o funcionamento do consórcio, como utilizar e a melhor forma de contemplar a sua cota. <span className="text-yellow-400">Prestamos assessoria exclusiva antes, durante e após a contratação.</span>
            </p>
          </div>
          <div className="flex space-x-2">
            <Image src={GGLogo} alt="Logo do grupo guerra" className="text-white w-20" />
            <Image src={BBLogo} alt="Logo do Banco do Brasil" className="text-white" />
          </div>
        </div>
        <div className="w-1/2">
          <Image src={Equipe} alt="Equipe da Guerra Consórcios" className="h-auto"/>
        </div>
      </div>
    </section>
    </>
  )
}
