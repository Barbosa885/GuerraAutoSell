'use client'
import Image from 'next/image' 
import Logo from '../../public/images/logos/LogoGGbranco_amarelo.png'
import sandero from '../../public/images/carsIMG/sandero.png'
import {api} from '../services/api'

// Componentes
import {Btn, Nav} from '../components'

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
    <section>
      <Nav />
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-zinc-900 to-indigo-900">
        <div className="h-[30%]">
          <div className="">
            <Image src={Logo} alt="Logo" width={200}/>
            <h1 className="flex font-poppins font-semibold"><h1 className="text-yellow-400">Seu carro novo </h1> está mais perto do que nunca!</h1>
            <span>Financie e conquiste a liberdade de um carro novo com parcelas que cabem no seu bolso. <span className="text-yellow-400">Simule já!</span></span>
            <Btn text="Explore" className="bg-yellow-500 font-bold text-black"/>
          </div>
          <div className="flex">
            <Image src={sandero} alt="Renault sandero branco"/>
          </div>
        </div>
      </div>
    </section>
  )
}
