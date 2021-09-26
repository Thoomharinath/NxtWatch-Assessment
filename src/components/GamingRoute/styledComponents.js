import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`

export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-left: 60px;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const HomeStickyContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`
export const HomeSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: ${props => props.bgColor};
`
