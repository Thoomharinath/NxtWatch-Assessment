import {Component} from 'react'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'

import VideoCardTwo from '../VideoCardTwo'

import CartContext from '../../context/CartContext'

import Header from '../Header'

import SideBar from '../SideBar'

import {
  SearchVideosContainer,
  VideosContainer,
  TrendingHeadContainer,
  TrendingLogo,
  TrendingHead,
  ProductsLoaderContainer,
  HomeStickyContainer,
  HomeSideContainer,
  HomeContainer,
  Image,
  NotFoundContainer,
  Heading,
  Desc,
  Retry,
  NavLink,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SavedVideosRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterClickSearch = event => {
    if (event.key === 'Enter') {
      const {searchInput} = this.state
      this.setState({searchValue: searchInput}, this.getSuggestionVideos)
    }
  }

  renderSavedVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        console.log(savedVideos)
        const isVideosAvailable = savedVideos.length === 0

        return isVideosAvailable === true ? (
          <NotFoundContainer bgColor={bgColor}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading className="cart-empty-heading" textColor={textColor}>
              No saved videos found
            </Heading>
            <Desc textColor={textColor}>
              You can save your videos while watching them.
            </Desc>
          </NotFoundContainer>
        ) : (
          <SearchVideosContainer bgColor={bgColor}>
            <TrendingHeadContainer bgColor={bgColor}>
              <TrendingLogo>
                <AiFillFire />
              </TrendingLogo>
              <TrendingHead color={textColor}>Saved Videos</TrendingHead>
            </TrendingHeadContainer>

            <VideosContainer bgColor={bgColor}>
              {savedVideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderNoVideosView = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <Heading className="cart-empty-heading">No saved videos found</Heading>
      <Desc>You can save your videos while watching them.</Desc>
    </NotFoundContainer>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
          return (
            <div data-testid="savedVideos">
              <Header />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderSavedVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default SavedVideosRoute
