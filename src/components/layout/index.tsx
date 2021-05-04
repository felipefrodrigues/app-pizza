import React from 'react'
import { LayoutType } from './types'
import IconPizza from '../../assets/svg/pizza.svg'
import Points from '../points'

import * as S from './styles'

function Layout({ children }: LayoutType):JSX.Element {
  return (
    <>
      <S.Banner>
        <S.BannerContent>
          <S.BannerContentLogo>
            <S.Logo>
              <IconPizza />
            </S.Logo>
            <S.ContainerTitle>
              <S.Title>PizzaStoom</S.Title>
              <S.SubTitle>é pizza, sim</S.SubTitle>
            </S.ContainerTitle>
          </S.BannerContentLogo>
          <Points />
        </S.BannerContent>
      </S.Banner>
      <S.Container>
        {children}
      </S.Container>
      <S.Footer>
        Copyright© 2021 PizzaStoom S/A - Todos os direitos reservados
      </S.Footer>
    </>
  )
}

export default Layout
