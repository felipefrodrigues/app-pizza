import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardProps } from './types'
import { Creators } from '../../state/ducks/steps'
import Correct from '../../assets/svg/correct.svg'
import * as S from './styles'

function Card({ datas, steps, currentStep, prev, next }: CardProps): JSX.Element {
  const stepsSelecionados = useSelector((state) => state.stepsState.steps)

  const dispatch = useDispatch()
  function sendProduct(name, data) {
    const obj = {
      [name]: data,
    }
    window.scrollTo(0, 0)
    dispatch(Creators.setStep(obj))
    next()
  }

  if (datas.length) {
    return (
      <>
        {
          datas.map((data) => (
            <S.Card key={data.name}>
              <S.ContainerImage>
                <img src={data.image} alt={data.name} />
              </S.ContainerImage>
              <S.ContainerDescription>
                <S.Name>{data.name}</S.Name>
                <S.Description>{data.description}</S.Description>
                <S.Price>{(data.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.Price>
                {
                  stepsSelecionados[steps[currentStep]]?.id === data.id ? (
                    <S.ButtonSecundary type="button" onClick={() => next()}>
                      <Correct />
                    </S.ButtonSecundary>
                  ) : (
                    <S.Button type="button" onClick={() => sendProduct(steps[currentStep], data)}>Escolher</S.Button>
                  )
                }
              </S.ContainerDescription>
            </S.Card>
          ))
        }
        <S.ButtonSecundary type="button" onClick={() => prev()}>Voltar</S.ButtonSecundary>
      </>
    )
  }

  return (
    <div />
  )
}

export default Card
