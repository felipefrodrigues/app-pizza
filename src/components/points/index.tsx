import React from 'react'
import { useSelector } from 'react-redux'
import Coins from '../../assets/svg/coin.svg'
import * as S from './styles'

function Points(): JSX.Element {
  const { pontos } = useSelector((state) => state.pointsState)

  return (
    <S.Container>
      <div style={{ color: '#ffb100', fontSize: '16px', display: 'flex' }}><Coins style={{ marginRight: '5px' }} /> StoomPoints</div>
      <div style={{ color: 'white', fontSize: '14px', textAlign: 'right', marginTop: '5px' }}>{pontos} <span style={{ color: '#ffb100' }}>pontos.</span></div>
    </S.Container>
  )
}

export default Points
