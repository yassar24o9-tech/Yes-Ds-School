import { useState } from 'react'

function HomeImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority,
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div aria-label="School photograph unavailable" className={`home-image-fallback ${className}`.trim()} role="img">
        <span aria-hidden="true">YES DS</span>
        <span>School photograph unavailable</span>
      </div>
    )
  }

  return (
    <img
      alt={alt}
      className={className}
      fetchPriority={fetchPriority}
      height={height}
      loading={loading}
      onError={() => setHasError(true)}
      src={src}
      width={width}
    />
  )
}

export default HomeImage
