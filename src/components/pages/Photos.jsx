import './Photos.css'

export default function Photos() {
  // Placeholder images - in real implementation, these would be actual photos
  const photos = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+1',
      alt: 'Boulder Contact Lab space 1'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+2',
      alt: 'Boulder Contact Lab space 2'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+3',
      alt: 'Boulder Contact Lab space 3'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+4',
      alt: 'Boulder Contact Lab space 4'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+5',
      alt: 'Boulder Contact Lab space 5'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+6',
      alt: 'Boulder Contact Lab space 6'
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+7',
      alt: 'Boulder Contact Lab space 7'
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/400x300/1e6c93/ffffff?text=Boulder+Contact+Lab+8',
      alt: 'Boulder Contact Lab space 8'
    }
  ]

  return (
    <div className="page-content">
      <h2>Photos</h2>
      <p className="photos-description">
        Images of our Boulder Contact Lab spaces and community gatherings.
      </p>
      
      <div className="photo-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="photo-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}