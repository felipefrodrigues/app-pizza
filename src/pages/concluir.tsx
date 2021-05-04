import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Pontos from '../services/pontos'
import { Creators } from '../state/ducks/steps'
import { Creators as CreatorsPoints } from '../state/ducks/points'
import { Creators as CreatorsCart } from '../state/ducks/cart'
import Layout from '../components/layout'
import Correct from '../assets/svg/correct.svg'

import * as S from '../styles/pages/concluir'

function Concluir(): JSX.Element {
  const dispatch = useDispatch()
  const { id, pontos } = useSelector((state) => state.pointsState)
  const { cart } = useSelector((state) => state.cartState)
  const router = useRouter()

  async function inserirPontos() {
    let totalPontos = pontos

    cart.map((item) => {
      if (item.pontos) {
        totalPontos += item.pontos
      }
    })

    const apiPontos = new Pontos()
    await apiPontos.alterarPontos(id, totalPontos)
    dispatch(CreatorsPoints.setPoints(totalPontos))
    reset()
  }

  function reset() {
    dispatch(Creators.resetStep())
    dispatch(CreatorsCart.resetCart())
  }

  function redirect() {
    router.push('/')
  }

  useEffect(() => {
    if (cart.length === 0) {
      redirect()
    } else {
      inserirPontos()
    }
  }, [])

  return (
    <Layout>
      <>
        <Head>
          <meta property="og:title" content="My page title" key="title" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
          <title>Concluir - PizzaStoom</title>
        </Head>
        <S.Container>
          <Correct />
          <S.Title>Pedido concluido</S.Title>
          <br />
          <S.ButtonSecundary type="button" onClick={() => redirect()}>Voltar para o inicio</S.ButtonSecundary>
        </S.Container>
      </>
    </Layout>
  )
}

export default Concluir
