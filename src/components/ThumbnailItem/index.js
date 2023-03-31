import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imageItem, getImage, isActive} = this.props
    const {
      imageUrl,
      thumbnailUrl,
      thumbnailAltText,
      imageAltText,
      id,
    } = imageItem
    const thumbNailActive = isActive ? 'thum-imgage active' : 'thum-imgage'
    function onImageClick() {
      console.log('Hello')
      getImage(imageUrl, imageAltText, id)
    }

    return (
      <li className="thum-item">
        <button type="button" onClick={onImageClick} className="button">
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={thumbNailActive}
          />
        </button>
      </li>
    )
  }
}
export default ThumbnailItem
