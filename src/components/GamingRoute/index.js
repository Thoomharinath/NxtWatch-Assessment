import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import VideoCardTwo from '../GamingVideoItem'

import Header from '../Header'

import SideBar from '../SideBar'

import CartContext from '../../context/CartContext'

import {
  SearchVideosContainer,
  SearchInput,
  VideosContainer,
  ProductsLoaderContainer,
  HomeStickyContainer,
  HomeSideContainer,
  HomeContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchedVideos: [],
  }

  componentDidMount() {
    this.getSuggestionVideos()
  }

  getSuggestionVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        searchedVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderGamingVideos = () => (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const {searchedVideos} = this.state

        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        return (
          <SearchVideosContainer data-testid="gaming" bgColor={bgColor}>
            <VideosContainer bgColor={bgColor}>
              {searchedVideos.map(each => (
                <VideoCardTwo key={each.id} details={each} />
              ))}
            </VideosContainer>
          </SearchVideosContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
          return (
            <div data-testid="home">
              <Header />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <HomeStickyContainer>
                  <SideBar />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {this.renderAllVideos()}
                </HomeSideContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default GamingRoute
