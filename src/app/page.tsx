'use client'
import {api} from '../services/api'

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
    <Hero />
    </>
  )
}
