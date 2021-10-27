import styled from '@emotion/styled'

const Header = () => {
  return (
    <HeaderWrap>
      <button>menu</button>
      <div>logo</div>
      <button>login</button>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.1rem;
  width: 100%;
  height: 5rem;
  background: var(--primary_light);
`

export default Header
