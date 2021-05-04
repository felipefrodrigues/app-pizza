import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Creators } from '../../state/ducks/cart'
import { Creators as CreatorsSteps } from '../../state/ducks/steps'
import newGuid from '../../helpers/newGuid'
import { useRouter } from 'next/router'
import * as S from './styles'

function Summary(): JSX.Element {
  const { steps } = useSelector((state) => state.stepsState)
  const { cart } = useSelector((state) => state.cartState)
  const router = useRouter()
  const dispatch = useDispatch()

  function montarPizza() {
    const items = []
    Object.keys(steps).map((product) => {
      items.push(steps[product])
    })
    if (items.length) {
      const product = {
        id: newGuid(),
        type: 3,
        items,
        image: '/image/pan.jpg',
        name: 'Monte sua pizza',
      }
      dispatch(CreatorsSteps.cleanSteps())
      dispatch(Creators.setCart(product))
    }
  }

  function reset() {
    dispatch(CreatorsSteps.resetStep())
  }

  function concluirPedido() {
    router.push('/concluir')
  }

  function FtotalPontos() {
    let totalPontos = 0

    cart.map((item) => {
      if (item.pontos) {
        totalPontos += item.pontos
      }
    })
    return totalPontos
  }

  function FtotalPedido() {
    let totalPedido = 0

    cart.map((item) => {
      if (item.price) {
        totalPedido += item.price
      } else {
        item.items.map((item) => {
          totalPedido += item.price
        })
      }
    })
    return totalPedido
  }

  useEffect(() => {
    montarPizza()
  }, [])

  const oferta = cart.filter((item) => item.type === 2)
  const montesuapizza = cart.filter((item) => item.type === 3)

  const totalPontos = FtotalPontos()
  const totalPedido = FtotalPedido()

  return (
    <S.Content>
      {
        montesuapizza.map((monte) => (
          <S.Card key={monte.id}>
            <S.ContainerImage>
              <img src={monte.image} alt={monte.name} />
            </S.ContainerImage>
            <S.ContainerDescription>
              <S.Name>{monte.name}</S.Name>
              {
                monte.items.map((items) => (
                  <div style={{ display: 'flex', alignItems: 'center' }} key={items.id} >
                    <S.Description>{items.name}</S.Description>
                    <S.Price>{(items.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.Price>
                  </div>
                ))
              }
            </S.ContainerDescription>
          </S.Card>
        ))
      }
      {
        oferta.map((item) => (
          <S.Card key={item.id}>
            <S.ContainerImage>
              <img src={item.image} alt={item.name} />
            </S.ContainerImage>
            <S.ContainerDescription>
              <S.Name>{item.name}</S.Name>
              <S.Description>{item.description}</S.Description>
              <br />
              <S.Price>{(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.Price>
            </S.ContainerDescription>
          </S.Card>
        ))
      }
      <S.ResumoContainer>
        <div><span>Pontos adquiridos:</span> <b>{totalPontos}</b></div>
        <div><span>Total:</span> <b>{(totalPedido).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></div>
      </S.ResumoContainer>
      <S.ContainerButton>
        <S.ButtonSecundary type="button" onClick={reset}>Continuar comprando</S.ButtonSecundary>
        <S.Button type="button" onClick={concluirPedido}>Concluir pedido</S.Button>
      </S.ContainerButton>
    </S.Content>
  )
}

export default Summary
