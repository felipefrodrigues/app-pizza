import styled from 'styled-components'

const Card = styled.div`
  background: #eee;
  width: 100%;
  height: 220px;
  border-radius: 4px;
  margin: 30px 0px;
  box-shadow: 1px 3px 7px 0px rgb(191 191 191 / 75%);
  display: flex;
  flex-direction: row;
  @media(max-width: 1024px) {
    height: 160px;
  }
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
  font-size: 14px;
  margin-bottom: 10px;
  @media(max-width: 1024px) {
    display: none;
  }
`

const Price = styled.div`
  font-size: 18px;
  color: #008600;
  font-weight: bold;
`

const Button = styled.button`
  background: #01b301;
  font-size: 15px;
  border: none;
  height: 50px;
  width: 200px;
  color: white;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #008600;
  }
  @media(max-width: 1024px) {
    width: 100px;
    height: 40px;
    font-size: 14px;
    svg {
      display: none;
    }
  }
`

const ButtonSecundary = styled.button`
  background: #337ab7;
  border: none;
  height: 46px;
  width: 170px;
  color: white;
  border-radius: 8px;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    background: #276192;
  }
  svg {
    width: 35px;
    height: 27px;
    fill: white;
  }
`

export { Card, ContainerDescription, ContainerImage, Name, Description, Price, Button, ButtonSecundary }
