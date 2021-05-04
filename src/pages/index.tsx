import React, { useEffect } from 'react'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Layout from '../components/layout'
import Steps from '../components/steps'
import Ingredientes from '../services/ingredientes'
import OfertaService from '../services/oferta'
import Pontos from '../services/pontos'
import Oferta from '../components/oferta'
import Building from '../assets/svg/buildingPizza.svg'
import { Creators } from '../state/ducks/steps'
import { Creators as CreatorsPoints } from '../state/ducks/points'

import * as S from '../styles/pages/home'

export const getServerSideProps: GetServerSideProps = async () => {
  const apiIngredientes = new Ingredientes()
  const apiOferta = new OfertaService()
  const apiPontos = new Pontos()

  const [ingredientes, oferta, resultPontos] = await Promise.all([apiIngredientes.getIngredientes(), apiOferta.getOferta(), apiPontos.getPontos()])

  const maxSteps = Object.keys(ingredientes).length
  const steps = Object.keys(ingredientes)
  return {
    props: {
      ingredientes: ingredientes,
      maxSteps,
      steps,
      oferta,
      pontos: resultPontos[0],
    },
  }
}

function Home({ ingredientes, maxSteps, steps, oferta, pontos }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const dispatch = useDispatch()
  const { currentStep } = useSelector((state) => state.stepsState)

  function next() {
    dispatch(Creators.setCurrentStep(currentStep + 1))
  }

  function prev() {
    dispatch(Creators.setCurrentStep(currentStep > 0 ? currentStep - 1 : currentStep))
  }

  function setPoints() {
    dispatch(CreatorsPoints.initConfig(pontos))
  }

  useEffect(() => {
    setPoints()
  }, [])

  return (
    <Layout>
      <>
        <Head>
          <meta property="og:title" content="My page title" key="title" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <title>Home - PizzaStoom</title>
        </Head>
        <S.Container>
          {(currentStep + 1) <= maxSteps && <Oferta oferta={oferta} />}
          <S.Header>
            {
              steps[currentStep] ? <S.Title><Building /> Monte sua pizza: <b style={{ marginLeft: '5px' }}>{steps[currentStep]}</b></S.Title> : <S.Title>RESUMO DO PEDIDO</S.Title>
            }
            <S.Step>{(currentStep + 1) > maxSteps ? maxSteps : currentStep + 1}/{maxSteps}</S.Step>
          </S.Header>
          <Steps steps={steps} data={ingredientes} currentStep={currentStep} next={next} prev={prev} />
        </S.Container>
      </>
    </Layout>
  )
}

export default Home
