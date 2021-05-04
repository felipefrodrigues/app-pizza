import styled from 'styled-components'

const Card = styled.div`
  background: #bdbdbd;
  width: 100%;
  height: 250px;
  border-radius: 4px;
  margin: 30px 0px;
  box-shadow: 1px 3px 7px 0px rgb(191 191 191 / 75%);
  display: flex;
  flex-direction: row;
  position: relative;
  @media(max-width: 1024px) {
    height: 160px;
  }
`

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const ContainerImage = styled.div`
  img {
    height: 250px;
    width: 260px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    @media(max-width: 1024px) {
      height: 160px;
      width: 160px;
    }
  }
`
const Title = styled.div`
  font-size: 1.4em;
  color: black;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    fill: #01b301;
  }
`

const Pontos = styled.div`
  position: absolute;
  top: -48px;
  right: -30px;
  width: 98px;
`

export { Card, ContainerDescription, ContainerImage, Title, Pontos }
