const MatchGameImages = props => {
  const {eachImage, onClickImage1, id} = props
  const {thumbnailUrl} = eachImage

  const onClickImage = () => {
    onClickImage1(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchGameImages
