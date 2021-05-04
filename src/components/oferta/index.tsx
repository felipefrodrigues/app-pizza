import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IngredientesType } from '../../types/ingredientes'
import Offer from '../../assets/svg/offer.svg'
import Cart from '../../assets/svg/cart.svg'
import Correct from '../../assets/svg/correct.svg'
import { Creators } from '../../state/ducks/cart'

import * as C from '../card/styles'
import * as S from './styles'

type ofertaProps = {
  oferta: IngredientesType
}

function Oferta({ oferta }: ofertaProps): JSX.Element {
  const dispatch = useDispatch()

  const { cart } = useSelector((state) => state.cartState)
  const exist = cart.filter((c) => c.id === oferta.id)[0]

  function comprar() {
    dispatch(Creators.setCart(oferta))
  }

  return (
    <>
      <S.Title><Offer />Pizza do dia</S.Title>
      <S.Card key={oferta.name}>
        <S.Pontos>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" enableBackground='new 0 0 512 512' xmlSpace="preserve">
            <path style={{ fill: '#337ab7' }} d="M462.148,315.89l16.409,61.313c1.279,4.778-1.558,9.688-6.336,10.966l-61.308,16.407   c-3.093,0.828-5.508,3.243-6.336,6.336l-16.407,61.308c-1.279,4.778-6.188,7.614-10.966,6.336l-61.314-16.409   c-3.09-0.827-6.386,0.057-8.648,2.319l-44.91,44.91C260.653,511.056,258.375,512,256,512s-4.653-0.944-6.333-2.623l-44.91-44.91   c-2.262-2.262-5.558-3.145-8.648-2.319l-61.314,16.409c-4.778,1.279-9.688-1.558-10.966-6.336l-16.407-61.308   c-0.828-3.093-3.243-5.508-6.336-6.336L39.779,388.17c-4.778-1.279-7.614-6.188-6.336-10.966l16.409-61.314   c0.827-3.09-0.057-6.386-2.319-8.648l-44.91-44.91C0.944,260.653,0,258.375,0,256s0.944-4.653,2.623-6.333l44.91-44.91   c2.262-2.262,3.145-5.558,2.319-8.648l-16.409-61.314c-1.279-4.778,1.558-9.688,6.336-10.966l61.308-16.407   c3.093-0.828,5.508-3.243,6.336-6.336l16.407-61.308c1.279-4.778,6.188-7.614,10.966-6.336l61.314,16.409   c3.09,0.827,6.386-0.057,8.648-2.319l44.91-44.91C251.347,0.944,253.625,0,256,0c2.375,0,4.653,0.944,6.333,2.623l44.91,44.91   c2.262,2.262,5.558,3.145,8.648,2.319l61.313-16.409c4.778-1.279,9.688,1.558,10.966,6.336l16.407,61.308   c0.828,3.093,3.243,5.508,6.336,6.336l61.308,16.407c4.778,1.279,7.614,6.188,6.336,10.966l-16.409,61.314   c-0.827,3.09,0.057,6.386,2.319,8.648l44.91,44.91c1.679,1.679,2.623,3.957,2.623,6.333s-0.944,4.653-2.623,6.333l-44.91,44.91   C462.205,309.504,461.322,312.8,462.148,315.89z"/>
            <text style={{ fontSize: '90px', fill: 'white' }} x="200" y="230">{oferta.pontos}</text>
            <text style={{ fontSize: '90px', fill: 'white' }} x="120" y="350">pontos</text>
          </svg>
        </S.Pontos>
        <S.ContainerImage>
          <img src={oferta.image} alt={oferta.name} />
        </S.ContainerImage>
        <C.ContainerDescription>
          <C.Name>{oferta.name}</C.Name>
          <C.Description>{oferta.description}</C.Description>
          <C.Price>{(oferta.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</C.Price>
          {
            exist ? (
              <C.ButtonSecundary type="button">
                <Correct />
              </C.ButtonSecundary>
            ) : (
              <C.Button type="button" onClick={() => comprar()}>
                <Cart />
                Adicionar
              </C.Button>
            )
          }
        </C.ContainerDescription>
      </S.Card>
    </>
  )
}

export default Oferta
