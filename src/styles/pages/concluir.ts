import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  padding: 30px 40px;
  margin-top: -100px;
  background: white;
  border-radius: 4px;
  margin-bottom: 25px;
  height: 300px;
  svg {
    width: 150px;
    height: 150px;
    margin: 30px 0px;
    fill: green;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 1024px) {
    margin-top: 0px;
  }
`

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const ButtonSecundary = styled.button`
  background: #337ab7;
  border: none;
  height: 46px;
  width: 170px;
  color: white;
  border-radius: 8px;
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

export { Container, Title, ButtonSecundary }
