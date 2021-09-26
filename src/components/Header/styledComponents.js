import styled from 'styled-components'

export const NavHeader = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    padding-left: 30px;
    padding-right: 30px;
    position: sticky;
    position: -webkit-sticky;
    height: 50px;
    background-color: ${props => props.bgColor}
}
@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
`

export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`

export const ContentListItem = styled.li`
  display: flex;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #0967d2;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NavbarLargeContianer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`

export const NavbarSmallContianer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: 40px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 80px;
  height: 50px;
  border: 1px solid grey;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: grey;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  width: 80px;
  height: 50px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`