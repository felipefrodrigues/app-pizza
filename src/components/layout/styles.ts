import styled from 'styled-components'

const maxWidth = '1270px'

const Banner = styled.header`
  background: ${({ theme }) => theme.colors.secondary};
  height: 350px;
  width: 100%;
  @media(max-width: 1024px) {
    height: 180px;
  }
`

const BannerContent = styled.div`
  max-width: ${maxWidth};
  margin: auto;
  display: flex;
  flex-direction: row;
  height: 100%;
`

const BannerContentLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  @media(max-width: 1024px) {
    margin-bottom: 0px;
    justify-content: center;
  }
`

const Container = styled.section`
  max-width: ${maxWidth};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin: auto;
`

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  
`

const Logo = styled.div`
  fill: ${({ theme }) => theme.colors.primary};
  width: 80px;
  height: 80px;
  margin-right: 20px;
  @media(max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.support};
  font-size: 2.8em;
  margin: 0px;
  @media(max-width: 1024px) {
    font-size: 2.0em;
  }
`

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1em;
`

const Footer = styled.footer`
  background: #174b77;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  font-size: 0.6em;
`

export { Container, Footer, Banner, BannerContent, ContainerTitle, Logo, Title, SubTitle, BannerContentLogo }
