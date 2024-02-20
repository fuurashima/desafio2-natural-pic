import { useContext } from 'react'
import Context from '../context/Context'
import IconHeart from './IconHeart'
const Gallery = () => {
  const { photos, setFavorites } = useContext(Context)
  return (
    <div className='gallery grid-columns-5 p-3'>
      {photos.map((photo, i) => (
        <div
          onClick={() => setFavorites(photo.id)}
          className='photo'
          style={{ backgroundImage: `url(${photo.src})` }}
          key={i}
        >
          <IconHeart filled={photo.liked} />
          <p>{photo.alt}</p>
        </div>
      ))}
    </div>
  )
}
export default Gallery
