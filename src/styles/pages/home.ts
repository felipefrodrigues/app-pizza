import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  padding: 30px 40px;
  margin-top: -100px;
  background: white;
  border-radius: 4px;
  margin-bottom: 25px;
  @media(max-width: 1024px) {
    margin-top: 0px;
  }
`

const Title = styled.div`
  font-size: 1.2em;
  color: black;
  display: flex;
  align-items: center;
  b {
    letter-spacing: 2px;
    font-size: 1.3em;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
  }
  border-bottom-left-radius: 4px;
  svg {
    margin-right: 10px;
    fill: #01b301;
  }
  @media(max-width: 1024px) {
    font-size: 0.8em;
    b {
      font-size: 0.9em;
    }
  }
`

const Step = styled.div`
  font-size: 0.9em;
  color: #337ab7;
  background: #eeeeee;
  width: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 1.2em;
`

export { Title, Container, Header, Step }
