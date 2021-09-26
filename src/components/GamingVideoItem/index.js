import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import dateFormat from 'dateformat'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCardTwo = props => {
  const {details} = props
  const {title, id, thumbnailUrl, viewCount} = details
  return (
    <NavLink to={`videos/${id}`}>
      <VideoCardContainer>
        <ThumbnailImage src={thumbnailUrl} alt={title} />
        <VideoCardBottomContainer>
          <VideoDetailsContainer>
            <VideoDetailsText>{title}</VideoDetailsText>
            <VideoDetailsText>{viewCount} views</VideoDetailsText>
          </VideoDetailsContainer>
        </VideoCardBottomContainer>
      </VideoCardContainer>
    </NavLink>
  )
}

export default VideoCardTwo
