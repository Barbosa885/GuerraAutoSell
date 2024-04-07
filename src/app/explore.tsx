'use client'
import Image from 'next/image'
import Logo from '../../public/images/logos/LogoGGbranco_amarelo.png'
import {api} from '../services/api'

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
    <div className="flex h-screen bg-gradient-to-b from-zinc-900 to-indigo-900">
      <div className="text-xl flex p-6">
        <Image src={Logo} alt="Logo" className="object-fill"/>
      </div>
    </div>
  )
}
