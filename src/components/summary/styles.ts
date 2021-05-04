import styled from 'styled-components'

const Card = styled.div`
  padding: 20px;
  background: white;
  border-radius: 4px;
  margin: 30px 0px;
  height: 250px;
  box-shadow: 1px 3px 7px 0px rgb(191 191 191 / 75%);
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Content = styled.div`
  padding: 20px;
  background: #eee;
  border-radius: 4px;
  margin: 30px 0px;
  box-shadow: 1px 3px 7px 0px rgb(191 191 191 / 75%);
`

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
`

const ContainerImage = styled.div`
  img {
    height: 220px;
    width: 260px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    @media(max-width: 1024px) {
      height: 160px;
      width: 160px;
    }
  }
`

const Name = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 16px;
  margin: 5px;
  margin-left: 0px;
  @media(max-width: 1024px) {
    display: none;
  }
`

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #008600;
`

const Button = styled.button`
  background: #01b301;
  font-size: 15px;
  border: none;
  height: 50px;
  width: 200px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #008600;
  }
  @media(max-width: 1024px) {
    width: 100px;
  }
`

const ButtonSecundary = styled.button`
  background: #337ab7;
  border: none;
  height: 46px;
  width: 170px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin: 0px 20px;
  &:hover {
    background: #276192;
  }
  svg {
    width: 35px;
    height: 27px;
    fill: white;
  }
`

const ResumoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    margin: 10px 0px;
    color: #174b77;
    font-size: 20px;
    span {
      font-size: 18px;
    }
  }
`

const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0px;
  align-items: flex-end;
`

export { Card, Content, ContainerDescription, ContainerImage, Name, Description, Price, Button, ButtonSecundary, ResumoContainer, ContainerButton }
