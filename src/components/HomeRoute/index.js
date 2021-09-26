import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Header from '../Header'

import SearchVideos from '../SearchVideos'

import CartContext from '../../context/CartContext'

import {
  HomeContainer,
  HomeSideContainer,
  GetItButton,
  BannerImageContainer,
  BannerImage,
  BannerText,
  HomeStickyContainer,
  CloseButton,
  ModalContainer,
  AlignRow,
  Heading,
  Image,
} from './styledComponents'

import SideBar from '../SideBar'

const activeStatus = [
  {id: 'Home', home: 'HOME'},
  {id: 'Trending', trending: 'TRENDING'},
  {id: 'Gaming', gaming: 'GAMING'},
  {id: 'SavedVideos', saved: 'SAVED VIDEOS'},
]

class HomeRoute extends Component {
  state = {activeTab: 'HOME'}

  onChangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  renderHomeVideos = () => (
    <>
      <ModalContainer>
        {close => (
          <ModalContainer>
            <AlignRow>
              <CloseButton
                type="button"
                data-testid="close"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </CloseButton>
              <BannerImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                alt="banner"
              />
              <BannerImage
                src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
            </AlignRow>
          </ModalContainer>
        )}
      </ModalContainer>
      <SearchVideos />
    </>
  )

  render() {
    const {activeTab} = this.state

    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

          return (
            <div data-testid="home">
              <Header />
              <HomeContainer bgColor={bgColor}>
                <HomeStickyContainer>
                  <SideBar onChangeActiveTab={this.onChangeActiveTab} />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default HomeRoute
