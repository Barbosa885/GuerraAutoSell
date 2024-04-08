import Image from 'next/image' 
import Logo from '../../public/images/logos/LogoGGbranco_amarelo.png'
import Sandero from '../../public/images/carsIMG/sandero.png'
import Btn from './Btn'

export default function Hero() {
  return (
    <div className="flex items-center min-h-screen justify-center bg-gradient-to-b from-black to-blue-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 md:mr-4 space-y-6 text-center md:text-left">
          <Image src={Logo} alt="Logo da Guerra Consórcios" className="h-auto mx-auto"/>
          <h1 className="text-4xl md:text-5xl font-semibold"><span className="text-yellow-500">Seu carro novo</span> está mais perto do que nunca!</h1>
          <p className="text-lg md:text-xl font-regular">Financie e conquiste a liberdade de um carro novo com parcelas que cabem no seu bolso. <span className="text-yellow-400">Simule já!</span></p>
          <Btn text="Busque seu veículo" className="bg-indigo-500 text-lg font-bold"/>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 hidden md:block">
          <Image src={Sandero} alt="Carro renault sandero" className="w-full h-auto"/>
        </div>
      </div>
    </div>
  )
}
