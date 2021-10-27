import styled from '@emotion/styled'
import { MenuIcon, Logo } from 'assets/icon'

const Header = () => {
  return (
    <HeaderWrap>
      <MenuIcon />
      <Logo />
      <LoginButton>로그인</LoginButton>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.1rem;
  width: 100%;
  height: 5rem;
  background-color: var(--white);
`

const LoginButton = styled.button`
  width: 5.7rem;
  background-color: white;
`

export default Header
